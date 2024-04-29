import React from 'react'
import UserData from './UserData'

const Profile = () => {
  return (
    <section className="p-8">
        <div className='Profile'>
        <h1 className="text-[80px] font-bold mb-[20px]">Profile</h1>
            <UserData />
        </div>
    </section>
  )
}

export default Profile