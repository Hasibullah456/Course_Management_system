import './Login.css'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){

  const Navigate=useNavigate();
   document.cookie = "username=admin; expires=Thu, 18 Dec 2028 12:00:00 UTC; path=/";
  
const handlerControl=()=>{
    if(username=="admin" && password=="123"){
       Navigate('/Panel');
    }else{
      Swal.fire({
       icon: "error",
       title: "هشدار",
       text: "پسورد یا یوزر نیم شما نادرست است!!!",
       footer: '<a href="#">لطفا دقیق بایشد.?</a>'
});
    }
  }

  const[username , setUsername]=useState("");
  const[password, setPassword]=useState("");

  
    return(
      <>
     
     
    
      <div className="container1">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="text"  className="form-control" placeholder="Username" onChange={(e)=>{
    setUsername(e.target.value);
  }} />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="password"  className="form-control" placeholder="Password" 
  onChange={(e)=>setPassword(e.target.value)}
  />
</div>
 <button type="button" className="btn btn-secondary btn-block" onClick={handlerControl}>LOGIN</button>
 <div className="message">
<div><input type="checkbox" /> Remember ME</div>
 <div><a href="#">Forgot your password</a></div>
 </div>
   </form>
            <div className="social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter-square"></i></a>
              <a href="#"><i className="fa fa-google"></i></a>
            </div>
          </div>
        </div>
       </div>  
      </>
     
         
 
    )
}
export default Login;