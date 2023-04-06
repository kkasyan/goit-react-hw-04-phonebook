import css from './app.module.css';
import { useState, useCallback } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import useLocalStorage from 'hooks/useLocalStorage';
import { filterContacts } from './filterContacts';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage({
    key: 'contacts',
    initialValue: [],
  });
  const [filter, setFilter] = useState('');

  const addContact = useCallback(
    data => {
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

      setContacts(prevContacts => {
        const newContact = {
          id: nanoid(),
          ...data,
        };
        return [...prevContacts, newContact];
      });
    },
    [setContacts, contacts]
  );

  const removeContact = useCallback(
    contactId => {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== contactId)
      );
    },
    [setContacts]
  );

  const changeFilter = useCallback(
    ({ target }) => {
      setFilter(target.value);
    },
    [setFilter]
  );

  const filteredContacts = filterContacts(filter, contacts);

  return (
    <div className={css.wrap}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <section className={css.list}>
        <h2 className={css.contactsHeader}>Contacts</h2>
        {contacts.length > 0 && <Filter onChange={changeFilter} />}
        {contacts.length > 0 ? (
          <ContactList items={filteredContacts} removeContact={removeContact} />
        ) : (
          <p className={css.noContacts}>Huh... Still no contacts here!</p>
        )}
      </section>
    </div>
  );
};
