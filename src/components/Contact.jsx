import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#03547b] text-white">
      {/* Container */}
      <form method="POST" action='https://getform.io/f/74ab4bb7-05af-43d2-a597-fdd637a93b81' className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className="text-4xl font-bold inline border-b-4 border-[#ffde3b]">Contact</p>
          <p className="py-4 text-[#dae2e6]">Submit the form below to get in contact :D</p>
        </div>
        <input className='bg-[#dae2e6] p-2 text-black focus:outline-none' type="text" required placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#dae2e6] text-black focus:outline-none' type="email" required placeholder='E-Mail' name='email' />
        <textarea className='bg-[#dae2e6] p-2 text-black focus:outline-none' name='message' required rows="10" placeholder='Message'></textarea>
        <button className="text-white border-2 px-6 py-3 mt-5 mb-20 mx-auto flex items-center hover:bg-[#ffde3b] hover:text-[#0a192f] hover:border-[#03547b]">Send a message</button>
      </form>

    </div>
  )
}

export default Contact