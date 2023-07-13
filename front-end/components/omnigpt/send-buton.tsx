import * as React from "react"
import Button from "../ui/button"
import { AiOutlineSend } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"

export interface ISendButtonProps {
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>
  input: "text" | "speech"
}

export default function SendButton(props: ISendButtonProps) {
  return (
    <Button
      onClick={() => {
        props.setIsFetching(true)
      }}
    >
      {props.input === "text" ? <AiOutlineSend /> : <BsFillMicFill />}
    </Button>
  )
}
