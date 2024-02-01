
import { GoSignOut } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

import { Brand } from "../brand"
import { Input } from "../input"
import { Button } from "../button"

import { Container, NewDish, Logout } from "./style"
import { useAuth } from "../../hooks/auth";

export function Header({...props}) {
    const { user, signOut } = useAuth();

    const navigation = useNavigate();
    function handleSignOut() {
        navigation("/")
        signOut();
    }
   
    return(
    <Container>
        <div className="brand">
            <Brand  
               title="food explorer"
               typeUser="admin"
            />
        </div>
        <div className="input">
            <Input 
             icon={IoSearch}
             placeholder="Busque por pratos ou ingredientes"
             {...props}
            />
        </div>    
        <NewDish to="/new" >
             <Button 
            title="Novo prato"
            />
        </NewDish>
            
        <Logout onClick={handleSignOut}>
            <GoSignOut />

        </Logout>
           
    </Container>
    )
}