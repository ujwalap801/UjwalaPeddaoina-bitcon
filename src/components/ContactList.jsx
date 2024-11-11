// import React from 'react';
// import { FaTrashAlt, FaEdit, FaEye,FaUser  } from 'react-icons/fa';

// function ContactList({ contacts, setSelectedContact, onDelete, openEdit, openDetails }) {
//   return (
//     <div className="contact-list">
//       {contacts.map(contact => (
    
//         <div key={contact.id} className="contact-item">

// <div className="contact-id-circle">
//             {contact.id}
//         </div>

//           <div className="contact-info">
//             <span className="contact-icon">
//               <FaUser /> 
//             </span>
//             <div className="contact-details">
//               <span className="contact-name">{contact.name}</span>
//               <br></br>
//               <span className="contact-mobile">{contact.mobile}</span>
//             </div>
//           </div>

//           <button onClick={() => { setSelectedContact(contact); openDetails(); }}>
//             <FaEye /> 
//           </button>
       
//           <button onClick={() => { setSelectedContact(contact); openEdit(); }}>
//             <FaEdit />
//           </button>
          
//           <button onClick={() => onDelete(contact.id)}>
//             <FaTrashAlt />
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ContactList;




import React from 'react';

import { FaTrashAlt, FaEdit, FaEye,FaUser  } from 'react-icons/fa';

function ContactList({ contacts, setSelectedContact, onDelete, openEdit, openDetails }) {
  return (
    <div className="contact-list">
      {contacts.map(contact => (
    
        <div key={contact.id} className="contact-item">

      <div className="contact-id-circle">
            {contact.id}
        </div>

          <div className="contact-info">
            <span className="contact-icon">
              <FaUser /> 
            </span>
            <div className="contact-details">
              <span className="contact-name">{contact.name}</span>
              <br></br>
              <span className="contact-mobile">{contact.mobile}</span>
            </div>
          </div>

          <button onClick={() => { setSelectedContact(contact); openDetails(); }}>
            <FaEye /> 
          </button>
       
          <button onClick={() => { setSelectedContact(contact); openEdit(); }}>
            <FaEdit />
          </button>
          
          <button onClick={() => onDelete(contact.id)}>
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
