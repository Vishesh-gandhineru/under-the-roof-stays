import { type } from 'os'
import React from 'react'
import { DatePickerWithRange } from './DateRangeFilter'
import { DrawerDialog } from './DropDownMenu'
import AddGuest from './AddGuest'

import LocationInput from './HomeFilter/LocationInput'


export const HomePageFilter = () => {

  return (
   <div className='flex-column'>
     <div className='flex justify-center items-center mb-[20px]'>
        <div className='shadow-lg shadow-[#1f1f1f]-500/50 flex gap-[20px] border-[1px] border-[#dbdbdb] border-solid rounded-[10px] px-[50px] py-[15px]'>
           <LocationInput/>
            <DatePickerWithRange/>
            <DrawerDialog/>
            <AddGuest/>
            
            <button className='bg-[#000] text-[#fff] py-[0px] px-[30px] rounded-[5px]'>Search</button>
        </div>
    </div>
   </div>

  )
}
