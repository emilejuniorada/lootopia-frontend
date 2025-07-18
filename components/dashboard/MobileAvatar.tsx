"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const MobileAvatar = () => {
    const { data: session, status } = useSession();
    
        if (status === "authenticated") {
            console.log(session)
        }
  return <div className="flex flex-col items-center w-full max-w-[180px] px-3 py-6 gap-2 mt-4">
              <Image src={"/user/avatar.jpg"} alt="logo" width={50} height={50} />
              <div className="text-black font-bold text-center break-words w-full">
                  {session?.user?.nickname}
                  <br />
                  <span className="text-xs break-words w-full block">
                      {session?.user?.email}
                  </span>
              </div>
          </div>;
};

export default MobileAvatar;
