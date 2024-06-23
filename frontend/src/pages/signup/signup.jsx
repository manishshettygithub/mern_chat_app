import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import {Link} from "react-router-dom"
import useSignup from '../../hooks/useSigup'
import { space } from 'postcss/lib/list'

const SignUp = () => {
    const[inputs,setInputs]=useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })
const {loading,signup}=useSignup()

   const handleCheckBoxChange =(gender)=>{
    setInputs({...inputs,gender})

   }

    const handleSubmit = async(e) =>{
        //prevent refresh of page 
        e.preventDefault();
       await signup(inputs)
    }

  return(
  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
  <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp

          <span className='text-yellow-500'> ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
              <label className='label p-2'></label>
              <span className='text-base label-text'>Full Name</span>
              <input type='text' placeholder='E.g Manish' className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs,fullName: e.target.value})}>

              </input>
          </div>

          <div>
              <label className='label p-2'></label>
              <span className='text-base label-text'>Username</span>
              <input type='text' placeholder='E.g Manish_Shetty' className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs,username: e.target.value})}></input>
          </div>

          <div>
               <label className='label p-2'></label>
              <span className='text-base label-text'>Password</span>
              <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs,password: e.target.value})}></input>
          </div>
          <div>
               <label className='label p-2'></label>
              <span className='text-base label-text'>Confirm Password</span>
              <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs,confirmPassword: e.target.value})}></input>
          </div>

         <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>

          <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
              Already Have Account?Login Here
          </Link>

          <div>
              <button className="btn btn-block btn-sm mt-2 btn-outline btn-default " 
              disabled={loading}
              >
                {loading? <span className='loading loading-spinner'></span> : "Sign Up"}
                </button>
          </div>

      </form>


  </div>

</div>
  )
  
}

export default SignUp

//starter code

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// function SignUp() {
//   return<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//   <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           SignUp

//           <span className='text-yellow-500'> ChatApp</span>
//       </h1>
//       <form>
//         <div>
//               <label className='label p-2'></label>
//               <span className='text-base label-text'>Full Name</span>
//               <input type='text' placeholder='E.g Manish' className='w-full input input-bordered h-10'></input>
//           </div>

//           <div>
//               <label className='label p-2'></label>
//               <span className='text-base label-text'>Username</span>
//               <input type='text' placeholder='E.g Manish_Shetty' className='w-full input input-bordered h-10'></input>
//           </div>

//           <div>
//                <label className='label p-2'></label>
//               <span className='text-base label-text'>Password</span>
//               <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
//           </div>
//           <div>
//                <label className='label p-2'></label>
//               <span className='text-base label-text'>Confirm Password</span>
//               <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'></input>
//           </div>

//          <GenderCheckbox/>

//           <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//               Already Have Account?Login Here
//           </a>

//           <div>
//               <button className="btn btn-block btn-sm mt-2 btn-outline btn-default ">Sign Up</button>
//           </div>

//       </form>


//   </div>

// </div>
  
// }

// export default SignUp