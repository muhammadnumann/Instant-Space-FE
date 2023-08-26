import React from 'react'


const faqs = [
  {
    id: 'heading1',
    collapse: 'collapse1',
    show: true,
    heading: 'Lorem ipsum dolor sit amet consr.?',
    detail: 'Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.'
  },
  {
    id: 'heading2',
    collapse: 'collapse2',
    show: false,
    heading: 'Lorem ipsum dolor sit amet consr.?',
    detail: 'Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.'
  },
  {
    id: 'heading3',
    collapse: 'collapse3',
    show: false,
    heading: 'Lorem ipsum dolor sit amet consr.?',
    detail: 'Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.'
  },
  {
    id: 'heading4',
    collapse: 'collapse4',
    show: false,
    heading: 'Lorem ipsum dolor sit amet consr.?',
    detail: 'Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.'
  },
  {
    id: 'heading5',
    collapse: 'collapse5',
    show: false,
    heading: 'Lorem ipsum dolor sit amet consr.?',
    detail: 'Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.'
  },
  {
    id: 'heading6',
    collapse: 'collapse6',
    show: false,
    heading: 'Lorem ipsum dolor sit amet consr.?',
    detail: 'Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.'
  },
  {
    id: 'heading7',
    collapse: 'collapse7',
    show: false,
    heading: 'Lorem ipsum dolor sit amet consr.?',
    detail: 'Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.'
  },
  {
    id: 'heading8',
    collapse: 'collapse8',
    show: false,
    heading: 'Lorem ipsum dolor sit amet consr.?',
    detail: 'Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec. Lorem ipsum dolor sit amet consectetur. Pretium lacus congue maec.Lorem ipsu consectetur. Pretium lacus congue maec.'
  },
]
const AccountFaqs = () => {
  return (
    <div>
      <h3 className='text-[24px] font-bold !mb-[40px]'>Acceptance of the Privacy Policy</h3>
      <div className='rounded-lg bg-[#F8F8F8] p-[16px] flex items-center gap-3'>
        <input type='text' placeholder='Search' className='border-0 outline-0 h-100 w-100 bg-transparent text-[16px]' />
        <img src='/media/icons/cardIcons/search.svg' alt='' />
      </div>
      <div className="accordion" id="accordionExample">
        {
          faqs.map((data, index) => {
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={data.id}>
                  <button className={`accordion-button !bg-white !text-[#171D25] !text-[16px] font-normal ${data.show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${data.collapse}`} aria-expanded="true" aria-controls={data.collapse}>
                    {data.heading}
                  </button>
                </h2>
                <div id={data.collapse} className={`accordion-collapse collapse ${data.show ? 'show' : ''}`} aria-labelledby={data.id} data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className='text-primary font-semibold !text-[18px] mb-[8px]'>Lorem ipsum dolor sit.?</p>
                    <p className='text-gray !text-[14px]'>{data.detail}</p>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>


    </div>
  )
}

export default AccountFaqs