import React from 'react';
import '../../../index.css';
import ManagerForm from '../../modules/auth/components/modalForms/ManagerForm';
import clsx from 'clsx';
import { PaymentHistoryCard } from '../../../components/instantComponents/PaymentHistoryCard';
import PaymentForm from '../../modules/auth/components/modalForms/PaymentForm';
import BookingTable from '../../../components/instantComponents/tableComponents';
export default function PaymentHistory() {
  const PaymentTable = [
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
    {
      fname: 'Tony',
      lname: 'Starc',
      location1: 'Belmont',
      location2: 'North Carolina',
      contact: '+1 012 345 6789',
      Ftime: '10:30 AM',
      Fdate: 'May 3, 2023',
      Ttime: '11:30 AM',
      Tdate: 'May 3, 2023',
      type: 'Truck Parking',
      amount: '$5',
      status: 'Paid',
      threedots: '/media/icons/cardIcons/threeDots.svg',
    },
  ];
  return (
    <>
      <div>
        {/* My bookings Section */}
        <div className="bookings !w-100">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-12 !h-[96px] xl:p-0 lg:!pb-0 rounded !rouned-lg">
              <PaymentHistoryCard
                className="card-xl-stretch mb-xl-8 border"
                image="/media/svg/images/icons/customer.svg"
                color="#E2E2EA"
                title="Total Customers"
                className1="!text-[#3CAA91] !bg-[#D9F2EC]"
                btndata="Cashier"
                textdata="492"
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-12 !h-[96px] xl:p-0 lg:!pb-0  ">
              <PaymentHistoryCard
                className="card-xl-stretch mb-xl-8 border"
                image="/media/svg/images/icons/payment.svg"
                color="#E2E2EA"
                title="Total Payments"
                className1="!text-[#3CAA91] !bg-[#D9F2EC]"
                btndata="Cashier"
                textdata="530"
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-12 !h-[96px] xl:p-0 lg:!pb-0  ">
              <PaymentHistoryCard
                className="card-xl-stretch mb-xl-8 border"
                image="/media/svg/images/icons/cancelpayment.svg"
                color="#E2E2EA"
                title="Cancelled Payments"
                className1="!text-[#3CAA91] !bg-[#D9F2EC]"
                btndata="Cashier"
                textdata="185"
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-12 !h-[96px] xl:p-0 lg:!pb-0  ">
              <PaymentHistoryCard
                className="card-xl-stretch mb-xl-8 border"
                image="/media/svg/images/icons/total.svg"
                color="#E2E2EA"
                title="Total Earning"
                className1="!text-[#3CAA91] !bg-[#D9F2EC]"
                btndata="Cashier"
                textdata="$15,835"
              />
            </div>
          </div>
          <div className="bookings-head flex flex-xl-row flex-column pt-10 pb-4 md:justify-between justify-start">

            <div className="title font-extrabold text-2xl flex xl:justify-start justify-center">
              Payment History
            </div>

            <div className="flex flex-xl-row flex-column">
              <div className="bg-transparent flex justify-center items-center">
                <label className="font-bold text-lg ">Sort By:</label>
                <select className="custom-drop-down1 height-56 bg-white border border-solid pl-3  ml-5">
                  <option defaultValue>Most Recent</option>
                  <option>Big Buddha Cheese</option>
                  <option>Girl Scout Cookies</option>
                  <option>Blue Cheese</option>
                  <option>Grease Monkey</option>
                  <option>Rocksar</option>
                  <option>Pennywise</option>
                </select>
              </div>
              <div className="bg-transparent flex justify-center items-center">
                <label className="font-bold text-lg">Select Type:</label>
                <select className="custom-drop-down1 height-56 bg-white border border-solid pl-3 !ml-0">
                  <option defaultValue>All</option>
                  <option>Big Buddha Cheese</option>
                  <option>Girl Scout Cookies</option>
                  <option>Blue Cheese</option>
                  <option>Grease Monkey</option>
                  <option>Rocksar</option>
                  <option>Pennywise</option>
                </select>
              </div>
              <button
                className="font-bold text-base mt-1 text-white bg-[#0064FA] custom-button-width !border !border-solid border-[#0064FA] rounded-xl flex justify-center items-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {' '}
                <div className="text-3xl font-light mb-1 mr-1 leading-3">
                  +
                </div>{' '}
                Add Payment Method
              </button>
            </div>

          </div>
          <div className="bookings !overflow-x-auto">
            <div className="table tableBooking rounded-xl overflow-hidden">
              <div className=" bg-white rounded-lg">
                <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 min-w-[800px]">
                  <thead className=" border-b-2 !border-[#E7E6E9]">
                    <tr className="fw-bold bg-white !h-[60px]">
                      <th className="!pb-6 !text-sm text-gray !font-bold !pl-3">
                        Customer Full Name
                      </th>
                      <th className="!pb-6 !text-sm text-gray !font-bold">
                        Branch Location
                      </th>
                      <th className="!pb-6 !text-sm text-gray !font-bold">
                        Contact Info
                      </th>
                      <th className="!pb-6 !text-sm text-gray !font-bold">
                        From
                      </th>
                      <th className="!pb-6 !text-sm text-gray !font-bold">
                        To
                      </th>
                      <th className="!pb-6 !text-sm text-gray !font-bold">
                        Space Type
                      </th>
                      <th className="!pb-6 !text-sm text-gray !font-bold">
                        Total Amount
                      </th>
                      <th className="!pb-6 !text-sm text-gray !font-bold">
                        Status
                      </th>
                      <th className="!pb-6 !text-sm text-gray !font-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {PaymentTable.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td className="">
                            <div className="flex pl-4">
                              <div className="symbol symbol-label symbol-40px">
                                <div className=" symbol-label fs-8 fw-bold !bg-[#E2E2EA] text-inverse-primary">
                                  <img
                                    src="/media/icons/tableImages/tableImage.svg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="flex-col flex justify-center">
                                <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3">
                                  {data.fname}
                                </p>
                                <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3 ">
                                  {data.lname}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="">
                            <div className="flex">
                              <div className="flex-col">
                                <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                  {data.location1},
                                </p>
                                <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                  {data.location2}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="">
                            <div className="flex">
                              <div className="flex-col">
                                <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                  {data.contact},
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="">
                            <div className="flex">
                              <div className="flex-col">
                                <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                  {data.Ftime},
                                </p>
                                <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                  {data.Fdate}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="">
                            <div className="flex-col">
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                {data.Ttime},
                              </p>
                              <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                                {data.Tdate}
                              </p>
                            </div>
                          </td>
                          <td className="">
                            <p className="text-dark text-sm font-medium  d-block mb-0 ">
                              {data.type}
                            </p>
                          </td>
                          <td className="">
                            <p className="text-dark text-sm font-medium  d-block mb-0 ">
                              {data.amount}
                            </p>
                          </td>
                          <td className="">
                            <div className="text-[#169401] text-sm font-bold px-3 py-1 !bg-[#169401]/[.10] !border border-solid border-[#169401] rounded-lg flex justify-center ">
                              {data.status}
                            </div>
                          </td>
                          <td className=" >!py-5 text-end">
                            <a
                              href="#"
                              className="btn btn-sm btn-icon btn-active-color-primary "
                            >
                              <img
                                src={data.threedots}
                                className="svg-icon-2"
                                alt=""
                              />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
             {/* <BookingTable/> */}
        </div>
        {/* My Earnings and Calender */}
        <div
          className="modal1 fade "
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog rounded-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="custom-modal-title fw-bolder ml-6"
                  id="exampleModalLabel"
                >
                  Add Payment Method
                </h1>
                <button
                  type="button"
                  className="btn-close mx-4 border-cross"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="fv-row ">
                  <label
                    className={clsx('w-100 h-18 bg-transparent ml-3 fw-bold')}
                    id="modal-label"
                  >
                    Select Space Type
                  </label>
                </div>
                <PaymentForm />
              </div>
              <div className="footer">
                <button
                  type="button"
                  className="btn custom-cancel-button fw-bold mb-8"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn custom-save-button fw-bold mb-8 mx-4"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
