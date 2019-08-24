import React from "react";
import Button from "./Buttons";

function Contact({ contact, id, avatarURL, name, handle, onDeleteContact }) {
  return (
    <li key={id} className="contact-list-item">
      <div
        className="contact-avatar"
        style={{
          backgroundImage: `url(${avatarURL})`
        }}
      />
      <div className="contact-details">
        <p>{name}</p>
        <p>{handle}</p>
      </div>
      <Button contact={contact} onDeleteContact={onDeleteContact} />
    </li>
  );
}

export default Contact;
