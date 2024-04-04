import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Nav = () => {
    const{user}=useContext(AuthContext)
    const{logOut}=useContext(AuthContext)
    const handleSignOut=()=>{
        logOut()
        .then(()=>console.log('signOut successfully'))
        .catch(error=>console.log(error))
    }
   const navlinks=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink className={'mx-3'} to='/login'>Login</NavLink></li>
    <li><NavLink to='/registration'>Registration</NavLink></li>
    <li><NavLink to='/hidden'>Hidden</NavLink></li>
    {
        user&&<li><NavLink className={'ml-2'} to='/orders'>Orders</NavLink></li>
    }
   </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">mohaMilon</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<> 
                        <span className="relative right-4">{user.email}</span>
                        <a onClick={handleSignOut} className="btn btn-primary">Sign Out</a>
                        </>:<Link to='/login'><button className="btn text-white btn-secondary">Login</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Nav;