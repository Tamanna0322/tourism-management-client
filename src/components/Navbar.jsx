import { NavLink } from "react-router-dom";
import travel from '../assets/travel.jpg';


const Navbar = () => {
    return (
        <div className="">

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

       <NavLink to='/'>Home</NavLink>
       <NavLink to='/'>All Tourists Spot</NavLink>
       <NavLink to='/'>Register</NavLink>

      </ul>
    </div>
   <div className="flex items-center">
    <img className="md:w-28 md:h-28 w-14 h-14" src={travel} alt="" />
   <a className="md:text-4xl font-bold bg-gradient-to-r from-green-700 to-lime-500 text-transparent bg-clip-text">TourTrek</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <div  className="flex space-x-6 items-center">

       <NavLink to='/'>Home</NavLink>
       <NavLink to='/'>All Tourists Spot</NavLink>
       <NavLink to='/register'>Register</NavLink>


     </div>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;