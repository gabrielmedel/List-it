import React from "react"
import { Close } from "../../assets/icons/Close"
import { Tip } from "../../assets/icons/tip"
import "./ModalTip.css"

export const ModalTip = () => {
  const handleClick = e => {
    e.target.classList.add("Active")
    let one = e.target.parentNode
    let two = one.parentNode
    let three = two.parentNode
    let parent = three.parentNode
    parent.classList.add("disabled")
  }
  return (
    <div className="modalContainer">
      <div className="modalWrapper">
        <div className="topContent">
          <Tip></Tip>
          <Close handleClick={handleClick}></Close>
        </div>
        <div className="midContent">
          <p>To add an item you can write it and press enter to automatically add a new items!</p>
        </div>
      </div>
    </div>
  )
}
