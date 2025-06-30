import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thanks for contacting me.',
          confirmButtonColor: '#10B981',
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          confirmButtonColor: '#EF4444',
        });
      });
  };

  return (
    <div id="contact" className="max-w-7xl px-10 mx-auto mt-16 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Info */}
      <div className="space-y-6" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-green-400 inline-block pb-2">
          Contact Info
        </h2>

        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-green-500 text-2xl" />
          <div>
            <h4 className="font-semibold text-gray-800">Phone</h4>
            <p className="text-gray-600">+880 1841-397448</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-green-500 text-2xl" />
          <div>
            <h4 className="font-semibold text-gray-800">Address</h4>
            <p className="text-gray-600">Mymensingh, Fulbaria</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaEnvelope className="text-green-500 text-2xl" />
          <div>
            <h4 className="font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">kawserahmednihad@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div data-aos="fade-left">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-green-400 inline-block pb-2 mb-6">
          How Can I Help You?
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-400"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
