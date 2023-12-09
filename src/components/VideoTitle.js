import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='p-10'>
        <h1 className='font-bold text-2xl '>
            {title}

        </h1>
        <p className='w-1/3 text-xs'>

            {description}
        </p>

        <div className='pt-8'>
            <button className='bg-gray-500 text-white p-4 px-14 text-xs bg-opacity-40 rounded-lg '>Play</button>
            <button className=' mx-2 bg-gray-500 text-white p-4 px-14 text-xs rounded-lg'>More info</button>
        </div>

    </div>
  )
}

export default VideoTitle