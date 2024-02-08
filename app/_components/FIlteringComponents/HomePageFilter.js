import React from 'react'
import { DatePickerWithRange } from './DateRangeFilter'
import { DrawerDialog } from './DropDownMenu'


export const HomePageFilter = () => {
  return (

    <div className='flex justify-center items-center '>
        <form className=' flex bg-[#dbdbdb] gap-[20px]'>
            <input className='border-2 border-solid border-black rounded-[20px] p-[10px]' placeholder='Enter the destination'></input>
            <DatePickerWithRange/>
            <DrawerDialog/>
        </form>
    </div>

  )
}
