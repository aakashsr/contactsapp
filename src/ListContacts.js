import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { Link } from "react-router-dom";

class ListContacts extends Component {
  state = {
    query: ""
  };

  // handleChange = event => {
  //   this.setState({
  //     query: event.target.value
  //   });
  // };

  updateQuery = value => {
    this.setState(() => ({
      query: value
    }));
  };

  clearQuery = () => {
    this.setState(() => ({
      query: ""
    }));
  };

  render() {
    const { query } = this.state;
    const { contacts, onDeleteContact } = this.props;

    const showingContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />

          <Link to="create" className="add-contact">
            Add Contact
          </Link>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} of {contacts.length}
            </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className="contact-list">
          {showingContacts.map(contact => (
            <Contact
              contact={contact}
              id={contact.id}
              avatarURL={contact.avatarURL}
              name={contact.name}
              handle={contact.handle}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ol>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;
