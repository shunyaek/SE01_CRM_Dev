import React, { useState } from 'react';
import SimpleDescription from './SimpleDescription';
import SimpleEMail from './SimpleEMail';
import SimpleInput from './SimpleInput';

const ClientForm = (props) => {
  const { cC } = props;
  const [clientName, setClientName] = useState("");
  const [clientPOC, setClientPOC] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientEMail, setClientEMail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleClientFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitting...");
    setIsSubmitting(true);
    const newClient = { name: clientName, point_of_contact: clientPOC, address: clientAddress, email: clientEMail };
    await cC(newClient);
    console.log(newClient);
    setIsSubmitting(false);
  };
  return (
    <form onSubmit={handleClientFormSubmit} className="container h-full px-4 py-4 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-2 flex flex-col w-full relative z-10">
        <h1 className="title-font text-3xl font-bold text-gray-900 my-2 px-1 border-b">+ Client</h1>
        <SimpleInput inputValue={clientName} inputValueController={setClientName} fieldLabel="Client's Name" fieldLabelFor="clients-name" />
        <SimpleInput inputValue={clientPOC} inputValueController={setClientPOC} fieldLabel="Point Of Contact (PoC) At Client's Site" fieldLabelFor="client-poc" />
        <SimpleDescription inputValue={clientAddress} inputValueController={setClientAddress} fieldLabel="Client's Address" fieldLabelFor="clients-address" fieldPlaceholder="Unit #, Building, Area, Landmark, Road, City, State, Country - PinCode" />
        <SimpleEMail inputValue={clientEMail} inputValueController={setClientEMail} fieldLabel="Client's E-Mail Address" fieldLabelFor="clients-email" fieldPlaceholder="firstname.lastname@company.com" />
        <button className="text-white bg-green-600 border-0 my-8 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">Add</button>
        {isSubmitting && <div className="justify-center items-center">
          <h2 className="text-xl font-semibold w-full px-2">Adding new client...</h2>
        </div>}
      </div>
    </form>
  );
};

export default ClientForm;
