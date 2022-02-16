import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactItem = (name, number) => {
    const contact = {
      id: (this.contactId = nanoid()),
      name,
      number,
    };

    const dublicateName = this.state.contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (dublicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContactItem = ContactItemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== ContactItemId
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContactItem = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const contactFilter = this.getContactItem();

    return (
      <div style={{ margin: '50px auto 0', textAlign: 'center' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactItem} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={contactFilter}
          onDeleteContactlist={this.deleteContactItem}
        />
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      contacts: PropTypes.func.isRequired,
      filter: PropTypes.string.isRequired,
    })
  ),
};

export default App;
