import React from 'react'
import { useIntl } from 'react-intl';

const managers = [
    {
        id: 1,
        name: 'Tony Stark',
        contactinfo: '+1 012 345 6789',
        shiftTime: '09:00 am to 05:00 pm',
        img: '/media/icons/tableImages/tableImage.svg'
    },
    {
        id: 2,
        name: 'Tony Stark',
        contactinfo: '+1 012 345 6789',
        shiftTime: '09:00 am to 05:00 pm',
        img: '/media/icons/tableImages/tableImage.svg'
    },
    {
        id: 3,
        name: 'Tony Stark',
        contactinfo: '+1 012 345 6789',
        shiftTime: '09:00 am to 05:00 pm',
        img: '/media/icons/tableImages/tableImage.svg'
    }
]
const reviews = [
    {
        id: 1,
        name: 'Tony Stark',
        comment: 'Lorem ipsum dolor sit amet consectetur. Et in cursus egestas ipsum scelerisque cursus a vestibulum. Fringilla non semper purus vestibulum tortor faucibus. Pretium varius elit quis et. Eleifend scelerisque orci purus sit. Suspendisse elit pulvinar sem malesuada fermentum mi molestie. Pharetra fringilla nunc suspendisse massa etiam integer tempor blandit. Faucibus sit habitant est netus risus ullamcorper pellentesque. Quam et magna imperdiet mauris congue orci non phasellus. Vestibulum amet pharetra eget viverra.',
        rating: '4.0',
        img: '/media/icons/tableImages/tableImage.svg'
    },
    {
        id: 2,
        name: 'Tony Stark',
        comment: 'Lorem ipsum dolor sit amet consectetur. Et in cursus egestas ipsum scelerisque cursus a vestibulum. Fringilla non semper purus vestibulum tortor faucibus. Pretium varius elit quis et. Eleifend scelerisque orci purus sit. Suspendisse elit pulvinar sem malesuada fermentum mi molestie. Pharetra fringilla nunc suspendisse massa etiam integer tempor blandit. Faucibus sit habitant est netus risus ullamcorper pellentesque. Quam et magna imperdiet mauris congue orci non phasellus. Vestibulum amet pharetra eget viverra.',
        rating: '4.0',
        img: '/media/icons/tableImages/tableImage.svg'
    },
    {
        id: 3,
        name: 'Tony Stark',
        comment: 'Lorem ipsum dolor sit amet consectetur. Et in cursus egestas ipsum scelerisque cursus a vestibulum. Fringilla non semper purus vestibulum tortor faucibus. Pretium varius elit quis et. Eleifend scelerisque orci purus sit. Suspendisse elit pulvinar sem malesuada fermentum mi molestie. Pharetra fringilla nunc suspendisse massa etiam integer tempor blandit. Faucibus sit habitant est netus risus ullamcorper pellentesque. Quam et magna imperdiet mauris congue orci non phasellus. Vestibulum amet pharetra eget viverra.',
        rating: '4.0',
        img: '/media/icons/tableImages/tableImage.svg'
    },
    {
        id: 3,
        name: 'Tony Stark',
        comment: 'Lorem ipsum dolor sit amet consectetur. Et in cursus egestas ipsum scelerisque cursus a vestibulum. Fringilla non semper purus vestibulum tortor faucibus. Pretium varius elit quis et. Eleifend scelerisque orci purus sit. Suspendisse elit pulvinar sem malesuada fermentum mi molestie. Pharetra fringilla nunc suspendisse massa etiam integer tempor blandit. Faucibus sit habitant est netus risus ullamcorper pellentesque. Quam et magna imperdiet mauris congue orci non phasellus. Vestibulum amet pharetra eget viverra.',
        rating: '4.0',
        img: '/media/icons/tableImages/tableImage.svg'
    },
]
const MySpaceNext = () => {
    const intl = useIntl();
    return (
        <div>
            <div className="content-head flex flex-sm-row flex-col justify-between items-center pl-2 pr-4 mb-5">
                <div className="title text-lg pb-sm-0 pb-4 font-[500] text-gray">
                {intl.formatMessage({ id: 'Home.Heading' })} / <span className='text-primary font-[600]'> {intl.formatMessage({ id: 'SpaceCardDetail.Title' })}</span>
                </div>
                <div className="flex">
                    <button className="font-bold text-base text-white bg-[#0064FA] py-2 px-4 w-full !border !border-solid border-[#0064FA] rounded-xl flex justify-center items-center">
                        <div className="text-3xl font-light mb-1 mr-2 leading-3">+</div>
                        {intl.formatMessage({ id: 'SpaceCard.AddNewCard' })}                    </button>
                </div>
            </div>
            <div className="card card-flush card-shadow  mb-5 mb-xl-10">

                <div className="card-body d-flex flex-column justify-content-end">
                    <div className="row">
                        <div className='col-xxl-6'>
                            <div className="img relative mb-xxl-0 mb-10">
                                <img alt="" src="/media/icons/cardImages/space-1.svg" className="w-full rounded-md mb-8" />
                                <div className='flex gap-7 items-center overflow-x-auto'>
                                    <img alt="" src="/media/icons/cardImages/reference-1.svg" />
                                    <img alt="" src="/media/icons/cardImages/reference-1.svg" />
                                    <img alt="" src="/media/icons/cardImages/reference-1.svg" />
                                    <button className='text-gray rounded-lg bg-[#F1F6F7] stroke-border h-14 flex flex-column gap-3 items-center justify-center text-sm p-[32px] h-[96px] w-[96px]'>
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/camera.svg"
                                            className=""
                                        />
                                         {intl.formatMessage({ id: 'SpaceCardDetail.UploadPicture' })}
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-6'>
                            <div className="text bg-white rounded-lg">
                                <div className='flex items-center justify-between w-100 mb-5'>
                                    <span className="fs-3hx fw-bold text-dark me-2 lh-1 ls-n2"> {intl.formatMessage({ id: 'SpaceCardDetail.Title' })} </span>
                                    <div className="form-switch flex !pt-[1px] !p-0">
                                        <input
                                            className="form-check-input !w-9 !h-5 !ml-0"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckChecked"
                                        // {checked}
                                        />
                                    </div>
                                </div>

                                <div className="row m-0 pt-4">
                                    <div className="px-0 col-sm-6 flex items-center mb-sm-0 mb-4">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/phone.svg"
                                            className="h-5 w-5"
                                        />
                                        <label className="fs-2 pl-5"> {intl.formatMessage({ id: 'SpaceCardDetail.Phone' })}</label>
                                    </div>
                                    <div className="px-0 col-sm-6 flex items-center">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/flag.svg"
                                            className="h-5 w-5"
                                        />
                                        <label className="fs-2 pl-5"> {intl.formatMessage({ id: 'SpaceCardDetail.CapacityHead' })}:  {intl.formatMessage({ id: 'SpaceCardDetail.Capacity' })}</label>
                                    </div>
                                </div>
                                <div className="row m-0 py-4 ">
                                    <div className="px-0 col-sm-6 flex items-center mb-sm-0 mb-4">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/space.svg"
                                            className="h-5 w-5"
                                        />
                                        <label className="fs-2 pl-5"> {intl.formatMessage({ id: 'SpaceCardDetail.TypeHead' })}  {intl.formatMessage({ id: 'SpaceCardDetail.Type' })}</label>
                                    </div>
                                    <div className="px-0 col-sm-6 flex items-center">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/dollar.svg"
                                            className="h-5 w-5"
                                        />
                                        <label className="fs-2 pl-5"> {intl.formatMessage({ id: 'SpaceCardDetail.RateHead' })}: {intl.formatMessage({ id: 'SpaceCardDetail.Rate' })}</label>
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="px-0 col-12 flex items-center">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/location.svg"
                                            className="h-5 w-5"
                                        />
                                        <label className="fs-2 pl-5"> {intl.formatMessage({ id: 'SpaceCardDetail.Address' })}</label>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 mt-4">
                                    <span className='fs-2 font-semibold'> {intl.formatMessage({ id: 'SpaceCardDetail.Facilities' })}</span>
                                    <div className="px-1">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/electric1.svg"
                                            className="h-5 w-5"
                                        />
                                    </div>
                                    <div className="px-1">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/electric4.svg"
                                            className="h-5 w-5"
                                        />
                                    </div>
                                    <div className="px-1">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/booksgrey.svg"
                                            className="h-5 w-5"
                                        />
                                    </div>
                                    <div className="px-1">
                                        <img
                                            alt=""
                                            src="/media/icons/cardIcons/pumpgrey.svg"
                                            className="h-5 w-5"
                                        />
                                    </div>
                                </div>
                                <div className="border-b my-5"></div>
                                <p className='text-lg font-semibold'>{intl.formatMessage({ id: 'Managers.Title' })}</p>
                                <div className='mt-5 flex flex-column managers overflow-x-auto'>
                                    {managers.map((data, index) => {
                                        return (
                                            <div className='flex items-center justify-between managerno sm:!w-full !w-max sm:!gap-3 !gap-10' key={index}>
                                                <div className='flex gap-3'>
                                                    <img src={data.img} alt="" />
                                                    <div>
                                                        <p className='mb-1 text-lg text-gray'>{intl.formatMessage({ id: 'Managers.NameHead' })}</p>
                                                        <p className='mb-0 text-xl font-bold text-grey-600'>{intl.formatMessage({ id: 'Managers.Name' })}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='mb-1 text-lg text-gray'>{intl.formatMessage({ id: 'Managers.ContactHead' })}</p>
                                                    <p className='mb-0 text-xl font-bold text-grey-600'>{intl.formatMessage({ id: 'Managers.Contact' })}</p>
                                                </div>
                                                <div>
                                                    <p className='mb-1 text-lg text-gray'>{intl.formatMessage({ id: 'Managers.TimeHead' })}</p>
                                                    <p className='mb-0 text-xl font-bold text-grey-600'>{intl.formatMessage({ id: 'Managers.Time' })}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-flush card-shadow  mb-5 mb-xl-10">
                <div className='card-header !items-center !py-[24px] !px-[32px]'>
                    <h3 className='fs-1 font-bold m-0 h-max	'>{intl.formatMessage({ id: 'Reviews.Title' })} </h3>
                </div>
                <div className="card-body d-flex flex-column justify-content-end !border-t">
                    {reviews.map((data, index) => {
                        return (
                            <div key={index} className='flex gap-3 items-start reviews border-b pb-[32px] mb-[32px]'>
                                <img src={data.img} alt="" />
                                <div>
                                    <p className='mb-0 font-bold text-grey-600'>{intl.formatMessage({ id: 'Reviews.Name' })}</p>
                                    <div className='flex gap-1 items-center mb-7'>
                                        <p className='mb-0 text-gray'>{intl.formatMessage({ id: 'Reviews.Rating' })}</p>
                                        <img alt="" src="/media/icons/cardIcons/rating.svg" />
                                    </div>
                                    <p className='text-xl leading-6 m-0'>
                                    {intl.formatMessage({ id: 'Reviews.Comment' })}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default MySpaceNext