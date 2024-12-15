import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const AccordionComponent = ({ items = [] }) => {
  return (
    <Accordion
      showDivider={false}
      className="flex flex-col gap-[30px] faq-accordion !px-0"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={`Accordion ${index + 1}`}
          title={item.accordionTitle}
          className="font-poppins text-[18px] font-semibold border-[1px] border-light_gray py-[4px] px-[20px]"
          classNames={{
            title: "text-[#222] faq-title data-[open=true]:text-teal",
            indicator:
              "transition-all ease-in-out duration-300 faq-indicator data-[open=true]:text-teal  data-[open=true]:rotate-[-90deg] text-[#222] rotate-90 data-[open=true]:transition-all data-[open=true]:ease-in data-[open=true]:duration-300",
          }}
        >
          <p className="text-[#222] font-poppins text-[16px] font-light">
            {item.description}
          </p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
