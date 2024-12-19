import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const signOutHandlar = () =>{
    logOut()
    .then(() => console.log("LogOut successfully"))
    .catch(error => console.log(error.message))
  }
  
    const linkStyle = {
        display: "flex",
        gap: "20px"
    }
    const linkes = <div style={linkStyle}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/order"}>Order</NavLink>
        {
          user && <>
          <NavLink to={"/profile"}>Profile</NavLink>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </>
        }
    </div>
    return (
      <div className="navbar bg-base-100 my-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {linkes}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Address Distribution Auth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkes}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              {user.email}
              <button onClick={signOutHandlar} className="btn">Sing Out</button>
            </div>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;