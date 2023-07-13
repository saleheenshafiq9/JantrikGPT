import * as React from "react"
import TextInput from "./text-input"
import SendButton from "./send-buton"

export interface IOmniGPTProps {}

export default function OmniGPT(props: IOmniGPTProps) {
  // add some state here

  return (
    <div className="flex justify-center w-[95vw] lg:w-[60vw]">
      <TextInput />
      <SendButton />
    </div>
  )
}
