import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(() =>{

    }) 
    .catch(error => console.log(error))
  }

    const navItem =<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/setting'>Account</Link></li>
   {user? <> 
    <button className='pr-32 md:pr-0 pl-1 md:pl-0' onClick={handleLogOut}>LogOut</button>
  
   </> :
   <> 
    <li><Link to='/login'>Login</Link></li>
   </>
   }
  </>

    return (
        <div>
              <div className="navbar bg-slate-400 bg-opacity-30 text-black fixed z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
            </ul>
          </div>
          <div className="">
          <Link to='/'> <div>
              <p className="normal-case text-black tracking-tighter font-extrabold  text-3xl ps-24 md:ps-8">PopX</p>
              
            </div>
            </Link> 
          </div>
        </div>


        <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold items-center md:mr-8 mr-0 text-lg">
            {navItem}
          </ul>
        </div>
        
      </div>
        </div>
    );
};

export default Navbar;