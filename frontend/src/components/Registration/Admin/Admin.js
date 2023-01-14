import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Admin.css"
const Auth = () => {
    const [style, setStyle] = useState("login-form1");
    const [x, setX] = useState("login");
    const [y, setY] = useState("register");
    const [z, setZ] = useState("btn");
    const show=()=>
    {
        setStyle("login-form1");
    }
    const login=()=>
    {
        setX("login");
        setY("register");
        setZ("btn");
    }
    const register=()=>
    {

        setX("login1");
        

        setY("register1");
        setZ("btn1");
    
    }
    const w={
        width:"auto"
    }

  return (
    <>
     <div className="full-page">
        <header>
                <h2> <Link to="/" className="logo">SVNIT</Link></h2>
                
                <div className="navigation">
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Info</a>
                    <a href='#'>Services</a>
                    <a href='#'>Contact</a>
                </div>
            </header>
        <div id={style} className='login-page'>
            <div className="form-box">
                <div className='button-box'>
                    <div id="btn3"></div>
                    <button type='button'onClick={login}className='toggle-btn'><b>Admin Login</b></button>
                    {/* <button type='button'onClick={register}className='toggle-btn'>Register</button> */}
                </div>
                <form id={x} className='input-group-login'>
       
		    <input type='password'className='input-field'placeholder='Enter Admin Password' required />
		    <input type='checkbox'className='check-box' /><span>Remember Password</span>
		    <button type='submit'className='submit-btn'>Log in</button>
		 </form>
		
            </div>
        </div>
    </div>
    </>
  )
}

export default Auth