/* eslint-disable react/jsx-no-target-blank */
import {useState, useEffect, useRef} from 'react'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {getUserByToken, register} from '../core/_requests'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import {useAuth} from '../core/Auth'
import Logo from './cmpnt/logo'
import AuthHead from './cmpnt/authHead'
import AuthDesc from './cmpnt/authDesc'
import ButtonDesc from './cmpnt/buttonDesc'
import DatePicker from 'react-date-picker';
import ButtonDesc1 from './cmpnt/buttonDesc1'
import { DropDown } from './cmpnt/dropDown'
import PhoneInput from 'react-phone-input-2'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input'
import en from 'react-phone-number-input/locale/en'
import 'react-phone-number-input/style.css'
import 'react-phone-input-2/lib/style.css'


const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  changepassword: Yup.string()
    .required('Password confirmation is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    }),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function CompanyInfo() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.changepassword
        )
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The registration details is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
  
    const handleChange = (e) => {
    setDate(e.target.value);
    };

    const [value, setvalue] = useState('')
    const [country, setCountry] = useState('US')
  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >


      <div className="row">
        <div className="sm:!pl-36 pr-10 pl-10">
            <Logo />
            <div className="pt-32">
              <AuthHead text1="Company" text2="Info" />
              <AuthDesc desc="Enter your company’s information below." />
            </div>
            <div className="input sm:pr-[140px] relative">
             
      <div className='fv-row '>
      <input
          placeholder='Company Name'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText mb-4 bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>

            <div className="lg:mt-4 md:mt-4 sm:mt-4 bg-transparent">
              <div className='col-md-12 bg-transparent mb-4'>
                <select className='auth-input height-56 border-2 border-solid !border-[#7D8695] bg-transparent' id="Role">
                  <option defaultValue>Select Type</option>
                  <option>Customer</option>
                  <option>Business Owner</option>
                </select>
              </div>
            </div>
             
        <div className='mb-3'>
                    <div id='phone' className='form-control p-0 bg-transparent border-0 mb-4'>

                        <div className='custom-phone-input auth-input d-flex align-items-center'>
                            <CountrySelect
                                labels={en}
                                value={country}
                                onChange={setCountry}
                                className='bg-transparent outline-0 border-0 custom-phone-dropdown-btn font-18-100 ml-11'
                            />
                            <PhoneInput
                                countrySelectProps={{ unicodeFlags: false }}
                                country={country}
                                value={value}
                                onChange={setvalue}
                                buttonClass='d-none'

                                inputClass='bg-transparent outline-0 shadow-none custom-phone-input-1 font-18-100'
                            />
                        </div>
                    </div>
      </div>


      <div className='mb-3'>
        <input
          type='number'
          placeholder='Company License Number'
          autoComplete='off'
          className={clsx(
            'form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText mb-4 bg-transparent',
          )}
        />
      </div>     


      <div className='fv-row '>
        <input
          placeholder='Complete Address'
          className={clsx(
            'form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText mb-4 bg-transparent',
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
      </div>


     <div className="w-100 rounded-lg bg-[#F1F6F7] stroke-border h-14">
            <div className="flex items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 items-center mx-8 mt-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                 </svg>
                 <p className="w-100 text-sm text-gray-700 mt-4">
                     Choose file/Drag & Drop Here
                </p>
            </div>
          <input type="file" className="opacity-0 mb-5" />
    </div>


              {/* <div className="eye absolute"></div> */}

              <Link to="company">
              <div className='pt-10'>
                    <button className="!text-[#ffff] !bg-[#0064FA] form-control !rounded-md !font-bold !text-sm h-14">
                        Register
                    </button>
              </div>
              </Link>
             

            </div>
            <div className="pt-8 flex justify-center sm:pr-[140px]">
              <Link to='/'>
                   <ButtonDesc1 text1="By Registering, your're agree to our," text2="Terms and Condition" text3="and" text4="Privacy Policy"/>
              </Link>
              </div>
          </div>


       
      </div>


    </form>
  )
}
const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select
        {...rest}
        value={value.match(/[A-Z]/g).join('')}
        onChange={event => onChange(event.target.value || undefined)}>
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