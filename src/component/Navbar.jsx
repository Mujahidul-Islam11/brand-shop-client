/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";


const Navbar = ({darkMood, handleDark}) => {
  const {user,LogOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    LogOut()
    .then()
    .catch()
    swal("Good job!", "Successfully logged out user", "success");
  }
    const links = (
        <ul className={`${darkMood? 'text-white': 'text-black'} md:flex`}>
          <li className="text-xl font-bold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            > 
              <a href="" >Home</a>
            </NavLink>
          </li>

          {user &&
            <li className="text-xl font-bold">
            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              <a href="" >Add Product</a>
            </NavLink>
          </li>
          }

          {user &&
            <li className="text-xl font-bold">
            <NavLink
              to="/myCart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              <a href="" >My Cart</a>
            </NavLink>
          </li>
          }

<li className="text-xl font-bold">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              <a href="" >Login</a>
            </NavLink>
          </li>

          <li className="text-xl font-bold">
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              <a href="" >Register</a>
            </NavLink>
          </li>
        </ul>
      )
    return (
        <div className={`navbar ${darkMood? 'bg-gray-500' : 'bg-base-100'}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{
    links
}
{user? <div className="flex lg:hidden flex-wrap items-center gap-4">
              <div className=" flex-wrap items-center gap-2">
                <img
                  className="w-[50px] rounded-full"
                  src={user.photoURL}
                  alt="User Profile"
                />
                <p className="font-semibold">
                  {user.displayName}
                </p>
              </div>
              <button
                onClick={handleLogOut}
                type="button"
                className="btn md:inline-block focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                LogOut
              </button>
            </div>
    :
      <NavLink to={'/login'}>
      <a className="btn">LogIn</a>
      </NavLink>
    }
      </ul>
    </div>
    <div className="flex justify-center">
    <NavLink to={'/'}><a className="btn btn-ghost normal-case text-xl"><img src="https://i.ibb.co/d7gbDC5/Ocean-Cinema-Logo.jpg" alt="" className="lg:flex hidden w-10 rounded-full" /> EntoMedu</a></NavLink>
    <button className="btn" onClick={handleDark}>{`${darkMood? 'light': 'dark'}`}</button>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {user? <div className="lg:flex hidden flex-wrap items-center gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <img
                  className="w-[50px] rounded-full"
                  src={user.photoURL}
                  alt="User Profile"
                />
                <p className="font-semibold">
                  {user.displayName}
                </p>
              </div>
              <button
                onClick={handleLogOut}
                type="button"
                className="btn md:inline-block focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                LogOut
              </button>
            </div>
    :
      <NavLink to={'/login'}>
      <a className="btn">LogIn</a>
      </NavLink>
    }
  </div>
</div>
    );
};

export default Navbar;