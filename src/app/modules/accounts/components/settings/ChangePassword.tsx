import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountChangePassword = () => {
    const navigate = useNavigate()

    const submitHandler = (e: any) => {
        navigate('/crafted/account/settings/changepassword/verifyotp')
    }

    return (
        <div>
            <h3 className='text-[24px] mb-4 font-bold'>Change Password</h3>
            <p className='!text-[14px] !mb-[40px]'>Don’t worry! it happens. Please enter your email address to get code.</p>
            <form className='w-100'>

                <div className='flex gap-5 items-center pb-11 flex-sm-row flex-column'>
                    <input
                        placeholder="Email"
                        className="form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText bg-transparent"
                        type="email"
                        name="email"
                        autoComplete="off"
                    />
                    <button
                        onClick={(e) => submitHandler(e)}
                        className="!text-[#ffff] !bg-[#0064FA] form-control !rounded-lg !font-semibold !text-xl sm:!w-2/6 w-full">
                        Get Code
                    </button>
                </div>

            </form>

        </div >
    )
}

export default AccountChangePassword