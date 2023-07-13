import * as React from "react"

export interface ITextInputProps {}

export default function TextInput(props: ITextInputProps) {
  return (
    <textarea
      className="textarea border-2  rounded-lg textarea-bordered
      text-black w-full mx-4 bg-pm-gray-2
      "
      placeholder=""
    ></textarea>
  )
}
