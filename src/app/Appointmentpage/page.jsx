"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        whatsApp: '',
        location: '',
        serviceType: '',
        date: '',
        time: '',
        message: ''
    });
    const [sending, setSending] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Form submission
    async function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        
        try {
            const baseUrl = "https://forms-io.onrender.com/submit-form/401a7112-29f8-4812-8fe0-78e615a98077";
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    whatsapp: formData.whatsApp,
                    location: formData.location,
                    services_type: formData.serviceType,
                    date: formData.date,
                    time: formData.time,
                    message: formData.message
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                toast.success('Appointment booked successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    whatsApp: '',
                    location: '',
                    serviceType: '',
                    date: '',
                    time: '',
                    message: ''
                });
            } else {
                toast.success('Appointment booked successfully!', {
                    position: "top-right",
                    autoClose: 5000
                });
            }
        } catch (error) {
            console.error(error);
            toast.error('Network error. Please check your connection.', {
                position: "top-right",
                autoClose: 5000
            });
        } finally {
            setSending(false);
        }
    }

    const serviceOptions = [
        "Consultation",
        "Maintenance",
        "Installation",
        "Repair",
        "Other"
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <ToastContainer />
            
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col items-center mb-10">
                <a href='/'> <Image src="/logo.png" alt="Company Logo" width={100} height={100} className="mb-4" /></a>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2f3093]">Book Appointment With Us</h2>
                    <div className="w-20 h-1 bg-[#2f3093] mt-3 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">FULL NAME</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                        />
                    </div>
                    
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">EMAIL</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                        />
                    </div>
                    
                    {/* WhatsApp */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">WHATSAPP NUMBER</label>
                        <input
                            type="tel"
                            name="whatsApp"
                            value={formData.whatsApp}
                            onChange={handleChange}
                            placeholder="Your WhatsApp No"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                        />
                    </div>
                    
                    {/* Service Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">SERVICE TYPE</label>
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                        >
                            <option value="" disabled>Select Service</option>
                            {serviceOptions.map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    {/* Location */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">LOCATION</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Your Location"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                        />
                    </div>
                    
                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">DATE</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">TIME</label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Message */}
                <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">MESSAGE</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share any additional details about your appointment request"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                    ></textarea>
                </div>
                
                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={sending}
                        className="px-8 py-3 bg-[#2f3093] hover:bg-[#232178] text-white font-medium rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2f3093] focus:ring-opacity-50 min-w-[200px]"
                    >
                        {sending ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </div>
                        ) : "Book Appointment"}
                    </button>
                </div>
            </form>
            
            <Footer />
        </div>
    );
};

export default Page;