"use client";
import React from "react";
import Link from "next/link";
import { List, Compass, Table, Medal, Calendar, DoorOpen, User, Cog } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Menu = () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Tooltip>
            <TooltipTrigger asChild>
                <Link href='/dashboard' className="block">
                    <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                        <Table />
                    </Button>
                </Link>
            </TooltipTrigger>
            <TooltipContent className="text-white">
                <p>Liste des chasses</p>
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger asChild>
                <Link href='/dashboard/new-hunt' className="block">
                    <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                        <Compass />
                    </Button>
                </Link>
            </TooltipTrigger>
            <TooltipContent className="text-white">
                <p>Nouvelle chasse</p>
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger asChild>
                <Link href='/dashboard/rankings'>
                    <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                        <Medal />
                    </Button>
                </Link>
            </TooltipTrigger>
            <TooltipContent className="text-white">
                <p>Classements</p>
            </TooltipContent>
        </Tooltip>
        <Tooltip>
            <TooltipTrigger asChild>
                <Link href='/dashboard/events' className="block">
                    <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                        <Calendar />
                    </Button>
                </Link>
            </TooltipTrigger>
            <TooltipContent className="text-white">
                <p>Evènements</p>
            </TooltipContent>
        </Tooltip>
        <div className="absolute bottom-0 flex flex-col gap-4">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href='/dashboard/profile' className="block">
                        <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                            <Cog />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent className="text-white">
                    <p>Réglages</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="bg-black text-white shadow-sm rounded-xl transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-90" size="lg" onClick={(e) => signOut({ callbackUrl: "/login" })}><DoorOpen /></Button>
                </TooltipTrigger>
                <TooltipContent className="text-white">
                    <p>Déconnexion</p>
                </TooltipContent>
            </Tooltip>
            
        </div>
        </>;
};

export default Menu;
