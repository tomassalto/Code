"use client";
import { useState } from 'react'
import { useFormik } from "formik";
import Link from "next/link";
import Image from "next/image";
import { loginSchema } from "../../schemas";

const onSubmit = async (values, actions) => {
  actions.resetForm();
};

export default function Login() {
  const { values, errors, handleBlur, handleChange, handleSubmit, isValid, dirty } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center py-[50px] lg:py-[150px]">
      <div className="w-[280px] flex flex-col items-center gap-[50px] xxs:w-[315px] sm:w-[580px] lg:w-[563px]">
        <p className="text-[32px] leading-8 tracking-[8px] text-teal font-normal font-serif_display">
          INGRESAR
        </p>
        <form onSubmit={handleSubmit} autoComplete='off' className="w-full h-[445px] flex flex-col justify-center font-poppins">
          <div className=" flex flex-col gap-[50px]">
            <div className="h-full flex flex-col justify-center gap-[10px] text-dark_gray ">
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
                  className={`h-[46px] border-[1px] px-5 border-light_gray bg-[#FAFAFA] focus:outline-teal 
                  ${errors.email && "border-red focus:outline-red"}`}
                  type="text"
                />
                {errors.email && (
                  <div className="flex items-center gap-[5px]">
                    <Image src="/icons/auth/error.svg" width="18" height="18" alt="error" />
                    <p className="text-red text-xs">{errors.email}</p>
                  </div>
                )}
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
                    <Image src="/icons/auth/error.svg" width="18" height="18" alt="error" />
                    <p className="text-red text-xs">{errors.password}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[15px] text-sm">
              <Link href={isValid && dirty ? '/' : ''}>
                <button type="submit" 
                className={`h-[50px] text-base font-normal w-full
                  ${isValid && dirty
                    ? "bg-teal text-white cursor-pointer hover:bg-[#689882]" 
                    : "bg-medium_gray text-white"
                  }`} 
                >
                  INGRESAR
                </button>
              </Link>
              <div className="flex justify-center gap-[10px]">
                <p>NO TENES CUENTA?</p>
                <Link href="/registrate" className="font-semibold">REGISTRATE</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}