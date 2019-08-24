import React from "react";
import Button from "./Buttons";
import ContactDetails from "./ContactDetails";
import ContactAvatar from "./ContactAvatar";

function Contact({ contact, id, avatarURL, name, handle, onDeleteContact }) {
  return (
    <li key={id} className="contact-list-item">
      <ContactAvatar avatarURL={avatarURL} />
      <ContactDetails name={name} handle={handle} />
      <Button contact={contact} onDeleteContact={onDeleteContact} />
    </li>
  );
}

export default Contact;
