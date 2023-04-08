import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
  return (
    <div className='text-center my-3'>
      <img src={spinner} alt="loading..." />
    </div>
  )
}
