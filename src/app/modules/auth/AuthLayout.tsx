import { useEffect } from 'react'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./components/cmpnt.css"
const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  const slideImages = [
    {
      url: '/media/misc/Rectangle.png',
      caption: 'Slide 1'
    },
    {
      url: '/media/misc/Rectangle1.png',
      caption: 'Slide 2'
    },
    {
      url: '/media/misc/Rectangle2.png',
      caption: 'Slide 3'
    },
    {
      url: '/media/misc/Rectangle3.png',
      caption: 'Slide 3'
    },
  ];

  const properties = {
    infinite: true,
    indicators: false,
    arrows: false,

  }

  return (

    <div className='row h-100 position-relative m-0'>

      <div className='flex flex-column col-xxl-5 col-lg-6 p-10  order-lg-0 order-1 section-1'>
        <div className='d-flex flex-column flex-lg-row-fluid justify-content-center h-100'>
          <div>
            <Outlet />
          </div>
        </div>
      </div>


      <div className='col-xxl-7 col-lg-6 pb-8 section-2'>
        <div className=' order-xl-1 order-0 slideshow relative'>
          <Slide  {...properties} >
            {slideImages.map((slideImage, index) => (
              <div className="each-slide " key={index}>
                <div className='linearGradient rounded-l-3xl bgi-size-cover bgi-position-center lg:!mt-8 lg:!mr-0' style={{ 'backgroundImage': `url(${toAbsoluteUrl(slideImage.url)})` }}>
                  <div className='d-none d-lg-flex justify-content-end flex-column py-15 px-5 px-md-15 w-100 '>
                    <div className='h-max-content'>
                      <h1 className='text-white fs-2qx fw-bolder mt-96'>
                        Lorem ipsum dolor sit amet
                      </h1>
                      <div className='text-white fs-base mt-5'>
                        Lorem ipsum dolor sit amet consectetur. Non sit volutpat egestas tempus
                        molestie posuere nullam cursus. Egestas venenatis fusce turpis aenean sem
                        sit bibendum. Libero sit tincidunt dui phasellus adipiscing fermentum molestie urna.
                        Non consectetur sapien eleifend leo lorem neque sed eget. Enim pellentesque ultrices
                        nisl sit odio nam nullam cursus. Neque morbi dui purus mattis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slide>

        </div>
      </div>

      {/* <div className='d-flex flex-column py-18 px-20 w-100 absolute bottom-0'>
          <h1 className='text-white text-5xl fw-bolder '>
            Lorem ipsum dolor sit amet
          </h1>
          
          <div className=' text-lg text-[#A3A3A3] pt-8'>
          Lorem ipsum dolor sit amet consectetur. Non sit volutpat egestas tempus
          molestie posuere nullam cursus. Egestas venenatis fusce turpis aenean sem 
          sit bibendum. Libero sit tincidunt dui phasellus adipiscing fermentum molestie urna. 
          Non consectetur sapien eleifend leo lorem neque sed eget. Enim pellentesque ultrices 
          nisl sit odio nam nullam cursus. Neque morbi dui purus mattis.
          </div>
        </div> */}

    </div>
  )
}

export { AuthLayout }
