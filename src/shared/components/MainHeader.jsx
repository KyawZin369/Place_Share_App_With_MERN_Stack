import React from 'react'

const MainHeader = props => {
  return <div className={props.className}>
    {props.children}
  </div>
}

export default MainHeader