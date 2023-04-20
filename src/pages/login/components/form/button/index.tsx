
import './style.css'


const LoginButton = ({logo,text})=>{


        return (<div className='parent-button'>
           <div className="login-logo">
               {logo}
           </div>
           <div className='login-text'>
               {text}
           </div>
             
        </div>)
}

export default LoginButton;