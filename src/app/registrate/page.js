"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/index";
import Link from "next/link";
import Image from "next/image";

const onSubmit = async ({ confirmPassword, ...values }, actions) => {
  actions.resetForm();
};

const Register = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  return (
    <div className="flex justify-center items-center py-[50px] lg:py-[150px]">
      <div className="w-[280px] flex flex-col items-center gap-[50px] xxs:w-[315px] sm:w-[580px] lg:w-[563px]">
        <p className="text-[32px] leading-8 tracking-[8px] text-teal font-normal font-serif_display">
          REGISTRATE
        </p>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="w-full flex flex-col justify-center font-poppins"
        >
          <div className=" flex flex-col gap-[50px]">
            <div className="h-full flex flex-col justify-center gap-[10px] text-dark_gray ">
              <div className="flex flex-col gap-[5px]">
                <label className="text-sm" htmlFor="name">
                  NOMBRE
                </label>
                <input
                  id="name"
                  name="name"
                  onBlur={handleBlur}
                  value={values.name}
                  onChange={handleChange}
                  className={`h-[46px] border-[1px] px-5 border-light_gray bg-[#FAFAFA] focus:outline-none
                    ${errors.name && "border-red"}
                  `}
                  type="text"
                />
                {errors.name && (
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/icons/auth/error.svg"
                      width="18"
                      height="18"
                      alt="error"
                    />
                    <p className="text-red text-xs">{errors.name}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="text-sm" htmlFor="email">
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  className={`h-[46px] border-[1px] px-5 border-light_gray bg-[#FAFAFA] focus:outline-none
                    ${errors.email && "border-red"}
                  `}
                  type="text"
                />
                {errors.email && (
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/icons/auth/error.svg"
                      width="18"
                      height="18"
                      alt="error"
                    />
                    <p className="text-red text-xs">{errors.email}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="text-sm" htmlFor="phone">
                  TELÉFONO (OPCIONAL)
                </label>
                <input
                  id="phone"
                  name="phone"
                  onBlur={handleBlur}
                  value={values.phone}
                  onChange={handleChange}
                  className={`h-[46px] border-[1px] px-5 border-light_gray bg-[#FAFAFA] focus:outline-none
                    ${errors.phone && "border-red"}
                  `}
                  type="number"
                />
              </div>
              <div className="relative flex flex-col gap-[5px]">
                <label className="text-sm" htmlFor="password">
                  CONTRASEÑA
                </label>
                <input
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className={`h-[46px] border-[1px] px-5 border-light_gray bg-[#FAFAFA] focus:outline-teal 
                      ${errors.password && "border-red focus:outline-red"}`}
                  type={showPassword ? "text" : "password"}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-[38px] cursor-pointer"
                >
                  {showPassword ? (
                    <Image
                      src="/icons/auth/open_eye.svg"
                      alt="open eye icon"
                      width="21"
                      height="20"
                    />
                  ) : (
                    <Image
                      src="/icons/auth/closed_eye.svg"
                      alt="closed eye icon"
                      width="21"
                      height="20"
                    />
                  )}
                </span>
                {errors.password && (
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/icons/auth/error.svg"
                      width="18"
                      height="18"
                      alt="error"
                    />
                    <p className="text-red text-xs">{errors.password}</p>
                  </div>
                )}
              </div>
              <div className="relative flex flex-col gap-[5px]">
                <label className="text-sm" htmlFor="confirmPassword">
                  CONFIRMAR CONTRASEÑA
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  className={`h-[46px] border-[1px] px-5 border-light_gray bg-[#FAFAFA] focus:outline-teal 
                      ${
                        errors.confirmPassword && "border-red focus:outline-red"
                      }`}
                  type={showCPassword ? "text" : "password"}
                />
                <span
                  onClick={() => setShowCPassword(!showCPassword)}
                  className="absolute right-5 top-[38px] cursor-pointer"
                >
                  {showCPassword ? (
                    <Image
                      src="/icons/auth/open_eye.svg"
                      alt="open eye icon"
                      width="21"
                      height="20"
                    />
                  ) : (
                    <Image
                      src="/icons/auth/closed_eye.svg"
                      alt="closed eye icon"
                      width="21"
                      height="20"
                    />
                  )}
                </span>
                {errors.confirmPassword && (
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/icons/auth/error.svg"
                      width="18"
                      height="18"
                      alt="error"
                    />
                    <p className="text-red text-xs">{errors.confirmPassword}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[15px] text-sm">
              <Link href={isValid && dirty ? "/" : ""}>
                <button
                  type="submit"
                  className={`h-[50px] text-base font-normal w-full
                  ${
                    isValid && dirty
                      ? "bg-teal text-white cursor-pointer hover:bg-[#689882]"
                      : "bg-medium_gray text-white"
                  }`}
                >
                  INGRESAR
                </button>
              </Link>
              <div className="flex justify-center gap-[10px]">
                <p>YA TENES CUENTA?</p>
                <Link href={"/ingresar"} className="font-semibold">
                  INICIÁ SESIÓN
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
