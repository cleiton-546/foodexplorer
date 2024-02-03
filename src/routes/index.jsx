import { BrowserRouter } from "react-router-dom"

import { USER_ROLE } from "../utils/roles";
import { useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { CustomerRoutes} from './customer.routes'

export function Routes() {
  const { user } = useAuth();

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AppRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:  
        return <CustomerRoutes />;  
    };

  }
  
  return(  
      <BrowserRouter >  
         {user ? <AccessRoutes/> : <AuthRoutes/>}
      </BrowserRouter>
        
    )
}