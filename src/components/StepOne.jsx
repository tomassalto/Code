import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { toast } from "react-toastify";
import Button from "./Button";

const checkoutSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "El nombre no puede contener números")
    .required("El nombre es obligatorio"),

  lastname: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "El apellido no puede contener números")
    .required("El apellido es obligatorio"),

  email: Yup.string()
    .required("El email es obligatorio")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email inválido"
    ),

  phone: Yup.string()
    .matches(
      /^(?!15)[0-9]{10}$/,
      "El número de teléfono debe contener exactamente 10 dígitos, no puede empezar con 15 y no puede contener '+'"
    )
    .required("El teléfono es obligatorio"),
});

const Step1Form = ({ onStepChange }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Datos enviados:", values);
      toast.success("¡Pregunta enviada!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      resetForm();
      onStepChange();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[250px] xs:w-[273px] sm:w-[492px] lg:w-[300px] xl:w-[350px]"
    >
      <div className="flex flex-col gap-y-[10px] items-center">
        <div className="flex flex-col w-full">
          <label
            htmlFor="name"
            className="font-poppins text-dark_gray text-[14px]"
          >
            NOMBRE
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`bg-[#FAFAFA] w-full border-[1px] h-[46px] px-2 py-1 ${
              formik.touched.name && formik.errors.name
                ? "border-[#E50505]"
                : "border-light_gray"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="flex gap-1 text-[#E50505] text-[13px] font-poppins mt-1">
              <Image
                src="/icons/auth/error.svg"
                width={18}
                height={18}
                alt="error"
              />
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="lastname"
            className="font-poppins text-dark_gray text-[14px]"
          >
            APELLIDO
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className={`bg-[#FAFAFA] w-full border-[1px] h-[46px] px-2 py-1 ${
              formik.touched.lastname && formik.errors.lastname
                ? "border-[#E50505]"
                : "border-light_gray"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="flex gap-1 text-[#E50505] text-[13px] font-poppins mt-1">
              <Image
                src="/icons/auth/error.svg"
                width={18}
                height={18}
                alt="error"
              />
              {formik.errors.lastname}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="font-poppins text-dark_gray text-[14px]"
          >
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`bg-[#FAFAFA] w-full border-[1px] h-[46px] px-2 py-1 ${
              formik.touched.email && formik.errors.email
                ? "border-[#E50505]"
                : "border-light_gray"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="flex gap-1 text-[#E50505] text-[13px] font-poppins mt-1">
              <Image
                src="/icons/auth/error.svg"
                width={18}
                height={18}
                alt="error"
              />
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="phone"
            className="font-poppins text-dark_gray text-[14px]"
          >
            TELÉFONO
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className={`bg-[#FAFAFA] w-full border-[1px] h-[46px] px-2 py-1 ${
              formik.touched.phone && formik.errors.phone
                ? "border-[#E50505]"
                : "border-light_gray"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="flex gap-1 text-[#E50505] text-[13px] font-poppins mt-1">
              <Image
                src="/icons/auth/error.svg"
                width={18}
                height={18}
                alt="error"
              />
              {formik.errors.phone}
            </div>
          ) : null}
        </div>

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

export default Step1Form;
