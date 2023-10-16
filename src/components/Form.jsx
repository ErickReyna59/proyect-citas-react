import { useState, useEffect } from "react";
import Error from "./Error";
const Form = ({ patients, setPatients }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [high, setHigh] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, owner, email, high, symptoms].includes("")) {
      console.log("There is empty space");

      setError(true);
      return;
    }
    setError(false);

    //Patients Object
    const objectPatient = {
      name,
      owner,
      email,
      high,
      symptoms,
    };

    console.log(objectPatient);

    setPatients([...patients, objectPatient]);

    //Restart the form
    setName("");
    setOwner("");
    setEmail("");
    setHigh("");
    setSymptoms("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patients Monitoring</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and{" "}
        <span className="text-indigo-600 font-bold">Mange them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="Pet"
            className="block text-grey-700 uppercase font-bold"
          >
            Pet Name
          </label>
          <input
            id="Pet"
            type="text"
            placeholder="Pet's Name "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Owner"
            className="block text-grey-700 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            id="Owner"
            type="text"
            placeholder="Owner Name "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-grey-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Owner Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="Pet"
            className="block text-grey-700 uppercase font-bold"
          >
            High
          </label>
          <input
            id="high"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={high}
            onChange={(e) => setHigh(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="Symptoms"
            className="block text-grey-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="Symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the Symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="add patients"
        />
      </form>
    </div>
  );
};

export default Form;
