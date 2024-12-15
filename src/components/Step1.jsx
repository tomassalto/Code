import React, { useEffect } from "react";
import { checkoutSchema } from "../schemas/index";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

const Step1 = () => {
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
    },
  });

  return (
    <div className="flex flex-col justify-center lg:!w-[350px]">
      <h2 className="text-dark_gray font-poppins text-[18px] font-semibold">
        DATOS DE CONTACTO
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-y-[10px] items-center">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="font-poppins text-dark_gray text-[14px]"
            >
              Nombre
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
              Apellido
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
              Email
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
              Teléfono
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
          <button
            type="button"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => formik.handleSubmit()}
          >
            Validar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Step1;
