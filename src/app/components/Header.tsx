"use client";
import { nav_link } from "@/constants"
import { Button, TextField } from "@radix-ui/themes";
import Link from "next/link"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

const Header = () => {

  return (
    <nav className="h-16 flex justify-around items-center">
        {nav_link.map((link, key) => (
          <Button key={key} className="bg-slate-800 hover:bg-slate-900 transition-all ease-in">
            <Link href={link.href} >
              {link.label}
            </Link>
          </Button>
        ))}
    </nav>
  )
}

export default Header