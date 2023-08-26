import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import PhoneInput from 'react-phone-input-2'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input'
import en from 'react-phone-number-input/locale/en'
import 'react-phone-number-input/style.css'
import 'react-phone-input-2/lib/style.css'
import { DropDown } from '../cmpnt/dropDown'

export default function Form() {

    const [value, setvalue] = useState('')
    const [country, setCountry] = useState('US')

  return (
    <>
    <div className='main p-6'>
        <div className='row'>
                  <div className='col-md-6 col-12'>
                  
                      <div className='fv-row '>
                          <input
                              placeholder='Enter Area Size in Sq. Yd'
                              className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                              type='email'
                              name='email'
                              autoComplete='off'
                          />
                      </div>

                      <div className='bg-transparent  mb-4'>
                                    <select className='auth-input height-56 bg-white border border-solid' id="securityType">
                                        <option defaultValue>Security Type</option>
                                        <option>Big Buddha Cheese</option>
                                        <option>Girl Scout Cookies</option>
                                        <option>Blue Cheese</option>
                                        <option>Grease Monkey</option>
                                        <option>Rocksar</option>
                                        <option>Pennywise</option>
                                    </select>
                                </div>

                      <div className='fv-row '>
                          <input
                              placeholder='Enter Parking Capacity '
                              className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                              type='email'
                              name='email'
                              autoComplete='off'
                          />
                      </div>
                  </div>

            <div className='col-md-6 col-12'>
                    <div id='phone' className='form-control p-0 bg-transparent mb-4 '>
                        <div className='custom-phone-input auth-input d-flex align-items-center '>
                            <CountrySelect
                                labels={en}
                                value={country}
                                onChange={setCountry}
                                id="phone"
                                className='bg-transparent outline-0 custom-phone-dropdown-btn font-18-100 ml-11'
                            />
                            <PhoneInput
                                countrySelectProps={{ unicodeFlags: false }}
                                country={country}
                                value={value}
                                onChange={setvalue}
                                buttonClass='d-none'
                                inputClass='bg-transparent shadow-none custom-phone-input-1 font-18-100'
                            />
                        </div>
                    </div>
                      {/* <div className="lg:mt-4 md:mt-4 sm:mt-4 bg-transparent">
                          <DropDown title="CCTV Cameras" id='cctv' />
                      </div>
                      <div className="bg-transparent">
                          <DropDown title="Select Fuel Availability" id='Fuel' />
                      </div> */}
                                <div className='col-md-12 bg-transparent mb-4'>
                                    <select className='auth-input height-56 bg-white border border-solid' id="cctv">
                                        <option defaultValue>CCTV Cameras</option>
                                        <option>Big Buddha Cheese</option>
                                        <option>Girl Scout Cookies</option>
                                        <option>Blue Cheese</option>
                                        <option>Grease Monkey</option>
                                        <option>Rocksar</option>
                                        <option>Pennywise</option>
                                    </select>
                                </div>
                                <div className='col-md-12 bg-transparent mb-4'>
                                    <select className='auth-input height-56 bg-white border border-solid' id="Fuel">
                                        <option defaultValue>Select Fuel Availability</option>
                                        <option>Big Buddha Cheese</option>
                                        <option>Girl Scout Cookies</option>
                                        <option>Blue Cheese</option>
                                        <option>Grease Monkey</option>
                                        <option>Rocksar</option>
                                        <option>Pennywise</option>
                                    </select>
                                </div>
            </div>
        </div>

              <div>
              <div className='row'>
                          <div className='col-md-3 col-6'>
                              <div className='fv-row '>
                                  <input
                                      placeholder='Rate / Hour '
                                      className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                                      type='text'
                                      name='email'
                                      autoComplete='off'
                                  />
                              </div>
                          </div>
                          <div className='col-md-3 col-6'>
                              <div className='fv-row '>
                                  <input
                                      placeholder='Rate / Hour '
                                      className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                                      type='text'
                                      name='email'
                                      autoComplete='off'
                                  />
                              </div>
                          </div>
                          <div className='col-md-3 col-6'>
                              <div className='fv-row '>
                                  <input
                                      placeholder='Rate / Hour '
                                      className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                                      type='text'
                                      name='email'
                                      autoComplete='off'
                                  />
                              </div>
                          </div>
                          <div className='col-md-3 col-6'>
                              <div className='fv-row '>
                                  <input
                                      placeholder='Rate / Hour '
                                      className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                                      type='text'
                                      name='email'
                                      autoComplete='off'
                                  />
                              </div>
                          </div>
                      </div>
                  <div className='fv-row '>
                      <input
                          placeholder='Enter Location '
                          className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                          type='email'
                          name='email'
                          autoComplete='off'
                      />
                  </div>
                  <div className='fv-row '>
                      <input
                          placeholder='Add Description '
                          className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                          type='email'
                          name='email'
                          autoComplete='off'
                      />
                  </div>
              </div>
              
              <label className='fs-4 fw-bold mb-2'>Upload Images</label>
              <div className="w-100 rounded-lg bg-[#F1F6F7] stroke-border h-16">
                  <div className="flex items-center justify-center">
                      <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 items-center mx-3 mt-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                      </div>
                      <p className="uploader text-gray-700 mt-3">
                          Choose file
                      </p>
                  </div>
                  <input type="file" className="opacity-0 mb-5" />
              </div>
    </div>
    </>
  )
}

const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select
        {...rest}
        value={value.match(/[A-Z]/g).join('')}
        onChange={event => onChange(event.target.value || undefined)}
        
        >
        <option value="">
            {labels['ZZ']}
        </option>
        {getCountries().map((country) => (
            <option key={country} value={country}>
                {labels[country].match(/[A-Z]/g).join('')} +{getCountryCallingCode(country)}
            </option>
        ))}
    </select>
  )