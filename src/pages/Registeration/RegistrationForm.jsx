import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxNQgor9Lnr61PiZw0cIJ0x3Kh_9wGx-5uKaWkAnjPUG3Wa6HuA4sLRq995UzC-gaH4mw/exec",
        {
          method: "POST",
          body: form
        }
      );

      // Show the actual response for debugging
      const resultText = await response.text();
      console.log('Registration response:', resultText);
      if (response.ok && resultText.toLowerCase().includes("success")) {
        setStatus("Submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setStatus(`Submission failed. Server response: ${resultText}`);
      }
    } catch (error) {
      console.error("Error!", error.message);
      setStatus("Something went wrong: " + error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-8 lg:py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-lg w-full mx-auto px-4 sm:px-8 flex items-center justify-center">
        <div className="w-full bg-background rounded-organic shadow-soft-elevation-1 p-8 sm:p-10 animate-fade-in-up transition-all duration-700">
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-6 text-center animate-fade-in">
            Register for Smart Ring
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-fade-in delay-100">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-4 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition font-body text-lg bg-white transition-all duration-300 focus:scale-[1.03]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="animate-fade-in delay-200">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition font-body text-lg bg-white transition-all duration-300 focus:scale-[1.03]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="animate-fade-in delay-300">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-4 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition font-body text-lg bg-white transition-all duration-300 focus:scale-[1.03]"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-text-inverse rounded-organic font-body font-semibold gentle-transition haptic-feedback hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-lg animate-fade-in delay-400 transition-all duration-300 hover:scale-[1.03]"
              disabled={status === "Submitting..."}
            >
              {status === "Submitting..." ? "Submitting..." : "Register"}
            </button>
            <p className="mt-2 text-center text-sm text-text-secondary min-h-[1.5em] animate-fade-in delay-500">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
};


export default RegistrationForm;
