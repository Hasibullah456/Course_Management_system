import {  Link, Outlet } from "react-router-dom";
import Mynavbar from "../../Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './Artical.css'
function Artical(){
    return(
        <>
        <Mynavbar />
        <div className="ArticalText">
            <h1> مقالات روز</h1>
            <hr />
            <div className="link1">
            <Link to='/Artical/php' className="btn btn-light" >PHP</Link>
            <Link to='/Artical/Js' className="btn btn-primary" >JavaScript</Link>
            <Link to='/Artical/react' className="btn btn-success" >React</Link>
            <Link to='/Artical/java' className="btn btn-danger" >Java</Link>
            </div>
             
        </div>
        <hr />
        
        <Outlet />
        
           
        
        </>
        
    )
}
export default Artical;