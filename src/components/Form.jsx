"use client";
import Image from "next/image";
import Button from "./Button";
import { useFormik } from "formik";
import { questionSchema } from "../schemas/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      question: "",
    },
    validationSchema: questionSchema,
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
    <section className="flex flex-col justify-center items-center py-[50px]">
      <div className="flex flex-col gap-y-[50px] w-[311px] xs:w-[315px] sm:w-[580px] lg:w-[851px] xl:w-[980px] xhd:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <h1 className="text-teal text-center font-serif_display text-[32px] leading-[32px] tracking-[8px]">
          ¿TENÉS ALGUNA PREGUNTA?
        </h1>
        <div className="flex gap-[50px]">
          <Image
            src="/images/form/image_1.png"
            width={300}
            height={300}
            alt="form"
            className="hidden lg:flex object-cover xl:w-[366px] xhd:w-[426px] fullhd:w-[506px]"
          />
          <form onSubmit={formik.handleSubmit} className="w-full lg:w-[564px]">
            <div className="flex flex-col gap-y-[50px] justify-between fullhd:h-full">
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
                    htmlFor="question"
                    className="font-poppins text-dark_gray text-[14px]"
                  >
                    ¿Cuál es tu pregunta?
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    cols="30"
                    rows="10"
                    className={`bg-[#FAFAFA] w-full lg:max-h-[153px] border-[1px] h-[153px] px-2 py-1 ${
                      formik.touched.question && formik.errors.question
                        ? "border-[#E50505]"
                        : "border-light_gray"
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.question}
                  ></textarea>
                  {formik.touched.question && formik.errors.question ? (
                    <div className="flex gap-1 text-[#E50505] text-[13px] font-poppins mt-1">
                      <Image
                        src="/icons/auth/error.svg"
                        width={18}
                        height={18}
                        alt="error"
                      />
                      {formik.errors.question}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <Button
                  text="ENVIAR"
                  color="secondary"
                  disabled={!formik.isValid || formik.isSubmitting}
                  type="submit"
                />
              </div>
            </div>
            <ToastContainer className="!bottom-10" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
