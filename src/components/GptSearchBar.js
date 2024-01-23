import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12 '>
            <input 
            type='text'
            className='p-4 m-4 col-span-9'
            placeholder='what are we watching today?'
            />
            <button className='py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4'>
                Search
            </button>
        </form>
    
    </div>
  )
}

export default GptSearchBar