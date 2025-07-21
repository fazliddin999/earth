import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import GlobalSearch from "./global-search";
import ModeToggle from "@/components/shared/mode-toggle";
import { ShoppingBag, ShoppingBagIcon, ShoppingCart } from "lucide-react";
import LanguageMenu from "@/components/shared/language-menu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between border-b">
        <div className="flex items-center gap-4">
          Faziko
          <div className="flex items-center gap-3 border-b pl-2 max-md:hidden">
            {navLinks.map((nav) => (
              <Link
                href={`/${nav.route}`}
                key={nav.route}
                className="font-medium transition-all hover:text-blue-500 hover:underline"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>{" "}
        <div className="flex items-center gap-2 max-md:hidden">
          <div className="flex items-center gap-6 border-r pr-3">
            <GlobalSearch />
            <ModeToggle />
            <ShoppingCart />
            <LanguageMenu />
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={"ghost"} size={"lg"} className="rounded-full">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant={"default"} size={"lg"} className="rounded-full">
                Sign up
              </Button>
            </SignUpButton>{" "}
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
