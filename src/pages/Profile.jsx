// import React from "react";
// import sir from "../../public/sir.jpg";
// import kasif from "../../public/kasif.jpg";

// const Profile = () => {
//   return (
//     <div className="w-full text-white bg-gradient-to-b from-cyan-900 via-black to-gray-800 h-fit">
//       <div className="flex items-center justify-center">
//         <h4 className="pt-3 text-2xl font-semibold sm:text-3xl">PERSONAL INFORMATION</h4>
//       </div>

//       <div className="flex flex-col-reverse w-full px-2 py-8 mx-auto md:px-6 sm:flex-row">
//         <div className="pl-4 md:w-1/2">
//           <div className="py-4 text-3xl font-semibold sm:text-4xl">Dr. Ranjith Thangavel</div>
//           <div className="flex flex-col py-2 md:flex-row">
//             {/* <span className='sm:pr-10'>
//               Email: <a href='mailto:ranjith.t@iitg.ac.in'>ranjith.t@iitg.ac.in</a>
//             </span> */}
//             <p className="mb-2">📧 <strong>Email:</strong> <a href="mailto:ranjith.t@iittp.ac.in" className="text-blue-400 underline">ranjith.t@iittp.ac.in</a></p>
//             {/* <span className=''>Phone No: +91-361-2583690</span> */}
//           </div>
//           <div className="text-2xl font-semibold ">Academic Qualification</div>
//           <div className="text-[18px] py-1 "><span className="font-semibold"> PhD :</span> Chonnam National University, South Korea, 2019</div>
//           <div><span className="font-semibold"> BTech :</span>  Chemical and Electrochemical Engineering, CSIR – CECRI, India, 2013</div>
//           <div className="pt-2 text-2xl font-semibold">Work Experience</div>
//           <div className="text-[18px] py-1">
//             <span> <span className="font-semibold"> 18/02/2022 - Present :</span> Assistant Professor, School of Energy Science and Engineering, IIT Guwahati, India.</span>
//             <br />
//             <span> <span className="font-semibold"> 01/06/2021 - 14/02/2022 : </span>  Research Professor, Sungkyunkwan University, South Korea</span>
//             <br />
//             <span>
//               <span className="font-semibold">01/06/2019 - 31/05/2021 : </span>  Post-doctorate Researcher, Sungkyunkwan University, South Korea
//             </span>
//             <br />
//             <span> <span className="font-semibold">01/03/2019 - 31/05/2019 : </span>  Post-doctorate Researcher, Chonnam National University, South Korea</span>
//           </div>
//           <div className="pt-2 text-2xl font-semibold ">Research Expertise</div>
//           <div className="text-[18px]">
//             Energy Storage and Conversion, Lithium/Sodium-ion Batteries, Supercapacitors, Electrocatalysis, Electric Vehicles, Battery Management System, Solar Cells, Fuel-cells, Hydrogen Production and Storage
//           </div>
//         </div>

//         <div className="flex items-center justify-center px-4 py-4 md:w-1/2">
//           <img
//             src={sir}
//             width="280px"
//             alt=""
//             className="rounded-[50%]"
//           />
//         </div>
//       </div>

//       {/* PhD Candidates Section */}
//       <div className="flex items-center justify-center">
//         <h4 className="text-2xl font-semibold">Members</h4>
//       </div>

//       {/* Candidate Template */}
//       {[
       
//         {
//           name: "Md. Kasif",
//           period: "(2025-continuing)",
//           thesis:
//             "Sodium Ion Batteries",
//           img: kasif,
//         },
       
//       ].map(({ name, period, thesis, img }) => (
//         <div
//           key={name}
//           className="flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row"
//         >
//           <div className="flex flex-col justify-center items-left sm:px-10 sm:w-2/3">
//             <div className="pr-4 text-2xl font-semibold">
//               {name}
            
//             </div>
//             <div className="text-[18px] ">{period}</div>
//             <div className="font-semibold">Thesis Title:  <span className="pl-2">{thesis}</span></div>
           
