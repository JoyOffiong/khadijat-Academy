import React from 'react'
import Sidebar from '../../Components/Sidebar'
import AcctCreated from './AcctCreated'

function AcctCreatedPage() {
  return (
         <div className='sm:mt-20 md:mt-0 flex justify-between items-start'>
      <Sidebar/>
      <AcctCreated/>
    </div>
  )
}

export default AcctCreatedPage