import React from 'react'
import ModalTabs from './Tabs'

export default function Modal() {

  const tabs = [
    { title: "Truck Parking", name:"TruckParking", content: <Form/>},
    { title: "Car Parking", name:"CarParking", content: <Form/>},
    { title: "Warehouse", name:"Warehouse", content: <Form1/>},
    { title: "Temporary Storage", name:"TemporaryStorage", content: <Form1/>},
  ];
  
  return (
    <div>
      
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog rounded rounded-lg">
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
      </div>
      <div className="footer">
        <button type="button" className="btn custom-cancel-button fw-bold mb-8" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn custom-save-button fw-bold mb-8 mx-4">Save</button>
      </div>
    </div>
  </div>
</div>


    </div> 
  )
}
