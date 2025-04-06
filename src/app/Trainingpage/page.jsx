"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    WhatsApp: "",
    state: "",
    city: "",
    training: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchApi = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("https://forms-io.onrender.com/submit-form/401a7112-29f8-4812-8fe0-78e615a98077", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          whatsapp: formData.WhatsApp,
          state: formData.state,
          training: formData.training,
          city: formData.city,
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          WhatsApp: "",
          state: "",
          city: "",
          training: "",
          message: "",
        });
      } else {
        toast.success("✅ Message sent successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌Message not sent!");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <ToastContainer />
      <form onSubmit={fetchApi} className="w-full max-w-5xl px-4 py-10">
        <div className="text-center mb-10">
          <Image src="/logo.png" alt="logo" width={100} height={100} className="mx-auto" />
          <h2 className="text-3xl font-bold text-[#2f3093] mt-4">Enroll For Our Training</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
          <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />

          <Input label="WhatsApp Number" name="WhatsApp" value={formData.WhatsApp} onChange={handleChange} />
          <Input label="Training Type" name="training" value={formData.training} onChange={handleChange} />

          <Input label="State" name="state" value={formData.state} onChange={handleChange} />
          <Input label="City" name="city" value={formData.city} onChange={handleChange} />
        </div>

        <div className="mt-6">
          <label className="font-semibold block mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message"
          />
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            disabled={sending}
            className="bg-[#2f3093] text-white font-semibold py-3 px-12 rounded-lg shadow-md hover:bg-[#1f2180] transition"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </div>

       
      </form>
      <Footer />
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="font-semibold block mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder={`Enter ${label}`}
    />
  </div>
);

export default Page;
