import React, { useEffect } from 'react';
import Widget from "./Widget";
// import { db } from "../data";

const Section = (props) => {

  const { section_title, section_data, fC, cC, fB, fP, cT } = props;

  const displayClients = async () => {
    await fC();
    cT("Clients");
  };

  useEffect(() => {
    console.log("Inside Section...");
    displayClients();
  }, []);

  return (
    <div className="px-2 w-full">
      <div className="h-full overflow-hidden">
        <h1 className="title-font text-3xl font-bold text-gray-900 mx-4 my-2 px-1 border-b">{section_title}</h1>
        <div className="py-2 px-4">
          {section_data.map((dataItem) => {
            return (
              <Widget key={dataItem.identifier} identifier={dataItem.identifier} name={dataItem.name} poc={dataItem.point_of_contact} fC={fC} cC={cC} fB={fB} fP={fP} cT={cT} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section;
