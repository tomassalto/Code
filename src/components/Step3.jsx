import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import Image from "next/image";
import AccordionComponent from "./Accordion";

const step3Schema = Yup.object({
  option: Yup.string().required("Debes seleccionar una opción"),
});

const Step3 = ({ onStepChange }) => {
  const formik = useFormik({
    initialValues: {
      option: "",
    },
    validationSchema: step3Schema,
    onSubmit: (values, { resetForm }) => {
      console.log("Opción seleccionada:", values.option);

      resetForm();
      onStepChange();
    },
  });

  const accordionData = [
    {
      accordionTitle: "EFECTIVO",
      description: (
        <div className="flex flex-col gap-[7px]">
          <div className="flex gap-[7px] items-center">
            <input
              type="radio"
              name="option"
              value="rapipago"
              className="custom-radio"
              checked={formik.values.option === "rapipago"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="text-dark_gray font-poppins text-[14px]">
              Rapipago
            </label>
          </div>
          <div className="flex gap-[7px] items-center">
            <input
              type="radio"
              name="option"
              value="pago_facil"
              className="custom-radio"
              checked={formik.values.option === "pago_facil"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="text-dark_gray font-poppins text-[14px]">
              Pago Facil
            </label>
          </div>
          <div className="flex gap-[7px] items-center">
            <input
              type="radio"
              name="option"
              value="paga_cuando_retires"
              className="custom-radio"
              checked={formik.values.option === "paga_cuando_retires"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="text-dark_gray font-poppins text-[14px]">
              Paga cuando retiras
            </label>
          </div>
        </div>
      ),
    },
    {
      accordionTitle: "MERCADOPAGO",
      description: (
        <div className="flex flex-col items-center">
          <Image
            src="/images/checkout/mercadopago.png"
            alt="mercado pago"
            width={233}
            height={319}
          />
        </div>
      ),
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit} className="w-[233px] sm:w-[498px]">
      <div className="flex flex-col gap-y-[10px] items-center">
        <AccordionComponent items={accordionData} />
        {formik.touched.option && formik.errors.option ? (
          <div className="text-[#E50505] text-[13px] font-poppins mt-1">
            {formik.errors.option}
          </div>
        ) : null}
        <Button
          text="CONTINUAR"
          type="submit"
          color="secondary"
          disabled={!formik.isValid || !formik.dirty}
        />
      </div>
    </form>
  );
};

export default Step3;
