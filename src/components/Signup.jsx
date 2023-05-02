import React from 'react'

const Signup = () => {
  return (
    <div name="signup" className="w-full h-screen bg-[#03547b]">
        {/* Container */}
      <form className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className="text-4xl font-bold inline border-b-4 border-[#ffde3b] text-white">Sign up!</p>
        </div>
        <input className='my-2 p-2 bg-[#dae2e6] text-black focus:outline-none' type="text" placeholder='First Name' name='firstname' />
        <input className='my-2 p-2 bg-[#dae2e6] text-black focus:outline-none' type="text" placeholder='Last Name' name='surname' />
        <input className='my-2 p-2 bg-[#dae2e6] text-black focus:outline-none' type="email" placeholder='E-Mail' name='email' />
        <input className='my-2 p-2 bg-[#dae2e6] text-black focus:outline-none' type="text" placeholder='Username' name='user' />
        <input className='my-2 p-2 bg-[#dae2e6] text-black focus:outline-none' type="text" placeholder='Password' name='password' />
        <button className="mt-4 text-white border-2 px-10 py-2 mb-20 mx-auto flex items-center hover:bg-[#ffde3b] hover:text-[#0a192f] hover:border-[#03547b]">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup