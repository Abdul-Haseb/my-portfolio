import { useFormik } from "formik";
import { formSchema } from "../schema";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_xsbjd3q",
        "template_p1mmnzh",
        form.current,
        "lnC5nGegIZSX69hGw"
      )
      .then(
        () => {
          alert("Your message has been successfully delivered");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values, actions) => {
      sendEmail();
      console.log(values);
      actions.resetForm();
    },
  });

  const { errors, handleChange, handleSubmit, values, touched, handleBlur } =
    formik;

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-gray-300 px-4">
      <div id="experience" className="max-w-screen-xl mx-auto py-16">
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-100 to-cyan-200 bg-clip-text text-transparent text-justify mb-1">
          Contact
        </h4>
        <div className="w-28 md:w-32 lg:w-44 bg-gradient-to-r from-cyan-500 to-blue-500 h-1" />
        <p className="md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-gray-100 to-cyan-200 bg-clip-text text-transparent text-justify mt-3 mb-6 md:mb-10 lg:mb-14">
          Submit the form below to get in touch with me
        </p>
        <div className="w-full flex flex-col items-start justify-center">
          <div className="w-full lg:w-3/4">
            <form ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your Name"
                className="px-2 py-2 rounded-md text-white outline-none border border-white bg-transparent w-full"
              />
              {errors.name && touched.name && (
                <p className="text-red-400 text-sm py-1">{errors.name}</p>
              )}
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Enter your Email"
                onBlur={handleBlur}
                className="px-2 py-2 rounded-md text-white outline-none border border-white bg-transparent w-full mt-6"
              />
              {errors.email && touched.email && (
                <p className="text-red-400 text-sm py-1">{errors.email}</p>
              )}
              <textarea
                name="message"
                rows="10"
                id="message"
                autoComplete="off"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your message"
                className="w-full bg-transparent text-white border border-white rounded-md px-2 py-1 resize-none focus:outline-none mt-6"
              />
              {errors.message && touched.message && (
                <p className="text-red-400 text-sm py-1">{errors.message}</p>
              )}
              <div>
                <button
                  type="submit"
                  className="group text-white px-4 md:px-6 py-2 hover:scale-110 transition-transform duration-500 md:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer"
                >
                  Let`s talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
