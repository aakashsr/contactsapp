import React, { Component } from 'react'

class ListContacts extends Component {

    render() {
        const contacts = this.props.contacts ;
        console.log(contacts);
        return (
           <ol className='contact-list'>
            {contacts.map( (contact) => {
                return <li key={contact.name}>{contact.name}</li>
            })}
           </ol>
        )
    }
}

export default  ListContacts