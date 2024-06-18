import React from 'react'
import ReactDOM from 'react-dom'

const SideDrawer = props => {

  const content = <aside className={props.className}>{props.children}</aside>
  return ReactDOM.createPortal(content , document.getElementById("sideDrawer"))
}

export default SideDrawer