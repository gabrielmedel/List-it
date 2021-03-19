import React from "react"
import { ModalTip } from "../Modal/ModalTip"
import "./ModalTip.css"

export const ModalTipUsable = () => {
  let initial = JSON.parse(localStorage.getItem("times"))
  initial = initial + 0.5
  localStorage.setItem("times", JSON.stringify(initial))

  if (initial <= 1) {
    return <ModalTip></ModalTip>
  } else {
    return null
  }
}
