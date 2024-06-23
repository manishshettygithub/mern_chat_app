import React from 'react'
import useLogout from '../hooks/useLogout'



const LogoutButton = () => {
  const {loading,logout}=useLogout()
  return (
    <div className='mt-auto  hover:underline cursor-pointer text-red-600 inline-block '
    onClick={logout}>Logout</div>
  )
}

export default LogoutButton

//starter code 
// import React from 'react'

// const LogoutButton = () => {
//   return (
//     <div className='mt-auto  hover:underline cursor-pointer text-red-600 inline-block '>Logout</div>
//   )
// }

// export default LogoutButton