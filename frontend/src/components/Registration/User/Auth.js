import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Auth.css"
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
                    <div id={z}></div>
                    <button type='button'onClick={login}className='toggle-btn'>Log In</button>
                    <button type='button'onClick={register}className='toggle-btn'>Register</button>
                </div>
                <form id={x} className='input-group-login'>
                    <input type='text'className='input-field'placeholder='Admission No' required />
		    <input type='password'className='input-field'placeholder='Enter Password' required />
		    <input type='checkbox'className='check-box' /><span>Remember Password</span>
		    <button type='submit'className='submit-btn'>Log in</button>
		 </form>
		 <form id={y} className='input-group-register'>
		     <input type='text'className='input-field'placeholder='Name' required / >
		     <input type='text'className='input-field'placeholder='Admission No' required />
		     <input type='text'className='input-field'placeholder='CGPA' required />
             <input type='url'className='input-field'placeholder='Resume Link' required />
		     <input type='password'className='input-field'placeholder='Enter Password' required />
		     {/* <input type='password'className='input-field'placeholder='Confirm Password'  required /> */}
		     {/* <input type='checkbox'className='check-box' /><span>I agree to the terms and    
                                                            conditions</span> */}
              <br />  
              <br />
                    <button type='submit'className='submit-btn'>Register</button>
	         </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Auth