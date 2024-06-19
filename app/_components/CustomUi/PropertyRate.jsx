import React from 'react'

const PropertyRate = ({property}) => {
 
    const {rates} = property;    

  return (
    <div className='font-bold'>{rates[0]?.baseAmount} {rates[0]?.currency}</div>
  )
}

export default PropertyRate