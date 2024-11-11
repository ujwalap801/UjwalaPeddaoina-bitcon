
import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ContactDetails from './components/ContactDetails';
import SearchContact from './components/SearchContact';
import './App.css';
import { AiOutlinePlus } from 'react-icons/ai';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    fetch('./src/assets/sample.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  const editContact = (updatedContact) => {
    setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>All Contacts</h1>
        <button className="add-button" onClick={() => setIsAddOpen(true)}>
          <AiOutlinePlus />
        </button>
      </header>

      <SearchContact contacts={contacts} setContacts={setContacts} />
      <ContactList
        contacts={contacts}
        setSelectedContact={setSelectedContact}
        onDelete={deleteContact}
        openEdit={() => setIsEditOpen(true)}
        openDetails={() => setIsDetailsOpen(true)}
      />

      {isAddOpen && <AddContact onClose={() => setIsAddOpen(false)} onSave={addContact} />}
      {isEditOpen && selectedContact && <EditContact contact={selectedContact} onClose={() => setIsEditOpen(false)} onSave={editContact} />}
      {isDetailsOpen && selectedContact && <ContactDetails contact={selectedContact} onClose={() => setIsDetailsOpen(false)} />}
    </div>
  );
}

export default App;
