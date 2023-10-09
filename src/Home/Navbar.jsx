import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handelSignOut = () => {
    logOut()
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const navLink = <>
    <li className="font-medium text-slate-950"><NavLink to='/'> Home</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/about'>About</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/advices'>Advices</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/achievements'>Achievements</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/team'>Our Team</NavLink> </li>
   


  </>

  return (

    <div>
      <div className="navbar bg-green-100 h-10 rounded-xl mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>

          <img className=" h-16 mr-4 " src='https://i.ibb.co/LPc7kNN/848571-O4-WJ700-0729a053.jpg' alt="" />
          <Link to='/' className="btn btn-ghost normal-case text-xl text-green-900">H & W </Link >


        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        {/* <div className="navbar-center lg:navbar-end">
          {
            user && <span>{user.displayName}</span>
          }
        </div> */}
        {/* <div className="w-10 rounded-full">
          <img src="{user.photoUrl}" />
        </div> */}
        <div className="navbar-end">
          {
            user ?
              <button onClick={handelSignOut} className="btn bg-green-600 text-white">Sign Out</button>
              :
              <Link to='/login'>
                <button className="btn bg-green-600 text-white"> Login</button>
              </Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;