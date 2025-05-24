


import React, { useEffect, useState } from 'react';

const Publication = () => {
  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch publications from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/publications`);
        const data = await res.json();
        setResearchData(data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-b from-cyan-900 via-black to-gray-800">
      <h1 className="mb-8 text-3xl font-bold text-center text-white">Research Publications</h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6">
          {researchData.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#E3D5CA] border border-gray-200 shadow-md rounded-xl"
            >
              <p className="mb-2 text-sm text-gray-500">
                Year: <span className="font-semibold">{item.year}</span>
              </p>
              <p className="flex mb-1 font-medium text-gray-800">
                <span className="pr-4 text-lg font-medium">Researcher:</span>
                {Array.isArray(item.researchers) ? item.researchers.join(', ') : item.researchers}
              </p>
              <p className="flex text-gray-600">
                <span className="pr-4 text-lg font-medium">Publication:</span>
                {item.publication}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Publication;

