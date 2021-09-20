import React from "react";
import FormHeader from "../components/FormHeader";
import Field from "../components/InputField";
import helper from "../utils/helper";

export default function Login({ onSubmit }) {
  const useremail = React.useRef();
  const userpass = React.useRef();
  const [emailValidation, setEmailValidation] = React.useState({
    valid: false,
    msg: "",
  });
  const [passwordValidation, setPasswordValidation] = React.useState({
    valid: false,
    msg: "",
  });
  const validationRules = {
    email: [
      (v) => !!v || "Email is Required",
      (v) => (!!v && helper.validations.emailIsValid(v)) || "Invalid email",
    ],
    password: [
      (v) => !!v || "Password is Required",
      (v) =>
        (!!v && helper.validations.passwordIsValid(v)) ||
        "Password must be minimum eight characters, at least one letter, one number and one special character",
    ],
  };
  const voidHandler = (e) => e.preventDefault();
  return (
    <div className="w-3/4 h-full mx-auto space-y-5 flex flex-col  justify-center">
      <FormHeader
        title="Welcome Back!"
        subtitle="Please login to your account"
      />
      <form onSubmit={voidHandler}>
        <Field
          ref={useremail}
          label="Email"
          type="text"
          rules={validationRules.email}
          validation={emailValidation}
          setValidation={setEmailValidation}
        />
        <Field
          ref={userpass}
          label="Password"
          type="password"
          rules={validationRules.password}
          validation={passwordValidation}
          setValidation={setPasswordValidation}
        />
        <div>
          <div className="flex justify-between my-10">
            <div>
              <input type="checkbox" /> Remember me
            </div>
            <div>
              <div className="text-blue-500 ">Forgot Password?</div>
            </div>
          </div>
          <button
            type="submit"
            className="block Button hover:text-black text-white uppercase text-lg w-full rounded-full  py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center pt-20">
        <div className="text-gray-400">Terms of use. Privacy Policy</div>
      </div>
    </div>
  );
}
