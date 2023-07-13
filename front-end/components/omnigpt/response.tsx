"use client"
import * as React from "react"

export interface IResponseProps {
  responseType: "text" | "speech" | null
  respose: string | null
  output: "text" | "speech"
  setOutput: React.Dispatch<React.SetStateAction<"text" | "speech">>
}

export default function Response(props: IResponseProps) {
  const { respose, output, responseType } = props
  return (
    <div className=" flex justify-evenly rounded-lg text-black w-full m-4 p-6 bg-pm-gray-2 ">
      {responseType === null ? (
        <>
          <button
            className="btn"
            style={{
              backgroundColor: output === "text" ? "black" : "#444444",
            }}
            onClick={() => props.setOutput("text")}
          >
            Text
          </button>
          <button
            className="btn"
            style={{
              backgroundColor: output === "speech" ? "black" : "#444444",
            }}
            onClick={() => props.setOutput("speech")}
          >
            Audio
          </button>
        </>
      ) : responseType === "text" ? (
        <div className="text-lg">{respose}</div>
      ) : (
        <audio controls autoPlay src={respose ?? ""} />
      )}
    </div>
  )
}
