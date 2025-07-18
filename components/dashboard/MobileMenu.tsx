"use client"
import * as React from "react"
import { Cog, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import { List, Compass, Table, Medal, Calendar, DoorOpen } from 'lucide-react';
import MobileAvatar from "@/components/dashboard/MobileAvatar"
import { signOut } from "next-auth/react";

const MobileMenu = () => {
    const [open, setOpen] = React.useState(false);
  return <div>
      <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild className="bg-primary text-white shadow-sm rounded-xl h-12 w-12 p-3 m-3 cursor-pointer">
              <List />
          </DrawerTrigger>
          <DrawerContent className="bg-white" aria-description="content">
              <DrawerTitle className="flex justify-center pb-4"><MobileAvatar /></DrawerTitle>
              <DrawerDescription></DrawerDescription>
              <div className="mx-auto w-full space-y-4 max-w-sm py-2">
                  <Link href='/dashboard' className="block">
                      <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                          <Table />
                      </Button>
                  </Link>
                  <Link href='/dashboard/new-hunt' className="block">
                      <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                          <Compass />
                      </Button>
                  </Link>
                  <Link href='/dashboard/rankings'>
                      <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                          <Medal />
                      </Button>
                  </Link>
                  <Link href='/dashboard/events' className="block">
                      <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                          <Calendar />
                      </Button>
                  </Link>
                  <Link href='/dashboard/profile' className="block">
                      <Button type="button" className="bg-black w-full text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-90" size={"lg"}>
                          <Cog />
                      </Button>
                  </Link>
                  <Button type="button" className="w-full bg-black text-white " size={"lg"} onClick={(e) => signOut({ callbackUrl: "/login" })}>
                      Se déconnecter <DoorOpen />
                  </Button>
              </div>
          </DrawerContent>
      </Drawer>
  </div>;
};

export default MobileMenu;
