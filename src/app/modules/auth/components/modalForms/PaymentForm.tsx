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

export default function PaymentForm() {

    const [value, setvalue] = useState('')
    const [country, setCountry] = useState('US')

  return (
    <>
    <div className='main p-6'>
        <div className='row'>
                  
                      <div className='fv-row '>
                          <input
                              placeholder='Name on Card'
                              className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                              type='text'
                              id='fullName'
                              name='fullName'
                              autoComplete='off'
                          />
                      </div>

                      <div className='fv-row '>
                          <input
                              placeholder='Card Number '
                              className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                              type='text'
                              name='email'
                              autoComplete='off'
                          />
                      </div>

                      
                      <div className='flex'>
                          <div className='col-6'>
                              <div className='fv-row pr-2'>
                                  <input
                                      placeholder='Expiry Date '
                                      className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                                      type='text'
                                      name='email'
                                      autoComplete='off'
                                  />
                              </div>
                          </div>
                          <div className='col-6'>
                              <div className='fv-row pl-2'>
                                  <input
                                      placeholder='CVV '
                                      className={clsx('form-control w-100 border border-solid h-18 rounded-lg inputText mb-4 bg-transparent')}
                                      type='text'
                                      name='email'
                                      autoComplete='off'
                                  />
                              </div>
                          </div>
                          
                         
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