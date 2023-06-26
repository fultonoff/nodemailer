"use client";

import React, { useState } from "react";

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();


   try {
     const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      }),
     })
   } catch (error) {
    console.log('error', error);
   }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message</label>
          <textarea value={message} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default contact;
