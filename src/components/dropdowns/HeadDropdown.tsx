
import React from "react";
type Props = {
  label: string;
  byDefault: string;
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
};

const HeadDropDown = ({
    label,
    byDefault,
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,

}: Props) => (
    <div className="dropdown1 flex -items-center mr-4 mb-sm-0 mb-4">
            <div className="bg-transparent flex justify-center items-center ">
              <label className="font-semibold text-lg mr-4">{label}</label>
              <select className="custom-drop-down h-12 rounded-lg bg-white border border-solid px-4 ">
                <option defaultValue>{byDefault}</option>
                <option>{option1}</option>
                <option>{option2}</option>
                <option>{option3}</option>
                <option>{option4}</option>
                <option>{option5}</option>
                <option>{option6}</option>
              </select>
            </div>
        </div>
    );
export { HeadDropDown };