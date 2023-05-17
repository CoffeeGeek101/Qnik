import React from 'react'
import { Hero, HeroTitle, UserHolder, UserWrapper } from './hero'
import User from './User';
import { CircularProgress } from '@mui/material';
import { Placeholder } from '../Placeholder';
import { InitialImage, InitialPage, InitialText } from '../InitialPage';

export interface UserType {
    id : number,
    first_name : string,
    last_name : string,
    email : string,
    avatar : string
}

interface UserDetailsProps {
    users : UserType[];
    loading : boolean;
}

const UserDetails : React.FC<UserDetailsProps> = ({users, loading}) => {
    
  return (
    <Hero>
        <UserWrapper>
            {users.length != 0 ? <HeroTitle>Users.</HeroTitle> : null}
            <UserHolder>
                {
                    loading ? 
                    (<Placeholder> <CircularProgress/> </Placeholder>)
                    :
                    users?.length === 0 ?
                    (<Placeholder>
                         <InitialPage>
                            <InitialImage src='images/eyecatcher.png' />
                            <InitialText>User Info will be available here!</InitialText>
                        </InitialPage> 
                    </Placeholder>) 
                    :
                    users.map((user) => ( <User key={user.id} user={user} /> ))
                }
            </UserHolder>
        </UserWrapper>
    </Hero>
  )
}

export default UserDetails