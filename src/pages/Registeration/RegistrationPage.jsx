import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
