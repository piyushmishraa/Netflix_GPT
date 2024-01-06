import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className=' w-screen aspect-video py-32 px-12  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-2xl mt-32 '>
            {title}

        </h1>
        <p className='w-1/3 text-xs'>

            {description}
        </p>

        <div className='pt-8'>
            <button className='bg-gray-500 text-white p-4 px-14 text-xs bg-opacity-40 rounded-lg hover:bg-opacity-80'>Play</button>
            <button className=' mx-2 bg-gray-500 text-white p-4 px-14 text-xs rounded-lg'>More info</button>
        </div>

    </div>
  )
}

export default VideoTitle