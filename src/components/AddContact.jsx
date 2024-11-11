import React, { useState } from 'react';

function AddContact({ onClose, onSave }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email, mobile, address });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <h2>Add Contact</h2>
        <hr></hr>

        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Your Name"  className="form-control"  value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Your Email" value={email}  className="form-control" onChange={(e) => setEmail(e.target.value)} required />
        
        <label htmlFor="mobile">Phone Number</label>
        <input type="tel" placeholder="Enter You Phone Number" value={mobile}  className="form-control" onChange={(e) => setMobile(e.target.value)} required />
       
        <label htmlFor="address">Address</label>
        <input type="text" placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} />

      <br></br>
     <div className="d-flex justify-content-start">
     <button type="submit" className="btn btn-primary mr-2">Save</button>
     <button type="button" className="btn btn-secondary" onClick={onClose}>Reset</button>
     </div>
     
      </form>
    </div>
  );
}

export default AddContact;

