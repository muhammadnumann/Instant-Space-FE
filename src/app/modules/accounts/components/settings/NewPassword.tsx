import React, { useState } from 'react'

const AccountNewPassword = () => {
    const [showPassword1, setshowPassword1] = useState(false);
    const [showPassword2, setshowPassword2] = useState(false);


    const submitHandler = (e: any) => {
        e.preventDefault();
    }

    return (
        <div>
            <h3 className='text-[24px] mb-4 font-bold'>New Password</h3>
            <p className='!text-[14px] !mb-[40px]'>Create your new password.</p>
            <form className='w-100'>
                <div className='flex gap-4 item-center flex-sm-row flex-column'>
                    <div className='form-control w-100 border-2 border-solid !border-[#E7E6E9] h-14 rounded-lg bg-transparent !flex  gap-4 py-0 ps-2 items-center'>
                        <input
                            type={`${showPassword1 ? 'text' : 'password'}`}
                            placeholder='New Password'
                            className='form-control w-100 border-0 h-100 ' />
                        <img src='/images/icons/eye.svg' alt='' className='h-[19px] w-[19px]' onClick={() => setshowPassword1(!showPassword1)} />
                    </div>
                    <div className='form-control w-100 border-2 border-solid !border-[#E7E6E9] h-14 rounded-lg bg-transparent !flex  gap-4 py-0 ps-2 items-center'>
                        <input
                            type={`${showPassword2 ? 'text' : 'password'}`}
                            placeholder='Confirm New Password'
                            className='form-control w-100 border-0 h-100 ' />
                        <img src='/images/icons/eye.svg' alt='' className='h-[19px] w-[19px]' onClick={() => setshowPassword2(!showPassword2)} />
                    </div>
                </div>

                <div className='flex gap-5 justify-end items-center mt-[72px] flex-wrap'>
                    <button
                        onClick={(e) => e.preventDefault()}
                        className=" !bg-[#F0F6FF] !border-[#0064FA] !text-[#0064FA] form-control w-max !rounded-lg !font-semibold !text-xl !w-[200px] ">
                        Cancel
                    </button>
                    <button
                        onClick={(e) => submitHandler(e)}
                        className="!text-[#ffff] !bg-[#0064FA] form-control w-max !rounded-lg !font-semibold !text-xl !w-[200px]">
                        Save Change
                    </button>
                </div>

            </form>

        </div >
    )
}

export default AccountNewPassword