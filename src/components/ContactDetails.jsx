
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function ContactDetails({ contact, onClose }) {
  return (
    <div className="modal d-flex justify-content-center align-items-center" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="card text-black bg-light" style={{ width: '400px' }}>
        <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#d1ecf1' }}>
          <h5 className="mb-0">Contact Details</h5>
          <AiOutlineClose style={{ cursor: 'pointer' }} onClick={onClose} />
        </div>
        <div className="card-body" style={{ backgroundColor: 'white' }}>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Mobile:</strong> {contact.mobile}</p>
          <p><strong>Address:</strong> {contact.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;

