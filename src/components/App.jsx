import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { Filter } from './Filter';
import { PhonebookList } from './PhonebookList';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(({ contacts }) => {
      const names = contacts.map(contact => contact.name);
      if (names.includes(contact.name)) {
        alert(`${contact.name}is already in contacts.`);
        return;
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  hendleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = evt => {
    this.setState({ filter: evt.target.value });
  };
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={css.contact_title}>Contacts</h2>
        <Filter filter={filter} onChange={this.filterContacts} />
        <PhonebookList
          contacts={filteredList}
          onDeleteContact={this.hendleDeleteContact}
        />
      </div>
    );
  }
}
