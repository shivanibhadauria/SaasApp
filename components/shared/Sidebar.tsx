"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { User } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar flex  justify-center">
      <div className=" flex flex-col items-center justify-center gap-2 ">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={160}
            height={20}
          />
        </Link>

        <nav className="sidebar-nav flex ">
          <SignedIn>
            <ul className="sidebar-nav_elements flex flex-col  ">
              {navLinks.slice(0, 6).map((link) => {
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
                      <img
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
            <ul className=" gap-2 flex flex-col ">
              {navLinks.slice(6).map((link) => {
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
                      <img
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
              <li className=" flex p-2 items-center justify-center ">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className=" button bg-purple-gradient  bg-cover ">
              <Link href="/signin"> Login </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
