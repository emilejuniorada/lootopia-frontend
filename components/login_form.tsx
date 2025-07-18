"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@/services/useAuth";
import { Button } from "@/components/ui/button";
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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit comporter au moins 6 caractères"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!result?.error) {
      router.push("/dashboard");
    } 
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md">
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-center text-secondary font-bold">
              Connectez-vous
            </CardTitle>
            <CardDescription className="text-center">
              Remplissez vos informaions pour vous connecter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-8">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    autoComplete="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Mot de passe</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    autoComplete="current-password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-xs text-red-500">{errors.password.message}</span>
                  )}
                  <a
                    href="#"
                    className="ml-auto inline-block text-xs font-bold underline-offset-4 hover:underline"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
                <Button type="submit" className="w-full text-white" size={"lg"} disabled={loading}>
                  {loading ? "Connexion..." : "Se connecter"}
                </Button>
                <Button variant="outline" className="w-full" size={"lg"} type="button">
                  <Image
                    src={"/google_logo.png"}
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  Se connecter avec Google
                </Button>
                {error && <div className="text-red-500 text-center text-sm">{error}</div>}
              </div>
              <div className="mt-16 text-center text-sm text-gray-400">
                Pas encore de compte?{" "}
                <Link href='/register' className="font-bold text-secondary">Inscrivez-vous</Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
