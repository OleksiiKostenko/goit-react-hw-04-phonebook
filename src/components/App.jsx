import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { Filter } from './Filter';
import { PhonebookList } from './PhonebookList';
import css from 'components/App.module.css';
import { Context } from './Context';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const addContact = data => {
    console.log('data', data);
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    const names = contacts.map(contact => contact.name);
    if (names.includes(contact.name)) {
      alert(`${contact.name}is already in contacts.`);
      return;
    }
    return setContacts(contacts => [contact, ...contacts]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const hendleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterContacts = evt => {
    setFilter(evt.target.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Context>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2 className={css.contact_title}>Contacts</h2>
        <Filter filter={filter} onChange={filterContacts} />
        <PhonebookList
          contacts={filteredList}
          onDeleteContact={hendleDeleteContact}
        />
      </div>
    </Context>
  );
};
