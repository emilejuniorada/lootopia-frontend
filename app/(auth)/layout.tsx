import React, { ReactNode } from "react";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner"
import Link from "next/link";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white/95 backdrop-blur-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Link href="/">
                                <div className="w-full flex items-center gap-4">
                                    <Image src={"/logo.png"} alt="logo" width={50} height={50} />
                                    <div className="text-primary font-extrabold mt-5">LOOTOPIA</div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 font-semibold">
                            <Link href="/contact">
                                Contact
                            </Link>
                            <Link href="/faq">
                                Foire aux questions
                            </Link>
                            <Link href="/policy">
                                Politique de confidentialité
                            </Link>
                            <Link href="/cgu">
                                Conditions d'utilisation
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-1 flex-col w-full items-center justify-center p-6 md:p-10">
                {children}
            </div>
            <Toaster richColors />
        </div>
    );
};

export default AuthLayout;