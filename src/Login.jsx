import { Link,  useNavigate } from "react-router-dom";
import Navbar from "./Home/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import swal from "sweetalert";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";




const Login = () => {

  const {signIn, googleSignIn,facebookPopUp} = useContext(AuthContext)

  const handelGoogleSignIn=()=>{
    googleSignIn()
    .then(result=>{
      console.log(result.user)
    })
    .catch( error => {
      console.error(error)
    })
  }

  const handelFacebookPopUp =()=>{
    facebookPopUp()
    .then(result=>{
      console.log(result.user)
    })
    .catch( error => {
      console.error(error)
    })
  }
  
  const [loginError,setSetLogInError]= useState('')
  // const location = useLocation()
  const naviGate = useNavigate();

  

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)



    signIn(email,password)
      .then(result => {
       
        console.log(result.user)
        e.target.reset();
        naviGate('/')
      })
      .catch(error => {
        console.error(error)
        toast("Password invalid ,please try again ");
      })
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen ">

        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
            <h1 className="text-2xl text-center pt-6 font-bold text-lime-800">LogIn Now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-gray-700 text-white">Login</button>
              </div>
            </form>
            <p className="text-center font-semibold text-xl mb-2">or</p>
                <div className="  mb-3">
                  <div className=" gap-2 ">
                    
                    <button onClick={handelGoogleSignIn} className="btn w-96  text-black"> <FaGoogle ></FaGoogle>Login in with Google</button>
                  </div>
                  <ToastContainer />
                  <div className="flex gap-2">
                    
                    <button className="btn w-96  text-black">  <FaFacebook></FaFacebook>Login in with Facebook</button>
                  </div>
                 
                </div>
                {
                  loginError && <p>{toast}</p>
                }

            <p className="p-5 pl-14">Do not have an account?<Link className="font-semibold  text-blue-800 pl-2 p-6" to='/register'>Register Now</Link></p>
           
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;