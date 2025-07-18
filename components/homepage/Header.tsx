"use client"
import { Compass, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-full flex items-center gap-4">
                            <Image src={"/logo.png"} alt="logo" width={50} height={50} />
                            <div className="text-primary font-extrabold mt-5">LOOTOPIA</div>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="font-semibold hover:text-primary transition-colors">Fonctionnalités</a>
                        <a href="#modes" className="font-semibold hover:text-primary transition-colors">Modes</a>
                        <a href="#testimonials" className="font-semibold hover:text-primary transition-colors">Témoignages</a>

                        <Link href='/login'><Button variant="outline" className="hover:bg-primary hover:text-white">
                            Connexion
                        </Button></Link><Link href='/register'><Button className="bg-primary text-white hover:bg-primary-600">
                            Démarrer
                        </Button></Link>
                    </nav>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4 pt-4">
                            <a href="#features" className="font-semibold hover:text-primary transition-colors">Fonctionnalités</a>
                            <a href="#modes" className="font-semibold hover:text-primary transition-colors">Modes</a>
                            <a href="#testimonials" className="font-semibold hover:text-primary transition-colors">Témoignages</a>
                            <a href="/login">
                                <Button variant="outline" className="hover:bg-primary hover:text-white">
                                    Connexion
                                </Button>
                            </a>
                            <a href="/register">
                                <Button className="bg-primary text-white hover:bg-primary-600">
                                    Démarrer
                                </Button>
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
