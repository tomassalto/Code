"use client";
import Accordion from "../../components/Accordion";
import faqData from "../../data/faq.json";

const Faq = () => {
  const faq = faqData.faq;

  return (
    <section className="flex justify-center items-center py-[50px]">
      <div className="flex flex-col gap-y-[30px] w-[311px] xs:w-[315px] sm:w-[580px] lg:w-[851px] xl:w-[980px] xhd:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <h1 className="text-teal font-serif_display text-[32px]">Dudas</h1>
        <Accordion items={faq} />
      </div>
    </section>
  );
};

export default Faq;
