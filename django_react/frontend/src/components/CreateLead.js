import { Fragment } from "react";
import React from "react";
import { useState } from 'react';


const CreateLead = () => {
  const [name, setName] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
  
export default CreateLead;