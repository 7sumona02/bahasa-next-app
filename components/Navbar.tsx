"use client";
import React from "react";
import { IconHome, IconMessage, IconSettingsBolt, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
import { Hero } from "./Hero";
import Partners from "./Partners";
import Language from "./Language";
import { Join } from "./Join";
import Footer from "./Footer";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Our Services",
        link: "/",
        icon: <IconSettingsBolt className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Partners />
      <Language />
      <Join />
      <Footer />
    </div>
  );
}