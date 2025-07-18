"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Crown } from "lucide-react";
import Avatar from "@/components/dashboard/Avatar";
const Header = () => {
    const { data: session } = useSession();
    
    return <div className="py-4 md:px-20 px-8 w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image src={"/logo.png"} alt="logo" width={50} height={50} />
            <div className="text-primary font-extrabold mt-5">LOOTOPIA</div>
        </div>
        
        <div className="flex gap-6 justify-center items-center md:w-2/12">
            <Avatar />
            <div className="text-tertiary flex flex-col items-center">
                <Crown />
                <div className="text-sm font-bold">{session?.user?.crowns}</div>
            </div>
        </div>
    </div>;
};

export default Header;
