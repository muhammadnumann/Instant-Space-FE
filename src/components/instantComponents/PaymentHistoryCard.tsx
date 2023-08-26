import clsx from 'clsx'
import React from 'react'
import { toAbsoluteUrl } from '../../_metronic/helpers'

type Props = {
  className: string
  color: string
  image: string
  title: string
  btndata: string
  progress: string
  textdata:string
  className1?: string
}

const PaymentHistoryCard: React.FC<Props> = ({className, color, image, title, btndata,textdata, progress, className1}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body !px-6 !pt-4 !pb-[11px]'>
        {/* begin::Heading */}
        <div className='d-flex flex-stack'>
          {/* begin:Info */}
          <div className='d-flex align-items-center'>
            {/* begin:Image */}
            
            <div className='symbol symbol-60px me-3'>
              <span style={{
                'borderRadius' : '100%'
              }} className={clsx(``)}>
                <img src={toAbsoluteUrl(image)} className='h-50 align-self-center' alt='' />
              </span>
            </div>

            <div className='d-flex flex-column my-lg-0'>
              <a href='#' className='text-[#7D8695] fw-bold text-md fs-5'>
                {title}
              </a>
              <div className='flex justify-start '>  
              <button className='!m-0 !p-0 fw-bold btn btn-sm !text-black !text-4xl font-bold'>{textdata}</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export {PaymentHistoryCard}