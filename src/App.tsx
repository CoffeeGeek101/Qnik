import axios from "axios"
import UserDetails, { UserType } from "./components/Hero/UserDetails"
import { ActionButton, Logo, Navbar } from "./components/navbar"
import { GlobalStyle, Wrapper } from "./styles"
import { useState } from "react";

function App() {


  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);

  const handleUser = async () => {
    setLoading(true);
    try{
      const res = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(res.data.data);
    }catch(error){
      console.log('error');
    }finally{
      setLoading(false);
    }
  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <Navbar>
        <Logo> UNIK. </Logo>
        <ActionButton onClick={handleUser} > Get users </ActionButton>
      </Navbar>
      <UserDetails users={users} loading={loading} />
    </Wrapper>
    </>
  )
}

export default App
