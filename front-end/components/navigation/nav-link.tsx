import * as React from "react"
import Link from "next/link"

export interface INavLinkProps {
  title: string
  href: string
}

export default function NavLink(props: INavLinkProps) {
  const { title, href } = props

  return (
    <Link href={href}>
      <p
        className="text-2xl text-black w-full md:w-auto md:h-full text-center p-2 border-b-2 border-transparent hover:border-black hover:cursor-pointer  
        mx-4
      "
      >
        {title}
      </p>
    </Link>
  )
}
