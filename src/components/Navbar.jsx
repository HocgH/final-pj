import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-6 absolute w-full z-[100]'>
        <h1 className='text-red-700 text-4xl font-bold cursor-pointer'>NETFLIX CLONE</h1>
        <div>
            <button className='text-white pr-5'>Sign In</button>
            <button className='bg-red-700 px-5 py-2 cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  );
}

export default Navbar;