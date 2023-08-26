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

export default function ManagerForm() {

    const [value, setvalue] = useState('')
    const [country, setCountry] = useState('US')

  return (
    <>
    <div className='main p-6'>
        <div className='row'>
                  
                      <div className='fv-row '>
                          <input
                              placeholder='Full Name'
                              className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                              type='text'
                              id='fullName'
                              name='fullName'
                              autoComplete='off'
                          />
                      </div>

                      <div className='fv-row '>
                          <input
                              placeholder='Email Address '
                              className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                              type='email'
                              name='email'
                              autoComplete='off'
                          />
                      </div>

                      
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
                      
                       <div className='col-md-12 bg-transparent mb-4'>
                                    <select className='auth-input height-56 bg-white border border-solid' id="cctv">
                                        <option defaultValue>Select Branch</option>
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
                                        <option defaultValue>Select Time Slot</option>
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