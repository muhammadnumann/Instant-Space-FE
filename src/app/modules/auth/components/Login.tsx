import { useState } from 'react';
import React from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { getUserByToken, login } from '../core/_requests';
import { toAbsoluteUrl } from '../../../../_metronic/helpers';
import { useAuth } from '../core/Auth';
import Logo from './cmpnt/logo';
import AuthHead from './cmpnt/authHead';
import AuthDesc from './cmpnt/authDesc';
import ButtonDesc from './cmpnt/buttonDesc';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../../store/storeIndex';
import { useNavigate } from 'react-router-dom';

import './cmpnt.css';
import TextField from '../../../../shared/TextField';

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
});

const initialValues = {
  email: '',
  password: '',
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      dispatch(userLogin(data, navigate));
    },
  });

  return (
    <form
      className="form w-100"
      onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >
      <div className="row">
        <div className="sm:!pl-36 pr-10 pl-10">
          <Logo />
          <div className="pt-32">
            <AuthHead text1="Welcome " text2="Back!" />
            <AuthDesc desc="Login to your account" />
          </div>
          <div className="input sm:pr-[140px] relative">
            <div className="fv-row ">
              <input
                placeholder="Email"
                {...formik.getFieldProps('email')}
                className={clsx(
                  'form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText mb-4 bg-transparent',
                  { 'is-invalid': formik.touched.email && formik.errors.email },
                  {
                    'is-valid': formik.touched.email && !formik.errors.email,
                  }
                )}
                type="email"
                name="email"
                autoComplete="off"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="fv-plugins-message-container text-danger fw-bold">
                  <span role="alert">{formik.errors.email}</span>
                </div>
              )}
            </div>

            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                {...formik.getFieldProps('password')}
                className={clsx(
                  'form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText mb-4 bg-transparent',
                  {
                    'is-invalid':
                      formik.touched.password && formik.errors.password,
                  },
                  {
                    'is-valid':
                      formik.touched.password && !formik.errors.password,
                  }
                )}
                name="password"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block fw-bold">
                    <span role="alert">{formik.errors.password}</span>
                  </div>
                </div>
              )}
            </div>

            <Link to="forgot-password">
              <div className="font-bold text-[#0064FA] text-sm flex justify-end pb-8">
                Forgot Password?
              </div>
            </Link>

            <button className="!text-[#ffff] !bg-[#0064FA] form-control !rounded-md !font-bold !text-sm h-14">
              Login
            </button>

            <div className="head-border text-sm !text-[#7D8695] my-8">OR</div>

            <button className="!text-[#171D25] !bg-[#F1F6F7] form-control !rounded-md !font-bold !text-sm h-14 ">
              <div className="flex justify-center">
                <div>
                  <img
                    alt="Logo"
                    src={toAbsoluteUrl(
                      '/media/svg/brand-logos/google-icon.svg'
                    )}
                    className="h-15px me-3"
                  />
                </div>
                <div className=" flex items-center">
                  <label> Login with Google</label>
                </div>
              </div>
            </button>
          </div>

          <div className="pt-8 flex justify-center sm:pr-[140px]">
            <Link to="register">
              <ButtonDesc
                to="register"
                text1="Don’t have an account?"
                text2="Register"
              />
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
