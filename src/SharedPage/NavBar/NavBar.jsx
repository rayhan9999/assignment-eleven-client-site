import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { Tooltip } from 'react-tooltip'
import Swal from 'sweetalert2'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(result => {
        Swal.fire({
          title: 'Success!',
          text: 'User Logout successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  console.log("user", user)

  const listItems = (
    <>
      <li>
        <Link
          to="/"
          className=""
        >Home </Link>
      </li>


      <li>
        <Link to="/alltoys">All toys</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>

      {user ? <>
        <li>
          <Link to="/mytoys">My Robotics toys</Link>
        </li>
        <li>
          <Link to="/addtoys">Add Robots toys</Link>
        </li>

      </> :
        <>
          <li>
            <Link to='/login'> <button className="btn btn-primary">LogIn</button></Link>

          </li>
        </>

      }



    </>
  )
  return (
    <div className="mt-6">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-blue normal-case text-xl">Malik Roboticks ToyZone</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {listItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>

              <div className="" >
                <img className="w-16 rounded-full" src={user?.photoURL} alt="Profile"
                  data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName || 'Unknown User'}
                />
                <Tooltip id="my-tooltip" />

              </div>

              <button onClick={handleLogOut} className="btn btn-primary">Logout</button>


            </> : <>
              <Link to='/signup'> <button className="btn btn-primary">Sign Up</button></Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
