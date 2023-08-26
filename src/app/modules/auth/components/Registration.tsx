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
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../../../store/storeIndex'
import { useNavigate } from 'react-router-dom'
import { Value } from 'sass'





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

const initialValues = {
  email:"sh.hafizhasnain@gmail.com",
  password:"123456789",
  passwordConfirm: "123456789",
  role:"Business Owner"
}

export function Registration() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      // setLoading(true)
      // try {
      //   const {data: auth} = await register(
      //     values.email,
      //     values.firstname,
      //     values.lastname,
      //     values.password,
      //     values.changepassword
      //   )
      //   saveAuth(auth)
      //   const {data: user} = await getUserByToken(auth.api_token)
      //   setCurrentUser(user)
      // } catch (error) {
      //   console.error(error)
      //   saveAuth(undefined)
      //   setStatus('The registration details is incorrect')
      //   setSubmitting(false)
      //   setLoading(false)
      // }

      const data = {
        email: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
        role: values.role
    }
      dispatch(userRegister(data, navigate))

    },
  })
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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
              <AuthHead text1="Register " text2="Now" />
              <AuthDesc desc="Create your new account" />
            </div>
            <div className="input sm:pr-[140px] relative">
             
      <div className='fv-row '>

        
              <div className="lg:mt-4 md:mt-4 sm:mt-4">
                <div className='col-md-12 bg-transparent mb-4'>
                  <select className='auth-input height-56 border-2 border-solid !border-[#7D8695] bg-transparent' id="Role" name='role' value={role}>
                    <option defaultValue>Select Role</option>
                    <option>Customer</option>
                    <option>Business Owner</option>
                  </select>
                </div>
              </div>


        <input
          placeholder='Email'
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
          value={email}
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
             
        <div className='mb-3'>
        <input
          type='password'
          placeholder='Password'
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
          value={password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>

      {/* <div className="eye1 absolute"></div> */}
      <div className="eye2 absolute"></div>
      <div className="eye3 absolute"></div>



      <div className='mb-3'>
        <input
          type='password'
          placeholder='Confirm Password'
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
          value={passwordConfirm}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>


              

              <Link to="personal-Info">
              <div className='pt-10'>
                    <button className="!text-[#ffff] !bg-[#0064FA] form-control !rounded-md !font-bold !text-sm h-14">
                        Next
                    </button>
              </div>
              </Link>
             

            </div>
            <div className="pt-8 flex justify-center sm:pr-[140px]">
              <Link to='/'>
                   <ButtonDesc text1="Already have an account?" text2="Login"/>
              </Link>
              </div>
          </div>


       
      </div>


    </form>
  )
}
