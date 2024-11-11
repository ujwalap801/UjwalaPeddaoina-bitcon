import React, { useState } from 'react';

function EditContact({ contact, onClose, onSave }) {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [mobile, setMobile] = useState(contact.mobile);
  const [address, setAddress] = useState(contact.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: contact.id, name, email, mobile, address });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <h2>Edit Contact</h2>
     
        <label htmlFor="name">Name</label>
        <input type="text" value={name} className="form-control" onChange={(e) => setName(e.target.value)} required />
       
        <label htmlFor="email">Email</label>
        <input type="email" value={email} className="form-control"  onChange={(e) => setEmail(e.target.value)} required />
        
        <label htmlFor="mobile">Phone Number</label>
        <input type="tel" value={mobile} className="form-control"  onChange={(e) => setMobile(e.target.value)} required />
       
           
        <label htmlFor="address">Address</label>
        <input type="text" value={address}  className="form-control"onChange={(e) => setAddress(e.target.value)} />
       
        <br></br>
        <div className="d-flex justify-content-start">
        <button type="submit" className="btn btn-primary mr-2">Update</button>
        <button type="button" className="btn btn-secondary"  onClick={onClose}>Reset</button>
       
        </div>
      </form>
    </div>
  );
}

export default EditContact;
