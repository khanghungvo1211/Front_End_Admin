import React from "react";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: "#326e51", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please enter your registered email to receive a reset password email.
        </p>
        <form action="">
          <CustomInput type="password" label="Email Address" id="email" />
          <br />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#326e51" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
