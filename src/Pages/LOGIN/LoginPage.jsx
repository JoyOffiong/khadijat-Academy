import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Login from './Login'

function LoginPage() {
  return (
         <div className='sm:mt-20 md:mt-0 flex justify-between items-start'>
      <Sidebar/>
      <Login/>
    </div>
  )
}

export default LoginPage