//           </div>
//           <div className="flex items-center justify-center px-4 py-4 sm:w-1/3">
//             <img
//               src={img}
//               width={200}
//               alt={name}
//               className="flex items-center justify-center"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Profile;



import React, { useEffect, useState } from "react";
import sir from "../../public/sir.jpg";
import axios from "axios";

const Profile = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/thesis`)
      .then(res => setCandidates(res.data))
      .catch(err => console.error("Error fetching candidates:", err));
  }, []);

  return (
    <div className="w-full text-white bg-gradient-to-b from-cyan-900 via-black to-gray-800 h-fit">
      <div className="flex items-center justify-center">
        <h4 className="pt-3 text-2xl font-semibold text-indigo-300 sm:text-3xl">PERSONAL INFORMATION</h4>
      </div>

      {/* Professor Info */}
      <div className="flex flex-col-reverse w-full px-2 py-8 mx-auto md:px-6 sm:flex-row">
        <div className="pl-4 md:w-1/2">
          <div className="py-4 text-3xl font-semibold text-indigo-300 sm:text-4xl">Dr. Ranjith Thangavel</div>
          <p className="mb-2">📧 <strong>Email:</strong> <a href="mailto:ranjith.t@iittp.ac.in" className="text-blue-400 underline">ranjith.t@iittp.ac.in</a></p>
          <div className="text-2xl font-semibold">Academic Qualification</div>
          <div className="text-[18px] py-1"><span className="font-semibold">PhD :</span> Chonnam National University, South Korea, 2019</div>
          <div><span className="font-semibold">BTech :</span> Chemical and Electrochemical Engineering, CSIR – CECRI, India, 2013</div>
          <div className="pt-2 text-2xl font-semibold text-indigo-300">Work Experience</div>
          <div className="text-[18px] py-1">
            <span className="font-semibold">01/01/2025 - present :</span> Assistant Professor, IIT Tirupati<br />
            <span className="font-semibold">18/02/2022 - 31/12/2024 :</span> Assistant Professor(On Lien), IIT Guwahati<br />
            <span className="font-semibold">01/06/2021 - 14/02/2022 :</span> Research Professor, Sungkyunkwan University<br />
            <span className="font-semibold">01/06/2019 - 31/05/2021 :</span> Post-doctorate, Sungkyunkwan University<br />
            <span className="font-semibold">01/03/2019 - 31/05/2019 :</span> Post-doctorate, Chonnam National University
          </div>
          <div className="pt-2 text-2xl font-semibold text-indigo-300">Research Expertise</div>
          <div className="text-[18px]">
            Energy Storage and Conversion, Lithium/Sodium-ion Batteries, Supercapacitors, Electrocatalysis, Electric Vehicles, BMS, Solar Cells, Fuel-cells, Hydrogen Storage
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-4 md:w-1/2">
          <img src={sir} width="280px" alt="Dr. Ranjith" className="rounded-[50%]" />
        </div>
      </div>

      {/* Members Section */}
      <div className="flex items-center justify-center">
        <h4 className="text-2xl font-semibold text-indigo-300">Members</h4>
      </div>

      {/* Dynamic Candidate Rendering */}
      {candidates.map(({ _id, name, period, thesis, institution, img }) => (
        <div key={_id} className="flex flex-col-reverse w-full px-4 py-8 mx-auto sm:px-10 md:px-6 sm:flex-row">
          <div className="flex flex-col justify-center items-left sm:px-10 sm:w-2/3">
            <div className="pr-4 text-2xl font-semibold text-indigo-300">{name}</div>
            <div className="text-[18px]">{period}</div>
            <div className="font-semibold">Thesis Title: <span className="pl-2">{thesis}</span></div>
            <div className="pt-1 font-semibold">Institution: <span className="pl-2">{institution}</span></div>
          </div>
          <div className="flex items-center justify-center px-4 py-4 sm:w-1/3">
            <img
              src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}/uploads/thesis/${img}`}
              width={200}
              alt={name}
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
