import { useState } from "react";
import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatients from "./components/ListPatients";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="container mt-20 mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} />
        <ListPatients />
      </div>
    </div>
  );
}

export default App;
