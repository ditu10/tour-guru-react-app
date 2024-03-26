import React, { useState } from 'react'
import { TiWorldOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Modal from 'react-bootstrap/Modal';

export const MyCenteredModal = () => {
    const [lgShow, setLgShow] = useState(false);
  
  
  return (
    <>

      <button className='w-50 py-2 px-2 rounded border-0 fs-5' type='button' onClick={() => setLgShow(true)}>
      <div className='d-flex justify-content-between'>
        <div>
          <TiWorldOutline/> <span className='text-secondary'>Destination</span>
        </div>
        <div>
        <IoIosArrowDown />
            
        </div>
      </div>

      </button> 
      
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Explore Experiences
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Search by Destination
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <section>

      </section>

        </Modal.Body>
      </Modal>
    </>
  )
}
