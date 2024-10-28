import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadList from "./leadList";
import CreateLead from "./createLead";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LeadList />} />
          <Route path="/create" element={<CreateLead />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
