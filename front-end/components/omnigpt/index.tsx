"use client"

import * as React from "react"
import TextInput from "./text-input"
import SendButton from "./send-buton"
import Response from "./response"

export interface IOmniGPTProps {}

export default function OmniGPT(props: IOmniGPTProps) {
  const [textInput, setTextInput] = React.useState("")
  const [audioBlob, setAudioBlob] = React.useState<Blob | null>(null)

  const [output, setOutput] = React.useState<"text" | "speech">("text")

  const [isFetching, setIsFetching] = React.useState<boolean>(false)
  const [response, setResponse] = React.useState<string | null>(null)
  const [responseType, setResponseType] = React.useState<"text" | "speech" | null>(null)

  // API callback
  React.useEffect(() => {
    const fetchData = async () => {
      let url = `http://127.0.0.1:3000/api/v1/omnigpt`
      url += `?input=${textInput === "" ? "speech" : "text"}`
      url += `&output=${output}`

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": textInput === "" ? "audio/webm" : "application/json",
        },
        body:
          textInput === ""
            ? audioBlob
            : JSON.stringify({
                payload: textInput,
              }),
      })

      if (output === "text") {
        const textReply = await res.text()
        setResponse(textReply)
        setResponseType("text")
      } else {
        const audioReply = await res.blob()
        setResponse(URL.createObjectURL(audioReply))
        setResponseType("speech")
      }

      setIsFetching(false)
    }

    if (isFetching) {
      fetchData()
    }
  }, [isFetching])

  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-[95vw] lg:w-[60vw]">
        <TextInput setTextInput={setTextInput} />
        <SendButton
          setAudioBlob={setAudioBlob}
          input={textInput === "" ? "speech" : "text"}
          setIsFetching={setIsFetching}
        />
      </div>
      <Response
        responseType={responseType}
        respose={response}
        output={output}
        setResponse={setResponse}
        setResponseType={setResponseType}
        setOutput={setOutput}
      />
    </div>
  )
}
