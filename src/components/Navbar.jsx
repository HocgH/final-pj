import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const Navbar = () => {

  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await logOut();
      navigate('/');
    } catch(error){
    console.log(error);
    }
  };
  // const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className='flex items-center justify-between p-6 absolute w-full z-[100]'>

      <Link to='/' >
        
        <h1 className='text-red-700 text-4xl font-bold cursor-pointer'>NETFLIX CLONE</h1>
      
      </Link>

      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='border text-white border-gray-300  px-5 py-2 mr-3 bg-black/50'>Account</button>
          </Link>

            <button onClick={handleLogout} className='bg-red-700 px-5 py-2 cursor-pointer text-white'>Logout</button>

        </div> ) : (
                <div>
                <Link to='/login'>
                  <button className='border text-white border-gray-300  px-5 py-2 mr-3 bg-black/50'>Sign In</button>
                </Link>
      
                <Link to='/signup' >
                  <button className='bg-red-700 px-5 py-2 cursor-pointer text-white'>Sign Up</button>
                </Link>
              </div>)}        

    </div>
  );
}

export default Navbar;