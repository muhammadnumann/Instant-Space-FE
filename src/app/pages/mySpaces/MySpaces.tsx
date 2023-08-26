import React from 'react';
import { SpaceCard } from '../../../components/instantComponents/spaceCard';
import { Link } from 'react-router-dom';
import { HeadDropDown } from '../../../components/dropdowns/HeadDropdown';
import { useIntl } from 'react-intl';

export default function MySpaces() {
  const intl = useIntl();
  return (
    <div className="main">
      <div className="content-head flex flex-sm-row flex-col justify-between items-center pl-2 pr-4">
        <div className="title font-extrabold text-2xl pb-sm-0 pb-4">
        {intl.formatMessage({ id: 'Home.Heading' })}
        </div>
        <div className="buttons flex flex-sm-row flex-col">
        <HeadDropDown 
              label=  {intl.formatMessage({ id: 'Spaces.DropDownLabel' })}
              byDefault= "All"
              option1= "Option 1"
              option2= "Option 2"
              option3= "Option 3"
              option4= "Option 4"
              option5= "Option 5"
              option6= "Option 6"
            />
          <div className="flex">
            <button className="font-bold text-base text-white bg-[#0064FA] py-2 px-4 w-full !border !border-solid border-[#0064FA] rounded-xl flex justify-center items-center">
              <div className="text-3xl font-light mb-1 mr-2 leading-3">+</div>
              {intl.formatMessage({ id: 'SpaceCard.AddNewCard' })}            </button>
          </div>
        </div>
      </div>
      <div className="space-card user-panel">
        <div className="row flex flex-wrap mx-0 pt-4">
          <div className="px-0 col-xxl-3 col-md-6 col-12 ">
            <Link to={'/my-spaces/1'} className="text-[#171D25] spacing card !bg-transparent pe-sm-4 pr-0">
                <SpaceCard
                  className=""
                  img="/media/icons/cardImages/bg1.svg"
                  title={intl.formatMessage({ id: 'SpaceCard.Title' })}
                  phone={intl.formatMessage({ id: 'SpaceCard.Phone' })}
                  capacity={intl.formatMessage({ id: 'SpaceCard.Capacity' })}
                  address={intl.formatMessage({ id: 'SpaceCard.Address' })}
                  type={intl.formatMessage({ id: 'SpaceCard.Type' })}
                  rate={intl.formatMessage({ id: 'SpaceCard.Rate' })}
                  checked=""
                  available={intl.formatMessage({ id: 'SpaceCard.Status' })}
                  gallery="12"
                />
            </Link>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 mt-md-0 mt-8 ">
            <Link to={'/my-spaces/2'} className="text-[#171D25] spacing card !bg-transparent  pe-sm-4 pr-0">
                <SpaceCard
                  className=""
                  img="/media/icons/cardImages/bg1.svg"
                  title={intl.formatMessage({ id: 'SpaceCard.Title' })}
                  phone={intl.formatMessage({ id: 'SpaceCard.Phone' })}
                  capacity={intl.formatMessage({ id: 'SpaceCard.Capacity' })}
                  address={intl.formatMessage({ id: 'SpaceCard.Address' })}
                  type={intl.formatMessage({ id: 'SpaceCard.Type' })}
                  rate={intl.formatMessage({ id: 'SpaceCard.Rate' })}
                  checked=""
                  available={intl.formatMessage({ id: 'SpaceCard.Status' })}
                  gallery="12"
                />
            </Link>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
            <Link to={'/my-spaces/3'} className="text-[#171D25] spacing card !bg-transparent  pe-sm-4 pr-0">
                <SpaceCard
                  className=""
                  img="/media/icons/cardImages/bg1.svg"
                  title={intl.formatMessage({ id: 'SpaceCard.Title' })}
                  phone={intl.formatMessage({ id: 'SpaceCard.Phone' })}
                  capacity={intl.formatMessage({ id: 'SpaceCard.Capacity' })}
                  address={intl.formatMessage({ id: 'SpaceCard.Address' })}
                  type={intl.formatMessage({ id: 'SpaceCard.Type' })}
                  rate={intl.formatMessage({ id: 'SpaceCard.Rate' })}
                  checked=""
                  available={intl.formatMessage({ id: 'SpaceCard.Status' })}
                  gallery="12"
                />
            </Link>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
            <Link to={'/my-spaces/4'} className="text-[#171D25] spacing card !bg-transparent  pe-sm-4 pr-0">
                <SpaceCard
                  className=""
                  img="/media/icons/cardImages/bg1.svg"
                  title={intl.formatMessage({ id: 'SpaceCard.Title' })}
                  phone={intl.formatMessage({ id: 'SpaceCard.Phone' })}
                  capacity={intl.formatMessage({ id: 'SpaceCard.Capacity' })}
                  address={intl.formatMessage({ id: 'SpaceCard.Address' })}
                  type={intl.formatMessage({ id: 'SpaceCard.Type' })}
                  rate={intl.formatMessage({ id: 'SpaceCard.Rate' })}
                  checked=""
                  available={intl.formatMessage({ id: 'SpaceCard.Status' })}
                  gallery="12"
                />
            </Link>
          </div>
        </div>
      </div>
      <div className="space-card user-panel mt-4">
        <div className="row flex flex-wrap mx-0 pt-4">
          <div className="px-0 col-xxl-3 col-md-6 col-12 ">
            <Link to={'/my-spaces/5'} className="text-[#171D25] spacing card !bg-transparent pe-sm-4 pr-0">
                <SpaceCard
                  className=""
                  img="/media/icons/cardImages/bg1.svg"
                  title={intl.formatMessage({ id: 'SpaceCard.Title' })}
                  phone={intl.formatMessage({ id: 'SpaceCard.Phone' })}
                  capacity={intl.formatMessage({ id: 'SpaceCard.Capacity' })}
                  address={intl.formatMessage({ id: 'SpaceCard.Address' })}
                  type={intl.formatMessage({ id: 'SpaceCard.Type' })}
                  rate={intl.formatMessage({ id: 'SpaceCard.Rate' })}
                  checked=""
                  available={intl.formatMessage({ id: 'SpaceCard.Status' })}
                  gallery="12"
                />
            </Link>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 mt-md-0 mt-8 ">
            <Link to={'/my-spaces/6'} className="text-[#171D25] spacing card !bg-transparent  pe-sm-4 pr-0">
                <SpaceCard
                  className=""
                  img="/media/icons/cardImages/bg1.svg"
                  title={intl.formatMessage({ id: 'SpaceCard.Title' })}
                  phone={intl.formatMessage({ id: 'SpaceCard.Phone' })}
                  capacity={intl.formatMessage({ id: 'SpaceCard.Capacity' })}
                  address={intl.formatMessage({ id: 'SpaceCard.Address' })}
                  type={intl.formatMessage({ id: 'SpaceCard.Type' })}
                  rate={intl.formatMessage({ id: 'SpaceCard.Rate' })}
                  checked=""
                  available={intl.formatMessage({ id: 'SpaceCard.Status' })}
                  gallery="12"
                />
            </Link>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
            <Link to={'/my-spaces/7'} className="text-[#171D25] spacing card !bg-transparent  pe-sm-4 pr-0">
                <SpaceCard
                  className=""
                  img="/media/icons/cardImages/bg1.svg"
                  title={intl.formatMessage({ id: 'SpaceCard.Title' })}
                  phone={intl.formatMessage({ id: 'SpaceCard.Phone' })}
                  capacity={intl.formatMessage({ id: 'SpaceCard.Capacity' })}
                  address={intl.formatMessage({ id: 'SpaceCard.Address' })}
                  type={intl.formatMessage({ id: 'SpaceCard.Type' })}
                  rate={intl.formatMessage({ id: 'SpaceCard.Rate' })}
                  checked=""
                  available={intl.formatMessage({ id: 'SpaceCard.Status' })}
                  gallery="12"
                />
            </Link>
          </div>
          <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
            <Link to={'/my-spaces/8'} className="text-[#171D25] spacing card !bg-transparent  pe-sm-4 pr-0">
                <SpaceCard
                  className=""
                  img="/media/icons/cardImages/bg1.svg"
                  title={intl.formatMessage({ id: 'SpaceCard.Title' })}
                  phone={intl.formatMessage({ id: 'SpaceCard.Phone' })}
                  capacity={intl.formatMessage({ id: 'SpaceCard.Capacity' })}
                  address={intl.formatMessage({ id: 'SpaceCard.Address' })}
                  type={intl.formatMessage({ id: 'SpaceCard.Type' })}
                  rate={intl.formatMessage({ id: 'SpaceCard.Rate' })}
                  checked=""
                  available={intl.formatMessage({ id: 'SpaceCard.Status' })}
                  gallery="12"
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
