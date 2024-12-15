"use client";
import React from "react";
import CardOurClients from "../CardOurClient";
import "./OurClients.css";

import clientsData from "../../data/our_clients.json";

const OurClients = () => {
  const duplicatedClients = [
    ...clientsData.our_clients,
    ...clientsData.our_clients,
    ...clientsData.our_clients,
  ];

  return (
    <section className="flex justify-center items-center pt-[50px]">
      <div className="flex flex-col justify-center items-center gap-y-[20px] w-[311px] sm:w-[580px] lg:w-[851px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <h1 className="text-teal text-[32px] font-serif_display tracking-[2.56px] text-center">
          QUÉ DICEN NUESTROS CLIENTES
        </h1>
        <div className="logos group relative overflow-hidden whitespace-nowrap py-10 w-[311px] sm:w-[580px] lg:w-[851px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
          <div className="element group-hover:animation-pause inline-flex w-max text-[40px] font-bold justify-start items-start">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="mx-4 inline-flex items-center">
                <CardOurClients
                  star={client.star}
                  description={client.description}
                  name={client.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
