
import { useContext, useState } from "react";
// import Navbar from "./Home/Navbar";
import { AuthContext } from "./Provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import app from "./firebase/Firebase.config";
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";





const Register = () => {
  const { userCreate } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState('')
  // const registerNaviGate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password, name)

    // setRegisterError('');



    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {

      swal("Minimum eight characters, at least one letter, one number and one special character");
    }
    else {
      setRegisterError('');

      if (email) {
        userCreate(email, password)
          .then(result => {console.log(result.user)
          })

          .catch(error => console.error(error))
        
           toast("Create Account Successfully , Please Login")
      }



    }


    userCreate(email, password)
      .then(result => {
        console.log(result.user)
        e.target.reset();
        // registerNaviGate('/login')
      })
      .catch(error => {
        console.error(error)
      })
  }







  return (
    <div>
      {/* <Navbar></Navbar> */}

      <div className="hero min-h-screen  ">

        <div className="hero-content flex-col lg:flex-row-reverse ">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
            <h1 className="text-2xl text-center pt-6 font-bold text-lime-800">Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Full Name :</span>
                </label>
                <input type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email :</span>
                </label>
                <input type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password<small className="pl-2 text-blue-500">(Minimum eight characters, at least one letter, one number and one special character) </small>:</span>
                </label>
                <input type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <ToastContainer />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-700 text-white">
                  Create An Account
                </button>
              
              </div>
            </form>
            <p className="p-5">Have An account?<Link className="font-semibold text-blue-800 pl-2 p-6" to='/login'>Login Now</Link></p>
           
          </div>
        </div>

      </div>

    </div>
  );
};

export default Register;