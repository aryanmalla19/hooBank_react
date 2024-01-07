import React from 'react'
import { quotes } from '../assets'
function FeedbackCard({ content, name, title, img }) {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[360px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="qutoes" className='w-[42px] h-[27px] object-contain' />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} className='w-[48px] h-[48px] rounded-full' alt={name} />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-normal text-[20px] leading-[32px] text-white my-3'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite lg:my-10 my-5'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard