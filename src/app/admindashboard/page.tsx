import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex w-[100%]'>
        <div className="bg-indigo-900 w-[25%]">
            <h1 className='text-2xl font-bold'>Hspital Options</h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>
        <div className='w-full'>
            <div className='flex mt-10 container m-auto gap-6'>
                <div><h1 className='text-3xl'>APPOINTMENT</h1></div>
                <div><h1 className='text-3xl'>Patient Registration</h1></div>
                <div><h1>EMERGENCY</h1></div>
                <div><h1>PROCEDURE ROOM</h1></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page