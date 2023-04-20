
import LoginButton from './button';
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'
import { TextField} from '@mui/material'
import './style.css'
import { Link,useNavigate } from "react-router-dom";

const Form =()=>{

    const navigate  = useNavigate();
    const goToDashboard = ()=>{
         navigate('/dashboard');
       
    };
    return(
        <div className="parent">
        <div className='form'>
        <div className='sign-in'>
             <h1>Sign In</h1>
             <p>sign in to your account</p>
         </div>
         <div className='ext-login'>
             <div className='google-div'><LoginButton logo={<FcGoogle/>} text='Sign in with Google'/></div>
             <div className='apple-div'><LoginButton logo={<AiFillApple/>} text='Sign in with Apple'/></div>
         </div>
         <div className='input-div'>
         <div className='email-div'>
             <h2>Email address</h2>
             <TextField fullWidth = {true}/>
             </div>
         <div className='pass-div'>
            <h2>Password</h2>
            <TextField  fullWidth = {true} type = {'password'}/>
            <div className='fg-pass' >Forgot Passoword?</div>
             </div>
         
         <div className='sign-in-btn' onClick={goToDashboard}>Sign In</div>
         </div>
         <div className='no-acc' > Don't have and account?  <p id='register'>Register here</p></div>
        </div>
        </div>
        
    );
}
 

  
       
      
        
    
    

export default Form;

