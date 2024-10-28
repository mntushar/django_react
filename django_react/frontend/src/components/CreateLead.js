import { Fragment } from "react";
import React from "react";
import { useState } from 'react';

class CreateLead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
      loaded: false,
      placeholder: "Loading",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${this.state.name}`);
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

// function CreateLead() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name}`)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input 
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
//   }
  
  export default CreateLead;