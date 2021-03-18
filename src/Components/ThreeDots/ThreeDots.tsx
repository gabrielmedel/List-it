import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import "./ThreeDots.css"

const options = ["Delete", "Edit", "Cancel"]

const ITEM_HEIGHT = 48

export default function ThreeDots(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const notes = props.notes

  const ID = props.ID

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = option => {
    setAnchorEl(null)
    return option
  }

  function handleRemove(arr, value) {
    return arr.filter(function ({ id }) {
      return id !== value
    })
  }

  function removeNote(arr) {
    let stringified = JSON.stringify(arr)
    localStorage.setItem("note", stringified)
    props.handler([...arr])
  }

  let optionHandler = option => {
    switch (option) {
      case "Delete":
        removeNote(handleRemove(notes, ID))
        setAnchorEl(null)
        break
      case "Edit":
        setAnchorEl(null)
        break
      case "Cancel":
        setAnchorEl(null)
        break
      default:
        setAnchorEl(null)
        break
    }
  }

  return (
    <div>
      <IconButton
        className="ThreeDots"
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        className="ThreeDots"
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
            position: "absolute",
            boxShadow: "0px 0px 42px rgba(0, 0, 0, 0.09)",
            backgroundColor: "#FFFCE6",
          },
        }}>
        {options.map(option => (
          <MenuItem key={option} selected={option === " "} onClick={() => optionHandler(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
