import * as React from "react"
import NavLink from "./nav-link"

export default function NavBar() {
  return (
    <div className="navbar flex justify-center py-4 bg-pm-gray-2 border-b-2 border-black">
      {/* <p className="ml-4 font-bold text-4xl text-black">যান্ত্রিক</p> */}
      <NavLink title="hello" href="/" />
      <NavLink title="hello" href="/" />
      <NavLink title="hello" href="/" />
      <NavLink title="hello" href="/" />
    </div>
  )
}
