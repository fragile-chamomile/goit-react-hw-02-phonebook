import React from 'react';
import PropTypes from 'prop-types';
import { Item, Contact, Button } from './ContactList.styled.jsx';

const ContactList = ({ contacts, onDeleteContactlist }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Contact>
          {name}: {number}
        </Contact>
        <Button onClick={() => onDeleteContactlist(id)}>Delete</Button>
      </Item>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContactlist: PropTypes.func.isRequired,
};

export default ContactList;
