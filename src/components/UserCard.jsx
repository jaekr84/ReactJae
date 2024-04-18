import React, { useState } from 'react'

function UserCard({character}) {

  const {image, name} = character
  return (
    <div className='p-4 transition rounded-md shadow-md user-card hover:scale-105'>
      <img className='w-full rounded-md grayscale group-hover:grayscale-0' src={image} alt="foto auto" />
      <h2 className='my-2 font-bold' >{name}</h2>
      <button className='bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>ver mas</button>
    </div>
  )
}

export default UserCard