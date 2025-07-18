import React, { ReactNode } from "react";
import Avatar from "@/components/dashboard/Avatar";
import Menu from "@/components/dashboard/Menu";
import { Toaster } from "@/components/ui/sonner"
import MobileMenu from "@/components/dashboard/MobileMenu";
import Header from "@/components/dashboard/Header";


interface LayoutProps {
    children: ReactNode;
}

const DashbordLayout = ({ children }: LayoutProps) => {

    return (
        <div className="flex flex-col min-h-screen border">
            <Header/>
            <div className="md:grid grid-cols-9 items-start">
                <div className="md:flex flex-1 flex-col w-full col-span-1 gap-4 items-center justify-center relative hidden" style={{ minHeight: "70vh" }}>
                    <Menu />
                </div>
                <div
                    className="w-full col-span-8 flex md:h-[90vh] px-2 py-6 overflow-y-auto"
                >
                    {children}
                </div>
            </div>
            <div className="absolute bottom-0 right-0 md:hidden">
                <MobileMenu/>
            </div>
            <Toaster richColors />
        </div>
    );
};

export default DashbordLayout;