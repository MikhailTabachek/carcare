import React from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/StateContext'
import { useEffect, useState } from 'react'

const Success  = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)

  }, [])

  return (
    <div className='success-wrapper'> 
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>
          Thank you for your purchase!
        </h2>
        <p className='email-msg'>You can find your receipt in email inbox.</p>
        <p className='description'>
          If you have any question, please email us at
          <a className='email' href='mailto:order@example.com'> order@example.com</a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default Success 