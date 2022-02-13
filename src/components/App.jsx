import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
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

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactItem} />

        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label>
        <ContactList
          contacts={contacts}
          onDeleteContactlist={this.deleteContactItem}
        />
      </>
    );
  }
}

App.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      contacts: PropTypes.array.isRequired,
      filter: PropTypes.string.isRequired,
    })
  ),
};

export default App;
