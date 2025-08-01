"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const Avatar: React.FC = () => {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        console.log(session)
    }
    return (
        <div className="flex items-center md:px-3 gap-3">
            <div className="text-black font-bold text-right break-words w-full">
                {session?.user?.nickname}
                <br />
                <span className="text-xs break-words w-full block">
                    {session?.user?.email}
                </span>
            </div>
            <Image src={"/user/avatar.jpg"} alt="logo" width={40} height={40} />
        </div>
    );
};

export default Avatar;
