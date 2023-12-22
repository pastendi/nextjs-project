'use client'
import React, { useState } from 'react'

const Client = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Counter</h1>
      <h1 className='text-6xl'>{count}</h1>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>
        increase
      </button>
    </div>
  )
}

export default Client
