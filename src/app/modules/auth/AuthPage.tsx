import {Route, Routes} from 'react-router-dom'
import React from 'react'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import { Otp } from './components/Otp'
import { ResetPassword } from './components/ResetPassword'
import { PersonalInfo } from './components/PersonalInfo'
import { CompanyInfo } from './components/CompanyInfo'

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='forgot-password/otp' element={<Otp />} />
      <Route path='forgot-password/otp/reset' element={<ResetPassword />} />
      <Route path='register' element={<Registration />} />
      <Route path='register/personal-Info' element={<PersonalInfo />} />
      <Route path='register/personal-Info/company' element={<CompanyInfo />} />

      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
