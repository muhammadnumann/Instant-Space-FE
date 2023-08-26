import React from "react";
import { useIntl } from 'react-intl';

type Props = {
  className: string;
  title: string;
  checked: string;
  img: string;
  available: string;
  gallery: string;
  phone: string;
  capacity: string;
  address: string;
  type: string;
  rate: string;
 
};

const SpaceCard = ({
  className,
  checked,
  title,
  img,
  gallery,
  phone,
  capacity,
  address,
  available,
  type,
  rate,
  
}: Props)  =>{
  const intl = useIntl();

return(
  <div className="flex flex-col rounded-lg card-shadow">
    <div className="img relative">
      <img alt="" src={img} className="w-full" />
    </div>
    <div className="gallery absolute pt-4 pl-4">
      <p className="bg-[#171D25] opacity-60 py-1 px-2 flex text-white rounded-lg">
        <img
          alt=""
          src="/media/icons/cardIcons/gallery.svg"
          className="mr-1"
        />
        {gallery}
      </p>
    </div>
    <div className="text bg-white rounded-lg ">
      <div className="text-lg font-bold pt-4 px-4">{title}</div>
      <div className="row mx-4 pt-4">
        <div className="px-0 col-7 flex items-center ">
          <img
            alt=""
            src="/media/icons/cardIcons/phone.svg"
            className="h-3.5 w-3.5"
          />
          <label className="text-sm pl-1">{phone}</label>
        </div>
        <div className="px-0 col-5 flex items-center">
          <img
            alt=""
            src="/media/icons/cardIcons/flag.svg"
            className="h-3.5 w-3.5"
          />
          <label className="text-sm pl-1">{intl.formatMessage({ id: "SpaceCard.CapacityHead" })}:
 {capacity}</label>
        </div>
      </div>
      <div className="row mx-4 pt-4">
        <div className="px-0 col-12 flex items-center">
          <img
            alt=""
            src="/media/icons/cardIcons/location.svg"
            className="h-3.5 w-3.5"
          />
          <label className="text-sm pl-1">{address}</label>
        </div>
      </div>
      <div className="row mx-4 py-4 ">
        <div className="px-0 col-8 flex items-center">
          <img
            alt=""
            src="/media/icons/cardIcons/space.svg"
            className="h-3.5 w-3.5"
          />
          <label className="text-sm pl-1">{intl.formatMessage({ id: "SpaceCard.TypeHead" })}: {type}</label>
        </div>
        <div className="px-0 col-4 flex items-center">
          <img
            alt=""
            src="/media/icons/cardIcons/dollar.svg"
            className="h-3.5 w-3.5"
          />
          <label className="text-sm pl-1">{intl.formatMessage({ id: "SpaceCard.RateHead" })}: {rate}</label>
        </div>
      </div>
      <div className="border-b-2"></div>
      <div className="row mx-4 py-4">
        <div className="px-0 col-7 flex items-center">
          <div className="form-switch flex  !p-0">
            <input
              className="form-check-input !w-9 !h-5 !mt-0 !ml-0"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            // {checked}
            />
          </div>
          <span className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300 pl-1">
            {available}
          </span>
        </div>
        <div className="px-0 col-5 flex justify-end items-center">
          <div className="flex ">
            <div className="px-1">
              <img
                alt=""
                src="/media/icons/cardIcons/electric1.svg"
                className="h-3.5 w-3.5"
              />
            </div>
            <div className="px-1">
              <img
                alt=""
                src="/media/icons/cardIcons/electric4.svg"
                className="h-3.5 w-3.5"
              />
            </div>
            <div className="px-1">
              <img
                alt=""
                src="/media/icons/cardIcons/electric3.svg"
                className="h-3.5 w-3.5"
              />
            </div>
            <div className="px-1">
              <img
                alt=""
                src="/media/icons/cardIcons/electric2.svg"
                className="h-3.5 w-3.5"
              />
            </div>
          </div>
          <div className="flex pl-6">
            <img
              alt=""
              src="/media/icons/cardIcons/threeDots.svg"
              className="h-3.5 w-3.5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)} 
export { SpaceCard };

