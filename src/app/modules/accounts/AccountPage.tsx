import React from 'react'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import AccountEdit from './components/settings/Edit'
import AccountChangePassword from './components/settings/ChangePassword'
import AccountFaqs from './components/settings/Faqs'
import AccountPrivacyPolicy from './components/settings/PrivacyPolicy'
import AccountVerifyOtp from './components/settings/VerifyOtp'
import AccountNewPassword from './components/settings/NewPassword'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Account',
    path: '/crafted/account/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]
const settingRoute = [
  {
    name: 'Edit Profile',
    img:'/images/icons/editprofile.svg',
    link: '/crafted/account/settings/edit'
  },
  {
    name: 'Change Password',
    img:'/images/icons/changePassword.svg',
    link: '/crafted/account/settings/changepassword'
  },
  {
    name: 'FAQs',
    img:'/images/icons/faq.svg',
    link: '/crafted/account/settings/faq'
  },
  {
    name: 'Privacy Policy',
    img:'/images/icons/policy.svg',
    link: '/crafted/account/settings/privacy'
  },
]

const AccountPage: React.FC = () => {
  const location = useLocation()

  return (
    <>
      <h3 className='text-[24px] mb-4 font-bold'>Account Settings</h3>
      <div className='row m-0'>
        <div className='col-xxl-3 col-xl-4 ps-xl-0 pe-xl-5 p-0 mb-xl-0 mb-8'>
          <div className='card card-flush card-shadow p-5 account-setting'>
            {settingRoute.map((data, index) => {
              return (
                <Link key={index} to={data.link} className={`${data.link === location.pathname || location.pathname.includes(data.link) ? 'bg-[#F0F6FF] text-primary font-semibold active' : ''} link flex gap-[15px] items-center text-[#7D8695] p-3 text-[18px]`}>
                  <img src={data.img} alt=""/> 
                  {data.name}
                  </Link>
              )
            })}


          </div>
        </div>
        <div className='col-xxl-9 col-xl-8 pe-xl-0 ps-xl-2 p-0'>
          <div className='card card-flush card-shadow p-5'>
            <Routes>
              <Route
                path='settings/edit'
                element={
                  <>
                    <PageTitle breadcrumbs={accountBreadCrumbs}>Edit</PageTitle>
                    <AccountEdit />
                  </>
                }
              />
              <Route
                path='settings/changepassword'
                element={
                  <>
                    <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
                    <AccountChangePassword />
                  </>
                }
              />
              <Route
                path='settings/changepassword/verifyotp'
                element={
                  <>
                    <PageTitle breadcrumbs={accountBreadCrumbs}>Verify Otp</PageTitle>
                    <AccountVerifyOtp />
                  </>
                }
              />
              <Route
                path='settings/changepassword/newpassword'
                element={
                  <>
                    <PageTitle breadcrumbs={accountBreadCrumbs}>New Password</PageTitle>
                    <AccountNewPassword />
                  </>
                }
              />
              <Route
                path='settings/faq'
                element={
                  <>
                    <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
                    <AccountFaqs />
                  </>
                }
              />
              <Route
                path='settings/privacy'
                element={
                  <>
                    <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
                    <AccountPrivacyPolicy />
                  </>
                }
              />
            </Routes>
          </div>

        </div>


      </div>
      {/* <Routes>
        <Route
          element={
            <>
              <AccountHeader />
              <Outlet />
            </>
          }
        >
          <Route
            path='overview'
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
                <Overview />
              </>
            }
          />
          <Route
            path='settings/edit'
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
                <Settings />
              </>
            }
          />
          <Route
            path='settings/changepassword'
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
                <Settings />
              </>
            }
          />
          <Route
            path='settings/faq'
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
                <Settings />
              </>
            }
          />
          <Route
            path='settings/privacy'
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
                <Settings />
              </>
            }
          />
          <Route index element={<Navigate to='/crafted/account/overview' />} />
        </Route>
      </Routes> */}
    </>
  )
}

export default AccountPage
