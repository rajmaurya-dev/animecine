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
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/anime">
            Anime
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/ongoing" as={NextLink} color="foreground">
            ongoing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" as={NextLink} href="/manga">
            Manga
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
