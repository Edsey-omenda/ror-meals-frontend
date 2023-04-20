import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import './login.css';
import regimg from '../../assets/Register2.jpg';


function Register({onLogin}){

  // const [formData,setData] = useState({});
  // const[data,setUser]=useState('');
  const navigate = useNavigate()
  const [user_name, setUser_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isAdmin, setIsAdmin] = useState(false)
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{

  //   fetch('https://bookameal-backend.herokuapp.com/users')
  //   .then(res=>res.json())
  //   .then(data=>setUser(data))
  //  },[])
    
    // function handleChange(event) {
    // const name=event.target.name;
    // const value=event.target.value;
    // setData({
    // ...formData,
    // [name]: value,
    // })
    // }

    // function handleSubmit(event) {
    //     if (data.find(item=>item.email===formData.email)){
    //     alert('This user Alredy Exist!');
    //     event.preventDefault();
    //     } else {     
    //       fetch("https://bookameal-backend.herokuapp.com/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //     },
    //       body: JSON.stringify(formData),
    //     })
        
    //       event.target.reset()
    //       navigate('/login')
    //       alert(`User Account Created succesfully`)
    //     }
    // }
    function handleSubmit(e) {
      e.preventDefault()
      setIsLoading(true)
      fetch("https://ror-meals.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_name: user_name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          is_admin: isAdmin
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setIsLoading(false)
            setIsAdmin(false)
            localStorage.setItem('user', JSON.stringify(user))
            navigate("/login")
          })
        } else {
          console.log({
            user_name,
            email,
            password,
            passwordConfirmation,
            isAdmin
          })
          setIsLoading(false)
          r.json().then((err) => setErrors(err.errors))
        }
      })
    }


  return (
    <div className="join">
        <Navigation />
            <form className="form-login" onSubmit={handleSubmit}>
              <div className="form-inner reg">
                <h2>Register to get started</h2> 
                <div className="form-group">
                  <label htmlFor="name">Username:</label>
                  <input type="text" name="user_name" id="username-field" className="input-field" placeholder="Username" onChange={(e) => setUser_name(e.target.value)} required></input>        
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="usermail-field"  className="input-field" placeholder="Email"   onChange={(e) => setEmail(e.target.value)} required></input> 
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password-field"  className="input-field" placeholder="Set Password"  onChange={(e) => setPasswordConfirmation(e.target.value)}required></input> 
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>            
                    <input type="password" name="confirm-password" id="password-field2" className="input-field" placeholder="Confirm Password"      onChange={(e) => setPassword(e.target.value)}required></input> 
                </div>
                <button type='submit' className='log' id='logIn'>Sign Up</button>
              </div>
              <img src={regimg} alt="ramen" className="regimg" width ="570" height="760"/>

            </form>
    </div>
  );
}

export default Register;






// import { useState, useEffect } from "react";
// import Navigation from './Navigation';
// import regimg from '../../assets/Register2.jpg';
// import './login.css';
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from '../../components/slices/authSlice'

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const auth = useSelector((state) => state.auth);
  

//   const [user, setUser] = useState({
//     user_name: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//     is_admin: false,
//   });

//   useEffect(() => {
//     if (auth.user_id) {
//       navigate("/login");
//     }
//   }, [auth.user_id, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(user);
//     dispatch(registerUser(user));
//   };

//   return (
//     <>
//  <div className="join">
//        <Navigation />
//             <form className="form-login" onSubmit={handleSubmit}>
//               <div className="form-inner reg">
//                 <div className="form-group">
//                   <input type="text" name="user_name" id="username-field"
//                    className="input-field" placeholder="Username" 
//                    onChange={(e) => setUser({ ...user, user_name: e.target.value })} required></input>        
//                </div>
//                <div className="form-group">
//                  <label htmlFor="email">Email:</label>
//                 <input type="email" name="email" id="usermail-field"
//                   className="input-field" placeholder="Email"   
//                   onChange={(e) => setUser({ ...user, email: e.target.value })} required></input> 
//                 </div>
//               <div className="form-group">
//                   <label htmlFor="password">Password:</label>
//                     <input type="password" name="password" id="password-field"
//                      className="input-field" placeholder="Set Password"  
//                      onChange={(e) => setUser({ ...user, password_confirmation: e.target.value })}required></input> 
//                 </div>
//                 <div className="form-group">
//                    <label htmlFor="confirm-password">Confirm Password:</label>            
//                    <input type="password" name="confirm-password" id="password-field2"
//                     className="input-field" placeholder="Confirm Password"     
//                      onChange={(e) => setUser({ ...user, password: e.target.value })} required></input> 
//                 </div>
//                 <button type='submit' className='log' id='logIn'>
//                 {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
//         </button>
       
//               </div>
//             <img src={regimg} alt="ramen" className="regimg" width ="570" height="760"/>

//            </form>
//   </div>
//     </>
//   );
// };

// export default Register;