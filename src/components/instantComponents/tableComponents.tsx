import { useIntl } from 'react-intl';
import React from 'react';

export default function BookingTable() {
  const intl = useIntl();
  const BookingsTable = [
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
      <tbody>
        {BookingsTable.map((data, index) => {
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
                    {intl.formatMessage({ id: 'Table.Fname' })}
                    </p>
                    <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3 ">
                    {intl.formatMessage({ id: 'Table.Lname' })}
                    </p>
                  </div>
                </div>
              </td>
              <td className="">
                <div className="flex">
                  <div className="flex-col">
                    <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                    {intl.formatMessage({ id: 'Table.Location1' })}
                    </p>
                    <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                    {intl.formatMessage({ id: 'Table.Location2' })}
                    </p>
                  </div>
                </div>
              </td>
              <td className="">
                <div className="flex">
                  <div className="flex-col">
                    <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                    {intl.formatMessage({ id: 'Table.Contact' })}
                    </p>
                  </div>
                </div>
              </td>
              <td className="">
                <div className="flex">
                  <div className="flex-col">
                    <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                    {intl.formatMessage({ id: 'Table.FTime' })}
                    </p>
                    <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                    {intl.formatMessage({ id: 'Table.FDate' })}
                    </p>
                  </div>
                </div>
              </td>
              <td className="">
                <div className="flex-col">
                  <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                  {intl.formatMessage({ id: 'Table.TTime' })}
                  </p>
                  <p className="mb-0 text-dark text-sm font-medium flex items-center ">
                  {intl.formatMessage({ id: 'Table.TDate' })}
                  </p>
                </div>
              </td>
              <td className="">
                <p className="text-dark text-sm font-medium  d-block mb-0 ">
                {intl.formatMessage({ id: 'Table.Type' })}
                </p>
              </td>
              <td className="">
                <p className="text-dark text-sm font-medium  d-block mb-0 ">
                {intl.formatMessage({ id: 'Table.Amount' })}
                </p>
              </td>
              <td className="">
                <div className="text-[#169401] text-sm font-bold px-3 py-1 !bg-[#169401]/[.10] !border border-solid border-[#169401] rounded-lg flex justify-center ">
                {intl.formatMessage({ id: 'Table.TStatus' })}
                </div>
              </td>
              <td className=" >!py-5 text-end">
                <a
                  href="#"
                  className="btn btn-sm btn-icon btn-active-color-primary "
                >
                  <img src={data.threedots} className="svg-icon-2" alt="" />
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
