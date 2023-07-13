"use client"

import * as React from "react"
import Button from "../ui/button"
import { AiOutlineSend } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder"

export interface ISendButtonProps {
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>
  setAudioBlob: React.Dispatch<React.SetStateAction<Blob | null>>
  input: "text" | "speech"
}

export default function SendButton(props: ISendButtonProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const innerDivRef = React.useRef<HTMLDivElement>(null)

  // Audio Recorder Stuff
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    err => console.table(err) // onNotAllowedOrFound
  )
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob)
    const audio = document.createElement("audio")
    audio.src = url
    audio.controls = true
    innerDivRef.current?.appendChild(audio)

    const submissionButton = document.createElement("button")
    submissionButton.innerText = "Submit"
    submissionButton.onclick = () => {
      props.setAudioBlob(blob)
      props.setIsFetching(true)
      dialogRef.current?.close()
    }
    innerDivRef.current?.appendChild(submissionButton)
  }

  return (
    <>
      <Button
        onClick={() => {
          if (props.input === "speech") {
            dialogRef.current?.showModal()
          }
          // props.setIsFetching(true)
        }}
      >
        {props.input === "text" ? <AiOutlineSend /> : <BsFillMicFill />}
      </Button>
      <dialog ref={dialogRef} id="my_modal_1" className="modal">
        <div ref={innerDivRef}>
          <AudioRecorder
            onRecordingComplete={blob => addAudioElement(blob)}
            recorderControls={recorderControls}
            // downloadFileExtension="wav"
            // downloadOnSavePress={true}
            showVisualizer={true}
          />
          <br />
          <button onClick={recorderControls.stopRecording}>Stop recording</button>
          <br />
        </div>
      </dialog>
    </>
  )
}
