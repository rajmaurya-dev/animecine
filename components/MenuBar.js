"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand className="max-w-[100px]">
        <NextLink href="/">
          <p className="font-bold text-inherit text-white">animeCine</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 mx-auto" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit md:hidden">animeCine</p>
        </NavbarBrand>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/anime">
            Anime
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/genres">
            Genres
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/ongoing" as={NextLink} color="foreground">
            Ongoing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" as={NextLink} href="/manga">
            Manga
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="">
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

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color="foreground"
            href="/anime"
            onClick={closeMenu}
          >
            Anime
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color="foreground"
            href="/manga"
            onClick={closeMenu}
          >
            Manga
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color="foreground"
            href="/genres"
            onClick={closeMenu}
          >
            Genres
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            color="foreground"
            href="/ongoing"
            onClick={closeMenu}
          >
            Ongoing
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
