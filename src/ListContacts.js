import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  // const { removeContacts } = removeContacts ;
  render() {
    // const contacts = this.props.contacts;
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
            />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button
              onClick={() => this.props.onDeleteContact(contact)} // One thing to note is that since we need to pass in contact as an argument we need to wrap the onDeleteContact function call in an arrow function.
              className="contact-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;
