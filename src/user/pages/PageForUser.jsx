import React from 'react'
import UserList from '../components/UserList'

const PageForUser = () => {

  const USER = [{
    id: "u2",
    name : "Kyaw Kyaw",
    image : "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    placeCount : 8
  }]

  return (
    <UserList item={USER}/>
  )
}

export default PageForUser