import React from 'react'

const Form = () => {
  return (
    <div className='justify-center items-center flex bg-gradient-to-r from-black text-white h-screen  to-pink-600'>
      <form className='bg-gradient-to-r from-black to-green-700  rounded-lg p-11 shadow-2xl shadow-white '>
        <h1 className='font-bold text-3xl'>
           <u> Registration Form </u>
        </h1>
        <div className='flex flex-col mb-4' >
            <label htmlFor="name" className='text-xs mt-2 text-gray-200 mb-2'>Name</label>
            <input type="text" required placeholder='Enter Your Name' className='rounded-xl border-2 border-green-700 shadow-2xl shadow-lime-500 text-black' />
        </div>
        <div className='flex flex-col mb-4' >
            <label htmlFor="email" className='text-xs mt-2 text-gray-200 mb-2'>Email</label>
            <input type="email" required placeholder='Enter Your email' className='rounded-xl border-2 border-green-700 shadow-2xl shadow-lime-500 text-black' />
        </div>
        <div className='flex flex-col mb-4' >
            <label htmlFor="gender" className='text-xs mt-2 text-gray-200 mb-2 '>Gender</label>
            <select name="gender" id="gender" className='rounded-xl border-2 border-green-700 shadow-2xl shadow-lime-500 text-black'>
                <option value="" className='text-xs'></option>
                <option value="female" className='text-black'>Male</option>
                <option value="female" className='text-black'>Female</option>
                <option value="other" className='text-black'>Other</option>
            </select>
        </div>
        <div className='flex justify-center '>
            <button className='bg-white text-black hover:bg-pink-800 duration-500 font-bold rounded-xl p-1 mt-4 w-44'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
