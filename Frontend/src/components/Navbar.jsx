
import React from 'react'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='py-8 mx-auto max-w-7xl flex justify-between'> 
      <h1 className='font-bold text-3xl mt-1'>ThinkBoard</h1>
      <Link to={"/create"} className='flex btn btn-info rounded-3xl gap-1'>
      <PlusIcon size={20}/>
      New Note
      </Link>
    </div>
  )
}

export default Navbar
