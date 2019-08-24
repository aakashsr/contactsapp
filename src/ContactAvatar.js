import React from "react";

const ContactAvatar = ({ avatarURL }) => {
  return (
    <div
      className="contact-avatar"
      style={{
        backgroundImage: `url(${avatarURL})`
      }}
    />
  );
};

export default ContactAvatar;
