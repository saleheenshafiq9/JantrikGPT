"use client"

import { motion } from "framer-motion"

import * as React from "react"

export interface IButtonProps {
  children: React.ReactNode
}

export default function Button(props: IButtonProps) {
  const { children } = props

  return (
    <motion.button
      className="rounded-xl p-4 text-2xl text-black max-h-min bg-pm-gray-2"
      whileHover={{
        boxShadow: "4px 4px 0px 2px #000000",
        backgroundColor: "#767C9D",
      }}
    >
      {children}
    </motion.button>
  )
}
