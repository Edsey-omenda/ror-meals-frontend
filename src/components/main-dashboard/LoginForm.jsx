import React,{useState, useEffect} from 'react'
import Navigation from './Navigation'
import { Link,useNavigate } from 'react-router-dom'
import './login.css';
import { useDispatch, useSelector } from "react-redux"
import logimg from '../../assets/Locked-Login.jpg';
import {getUser} from '../homeuser/UserSclice'


function LoginForm({is_admin }){

const [action,setAction] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const navigate=useNavigate();
const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(getUser());
}, [user, dispatch]);

function handleAction(){
  setAction(!action)
}


function submitHandler(e){
  e.preventDefault();
  setIsLoading(true);
  fetch("https://ror-meals.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, is_admin }),
  })

  .then((r) => {
    if (r.ok) {
      r.json().then((user) => {
        setIsLoading(false)
        if (user.body.is_admin) {
          // onLogin(user)
          localStorage.setItem('user', JSON.stringify(user))
          navigate("/admin")
        }
        else {
          setIsLoading(false)
          // onLogin(user)
          localStorage.setItem('user', JSON.stringify(user))
          navigate("/UserHome")
        }
    })}
    else {
      setIsLoading(false)
      r.json().then((err) => setErrors([err.errors]));
    }
  });
    
}

    return(
     <div className="join">
        <Navigation />
        <form onSubmit={submitHandler}>
            <img src={logimg} alt="ramen" className="logimg" width ="50%" height="750"/>
                <div className="form-inner">
                    <h2>Login to order</h2>
                    {/* {(error !== "") ? (<div className="error">{error}</div>) : ""} */}
               
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="username-field"
                         className="input-field" placeholder="Email"  
                         onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password-field"
                         className="input-field" placeholder="Password"  
                         onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>

                  <button type='submit' className='log' id='logIn'>{action?'Login' :'Delete'}</button>
       
                <h3 id="account">Don't have an account? <Link to="/register" className="register">{isLoading ? "Loading..." : "Sign Up"}</Link></h3>  
                    {errors.map((err) => (
                    <error key={err}>{err}</error>
                     ))}    
                  <h3 id="account">Do you want to {action ?'Delete':'Login'} Account? <Link to="/login" className="register" onClick={handleAction}>{action?'Delete':'Login'}</Link></h3>
              </div>
          </form>
      </div>
     );
    }
    

export default LoginForm;