"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@/services/useAuth";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { handleApiError } from "@/lib/apiErrorHandler";

// Zod schema for validation
const registerSchema = z.object({
    nickname: z.string().min(3, "Le nom d'utilisateur doit comporter au moins 3 caractères"),
    email: z.string().email("Email invalide"),
    password: z.string().min(6, "Le mot de passe doit comporter au moins 6 caractères"),
    is_partner: z.string(),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const { register: registerUser, loading, success, sendLink } = useAuth();
    const [error, setError] = React.useState<string | null>(null);
    const [id, setId] = React.useState<number | null>(null);
    const [resendDisabled, setResendDisabled] = React.useState(false);
    const [countdown, setCountdown] = React.useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: { is_partner: "false" },
    });

    const onSubmit = async (data: RegisterFormValues) => {
        // Convert is_partner from string to boolean
        const fixedData = {
            ...data,
            is_partner: String(data.is_partner) === "true"
        };
        setError(null);
        setId(await registerUser(fixedData));
        disableResendButton();
    };

    const disableResendButton = () => {
        setResendDisabled(true);
        setCountdown(20);
        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setResendDisabled(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleResendLink = async () => {
        await sendLink({ id: id });
        disableResendButton();
    }
    
    return (
        <div className="w-full max-w-md">
            <div className={cn("flex flex-col gap-6", className)} {...props}>
                {!success && (<Card>
                    <CardHeader>
                        <CardTitle className="text-lg text-center text-secondary font-bold">
                            Inscrivez-vous
                        </CardTitle>
                        <CardDescription className="text-center">
                            Remplissez vos informaions pour vous inscrire.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-8">
                                <div className="grid gap-2">
                                    <Label>Type de compte</Label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                value="false"
                                                {...register("is_partner")}
                                                defaultChecked
                                            />
                                            Compte Personnel
                                        </label>
                                        <label className="flex items-center gap-2 cursor-not-allowed text-gray-400cursor-not-allowed text-gray-400">
                                            <input
                                                type="radio"
                                                value="true"
                                                {...register("is_partner")}
                                                disabled />
                                            Compte Partenaire (Bientôt disponible)
                                        </label>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="nickname">Nom d'utilisateur</Label>
                                    <Input
                                        id="nickname"
                                        type="text"
                                        placeholder="example2444"
                                        autoComplete="nickname"
                                        {...register("nickname")}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        autoComplete="email"
                                        {...register("email")}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Mot de passe</Label>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="********"
                                        autoComplete="new-password"
                                        {...register("password")}
                                    />
                                </div>
                                <Button type="submit" className="w-full text-white" size={"lg"} disabled={loading}>
                                    {loading ? "Inscription..." : "S'inscrire"}
                                </Button>
                                <Button variant="outline" className="w-full" size={"lg"} type="button">
                                    <Image src={"/google_logo.png"} alt="logo" width={20} height={20} />
                                    S'inscrire avec Google
                                </Button>
                            </div>
                            <div className="mt-16 text-center text-sm text-gray-400">
                                Vous possédez déjà un compte?{" "}
                                <Link href='/login' className="font-bold text-secondary">Connectez-vous</Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>)}
                {success && (
                    <Card>
                        <CardTitle className="text-lg text-center text-secondary font-bold">
                            Inscription réussie
                        </CardTitle>
                        <CardContent>
                            <div>Un email de confirmation a été envoyé à votre adresse. Veuillez vérifier votre boîte de réception pour activer votre compte.</div>
                            <div className="mt-8 text-center text-sm space-y-2">
                                <Button type="button" className="w-full text-white" size={"lg"} disabled={loading || resendDisabled} onClick={handleResendLink}>
                                    {loading ? "Envoi en cours..." : resendDisabled ? `Renvoyer le lien dans (${countdown}s)` : "Renvoyer le lien de confirmation"}
                                </Button>
                            </div>
                            <div className="mt-16 text-center text-sm text-gray-400">
                                <Link href='/login' className="font-bold text-secondary">Connectez-vous</Link>
                            </div>
                        </CardContent>
                    </Card>)
                }
            </div>
        </div>
    );
}
