import React from 'react'
import UserItem from './UserItem'


const UserList = (props) => {

    if(props.item.length === 0){
        return (
            <div>There is no user.</div>
        )
    }

  return (
    <ul className='flex justify-center items-center mt-10'>
        { props.item.map(user => (
            <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.placeCount}/>
        )) }
    </ul>
  )
}

export default UserList