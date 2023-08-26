import React from 'react';
import { SpaceCard } from '../../../components/instantComponents/spaceCard';
import AddNewSpaceCard from '../../../components/instantComponents/AddNewSpaceCard';
import '../../../index.css'
import Modal from '../auth/components/cmpnt/modal';
import { BarChart1 } from '../../../components/charts/barChart/barChart';
import EventCalender from '../../../components/Calender/EventCalender';
import { useIntl } from 'react-intl';
import BookingTable from '../../../components/instantComponents/tableComponents';
export default function HomePage() {
  const intl = useIntl();
  return (
    <>
      <div className="main">
        <div className="content-head flex justify-between items-center">
          <div className="title font-extrabold text-2xl">
            {intl.formatMessage({ id: 'Home.Heading' })}
          </div>
          <div className="button">
            <button className="px-5 py-2 bg-[#0064FA] text-white rounded-xl flex items-center">
              <img
                src="/media/icons/InstantIcons/filter.svg"
                alt="img"
                className="mr-2 h-3 w-3.5"
              />
              {intl.formatMessage({ id: 'Home.Heading' })}
            </button>
          </div>
        </div>
        <div className="space-card user-panel">
          <div className="row flex flex-wrap mx-0 pt-4">
            <div className="px-0 col-xxl-3 col-md-6 col-12 ">
              <div className="spacing card !bg-transparent pe-sm-4 pr-0">
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
              </div>
            </div>
            <div className="px-0 col-xxl-3 col-md-6 col-12 mt-md-0 mt-8 ">
              <div className="spacing card !bg-transparent  pe-sm-4 pr-0">
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
              </div>
            </div>
            <div className="px-0 col-xxl-3 col-md-6 col-12 pt-xxl-0 pt-8 ">
              <div className="spacing card !bg-transparent  pe-sm-4 pr-0">
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
              </div>
            </div>
            <div className="pe-sm-4 pe-0 ps-0   col-xxl-3 col-md-6 col-12 mt-xxl-0 mt-8   ">
              <div className="w-full h-full bg-white card-shadow rounded-lg flex flex-col justify-center">
                <div className="card  ">
                  <AddNewSpaceCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* My bookings Section */}
        <div className="bookings !overflow-x-auto">
          <div className="bookings-head flex justify-between items-center pt-10 pb-4">
            <div className="title font-extrabold text-2xl">
            {intl.formatMessage({ id: 'Booking.History' })}
            </div>
            <button className="text-base font-bold text-primary rounded-xl flex items-center">
            {intl.formatMessage({ id: 'Booking.ViewAll' })}
              <img
                src="/media/icons/InstantIcons/viewAll.svg"
                alt="img"
                className="ml-2 h-4 w-4 mt-1"
              />
            </button>
          </div>
          <div className="table tableBooking rounded-xl overflow-hidden">
            <div className=" bg-white rounded-lg">
              <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 min-w-[800px]">
                <thead className=" border-b-2 !border-[#E7E6E9]">
                  <tr className="fw-bold bg-white !h-[60px]">
                    <th className="!pb-6 !text-sm text-gray !font-bold !pl-3">
                    {intl.formatMessage({ id: 'Table.FullName' })}
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                    {intl.formatMessage({ id: 'Table.BranchLocation' })}
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                    {intl.formatMessage({ id: 'Table.ContactInfo' })}
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                    {intl.formatMessage({ id: 'Table.From' })}
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold"> {intl.formatMessage({ id: 'Table.To' })}</th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                    {intl.formatMessage({ id: 'Table.SpaceType' })}
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                    {intl.formatMessage({ id: 'Table.TotalAmount' })}
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold">
                    {intl.formatMessage({ id: 'Table.Status' })}
                    </th>
                    <th className="!pb-6 !text-sm text-gray !font-bold"></th>
                  </tr>
                </thead>
                <BookingTable/>
              </table>
            </div>
          </div>
        </div>
        {/* My Earnings and Calender */}
        <div className="section ">
          <div className="row">
            <div className="col-xl-7 col-12 mt-lg-4 ">
              <div className="earnings">
                <div className="head text-[1.75rem] font-bold mb-4">
                  My Earnings
                </div>
                <div className=" bg-white card-shadow rounded-lg">
                  <BarChart1 className="" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-12 !pr-2 pt-3  mt-lg-4 mt-8 ">
              <div className="calender ">
                <EventCalender />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
