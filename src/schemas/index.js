import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("El email es obligatorio")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email inválido"
    ),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export const registerSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "El nombre no puede contener números")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .required("El email es obligatorio")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email inválido"
    ),
  phone: Yup.number().optional(),
  password: Yup.string().required("La contraseña es obligatoria"),
  confirmPassword: Yup.string()
    .required("La confirmación de contraseña es obligatoria")
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
});

export const questionSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "El nombre no puede contener números")
    .required("El nombre es obligatorio"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
      "Email inválido"
    )
    .required("El correo electrónico es obligatorio"),
  question: Yup.string().required("Este campo no puede estar vacío"),
});

export const checkoutSchema = Yup.object({
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
