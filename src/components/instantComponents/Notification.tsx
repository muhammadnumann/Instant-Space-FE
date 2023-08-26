
import React from "react";
type Props = {
  img: string;
  heading1: string;
  heading2: string;
  heading3?: string;
  heading4?: string;
  description1: string;
  description2: string;
  description3?: string;
  description4?: string;
  status: string;
  color:string;
  background:string
  borderColor: string
};

const Notification = ({
    img,
    heading1,
    heading2,
    heading3,
    heading4,
    description1,
    description2,
    description3,
    description4,
    status,
    color,
    background,
    borderColor

}: Props) => (
    <div className="styling bg-white card-shadow rounded flex justify-center items-center py-4 px-4 min-w-[800px]">
    <div className="col-1">
      <img src={img} alt="" />
    </div>
    <div className="col-2">
      <div className="flex-col flex justify-center">
        <p className="mb-0 text-gray text-normal font-bold flex items-center ml-3">
        {heading1}
        </p>
        <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3 pt-2">
        {description1}
        </p>
      </div>
    </div>
    <div className="col-3">
      <div className="flex-col flex justify-center">
        <p className="mb-0 text-gray text-normal font-bold flex items-center ml-3">
       {heading2}
        </p>
        <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3 pt-2">
       {description2}
        </p>
      </div>
    </div>
    <div className="col-2">
      <div className="flex-col flex justify-center">
        <p className="mb-0 text-gray text-normal font-bold flex items-center ml-3">
       {heading3}
        </p>
        <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3 pt-2">
       {description3}
        </p>
      </div>
    </div>
    <div className="col-3">
      <div className="flex-col flex justify-center">
        <p className="mb-0 text-gray text-normal font-bold flex items-center ml-3">
        {heading4}
        </p>
        <p className="mb-0 text-dark text-sm font-medium flex items-center ml-3 pt-2">
       {description4}
        </p>
      </div>
    </div>
    <div className="col-1">
      <div className={`text-${color} text-sm font-bold px-3 py-1 !bg-${background} !border border-solid border-${borderColor} rounded-lg flex justify-center `}>
       {status}
      </div>
    </div>
  </div>
    );
export { Notification };