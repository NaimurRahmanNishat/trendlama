import { Search } from 'lucide-react';
import React from 'react'

const SearchBar = () => {
  return (
    <div className='hidden md:flex items-center gap-2 rounded-md ring-1 ring-gray-200 py-2 px-4'>
        <Search className='w-4 h-4 text-gray-500'/>
        <input id='search' type="text" placeholder='Search...' className='text-sm outline-0' />
    </div>
  )
}

export default SearchBar;