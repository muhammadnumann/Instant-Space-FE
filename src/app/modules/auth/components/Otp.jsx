import {useState} from 'react'
import React from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {getUserByToken, login} from '../core/_requests'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useAuth} from '../core/Auth'
import Logo from './cmpnt/logo'
import AuthHead from './cmpnt/authHead'
import AuthDesc from './cmpnt/authDesc'
import ButtonDesc from './cmpnt/buttonDesc'
import "./cmpnt.css"

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'admin@demo.com',
  password: 'demo',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Otp() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

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
              <AuthHead text1="Verify " text2="OTP" />
              <AuthDesc desc="A 6-digit code sent to your adam*****@gmail.com." />
            </div>
            <div className="input sm:pr-[140px] relative">
             
      <div className='fv-row '>
        <input
          placeholder='Enter Email OTP'
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
             
        
              {/* <div className="eye absolute"></div> */}

             
              <div className='pt-10'>
                    <button className="!text-[#ffff] !bg-[#0064FA] form-control !rounded-md !font-bold !text-sm h-14">
                        Verify
                    </button>
              </div>             

            </div>
            <div className="pt-8 flex justify-center sm:pr-[140px]">
              <Link to='reset'>
                   <ButtonDesc to='register' text1="Re-send code in." text2="58s"/>
              </Link>
              </div>
              
          </div>


       
      </div>
    </form>
  )
}
