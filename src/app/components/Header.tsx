"use client";
import { nav_link } from "@/constants"
import { Button, TextField } from "@radix-ui/themes";
import Link from "next/link"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

const Header = () => {

  return (
    <nav className="h-16 flex justify-around items-center">
      <div className="flex gap-2">
        {nav_link.map((link, key) => (
          <Button className="bg-slate-800 hover:bg-slate-900 transition-all ease-in">
            <Link href={link.href} key={key}>
              {link.label}
            </Link>
          </Button>
        ))}
      </div>
      <div>
        <TextField.Root >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input color="gray" placeholder="Procurar Instrução" />
        </TextField.Root>
      </div>
    </nav>
  )
}

export default Header