import { Navigate } from "react-router-dom"
import isLogin from '../utlits'

function PrivateRoute({children}){
    
    return(
     
        <>
        {isLogin() ? children : <Navigate to='/Login' />}
        
        </>
    )
}
export default PrivateRoute