import React from 'react'
import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <div className=' w-full mx-auto '>
        <Image
        className='border-4 border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src={'/images/brownshirt.png'}
        alt='image'
        width={200}
        height={200}
        priority={true}
        />
         </div>
  )
}
