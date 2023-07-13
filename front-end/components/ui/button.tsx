"use client"

import { motion } from "framer-motion"

import * as React from "react"

export interface IButtonProps {}

export default function Button(props: IButtonProps) {
  return (
    <motion.button
      className="rounded-xl p-4 text-2xl text-black border-2 border-black"
      whileHover={{
        boxShadow: "4px 4px 0px 2px #000000",
        backgroundColor: "#31E981",
      }}
    >
      Button
    </motion.button>
  )
}
