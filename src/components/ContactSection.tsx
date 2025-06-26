"use client";

import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid").required("Required"),
  phone: Yup.string().required("Required"),
  message: Yup.string().max(500, "Max 500 characters"),
  terms: Yup.boolean().oneOf([true], "Required"),
});

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  terms: boolean;
};

export default function ContactSection() {
  const initialValues: ContactFormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  };

  const handleSubmit = async (values: ContactFormValues) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      alert("Thank you! Your message has been submitted.");
    } else {
      alert("There was a problem. Please try again later.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Network error. Try again.");
  }
};


  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 bg-gray-100 rounded-2xl shadow-md p-10">
        {/* Left: Info */}
        <div className="space-y-6">
          <div className="text-orange-500 font-semibold">Contact Us</div>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Let’s Redefine Possibility, Together
          </h2>
          <p className="text-gray-700">
            The future is now—and it’s bold. Join us as we lead the digital
            transformation journey.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm">
              <span className="text-xl">@</span>
              <span className="text-gray-900">info@gakktechnology.com</span>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm">
              <span className="text-xl">📞</span>
              <span className="text-gray-900">+880-XXXX-XXXXXX</span>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm">
              <span className="text-gray-900 font-medium">Follow us</span>
<div className="flex gap-4 items-center">
  <a
    href="https://www.facebook.com/Gakkmedia/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100 text-orange-600 hover:bg-orange-200 transition"
  >
    <FaFacebookF className="w-5 h-5" />
  </a>
  <a
    href="https://bd.linkedin.com/company/gakk-media-bd-ltd-"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100 text-orange-600 hover:bg-orange-200 transition"
  >
    <FaLinkedinIn className="w-5 h-5" />
  </a>
</div>

            </div>
          </div>
        </div>

        {/* Right: Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name *</label>
                <Field
                  name="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none bg-white"
                  placeholder="First name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email *</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none bg-white"
                  placeholder="Enter email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Contact number *</label>
                <Field name="phone">
                  {({ field, form }: FieldProps) => (
                    <PhoneInput
                      country="bd"
                      value={field.value}
                      onChange={(value) => form.setFieldValue("phone", value)}
                      containerClass="!w-full"
                      inputClass="!w-full !rounded-md !border !border-gray-300 !bg-white !py-3 !text-base"
                      buttonClass="!border-gray-300"
                      inputStyle={{
                        paddingLeft: "3.4rem",
                        height: "48px",
                        fontSize: "1rem",
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none bg-white"
                  placeholder="Enter a description..."
                />
                <div className="text-right text-sm text-gray-400">
                  {values.message.length}/500
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Field
                  type="checkbox"
                  name="terms"
                  className="w-4 h-4 checked:bg-orange-500 accent-white rounded"
                />

                <span>
                  By agree with Gakk Media{" "}
                  <span className="text-orange-500">Terms and conditions</span>
                </span>
              </div>
              <ErrorMessage
                name="terms"
                component="div"
                className="text-sm text-red-500"
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
