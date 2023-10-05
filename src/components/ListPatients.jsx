import Patients from "./Patients";

function ListPatients() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:after:h-screen overflow-y-scroll  ">
      <h2 className="font-black text-center text-3xl">List Patients</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Manage your{' '}
        <span className="text-indigo-600 font-bold  ">
          Patients and Appointments
        </span>
      </p>
     <Patients/>
     <Patients/>
     <Patients/>
     <Patients/>
    </div>
  );
}

export default ListPatients;
