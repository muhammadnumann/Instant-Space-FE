import React, {useState, useRef} from 'react'
import { useRowState } from 'react-table'
import "./dropDown.css"


type Props = {
  className: string
  color: string
  image: string
  title: string
  btndata: string
  progress: string
  textdata:string
  id: string
}

const DropDown: React.FC<Props> = ({className, color, image, title, btndata,textdata, progress, id}) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <div className={`rounded-[8px] bg-transparent`}>
     
      
        <div className=" flex justify-start pb-4 bg-transparent"  ref={dropdownRef}>
          <button
           onClick={() => setIsOpen(!isOpen)}
            className=" w-full !border border-solid  rounded-lg px-5 h-18 text-center flex justify-between items-center"
            type="button"
            id={id}
          >
           <span  className="text-[#9A9AB0] ml-6">{title}</span>  
            <svg
              className="w-4 h-4 ml-40"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isOpen && (
          <div
            className="z-10 bg-white absolute top-40 left-84 divide-y divide-gray-100 rounded-lg shadow w-full"
          >
            <ul
              className="py-2 px-3 text-sm text-gray-700 dark:text-gray-200 text-center !pl-0"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          )}
          
          {/* <Dropdown1 /> */}
        </div>
    
    </div>

  )
}

export {DropDown}
