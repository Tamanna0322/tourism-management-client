import { NavLink } from "react-router-dom";
import travel from '../assets/travel.jpg';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

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
              <NavLink to='/allSpot'>All Tourists Spot</NavLink>
              {
                !user && <NavLink to='/register'>Register</NavLink>
              }

            </ul>
          </div>
          <div className="flex items-center">
            <img className="md:w-28 md:h-28 w-14 h-14" src={travel} alt="" />
            <a className="md:text-4xl font-bold bg-gradient-to-r from-green-700 to-lime-500 text-transparent bg-clip-text">TourTrek</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex space-x-6 items-center">

              <NavLink to='/'>Home</NavLink>
              <NavLink to='/allSpot'>All Tourists Spot</NavLink>
              {
                !user && <NavLink to='/register'>Register</NavLink>
              }


            </div>
          </ul>
        </div>
        <div className="navbar-end">
              {
                 user ? <div className="dropdown dropdown-end md:mr-3 flex">
                 <div tabIndex={0} role="button" className="btn btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName || 'User name not found'}>
                     <div className=" rounded-full">
                         <img className="w-full" alt="" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                     </div>
                 </div>
                                  
                 <button onClick={logout} className="btn ml-3 text-green-600 font-bold border-green-700 bg-white  hover:bg-gradient-to-r from-lime-600 to-lime-500 hover:text-white">
                            Logout
                         </button>
             </div>
             
             :

             <NavLink to='/login'
              className='btn ml-3 text-green-600 font-bold border-green-700 bg-white  hover:bg-gradient-to-r from-lime-600 to-lime-500 hover:text-white'>
                 Login</NavLink>
             
              }
            </div>
      </div>

    </div>
  );
};

export default Navbar;