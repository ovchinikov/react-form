/* eslint-disable no-unused-vars */
import { checkbox } from "@material-tailwind/react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      terms: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less")
        .min(4, "Name must be atleast 4 characters or more")
        .required("Name is required"),
      email: Yup.string().required("Email is required").email("Invalid email"),
      terms: Yup.bool().required("Terms of service must be checked"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <main className="flex h-screen items-center justify-center">
      <form
        className="bg-white flex flex-col md:flex-row rounded-lg w-full md:w-1/2"
        onSubmit={formik.handleSubmit}
      >
        <div className=" text-gray-700 p-6 md:p-20 flex-1">
          <h1 className="font-latoBold text-3xl text-center pb-2">
            Let&apos;s Get Started, ✋
          </h1>
          <p className="text-lg text-gray-500">
            Join our e-learning platform today and unlock over 500+ courses and
            digital assets ready to download.
          </p>
          <div className="forms mt-6">
            {/** Name input filed */}
            <div className="pb-4">
              <label
                htmlFor="name"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.name && formik.errors.name
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                className="border-2 border-gray-500 rounded-md w-full md:w-3/4 focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="true"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/** Email input filed */}
            <div className="pb-4">
              <label
                htmlFor="name"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                className="border-2 border-gray-500 rounded-md w-full md:w-3/4 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="Enter your Email"
                autoComplete="true"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Country input */}
            <div className="pb-4">
              <label
                htmlFor="country"
                className="block font-latoBold text-sm pb-2"
              >
                Country
              </label>
              <select
                name="country"
                className="border-2 border-gray-500 rounded-md w-full md:w-3/4 focus:border-teal-500 focus:ring-teal-500"
                autoComplete="true"
                id="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Germany</option>
              </select>
            </div>
            {/* Terms of service input */}
            <div className="pb-4">
              <label
                htmlFor="name"
                className={`block font-latoBold text-sm pb-2 ${
                  formik.touched.terms && formik.errors.terms
                    ? "text-red-400"
                    : ""
                }`}
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : "Terms and Conditions"}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-5 w-5 rounded-sm text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  checked={formik.values.terms}
                  value={formik.values.terms}
                  onChange={formik.handleChange}
                />
                <p className="font-LatoBold text-sm text-gray-500">
                  I agree to the terms and service that my data will be taken
                  and sold
                </p>
              </div>
              <button
                type="submit"
                className=" bg-teal-500 mt-6 text-white text-sm font-latoBold rounded-lg py-3 w-full md:w-3/4 focus:border-gray-500 focus:ring-gray-500"
              >
                Start Learning Today!
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default App;
