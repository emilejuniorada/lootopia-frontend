"use client";
import React from "react";
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { Mail, User, Key, Download, Trash2, Save, Loader2 } from 'lucide-react';
import { useSession, signOut } from "next-auth/react";
import useFetch from "@/services/useFetch";

const UserProfile = () => {
    const { data: session, status, update } = useSession();
    const { updateData, createData, getData, deleteData } = useFetch();
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState({ currentPassword: '', newPassword: '', confirmPassword: '', isLoading: false });
    const [exportLoading, setExportLoading] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState('');
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleEmailChange = async (e: React.FormEvent) => {
        e.preventDefault()
        const success = await createData("/api/email-verification/change-email", {
            userId: session?.user.id,
            newEmail: email
        })
        if(success){
            toast.success("Email mis à jour avec succès !", { description: "Un mail de confirmation vous a été envoyé à votre nouvelle adresse email." });
            setTimeout(() => {
                signOut({ callbackUrl: "/login" });
            }, 2000);
        }
    };

    const handleNicknameChange = async (e: React.FormEvent) => {
        e.preventDefault()
        const success = await updateData("/api/users/" + session?.user.id, session?.user.id, {
            userId: session?.user.id,
            nickname: nickname
        })
        if (success) {
            toast.success("Nickname mis à jour avec succès !");
            update({
                user: {
                    nickname: nickname
                }
            })
        }
    };

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault()
        const success = await updateData("/api/users/me/password", "", {
            userId: session?.user.id,
            password: password.currentPassword,
            new_password: password.newPassword,
            confirm_password: password.confirmPassword
        })
        if (success) {
            toast.success("Mot de passe mis à jour avec succès !", { description: "Vous allez être déconnecté." });
            setTimeout(() => {
                signOut({ callbackUrl: "/login" });
            }, 2000);
        }
    };

    const handleDataExport = async () => {
        setExportLoading(true);
        const userData = await getData("/api/users/me/export", session?.user.id); // API call here
        
        const blob = new Blob([JSON.stringify(userData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `donnees-utilisateur-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setExportLoading(false);
        toast.success("Données exportées avec succès !");
    };

    const handleAccountDeletion = async () => {
        if (deleteConfirmation !== 'DELETE') {
            toast.error("Veuillez taper 'DELETE' pour confirmer");
            return;
        }
        setDeleteLoading(true);
        await deleteData("/api/users/me/delete", session?.user.id);
        setDeleteLoading(false);
        toast.success("Votre compte a été supprimé !", { description: "Vous allez être déconnecté." });
        setTimeout(() => {
            signOut({ callbackUrl: "/login" });
        }, 3000);
        setDeleteConfirmation('');
    };

    React.useEffect(() => {
        if (status === "authenticated") {
            setEmail(session.user.email)
            setNickname(session.user.nickname)
        }
    }, [status]);

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
                <p className="text-muted-foreground mt-2">Gérez les paramètres et préférences de votre compte</p>
            </div>

            <div className="space-y-6 pb-8">
                {/* Paramètres email */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5" />
                            Adresse email
                        </CardTitle>
                        <CardDescription>
                            Mettez à jour votre adresse email. Un email de confirmation vous sera envoyé.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleEmailChange} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" disabled={email === session?.user.email}>
                                <Save className="mr-2 h-4 w-4" />Mettre à jour l'email
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Pseudonyme */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Pseudonyme
                        </CardTitle>
                        <CardDescription>
                            Nom affiché publiquement. Peut être votre vrai nom ou un pseudo.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleNicknameChange} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="nickname">Pseudonyme</Label>
                                <Input
                                    id="nickname"
                                    type="text"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                    required minLength={3} maxLength={20}
                                />
                            </div>
                            <Button type="submit" disabled={nickname === session?.user.nickname}>
                                <Save className="mr-2 h-4 w-4" />Mettre à jour le nickname
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Mot de passe */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Key className="h-5 w-5" />
                            Mot de passe
                        </CardTitle>
                        <CardDescription>
                            Modifiez votre mot de passe pour sécuriser votre compte.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handlePasswordChange} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Mot de passe actuel</Label>
                                <Input
                                    id="current-password"
                                    type="password"
                                    value={password.currentPassword}
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(prev => ({ ...prev, currentPassword: e.target.value }))}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">Nouveau mot de passe</Label>
                                <Input
                                    id="new-password"
                                    type="password"
                                    value={password.newPassword}
                                    autoComplete="new-password"
                                    onChange={(e) => setPassword(prev => ({ ...prev, newPassword: e.target.value }))}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    value={password.confirmPassword}
                                    autoComplete="new-password"
                                    onChange={(e) => setPassword(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                    required
                                />
                            </div>
                            <Button type="submit" disabled={
                                password.currentPassword === "" ||
                                password.newPassword === "" ||
                                password.confirmPassword === "" ||
                                password.newPassword !== password.confirmPassword
                            }>
                                <Save className="mr-2 h-4 w-4" />Mettre à jour le mot de passe
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Export des données */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Download className="h-5 w-5" />
                            Exporter mes données
                        </CardTitle>
                        <CardDescription>
                            Téléchargez une copie de vos données.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={handleDataExport} disabled={exportLoading}>
                            {exportLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Préparation...</>
                            ) : (
                                <><Download className="mr-2 h-4 w-4" />Exporter mes données</>
                            )}
                        </Button>
                    </CardContent>
                </Card>

                {/* Zone de danger */}
                <Card className="border border-red-600">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-red-600">
                            <Trash2 className="h-5 w-5" />
                            Zone de danger
                        </CardTitle>
                        <CardDescription>
                            Supprimez définitivement votre compte et vos données. Action irréversible.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Separator className="mb-4" />
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Supprimer mon compte
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-white">
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                                    <AlertDialogDescription className="space-y-2">
                                        <p>Cette action est irréversible. Votre compte et vos données seront supprimés définitivement.</p>
                                        <p className="font-medium">Veuillez taper <strong>DELETE</strong> pour confirmer.</p>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <div className="py-4">
                                    <Input
                                        placeholder="Tapez DELETE ici"
                                        value={deleteConfirmation}
                                        onChange={(e) => setDeleteConfirmation(e.target.value)}
                                    />
                                </div>
                                <AlertDialogFooter>
                                    <AlertDialogCancel onClick={() => setDeleteConfirmation('')}>Annuler</AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={handleAccountDeletion}
                                        disabled={deleteConfirmation !== 'DELETE' || deleteLoading}
                                        className="bg-red-600 hover:bg-red-600/90"
                                    >
                                        {deleteLoading ? (
                                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Suppression...</>
                                        ) : (
                                            'Supprimer le compte'
                                        )}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UserProfile;