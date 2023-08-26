/* eslint-disable react/jsx-no-target-blank */
import {useState, useEffect} from 'react'
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
import { DropDown } from './cmpnt/dropDown'

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

export function ResetPassword() {
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
              <AuthHead text1="Reset " text2="Password" />
              <AuthDesc desc="Create your new password." />
            </div>
            <div className="input sm:pr-[140px] relative">
             
      <div className='fv-row '>

        
      
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
             
        <div className='mb-3'>
        <input
          type='password'
          placeholder='New Password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText mb-4 bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>

      <div className='mb-3'>
        <input
          type='password'
          placeholder='Confirm New Password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText mb-4 bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>


              <div className="eye absolute"></div>
              <div className="eye1 absolute"></div>

              
              <div className='pt-10'>
                    <button className="!text-[#ffff] !bg-[#0064FA] form-control !rounded-md !font-bold !text-sm h-14">
                        Save
                    </button>
              </div>

             

            </div>
          </div>


       
      </div>


    </form>
  )
}
