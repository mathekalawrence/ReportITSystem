import { createContext } from "react";

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser]=useState()

    
   async function login(email, password){

   }

 async function register(username, email, password){

   }

 async function logout(){

 }

 return(
    <UserContext.Provider value={{ user, login, register, logout }}>

    </UserContext.Provider>
 )
}