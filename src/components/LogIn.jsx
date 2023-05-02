import React, { useState } from 'react';
import SignUp from './Signup.jsx';

const LogIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  }

  return (
    <div name="login" className="w-full h-screen bg-[#03547b]">
        {/* Container */}
      <form className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className="text-4xl font-bold inline border-b-4 border-[#ffde3b] text-white">Log In</p>
        </div>
        <input className='bg-[#dae2e6] p-2 text-black focus:outline-none' type="text" placeholder='Username' name='user' />
        <input className='my-4 p-2 bg-[#dae2e6] text-black focus:outline-none' type="text" placeholder='Password' name='password' />
        <button className="text-white border-2 px-6 py-2 mx-auto flex items-center hover:bg-[#ffde3b] hover:text-[#0a192f] hover:border-[#03547b]">Log In</button>
        <p className="py-4 pt-14 text-[#dae2e6] text-center">Don't have an account?</p>
        <button onClick={toggleSignUp} className="text-white border-2 px-10 py-2 mb-20 mx-auto flex items-center hover:bg-[#ffde3b] hover:text-[#0a192f] hover:border-[#03547b]">Sign Up</button>
      </form>
      {showSignUp && <SignUp />}
    </div>
  )
}

export default LogIn