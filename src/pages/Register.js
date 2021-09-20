import React, { useState } from "react";
import FormHeader from "../components/FormHeader";
import Field from "../components/InputField";
import helper from "../utils/helper";

function Spinner() {
  return (
    <div
      className="inline-block loader quantum-spinner"
      title="quantum-spinner"
    ></div>
  );
}

export default function Register({ onSubmit }) {
  const [submitting, setSubmitting] = useState(false);

  const [nameValidation, setNameValidation] = React.useState({
    valid: false,
    msg: "",
  });
  const [mobileValidation, setMobileValidation] = React.useState({
    valid: false,
    msg: "",
  });
  const [emailValidation, setEmailValidation] = React.useState({
    valid: false,
    msg: "",
  });
  const [passwordValidation, setPasswordValidation] = React.useState({
    valid: false,
    msg: "",
  });
  const userName = React.useRef();
  const userMobile = React.useRef();
  const userEmail = React.useRef();
  const userPassword = React.useRef();

  const reset = () => {
    nameValidation.valid = "";
    mobileValidation.valid = "";
    emailValidation.valid = "";
    passwordValidation.valid = "";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let nameOK = nameValidation.valid;
    let mobileOK = mobileValidation.valid;
    let emailOK = emailValidation.valid;
    let passwordOK = passwordValidation.valid;
    let allOK = nameOK && mobileOK && emailOK && passwordOK;
    if (allOK) {
      let name = userName.current.value;
      let mobile = userMobile.current.value;
      let email = userEmail.current.value;
      let password = userPassword.current.value;
      let user = {
        name,
        mobile,
        email,
        password,
      };
      setSubmitting(true);
      setTimeout(() => {
        helper.storage.addUser(user);
        reset();
        setSubmitting(false);
      }, 1000);
    }
  };

  const validationRules = {
    name: [
      (v) => !!v || "Name is Required",
      (v) =>
        /^[a-zA-Z ]*$/.test(v) || "Name can only contain alphabets and spaces",
    ],
    mobile: [
      (v) => !!v || "Mobile is Required",
      (v) =>
        (!!v && v.length === 10) ||
        "Mobile number should be exactly 10 digits long",
    ],
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

  const onMobileChange = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className="w-3/4 h-full mx-auto space-y-5 flex flex-col  justify-center">
      <FormHeader title="Welcome" subtitle="Register to White" />
      <form onSubmit={submitHandler}>
        <Field
          ref={userName}
          label="Name"
          type="text"
          rules={validationRules.name}
          validation={nameValidation}
          setValidation={setNameValidation}
        />
        <Field
          ref={userMobile}
          label="Mobile"
          type="text"
          onChange={onMobileChange}
          rules={validationRules.mobile}
          validation={mobileValidation}
          setValidation={setMobileValidation}
        />
        <Field
          ref={userEmail}
          label="Email"
          type="text"
          rules={validationRules.email}
          validation={emailValidation}
          setValidation={setEmailValidation}
        />
        <Field
          ref={userPassword}
          label="Password"
          type="password"
          rules={validationRules.password}
          validation={passwordValidation}
          setValidation={setPasswordValidation}
        />
        <div>
          <button
            type="submit"
            className="block flex justify-center space-x-1 items-center Button hover:text-black text-white uppercase text-lg w-full rounded-full  py-2 px-4"
          >
            {submitting && <Spinner />} <span>Register</span>
          </button>
        </div>
      </form>
      <div className="text-center pt-20">
        <div className="text-gray-400">Terms of use. Privacy Policy</div>
      </div>
    </div>
  );
}
