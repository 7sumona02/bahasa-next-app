import React from 'react'
import TeacherCard from './TeacherCard'

const Partners = () => {
  return (
    <div className='h-screen px-20'>
        <div className='text-neutral-200  flex justify-start flex-col'>
            <h1 className='text-5xl font-bold'>More than <br /> 2000+ Partners</h1>
            <p className="mt-4 font-normal text-sm text-neutral-500 max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste doloribus eos soluta voluptate, dolore neque eveniet odit
        </p>
        </div>
      <div className='flex justify-center items-center pt-14'>
        <div className='grid md:grid-cols-3 gap-x-10 gap-y-6'>
            <div>
                <TeacherCard/>
            </div>
            <div>
                <TeacherCard/>
            </div>
            <div>
                <TeacherCard/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
