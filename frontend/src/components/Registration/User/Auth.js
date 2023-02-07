import React,{useState} from 'react'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { register1, login1 } from '../../../services/api';
import isAuth from '../../../services/isAuth';
import "./Auth.css"
const Auth = () => {
    // const [name,setName]=useState("");
    // const [admission_no,setAn]=useState("");
    // const [cgpa,setCgpa]=useState("");
    // const [resume_link,setResume]=useState("");
    // const [password,setPassword]=useState("");
    const [data,setData]=useState({
        name:"",
        admission_no:"",
        cgpa:"",
        resume_link:"",
        password:""
    });
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const [style, setStyle] = useState("login-form1");
    const [x, setX] = useState("login");
    const [y, setY] = useState("register");
    const [z, setZ] = useState("btn");
    const navigate=useNavigate();
    const show=()=>
    {
        setStyle("login-form1");
    }
    const submitHandler=async(e)=>
    {
        e.preventDefault();
        console.log(isAuth());
        console.log(data.name);
        console.log(data.admission_no);
        console.log(data.cgpa);
        console.log(data.resume_link);
        console.log(data.password);
        
        // const url = "http://localhost:4000/api/v1/register";
        // const { data:res }=await axios.post(url,data);
        const { data:res }=await register1(data);
        localStorage.setItem("token",res.token);
        console.log(res.message);
        console.log(isAuth());
        // navigate("/home");
        // localStorage.setItem("user"http://localhost:4000/api/v1",{admission_no,password});
        // navigate("/home");
    }
    const submitHandler1=async(e)=>
    {
        e.preventDefault();
        
        const {data:res}=await login1(data);
        localStorage.setItem("token",res.token);
        navigate("/home");
           
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
                <form id={x} className='input-group-login' onSubmit={submitHandler1}>
                    <input type='text'className='input-field' name="admission_no" placeholder='Admission No' value={data.admission_no} required onChange={handleChange}/>
		    <input type='password'className='input-field'placeholder='Enter Password' name="password" value={data.password}r equired onChange={handleChange}/>
		    <input type='checkbox'className='check-box' /><span>Remember Password</span>
		    <button type='submit'className='submit-btn'>Log in</button>
		 </form>
		 <form id={y} className='input-group-register' onSubmit={submitHandler}>
		     <input type='text'className='input-field'placeholder='Name' name="name" onChange={handleChange} value={data.name} required / >
		     <input type='text'className='input-field'placeholder='Admission No' name="admission_no" value={data.admission_no} required onChange={handleChange}/>
		     <input type='text'className='input-field'placeholder='CGPA' name="cgpa" value={data.cgpa} required onChange={handleChange}/>
             <input type='url'className='input-field'placeholder='Resume Link' name="resume_link" value={data.resume_link} required onChange={handleChange}/>
		     <input type='password'className='input-field'placeholder='Enter Password' name="password" value={data.password} required onChange={handleChange}/>
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