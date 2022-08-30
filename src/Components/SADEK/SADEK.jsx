import React, { memo } from 'react'

const SADEK = () => {
  console.log('hello i am SADEK components');
  console.log('###########################');

  return (
    <div className='sadek'>
        <p className='container'>Copyright © 2022</p>
        <span className='container'>
            <a href="https://ahmed-sadek89.github.io/s-a-d-e-k/" rel="noreferrer" target='_blank'>Ahmed Sadek</a>
        </span>
    </div>
  )
}

export default memo(SADEK)