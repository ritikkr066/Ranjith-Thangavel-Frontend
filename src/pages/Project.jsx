


import React, { useEffect, useState } from 'react';

const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch publications from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/projects`);
        const data = await res.json();
         setProjectData(data);
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
      <h1 className="mb-8 text-3xl font-bold text-center text-white">PROJECTS</h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#E3D5CA] border border-gray-200 shadow-md rounded-xl"
            >
              <p className="mb-2 text-sm text-gray-500">
                Duration: <span className="font-semibold">{item.Duration}</span>
              </p>
              <p className="flex text-gray-600">
                <span className="pr-4 text-lg font-medium">Description:</span>
                {item.Description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;

