import React, { memo } from 'react'

const Announcement = () => {
  console.log('hello i am Announcement components');
  return (
    <div className='Announcement'>
        <span className='container'>Super Deal! Free Shipping on Orders Over $50</span>
    </div>
  )
}

export default memo(Announcement)