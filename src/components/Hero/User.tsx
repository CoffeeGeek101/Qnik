import React from 'react'
import { UserType } from './UserDetails'
import { UserCard, UserEmail, UserImage, UserName } from './hero';


interface UserProps {
    user : UserType;
}

const User : React.FC<UserProps> = ({user}) => {
    
  return (
    <UserCard>
        <UserImage src={user.avatar} alt={user.first_name} />
        <UserEmail>{user.email}</UserEmail>
        <UserName>{user.first_name} {user.last_name}</UserName>
    </UserCard>
  )
}

export default User