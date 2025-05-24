import React, { useEffect, useState } from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ResearchInterest = () => {
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterest = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/researchinterest`);
        const data = await res.json();
        setInterests(data); // expecting array of objects [{ Interest: "..." }, ...]
      } catch (error) {
        console.error('Error fetching interests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterest();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-b from-cyan-900 via-black to-gray-800 ">
      <h1 className="mb-8 text-3xl font-bold text-center text-white">Areas of Interest</h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="w-full max-w-4xl p-6 bg-[#E3D5CA] border border-gray-200 rounded shadow-md">
          {interests.length > 0 ? (
            <ul className="space-y-3 text-left">
              {interests.map((item, index) => (
                <li key={index} className="flex items-start text-gray-800">
                  <MdOutlineArrowForwardIos className="mt-1 mr-2 text-blue-500" />
                  <span>{item.Interest}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No interests available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ResearchInterest;
