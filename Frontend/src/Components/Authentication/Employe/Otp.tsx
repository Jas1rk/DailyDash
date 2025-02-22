import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .length(4, "OTP must be 4 digits")
    .matches(/^\d+$/, "OTP must be numeric")
    .required("OTP is required"),
});

const OtpForm: React.FC = () => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: otpSchema,
    onSubmit: (values) => {
      console.log("OTP Submitted:", values.otp);
    },
  });

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    
    if (/^\d{4}$/.test(pastedData)) {
      formik.setFieldValue("otp", pastedData);
      inputRefs.current[3]?.focus();
    }
  };

  const handleInputChange = (value:string, index: number) => {
    const otpArray = formik.values.otp.split("");
    otpArray[index] = value.replace(/[^0-9]/g, "");
    formik.setFieldValue("otp", otpArray.join(""));

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !formik.values.otp[index] && index > 0) {
      const otpArray = formik.values.otp.split("");
      otpArray[index - 1] = "";
      formik.setFieldValue("otp", otpArray.join(""));
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="max-w-md mx-auto text-center bg-colors-lightComponent dark:bg-colors-darkComponent px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1 dark:text-white">Email Verification</h1>
        <p className="text-[15px] text-slate-400">
          Enter the 4-digit verification code that was sent to your registerd email.
        </p>
      </header>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex items-center justify-center gap-3">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <input
                key={index}
                type="number"
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                value={formik.values.otp[index] || ""}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                className="w-14 h-14 text-center text-2xl font-extrabold dark:text-white bg-[#edecec] dark:bg-colors-blackScreen border border-transparent  appearance-none rounded p-4 outline-none  focus:border-colors-primaryYellow focus:ring-2 focus:ring-yellow-300 "
              />
            ))}
        </div>
        {formik.errors.otp && formik.touched.otp && (
          <div className="text-red-500 text-sm mt-2">{formik.errors.otp}</div>
        )}
        <div className="max-w-[260px] mx-auto mt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-colors-primaryYellow text-white hover:bg-colors-hoverYellow px-3.5 py-2.5 text-sm font-medium"
          >
            Verify Account
          </button>
        </div>
      </form>
      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?
        <a className="font-medium text-colors-primaryYellow cursor-pointer">
          Resend
        </a>
      </div>
    </div>
  );
};

export default OtpForm;
