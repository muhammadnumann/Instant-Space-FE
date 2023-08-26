import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Login } from '../../app/modules/auth/components/Login';
import Form from '../../app/modules/auth/components/modalForms/Form';
import './components.css'
import clsx from 'clsx';
import Tabs from '../../app/modules/auth/components/cmpnt/Tabs';
import ModalTabs from '../../app/modules/auth/components/cmpnt/Tabs';
import Form1 from '../../app/modules/auth/components/modalForms/Form1';
import ManagerForm from '../../app/modules/auth/components/modalForms/ManagerForm';
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl';


export default function AddNewSpaceCard() {
const intl = useIntl();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const tabs = [
    { title: "Truck Parking", name:"TruckParking", content: <Form/>},
    { title: "Car Parking", name:"CarParking", content: <Form/>},
    { title: "Warehouse", name:"Warehouse", content: <Form1/>},
    { title: "Temporary Storage", name:"TemporaryStorage", content: <Form1/>},
  ];

  return (
    <>
    <div className="spacing px-10 rounded-lg items-center py-sm-0 py-8  ">
    <div className="img flex-col justify-center items-center ">
      <img
        src="/media/icons/cardIcons/space.svg"
        className="h-20 w-20 m-auto"
        alt=''
      />
      <div className='my-4 text-sm font-medium text-gray flex justify-center'>Total Spaces</div>
      <div className=' text-4xl font-bold text-black pb-12 flex justify-center'>205</div>
      <button className='font-bold text-base bg-[#0064FA1A] text-primary py-4 w-full !border !border-solid border-[#0064FA] rounded-xl mb-4'>View All Spaces</button>
      <button className='font-bold text-base text-white bg-[#0064FA] py-4 w-full !border !border-solid border-[#0064FA] rounded-xl flex justify-center items-center' data-bs-toggle="modal" data-bs-target="#exampleModal"> <div className="text-3xl font-light mb-1 mr-2 leading-3">+</div> Add New Space</button>
    </div>
  </div>
  
    <div>
      
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog rounded-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="custom-modal-title fw-bolder ml-6" id="exampleModalLabel">Add New Space</h1>
        <button type="button" className="btn-close mx-4 border-cross" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
                <div className='fv-row '>
                  <label
                    className={clsx('w-100 h-18 bg-transparent ml-3 fw-bold')}
                    id='modal-label'
                  >
                      Select Space Type
                  </label>
                </div>
                <ModalTabs tabs={tabs}/>
                {/* <ManagerForm/> */}
      </div>
      <div className="footer">
        <button type="button" className="btn custom-cancel-button fw-bold mb-8" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn custom-save-button fw-bold mb-8 mx-4">Save</button>
      </div>
    </div>
  </div>
</div>


    </div>  
  </>
  )
}
