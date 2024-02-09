import React from 'react'
import { DatePickerWithRange } from './DateRangeFilter'
import { DrawerDialog } from './DropDownMenu'


export const HomePageFilter = () => {



  return (

    <div className='flex justify-center items-center mb-[50px]'>
        <div className='shadow-lg shadow-[#1f1f1f]-500/50 flex gap-[20px] border-[1px] border-[#dbdbdb] border-solid rounded-[10px] px-[50px] py-[15px]'>
            <input className='border-[1px] border-solid border-[#dbdbdb] rounded-[5px] p-[10px]' placeholder='Enter the destination - vishesh'></input>
            <DatePickerWithRange/>
            <DrawerDialog/>
            <button className='bg-[#000] text-[#fff] py-[0px] px-[30px] rounded-[5px]'>Search</button>
        </div>
    </div>

  )
}
