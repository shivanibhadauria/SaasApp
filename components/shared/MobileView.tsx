"use client";

import React from "react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedOut } from "@clerk/clerk-react";
import { Button } from "../ui/button";

const MobileView = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="header">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            height={180}
            width={80}
          />
        </Link>

        <nav className=" flex gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <Sheet />

            <Sheet>
              <SheetTrigger>
                <Image
                  src="/assets/icons/menu.svg"
                  alt="menu"
                  width={30}
                  height={30}
                />
              </SheetTrigger>

              <SheetContent className="sheet-content sm:w-64">
                <>
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={80}
                    height={20}
                  ></Image>
                  <ul className="header-nav_elements flex flex-col  ">
                    {navLinks.map((link) => {
                      const isActive = link.route === pathname;

                      return (
                        <li
                          key={link.route}
                          className={`sidebar-nav_element group ${
                            isActive ? "bg-purple-gradient" : ""
                          }`}
                        >
                          <Link
                            className="flex  gap-2 w-full h-10 items-center p-2 "
                            href={link.route}
                          >
                            {" "}
                            <Image
                              src={link.icon}
                              width={24}
                              height={24}
                              className={`${isActive && "brightness-200"}`}
                              alt="icon"
                            />{" "}
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              </SheetContent>
            </Sheet>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/signin">LogIn</Link>
            </Button>
          </SignedOut>
        </nav>
      </header>
    </>
  );
};

export default MobileView;
