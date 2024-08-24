import React from 'react'
import './staffMessage.css'

const StaffMessage = () => {
  return (
    <div>
      <div className='staff-msg-heading-containor'> <div className='staff-msg-heading'>Message from <span className='our-staffs' > our staffs</span> </div> <div className='underline-staff-msg'></div></div>   
      <div className='msg-containor'>
        <div className='msg-content ceo-msg-containor'>
          <div className='left-side'>Left-side</div>
          <div className='right-side'>Right side</div>
        </div>
        <div className='msg-content manager-msr-containor'>
          <div className='left-side'>Left-side</div>
          <div className='right-side'>Right side</div>
        </div>
        <div className='msg-content cheff-msg-containor'>
          <div className='left-side'>Left-side</div>
          <div className='right-side'>Right side</div>
        </div>
      </div> 
    </div>
  )
}

export default StaffMessage
