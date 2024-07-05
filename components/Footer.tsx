import { Facebook, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex  flex-col justify-center items-center md:translate-y-0 translate-y-[400px]'>
      <div className='flex flex-col justify-center items-center pb-24'>
        <div className='text-neutral-300 text-center'>
            <h2 className='text-xl font-bold text-amber-300'>BAHASA</h2>
            <p className='mt-4 font-normal text-base text-neutral-500 max-w-lg text-center mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, in?  Quisquam, quia.</p>
        </div>
        <div className='flex gap-10 pt-10'>
            <div className='bg-neutral-900 p-2 rounded-xl border border-white/[0.1]'>
                <Facebook className='text-white' />
            </div>
            <div className='bg-neutral-900 p-2 rounded-xl border border-white/[0.1]'>
                <Twitter className='text-white' />
            </div>
            <div className='bg-neutral-900 p-2 rounded-xl border border-white/[0.1]'>
                <Youtube className='text-white' />
            </div>
        </div>
      </div>
      <div className='bg-amber-300 w-screen'>
        <div className='flex flex-1 md:flex-row flex-col gap-2 justify-center items-center py-8 md:gap-[400px] font-semibold text-sm'>
            <div>
                Privacy Policy
            </div>
            <div>
                Terms and Conditions
            </div>
            <div>
                &copy; 2024
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
