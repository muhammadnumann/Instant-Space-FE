import React from 'react';
import { HeadDropDown } from '../../../components/dropdowns/HeadDropdown';
import { Notification } from '../../../components/instantComponents/Notification';
import { useIntl } from 'react-intl';

export default function Notifications() {
  const intl = useIntl();

  return (
    <div className="main">
      <div className="content-head flex flex-sm-row flex-col justify-between items-center pl-2 pr-4">
        <div className="title font-extrabold text-2xl pb-sm-0 pb-4">
          {intl.formatMessage({ id: 'Notifications.Title' })}
        </div>
        <div className="buttons flex flex-sm-row flex-col">
          <HeadDropDown
            label={intl.formatMessage({ id: 'Notifications.DropDownLabel' })}
            byDefault={intl.formatMessage({ id: 'Notifications.DropDownOption1' })}
            option1={intl.formatMessage({ id: 'Notifications.DropDownOption1' })}
            option2={intl.formatMessage({ id: 'Notifications.DropDownOption2' })}
            option3={intl.formatMessage({ id: 'Notifications.DropDownOption3' })}
            option4={intl.formatMessage({ id: 'Notifications.DropDownOption4' })}
            option5={intl.formatMessage({ id: 'Notifications.DropDownOption5' })}
            option6={intl.formatMessage({ id: 'Notifications.DropDownOption6' })}
          />
        </div>
      </div>
      {/* section 1 */}
      <div className="section !overflow-x-auto">
        <div className="legend">
          <div className="head-border text-sm !text-[#7D8695] my-8">
            <span className="bg-[#F1F1F1] text-sm font-medium text-gray px-3 py-2 rounded-lg mx-4">
              {intl.formatMessage({ id: 'Notifications.Today' })}
            </span>
          </div>
          <div className="row mx-0 ">
            <div className="">
              <Notification
                img="/media/icons/tableImages/tableImage.svg"
                heading1={intl.formatMessage({
                  id: 'Notifications.CustomerName',
                })}
                heading2={intl.formatMessage({
                  id: 'Notifications.BranchLocation',
                })}
                heading3={intl.formatMessage({ id: 'Notifications.SpaceType' })}
                heading4={intl.formatMessage({
                  id: 'Notifications.BookingTimeDate',
                })}
                description1={intl.formatMessage({
                  id: 'Notifications.Description1',
                })}
                description2={intl.formatMessage({
                  id: 'Notifications.Description2',
                })}
                description3={intl.formatMessage({
                  id: 'Notifications.Description3',
                })}
                description4={intl.formatMessage({
                  id: 'Notifications.Description4',
                })}
                status={intl.formatMessage({ id: 'Notifications.Paid' })}
                color="[#169401]"
                background="[#169401]/[0.1]"
                borderColor="[#169401]"
              />
            </div>
          </div>
          <div className="row mx-0">
            <div className="pt-6">
            <Notification
                img="/media/icons/tableImages/tableImage.svg"
                heading1={intl.formatMessage({
                  id: 'Notifications.CustomerName',
                })}
                heading2={intl.formatMessage({
                  id: 'Notifications.BranchLocation',
                })}
                heading3={intl.formatMessage({ id: 'Notifications.SpaceType' })}
                heading4={intl.formatMessage({
                  id: 'Notifications.BookingTimeDate',
                })}
                description1={intl.formatMessage({
                  id: 'Notifications.Description1',
                })}
                description2={intl.formatMessage({
                  id: 'Notifications.Description2',
                })}
                description3={intl.formatMessage({
                  id: 'Notifications.Description3',
                })}
                description4={intl.formatMessage({
                  id: 'Notifications.Description4',
                })}
                status={intl.formatMessage({ id: 'Notifications.Cancelled' })}
                color="[#FF3030]"
                background="[#FF5757]/[0.1]"
                borderColor="[#FF5757]"
              />
            </div>
          </div>
          <div className="row mx-0 ">
            <div className="pt-6">
            <Notification
                img="/media/icons/tableImages/tableImage.svg"
                heading1={intl.formatMessage({
                  id: 'Notifications.CustomerName',
                })}
                heading2={intl.formatMessage({
                  id: 'Notifications.BranchLocation',
                })}
                heading3={intl.formatMessage({ id: 'Notifications.SpaceType' })}
                heading4={intl.formatMessage({
                  id: 'Notifications.BookingTimeDate',
                })}
                description1={intl.formatMessage({
                  id: 'Notifications.Description1',
                })}
                description2={intl.formatMessage({
                  id: 'Notifications.Description2',
                })}
                description3={intl.formatMessage({
                  id: 'Notifications.Description3',
                })}
                description4={intl.formatMessage({
                  id: 'Notifications.Description4',
                })}
                status={intl.formatMessage({ id: 'Notifications.Paid' })}
                color="[#169401]"
                background="[#169401]/[0.1]"
                borderColor="[#169401]"
              />
            </div>
          </div>
          <div className="row mx-0">
            <div className="pt-6">
            <Notification
                img="/media/icons/tableImages/tableImage.svg"
                heading1={intl.formatMessage({
                  id: 'Notifications.CustomerName',
                })}
                heading2={intl.formatMessage({
                  id: 'Notifications.BranchLocation',
                })}
                heading3={intl.formatMessage({ id: 'Notifications.SpaceType' })}
                heading4={intl.formatMessage({
                  id: 'Notifications.BookingTimeDate',
                })}
                description1={intl.formatMessage({
                  id: 'Notifications.Description1',
                })}
                description2={intl.formatMessage({
                  id: 'Notifications.Description2',
                })}
                description3={intl.formatMessage({
                  id: 'Notifications.Description3',
                })}
                description4={intl.formatMessage({
                  id: 'Notifications.Description4',
                })}
                status={intl.formatMessage({ id: 'Notifications.Cancelled' })}
                color="[#FF3030]"
                background="[#FF5757]/[0.1]"
                borderColor="[#FF5757]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="section !overflow-x-auto">
        <div className="legend">
          <div className="head-border text-sm !text-[#7D8695] my-8">
            <span className="bg-[#F1F1F1] text-sm font-medium text-gray px-3 py-2 rounded-lg mx-4">
            {intl.formatMessage({
                  id: 'Notifications.NextDay',
                })}            </span>
          </div>
          <div className="row mx-0 ">
            <div className="">
            <Notification
                img="/media/icons/tableImages/tableImage.svg"
                heading1={intl.formatMessage({
                  id: 'Notifications.CustomerName',
                })}
                heading2={intl.formatMessage({
                  id: 'Notifications.BranchLocation',
                })}
                heading3={intl.formatMessage({ id: 'Notifications.SpaceType' })}
                heading4={intl.formatMessage({
                  id: 'Notifications.BookingTimeDate',
                })}
                description1={intl.formatMessage({
                  id: 'Notifications.Description1',
                })}
                description2={intl.formatMessage({
                  id: 'Notifications.Description2',
                })}
                description3={intl.formatMessage({
                  id: 'Notifications.Description3',
                })}
                description4={intl.formatMessage({
                  id: 'Notifications.Description4',
                })}
                status={intl.formatMessage({ id: 'Notifications.Paid' })}
                color="[#169401]"
                background="[#169401]/[0.1]"
                borderColor="[#169401]"
              />
            </div>
          </div>
          <div className="row mx-0">
            <div className="pt-6">
            <Notification
                img="/media/icons/tableImages/tableImage.svg"
                heading1={intl.formatMessage({
                  id: 'Notifications.CustomerName',
                })}
                heading2={intl.formatMessage({
                  id: 'Notifications.BranchLocation',
                })}
                heading3={intl.formatMessage({ id: 'Notifications.SpaceType' })}
                heading4={intl.formatMessage({
                  id: 'Notifications.BookingTimeDate',
                })}
                description1={intl.formatMessage({
                  id: 'Notifications.Description1',
                })}
                description2={intl.formatMessage({
                  id: 'Notifications.Description2',
                })}
                description3={intl.formatMessage({
                  id: 'Notifications.Description3',
                })}
                description4={intl.formatMessage({
                  id: 'Notifications.Description4',
                })}
                status={intl.formatMessage({ id: 'Notifications.Cancelled' })}
                color="[#FF3030]"
                background="[#FF5757]/[0.1]"
                borderColor="[#FF5757]"
              />
            </div>
          </div>
          <div className="row mx-0 ">
            <div className="pt-6">
            <Notification
                img="/media/icons/tableImages/tableImage.svg"
                heading1={intl.formatMessage({
                  id: 'Notifications.CustomerName',
                })}
                heading2={intl.formatMessage({
                  id: 'Notifications.BranchLocation',
                })}
                heading3={intl.formatMessage({ id: 'Notifications.SpaceType' })}
                heading4={intl.formatMessage({
                  id: 'Notifications.BookingTimeDate',
                })}
                description1={intl.formatMessage({
                  id: 'Notifications.Description1',
                })}
                description2={intl.formatMessage({
                  id: 'Notifications.Description2',
                })}
                description3={intl.formatMessage({
                  id: 'Notifications.Description3',
                })}
                description4={intl.formatMessage({
                  id: 'Notifications.Description4',
                })}
                status={intl.formatMessage({ id: 'Notifications.Paid' })}
                color="[#169401]"
                background="[#169401]/[0.1]"
                borderColor="[#169401]"
              />
            </div>
          </div>
          <div className="row mx-0">
            <div className="pt-6">
            <Notification
                img="/media/icons/tableImages/tableImage.svg"
                heading1={intl.formatMessage({
                  id: 'Notifications.CustomerName',
                })}
                heading2={intl.formatMessage({
                  id: 'Notifications.BranchLocation',
                })}
                heading3={intl.formatMessage({ id: 'Notifications.SpaceType' })}
                heading4={intl.formatMessage({
                  id: 'Notifications.BookingTimeDate',
                })}
                description1={intl.formatMessage({
                  id: 'Notifications.Description1',
                })}
                description2={intl.formatMessage({
                  id: 'Notifications.Description2',
                })}
                description3={intl.formatMessage({
                  id: 'Notifications.Description3',
                })}
                description4={intl.formatMessage({
                  id: 'Notifications.Description4',
                })}
                status={intl.formatMessage({ id: 'Notifications.Cancelled' })}
                color="[#FF3030]"
                background="[#FF5757]/[0.1]"
                borderColor="[#FF5757]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
