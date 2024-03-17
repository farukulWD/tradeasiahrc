"use client";
import React, { useState } from "react";
import logo from "../../public/logo.png";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/providers/ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "About",
      route: "/about",
    },
    {
      title: "History",
      route: "/history",
    },
    {
      title: "Products",
      route: "/products",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src={logo}
            alt="Trade Asia HRC"
            width={150}
            height={50}
          ></Image>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href={item.route}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href={item.route}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <ThemeSwitcher></ThemeSwitcher>
      </NavbarMenu>
    </Navbar>
  );
}
