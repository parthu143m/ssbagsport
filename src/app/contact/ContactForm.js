"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^\+?[0-9]{8,15}$/.test(formData.mobile.replace(/\s+/g, ""))) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!formData.description.trim()) {
      newErrors.description = "A short description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Description should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for that field on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request to submit contact details
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      description: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center min-h-[400px]">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-6 animate-bounce">
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-black font-serif mb-3">
          Message Sent
        </h2>
        <p className="text-[14px] text-stone-500 leading-relaxed font-sans max-w-[280px] mb-8">
          Thank you for reaching out, <span className="font-semibold text-black">{formData.name}</span>. We have received your inquiry and will contact you shortly at <span className="underline">{formData.email}</span>.
        </p>

        <button
          onClick={handleReset}
          className="w-full max-w-[200px] border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300 py-2.5 text-[12px] font-bold tracking-wider uppercase font-sans"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col pt-2">
      {/* Editorial Header */}
      <div className="mb-6">
        <h2 className="text-[28px] font-bold text-black leading-tight tracking-tight font-serif mb-2">
          Get in Touch
        </h2>
        <p className="text-[14px] leading-relaxed text-stone-500 font-sans">
          Have an inquiry, custom design request, or need assistance? Leave a message below and we will contact you.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col font-sans">
        {/* Name Input */}
        <div className="mb-5 relative">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className={`w-full bg-transparent border-b ${
              errors.name ? "border-red-500" : "border-stone-300 focus:border-black"
            } py-2 text-[14px] text-black focus:outline-none transition-colors duration-300`}
          />
          {errors.name && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-5 relative">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className={`w-full bg-transparent border-b ${
              errors.email ? "border-red-500" : "border-stone-300 focus:border-black"
            } py-2 text-[14px] text-black focus:outline-none transition-colors duration-300`}
          />
          {errors.email && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email}</p>
          )}
        </div>

        {/* Mobile Number Input */}
        <div className="mb-5 relative">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="e.g. 6301366183"
            className={`w-full bg-transparent border-b ${
              errors.mobile ? "border-red-500" : "border-stone-300 focus:border-black"
            } py-2 text-[14px] text-black focus:outline-none transition-colors duration-300`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.mobile}</p>
          )}
        </div>

        {/* Description/Message Input */}
        <div className="mb-6 relative">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your requirement or project detail..."
            rows="3"
            className={`w-full bg-transparent border-b ${
              errors.description ? "border-red-500" : "border-stone-300 focus:border-black"
            } py-2 text-[14px] text-black focus:outline-none resize-none transition-colors duration-300`}
          />
          {errors.description && (
            <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.description}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white hover:bg-stone-800 disabled:bg-stone-400 py-3 px-4 text-[13px] font-bold tracking-wider uppercase font-sans transition-all duration-300 border border-black flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </button>
      </form>

      {/* Styled Elegant Divider */}
      <div className="relative my-6 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-stone-200"></div>
        </div>
        <span className="relative px-3 bg-white text-[10px] font-bold uppercase tracking-widest text-stone-400 font-sans">
          Or connect with us
        </span>
      </div>

      {/* Social and Action Buttons Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4 font-sans">
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-3 py-2.5 border border-stone-200 hover:border-black rounded-xl hover:bg-stone-50 transition-all duration-300 group"
        >
          <span className="text-stone-500 group-hover:text-black transition-colors duration-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </span>
          <span className="text-[12px] font-semibold text-stone-700 group-hover:text-black transition-colors duration-300">
            Instagram
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-3 py-2.5 border border-stone-200 hover:border-black rounded-xl hover:bg-stone-50 transition-all duration-300 group"
        >
          <span className="text-stone-500 group-hover:text-black transition-colors duration-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </span>
          <span className="text-[12px] font-semibold text-stone-700 group-hover:text-black transition-colors duration-300">
            Facebook
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:info@stylesack.com"
          className="flex items-center gap-2.5 px-3 py-2.5 border border-stone-200 hover:border-black rounded-xl hover:bg-stone-50 transition-all duration-300 group"
        >
          <span className="text-stone-500 group-hover:text-black transition-colors duration-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </span>
          <span className="text-[12px] font-semibold text-stone-700 group-hover:text-black transition-colors duration-300">
            Email Us
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:6301366183"
          className="flex items-center gap-2.5 px-3 py-2.5 border border-stone-200 hover:border-black rounded-xl hover:bg-stone-50 transition-all duration-300 group col-span-1"
        >
          <span className="text-stone-500 group-hover:text-black transition-colors duration-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
          <span className="text-[12px] font-semibold text-stone-700 group-hover:text-black transition-colors duration-300 truncate">
            6301366183
          </span>
        </a>
      </div>
    </div>
  );
}
