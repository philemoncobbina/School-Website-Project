import React, { useState } from 'react';
import { submitContactForm } from "../../Services/ContactService";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData);
      setIsAlertOpen(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  return {
    formData,
    isAlertOpen,
    handleInputChange,
    handleSubmit,
    setIsAlertOpen,
  };
};

const ContactSection = () => {
  const {
    formData,
    isAlertOpen,
    handleInputChange,
    handleSubmit,
    setIsAlertOpen,
  } = useContactForm();

  return (
    <section className="overflow-hidden">
      <div className="container px-4 mx-auto pt-16 pb-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 p-4">
            <div className="max-w-xl mx-auto">
              <h1 className="text-3xl lg:text-5xl font-bold font-heading mb-4">Contact us</h1>
              <p className="text-gray-600 mb-10">Submit your info and we’ll get back to you as soon as possible.</p>
              <div className="mb-10 flex items-center gap-1">
                <div className="bg-orange-200 rounded-3xl h-px w-3"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#FFA632"></circle>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#FFA632"></circle>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#FFA632"></circle>
                </svg>
                <div className="bg-orange-200 rounded-3xl h-px w-3"></div>
              </div>
              <div className="flex items-center flex-wrap gap-3 mb-4">
                <div className="bg-orange-500 rounded-xl p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.3333 17.7083H1.66666C1.32499 17.7083 1.04166 17.9916 1.04166 18.3333C1.04166 18.675 1.32499 18.9583 1.66666 18.9583H18.3333C18.675 18.9583 18.9583 18.675 18.9583 18.3333C18.9583 17.9916 18.675 17.7083 18.3333 17.7083Z" fill="white"></path>
                    <path d="M14.1667 1.66669H5.83333C3.33333 1.66669 2.5 3.15835 2.5 5.00002V18.3334H17.5V5.00002C17.5 3.15835 16.6667 1.66669 14.1667 1.66669ZM8.33333 14.375H5.83333C5.49167 14.375 5.20833 14.0917 5.20833 13.75C5.20833 13.4084 5.49167 13.125 5.83333 13.125H8.33333C8.675 13.125 8.95833 13.4084 8.95833 13.75C8.95833 14.0917 8.675 14.375 8.33333 14.375ZM8.33333 10.625H5.83333C5.49167 10.625 5.20833 10.3417 5.20833 10C5.20833 9.65835 5.49167 9.37502 5.83333 9.37502H8.33333C8.675 9.37502 8.95833 9.65835 8.95833 10C8.95833 10.3417 8.675 10.625 8.33333 10.625ZM8.33333 6.87502H5.83333C5.49167 6.87502 5.20833 6.59169 5.20833 6.25002C5.20833 5.90835 5.49167 5.62502 5.83333 5.62502H8.33333C8.675 5.62502 8.95833 5.90835 8.95833 6.25002C8.95833 6.59169 8.675 6.87502 8.33333 6.87502ZM14.1667 14.375H11.6667C11.325 14.375 11.0417 14.0917 11.0417 13.75C11.0417 13.4084 11.325 13.125 11.6667 13.125H14.1667C14.5083 13.125 14.7917 13.4084 14.7917 13.75C14.7917 14.0917 14.5083 14.375 14.1667 14.375ZM14.1667 10.625H11.6667C11.325 10.625 11.0417 10.3417 11.0417 10C11.0417 9.65835 11.325 9.37502 11.6667 9.37502H14.1667C14.5083 9.37502 14.7917 9.65835 14.7917 10C14.7917 10.3417 14.5083 10.625 14.1667 10.625ZM14.1667 6.87502H11.6667C11.325 6.87502 11.0417 6.59169 11.0417 6.25002C11.0417 5.90835 11.325 5.62502 11.6667 5.62502H14.1667C14.5083 5.62502 14.7917 5.90835 14.7917 6.25002C14.7917 6.59169 14.5083 6.87502 14.1667 6.87502Z" fill="white"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold font-heading">Company HQ</h2>
              </div>
              <div className="contact-info">
                <div className="contact-item -mb-6">
                  <h2 className="text font-bold font-heading">Address</h2>
                  <p className="text-gray-600 mb-10">4140 Parker Rd. Allentown, New Mexico 31134</p>
                </div>

                <div className="contact-item -mb-6 mt-0">
                  <h2 className="text font-bold font-heading">Phone</h2>
                  <p className="text-gray-600 mb-10">
                    <a href="tel:+2334590737" className="text-gray-600 hover:underline">+233 45 90737</a>
                  </p>
                </div>

                <div className="contact-item">
                  <h2 className="text font-bold font-heading">Email</h2>
                  <p className="text-gray-600 mb-10">
                    <a href="mailto:hello@yourdomain.com" className="text-gray-600 hover:underline">hello@yourdomain.com</a>
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-gray-200 shadow-sm py-8">
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-orange-500 w-1 h-8"></div>
                  <div className="px-8">
                    <h2 className="text-xl font-bold font-heading mb-6">Technical Help desk</h2>
                    <a className="w-full sm:w-auto h-12 py-3 px-5 rounded-full bg-purple-900 border border-purple-700 hover:bg-purple-800 focus:ring focus:ring-purple-800 transition duration-200 inline-flex items-center justify-center gap-2" href="#">
                      <span className="text-white text-sm font-semibold">Visit FAQ Center</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10H15.4167M15.4167 10L10.4167 5M15.4167 10L10.4167 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4">
            <div className="max-w-xl mx-auto border border-gray-200 rounded-3xl p-6 max-w-xl mx-auto">
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl text-center font-bold font-heading mb-4">Get in touch</h2>
                <p className="text-center text-gray-600 mb-16">Fill out the form to connect with a member of our team.</p>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-gray-800 font-medium">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="lock mb-2 text-gray-800 font-medium">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="lock mb-2 text-gray-800 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="lock mb-2 text-gray-800 font-medium">Phone</label>
                    <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="+233 45 90737"
                  />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="lock mb-2 text-gray-800 font-medium">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-4 text-xs font-semibold leading-none resize-y bg-gray-50 h-32 rounded outline-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <div className="w-full px-2 mb-4">
                    <label className="inline-flex">
                      <input type="checkbox" />
                      <span className="ml-2 text-sm text-gray-500">I agree to our friendly <a className="text-orange-500" href="#">privacy policy</a>.</span>
                    </label>
                </div>
                <button className="block w-full p-4 text-sm font-semibold leading-none bg-orange-500 hover:bg-orange-700 text-white rounded" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Dialog */}
<style jsx>{`
  .custom-alert-button {
    background-color: black;
    color: white;
    width: 80px; /* Default width for larger screens */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  }
  .custom-alert-button:hover {
    background-color: #333; /* Hover effect color */
  }
  @media (max-width: 600px) {
    .custom-alert-button {
      width: 100%; /* Full width on smaller screens */
    }
  }
`}</style>
<AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
  <AlertDialogTrigger asChild>
    <Button style={{ display: 'none' }}></Button>
  </AlertDialogTrigger>
  <AlertDialogContent className="bg-white p-6 rounded-lg shadow-lg">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-gray-900">Success</AlertDialogTitle>
      <AlertDialogDescription className="text-gray-600">
        Your message has been sent successfully!
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction className="custom-alert-button" onClick={() => setIsAlertOpen(false)}>
        OK
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

      
    </section>
  );
};

export default ContactSection;
