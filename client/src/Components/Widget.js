import React from 'react';

const Widget = (props) => {

  const { identifier, name, poc, fC, cC, fB, fP, cT } = props;

  return (
    <div className="py-1 w-full">
      <div className="h-full flex items-center border-gray-200 border px-2 py-1 rounded-lg shadow">
        <div className="flex-grow">
          <h2 className="px-2 text-gray-900 title-font font-semibold text-xl">{name}</h2>
          <p className="px-2 text-gray-700">{poc}</p>
        </div>
        <button className="inline-flex items-center border border-green-600 bg-white py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base" onClick={() => {
          fB(identifier);
          cT("Brands");
        }}>View</button>
        <button className="inline-flex items-center border border-green-600 bg-white py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base" onClick={async () => {
          const newClient = { identifier: "0fc25da3-b350-4832-8219-34b76ece1c60", name: "10am Inc." };
          console.log(newClient);
          await cC(newClient);
          await fC();
          cT("Clients");
        }}>Create</button>
      </div>
    </div>
  );
};

export default Widget;
