import React from 'react';
import SimpleDescription from './SimpleDescription';
import SimpleEMail from './SimpleEMail';
import SimpleInput from './SimpleInput';

const ClientForm = () => {
  return (
    <div className="container h-full px-4 py-4 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-2 flex flex-col w-full relative z-10">
        <h1 className="title-font text-3xl font-bold text-gray-900 my-2 px-1 border-b">+ Client</h1>
        <SimpleInput fieldLabel="Client's Name" fieldLabelFor="clients-name" />
        <SimpleInput fieldLabel="Point Of Contact (PoC) At Client's Site" fieldLabelFor="client-poc" />
        <SimpleDescription fieldLabel="Client's Address" fieldLabelFor="clients-address" fieldPlaceholder="Unit #, Building, Area, Landmark, Road, City, State, Country - PinCode" />
        <SimpleEMail fieldLabel="Client's E-Mail Address" fieldLabelFor="clients-email" fieldPlaceholder="firstname.lastname@company.com" />
        <button className="text-white bg-green-600 border-0 my-8 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">Add</button>
      </div>
    </div>

  );
};

export default ClientForm;
