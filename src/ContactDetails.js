import React from "react";

function ContactDetails({ name, handle }) {
  return (
    <div className="contact-details">
      <p>{name}</p>
      <p>{handle}</p>
    </div>
  );
}

export default ContactDetails;
