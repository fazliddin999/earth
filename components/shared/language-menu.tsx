"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { lngs } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Languages } from "lucide-react";
const LanguageMenu = () => {
  const { lng } = useParams();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Languages />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {lngs.map((item) => (
            <Link
              href={item.route}
              key={item.route}
              className={cn(
                "cursor-pointer",
                lng === item.route && "bg-secondary"
              )}
            >
              <DropdownMenuItem>{item.label}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default LanguageMenu;
