import React, { useState } from 'react';
import ClientForm from '../Components/ClientForm';
import Section from "../Components/Section";

const Main = () => {

  const apiRootURL = "http://09bd50d9135b.ngrok.io/";

  const [title, setTitle] = useState("Loading...");
  const [data, setData] = useState([]);

  const fetchClients = async () => {
    const response = await fetch(apiRootURL + "clients/", {
      method: "GET",
    });
    const responseJSON = await response.json();
    const newState = responseJSON["results"];
    setData((prevState) => newState);
  };

  const fetchBrands = async (clientID) => {
    const response = await fetch(apiRootURL + "brands/", {
      method: "GET",
    });
    const responseJSON = await response.json();
    const results = responseJSON["results"];
    console.log(results);
    console.log(apiRootURL + "clients/" + clientID + "/");
    const newState = results.filter(result => result.client === (apiRootURL + "clients/" + clientID + "/"));
    console.log(newState);
    setData((prevState) => newState);
  };

  const fetchProducts = async () => {
    const response = await fetch(apiRootURL + "products/", {
      method: "GET",
    });
    const responseJSON = await response.json();
    const newState = responseJSON["results"];
    setData((prevState) => newState);
  };

  const changeTitle = (newTitle) => {
    const newState = newTitle;
    setTitle((prevState) => newState);
  };

  return (
    <section className="text-gray-600 body-font flex-grow">
      <div className="lg:px-12 lg:py-12 mx-auto">
        <div className="container mx-auto flex flex-wrap px-8 py-4 flex-row md:flex-row items-center justify-between">
          <button className="items-center text-green-600 bg-transparent border-b border-green-600 py-1 px-3 focus:outline-none hover:bg-gray-200 text-base">Back</button>
          <button className="items-center text-red-600 bg-transparent border-b border-red-600 py-1 px-3 focus:outline-none hover:bg-gray-200 text-base">Manage</button>
        </div>
        <div className="flex flex-wrap">
          <Section section_title={title} section_data={data} fC={fetchClients} fB={fetchBrands} fP={fetchProducts} cT={changeTitle} />
        </div>
      </div>
    </section>
  );

  /* return (
    <section className="text-gray-600 body-font flex-grow">
      <ClientForm />
    </section>
  ); */
};

export default Main;
