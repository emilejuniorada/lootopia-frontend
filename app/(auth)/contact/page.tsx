"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // TODO: Replace this with your API call
            // await fetch("/api/contact", {
            //   method: "POST",
            //   body: JSON.stringify(formData),
            // })

            toast.success("Votre message a bien été envoyé 🎉")
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            toast.error("Une erreur est survenue lors de l'envoi.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
                    <p className="mt-2 text-muted-foreground text-lg">
                        Une question, une suggestion ou un bug à signaler ? Écrivez-nous via ce formulaire
                    </p>
                </div>

                <Card className="shadow-xl border rounded-2xl">
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nom complet</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Jean Dupont"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Adresse email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="jean@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Écrivez votre message ici..."
                                    rows={8}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full text-lg py-6"
                            >
                                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export default Page;
