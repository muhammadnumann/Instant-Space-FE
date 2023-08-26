/* eslint-disable react/jsx-no-target-blank */
import {useState, useEffect, useRef} from 'react'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {getUserByToken, register} from '../core/_requests'
import {Link, useNavigate} from 'react-router-dom'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import {useAuth} from '../core/Auth'
import Logo from './cmpnt/logo'
import AuthHead from './cmpnt/authHead'
import AuthDesc from './cmpnt/authDesc'
import ButtonDesc1 from './cmpnt/buttonDesc1'
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

export function PersonalInfo() {
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
              <AuthHead text1="Personal" text2="Info" />
              <AuthDesc desc="Enter your personal information below." />
            </div>
            <div className="input sm:pr-[140px] relative">
             
      <div className='fv-row '>
        <input
          placeholder='Full Name'
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


      <div className='fv-row '>
        <input
          placeholder='Date of Birth'
          className={clsx(
            'form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText mb-4 bg-transparent',
          )}
          type='text'
          onFocus={(e) => (e.currentTarget.type = "date")}
          // onBlur={(e) => (e.currentTarget.type = "text")}
          autoComplete='off'
        />
      </div>


      <div className='mb-3'>
          <textarea
            placeholder="Add Your Bio"
            type="text"
            autoComplete="off"
            className="form-control  w-100 bg-transparent !border !border-solid !border-[#7D8695] rounded-lg inputText h-32"
          ></textarea>
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
                   <ButtonDesc1 text1="By Registering, your're agree to our," text2="Terms and Condition" text3=" and" text4="Privacy Policy"/>
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