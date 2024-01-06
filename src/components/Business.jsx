import React from 'react'
import { features } from "../constants"
import Style, { layout } from "../style"
import Button from "./Button"
import styles from '../style'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index === features.length - 1 ? "mb-0" : "mb-6"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} className='w-[50%] h-[50%] object-contain' alt="icon" />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins text-white text-[18px] leading-[23px] mb-1 font-semibold'>
        {title}
      </h4>
      <p className='font-poppins text-dimWhite text-[18px] leading-[23px] mb-1 font-normal'>
        {content}
      </p>
    </div>
  </div>
)

export default function Business() {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the businees, <br className='sm:block hidden' />we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}
