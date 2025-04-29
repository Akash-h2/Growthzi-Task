import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact Number is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
     
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        description: '',
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen py-12 px-4 md:px-16">

        {/* Heading */}
        <h1 className="text-4xl font-bold  mb-12">Contact Us</h1>

        {/* Top Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left Image */}
          <div className="md:w-[45%]">
            <Image
              src="/hiit-advanced.jpg"
              alt="Contact"
              className="rounded-lg object-cover w-full h-[550px]"
              width={800} 
              height={550} 
              priority
            />
          </div>

          {/* Right Form */}
          <div className="md:w-[45%] bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="bg-gray-800 p-3 rounded text-white focus:outline-none w-full"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-800 p-3 rounded text-white focus:outline-none w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  className="bg-gray-800 p-3 rounded text-white focus:outline-none w-full"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
              </div>
              <div>
                <textarea
                  name="description"
                  placeholder="Description"
                  className="bg-gray-800 p-3 rounded text-white focus:outline-none w-full h-32"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition p-3 rounded text-white font-bold"
              >
                Submit
              </button>
            </form>
          </div>

        </div>

        {/* Location Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>

          <div className="w-full h-96 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.014291243515!2d-122.4194156846812!3d37.774929779759616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1234abcd%3A0xabcdef1234567890!2sYour+Gym+Location!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border-0"
            ></iframe>
          </div>

          <div className="text-center text-gray-400">
            <p className="text-lg">Fit Sphere Fitness</p>
            <p>123 Fitness Avenue, Wellness City, HealthState, 56789</p>
            <p>+1-800-555-FITN</p>
            <p>support@fitnesswebsite.com</p>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
