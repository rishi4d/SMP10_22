import React from 'react'
import { GiJamesBondAperture } from 'react-icons/gi';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className='flex flex-col items-center mx-auto h-screen justify-center'>
        <GiJamesBondAperture style={{ color: "blue" }} size={"5rem"}/>
        <a onClick={signIn} className='px-20 py-4 z-10 text-2xl cursor-pointer bg-blue-500 rounded-md text-white'>Login</a>
    </div>
  );
}

export default Login;