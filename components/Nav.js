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
          <p className="font-bold text-inherit">aC</p>
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
        <NavbarItem>
          <Button
            href="/search"
            as={NextLink}
            color="primary"
            showAnchorIcon
            variant="flat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
