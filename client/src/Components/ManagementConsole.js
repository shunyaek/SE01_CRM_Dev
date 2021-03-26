import React, { useEffect } from 'react';

const ManagementConsole = (props) => {
  const { section_title, cT } = props;
  const displayManagementConsole = async () => {
    cT("Manage");
  };
  useEffect(() => {
    displayManagementConsole();
  }, []);
  return (
    <div className="px-2 w-full">
      <div className="h-full overflow-hidden">
        <h1 className="title-font text-3xl font-bold text-gray-900 mx-4 my-2 px-1 border-b">{section_title}</h1>
        <div className="py-2 px-4">
          <h3 className="text-xl font-semibold w-full px-2">Clients</h3>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-green-800 bg-green-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Add Client</button>
            </div>
          </div>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-green-800 bg-green-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Edit Client(s)</button>
            </div>
          </div>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-red-800 bg-red-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Delete Client(s)</button>
            </div>
          </div>
          <h3 className="text-xl font-semibold w-full px-2">Brands</h3>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-green-800 bg-green-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Add Brands</button>
            </div>
          </div>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-green-800 bg-green-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Edit Brands(s)</button>
            </div>
          </div>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-red-800 bg-red-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Delete Brands(s)</button>
            </div>
          </div>
          <h3 className="text-xl font-semibold w-full px-2">Products</h3>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-green-800 bg-green-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Add Products</button>
            </div>
          </div>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-green-800 bg-green-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Edit Products(s)</button>
            </div>
          </div>
          <div className="py-1 w-full">
            <div className="h-full flex items-center justify-center px-2 py-1 rounded-lg">
              <button className="w-full inline-flex items-center border border-red-800 bg-red-600 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-white" onClick={() => {
                console.log("Add A New Client");
              }}>Delete Products(s)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementConsole;
