import { Link, NavLink } from "react-router-dom";
import logo from '../assets/3d-deal-hand-shake-design-element.jpg' 



const Navbar = () => {
   
  const navLink=<>
         <li className="font-medium text-slate-950"><NavLink  to='/'> Home</NavLink> </li>
         <li className="font-medium text-slate-950"><NavLink to='/about'>About</NavLink> </li>
         <li className="font-medium text-slate-950"><NavLink to='/contact'>Contact Us</NavLink> </li>
         <li className="font-medium text-slate-950"><NavLink to='/join'>Join Us</NavLink> </li>


  </>

  return (
   
    <div>
      <div className="navbar bg-green-400 rounded-xl mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
        
        <img className="w-24" src={logo} alt="" />
          <Link to='/' className="btn btn-ghost normal-case text-xl text-green-900">H & W </Link >

         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
         <Link to='login'>
         <button className="btn btn-primary"> Lon In</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;