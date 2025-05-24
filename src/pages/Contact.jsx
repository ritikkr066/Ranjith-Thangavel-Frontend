import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formLink, setFormLink] = useState('');

  useEffect(() => {
    const fetchFormLink = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/contact`); // adjust baseURL as needed
      setFormLink(data?.formLink || '');
    };
    fetchFormLink();
  }, []);
  return (
    <div className="min-h-screen px-4 py-10 text-white bg-gradient-to-b from-blue-950 via-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center sm:text-4xl">Contact Us</h1>

        <div className="p-6 mb-10 bg-gray-800 shadow-md rounded-xl">
          <h2 className="mb-4 text-2xl font-semibold">Contact Details:</h2>
          <p className="mb-2">📍 <strong>Office:</strong> Department of Chemical Engineering</p>
          <p className="mb-2">🏢 <strong>Room no.:</strong> [Enter Room Number]</p>
          <p className="mb-2">
            📌 <strong>Address:</strong> Indian Institute of Technology Tirupati, Yerpedu Post, Andhra Pradesh - 517619
          </p>
          <p className="mb-2">📧 <strong>Email:</strong> <a href="mailto:ranjith.t@iittp.ac.in" className="text-blue-400 underline">ranjith.t@iittp.ac.in</a></p>
          <p className="mb-2">📞 <strong>Phone:</strong> [Enter Phone Number]</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md aspect-[4/3]">
          {/* <iframe
            title="Contact Form"
            // src="https://docs.google.com/forms/d/e/1FAIpQLScsmAP8GeM_b5ddHohW7xHWgjV3QAoKddninJZ2nyvx-ATAAA/viewform?embedded=true"
            src={formLink}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full h-full rounded-md"
          >
            Loading…
          </iframe> */}
          {formLink && (
        <iframe
          src={formLink}
          width="100%"
          height="800"
          className="mx-auto border-2 border-gray-500 rounded-lg"
          title="Google Contact Form"
        ></iframe>
      )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
