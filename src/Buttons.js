import React from 'react';

const Buttons = ({contact,onDeleteContact}) => {
    return (
        <button
          onClick={() => onDeleteContact(contact)} // One thing to note is that since we need to pass in contact as an argument we need to wrap the onDeleteContact function call in an arrow function.
          className="contact-remove"
        >
          Remove
        </button>
    );
}

export default Buttons;
