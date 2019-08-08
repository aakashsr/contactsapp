import React, { Component } from "react";
import "./App.css";
import "./ListContacts";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: [],
    screen: "list"
  };

  componentDidMount = () => {
    ContactsAPI.getAll().then(contacts => {
      this.setState(() => ({ contacts }));
    });
  };

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => c.id !== contact.id)
    }));
    ContactsAPI.remove(contact);
  };

  onNavigate = () => {
    this.setState({ screen: "create" });
  };

  render() {
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}

export default App;
