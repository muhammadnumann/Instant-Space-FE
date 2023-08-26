import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccountVerifyOtp = () => {

    const navigate = useNavigate()

    const submitHandler = (e: any) => {
        e.preventDefault();
        navigate('/crafted/account/settings/changepassword/newpassword')
    }
    return (
        <div>
            <h3 className='text-[24px] mb-4 font-bold'>Verify OTP</h3>
            <p className='!text-[14px] !mb-[40px]'>A 6-digit code sent to your adam*****@gmail.com.</p>
            <form className='w-100'>

                <div className='flex flex-column gap-4'>
                    <div className='flex gap-5 items-center pb-1 flex-sm-row flex-column'>
                        <input
                            placeholder="Enter Email OTP"
                            className="form-control w-100 border-2 border-solid !border-[#7D8695] h-14 rounded-lg inputText bg-transparent"
                            type="email"
                            name="email"
                            autoComplete="off"
                        />
                        <button
                            onClick={(e) => submitHandler(e)}
                            className="!text-[#ffff] !bg-[#0064FA] form-control !rounded-lg !font-semibold !text-xl sm:!w-2/6 w-full">
                            Verify
                        </button>
                    </div>
                    <p className='text-md font-semibold !m-0'>Re-send code in. <span className='text-primary'>58s</span></p>

                </div>
            </form>
        </div>
    )
}

export default AccountVerifyOtp