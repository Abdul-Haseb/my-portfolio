import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string()
    .min(5, "Name must be 5 at least 5 characters long")
    .max(20, "Name can not exceed 20 characters")
    .required("Please enter your Name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  message: Yup.string()
    .min(10, "Message be at least 10 characters long")
    .max(500, "Message cannot exceed 500 characters"),
});
