import React from 'react'
import SignupSidebar from './SignupSidebar'
import Signup from './Signup'


function SignupPage() {
  return (
         <div className='sm:mt-20 md:mt-0 flex justify-between items-start'>
      <SignupSidebar/>
      <Signup/>
    </div>
  )
}

export default SignupPage