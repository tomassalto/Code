import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import Image from "next/image";
import AccordionComponent from "./Accordion";

const step2Schema = Yup.object({
  terms: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los términos y condiciones"
  ),
  terms_2: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los términos y condiciones"
  ),
  option: Yup.string().required("Debes seleccionar una opción de envío"),
});

const Step2 = ({ onStepChange }) => {
  const formik = useFormik({
    initialValues: {
      terms: false,
      terms_2: false,
      option: "",
    },
    validationSchema: step2Schema,
    onSubmit: (values, { resetForm }) => {
      console.log("Opción seleccionada:", values.option);
      console.log("Términos aceptados:", values.terms);
      resetForm();
      onStepChange();
    },
  });

  const accordionData = [
    {
      accordionTitle: "PUNTO DE RETIRO",
      description: (
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[15px]">
            <Image
              src="/icons/checkout/pin.svg"
              alt="pin"
              width={24}
              height={24}
            />
            <p className="text-dark_gray font-poppins text-[16px] font-medium">
              PUNTO DE RETIRO
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px] items-start w-full">
              <input
                type="checkbox"
                id="terms"
                className="border-[1px] mt-[3px] bg-[#fff] rounded-[4px] border-[#E1E5EF] size-5 accent-violet"
                {...formik.getFieldProps("terms")}
              />
              <label className="text-[#C1C1C1] text-[14px]" htmlFor="terms">
                Lorem ipsum dolor sit amet consectetur. Urna nec pellentesque
                diam et in diam eu netus nec. Convallis non velit nulla quis sit
                vulputate convallis amet dignissim.
              </label>
            </div>
            {formik.touched.terms && formik.errors.terms ? (
              <div className="flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]">
                <Image
                  src="/icons/auth/error.svg"
                  width={18}
                  height={18}
                  alt="error"
                />
                {formik.errors.terms}
              </div>
            ) : null}
            <div className="flex gap-[10px] items-start w-full">
              <input
                type="checkbox"
                id="terms_2"
                className="border-[1px] mt-[3px] bg-[#fff] rounded-[4px] border-[#E1E5EF] size-5 accent-violet"
                {...formik.getFieldProps("terms_2")}
              />
              <label className="text-[#C1C1C1] text-[14px]" htmlFor="terms_2">
                Lorem ipsum dolor sit amet consectetur. Urna nec pellentesque
                diam et in diam eu netus nec. Convallis non velit nulla quis sit
                vulputate convallis amet dignissim.
              </label>
            </div>
            {formik.touched.terms_2 && formik.errors.terms_2 ? (
              <div className="flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]">
                <Image
                  src="/icons/auth/error.svg"
                  width={18}
                  height={18}
                  alt="error"
                />
                {formik.errors.terms_2}
              </div>
            ) : null}
          </div>
        </div>
      ),
    },
    {
      accordionTitle: "ENVIO",
      description: (
        <div className="flex flex-col gap-[15px] items-start">
          <div className="flex gap-y-[7px] gap-x-[30px]">
            <div className="flex gap-[7px] items-start">
              <input
                type="radio"
                name="option"
                value="oca"
                className="custom-radio mt-1"
                checked={formik.values.option === "oca"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="flex flex-col justify-start gap-[7px]">
                <label className="text-dark_gray font-poppins text-[14px]">
                  OCA - Envío a domicilio
                </label>
                <p className="text-[#999] font-poppins text-[14px]">
                  Llega a partir del 30/8
                </p>
              </div>
            </div>
            <p className="text-dark_gray font-poppins text-[14px] font-medium">
              $9000
            </p>
          </div>
          <div className="flex gap-y-[7px] gap-x-[30px]">
            <div className="flex gap-[7px] items-start">
              <input
                type="radio"
                name="option"
                value="andreani"
                className="custom-radio mt-1"
                checked={formik.values.option === "andreani"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="flex flex-col justify-start gap-[7px]">
                <p className="text-dark_gray font-poppins text-[14px]">
                  Andreani - Envío a domicilio
                </p>
                <p className="text-[#999] font-poppins text-[14px]">
                  Llega a partir del 30/8
                </p>
              </div>
            </div>
            <p className="text-dark_gray font-poppins text-[14px] font-medium">
              $9000
            </p>
          </div>
          <div className="flex gap-y-[7px] gap-x-[30px]">
            <div className="flex gap-[7px] items-start">
              <input
                type="radio"
                name="option"
                value="retail"
                className="custom-radio mt-1"
                checked={formik.values.option === "retail"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="flex flex-col justify-start gap-[7px]">
                <label className="text-dark_gray font-poppins text-[14px]">
                  Retiro en tienda
                </label>
                <p className="text-[#999] font-poppins text-[14px]">
                  Retirá desde el 30/8
                </p>
              </div>
            </div>
            <p className="text-dark_gray font-poppins text-[14px] font-medium">
              Sin costo
            </p>
          </div>
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
          text="Siguiente"
          type="submit"
          color="secondary"
          disabled={!formik.isValid || !formik.dirty}
          className="w-[100%] mt-[30px]"
        />
      </div>
    </form>
  );
};

export default Step2;
