import React from 'react'
import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 '>
        <input type="text" placeholder='Search...' className=' m-2 input input-bordered rounded-full' />
        <button type="submit" className='btn btn-circle bg-sky-500 text-white'><FcSearch className='w-6 h-6' /></button>
    </form>
  )
}

export default SearchInput

//starter
// import React from 'react'
// import { FcSearch } from "react-icons/fc";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2 '>
//         <input type="text" placeholder='Search...' className=' m-2 input input-bordered rounded-full' />
//         <button type="submit" className='btn btn-circle bg-sky-500 text-white'><FcSearch className='w-6 h-6' /></button>
//     </form>
//   )
// }

// export default SearchInput