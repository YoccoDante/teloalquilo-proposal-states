import React from 'react'
import { UserModel } from '../models/usersModel'
import StarRating from './StarRating'

interface UsersMappedProps {
    users: UserModel[]
}

function UsersMapped({users}:UsersMappedProps) {
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'15px'}}>
        {users.map((user,index) => 
            <div
                style={{
                width:'100%',
                height:'50px',
                borderRadius:'0.5em',
                border:'1px solid',
                display:'flex',
                justifyContent:'space-evenly'}}
                key={index}>
            <span>{user.full_name}</span>
            <StarRating readOnly={true} rate={user.rate}/>
            <span>{user.state}</span>
            <img height='50px' src='imgs/neutral_user.png'/>
            </div>
        )}
    </div>
  )
}

export default UsersMapped