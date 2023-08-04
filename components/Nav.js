"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import NextLink from "next/link";
export default function Nav() {
  return (
    <Navbar className="darkMode">
      <NavbarBrand>
        <Link as={NextLink} href="/">
          <p className="font-bold text-inherit">animeCine</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/topanime">
            Top Anime
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/upcoming" as={NextLink} color="foreground">
            Upcoming
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" as={NextLink} href="/topmanga">
            Top Manga
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}