import React, { useState } from 'react';

function SearchContact({ contacts, setContacts }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setContacts(
      contacts.filter(contact => 
        contact.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        contact.mobile.includes(e.target.value)
      )
    );
  };

  return (
    <div className="search-box">
      <input type="text" placeholder="Search Contact" value={query} onChange={handleSearch} />
    </div>
  );
}

export default SearchContact;
