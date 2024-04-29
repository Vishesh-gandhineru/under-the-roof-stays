
import React from 'react'

const SinglePropertyDescription = ({typeCode , text}) => {
  return (
    <div>
        {typeCode === "headline" ? <h2 className='font-bold text-xl'>{text}</h2> : null}
        {typeCode === "house" ? <p className='text-[20px]'>{text}</p> : null}
        {typeCode === "remarks"? <p className='text-[20px]'>{text}</p> : null}
    </div>
  )
}

export default SinglePropertyDescription