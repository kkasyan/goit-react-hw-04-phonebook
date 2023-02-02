import css from './app.module.css';
import { Component } from 'react';

import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  static defaultProps = { contacts: [] };
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === data.name.toLowerCase() &&
          contact.number === data.number
      )
    ) {
      alert(`${data.name} is already in your contact book!`);
      return;
    }

    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  removeContact = contactId => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== contactId);
      return {
        contacts: newContacts,
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts?.length) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (
      nextContacts !== prevContacts &&
      nextContacts.length > prevContacts.length
    ) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const { addContact, removeContact, changeFilter, filterContacts } = this;
    const filteredContacts = filterContacts();
    return (
      <div className={css.wrap}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <section className={css.list}>
          <h2 className={css.contactsHeader}>Contacts</h2>
          {contacts.length > 0 && (
            <Filter value={filter} onChange={changeFilter} />
          )}
          {contacts.length > 0 ? (
            <ContactList
              items={filteredContacts}
              removeContact={removeContact}
            />
          ) : (
            <p className={css.noContacts}>Huh... Still no contacts here!</p>
          )}
        </section>
      </div>
    );
  }
}
