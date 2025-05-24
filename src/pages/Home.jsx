// import React from 'react';
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// const Home = () => {
//   return (
//     <div className='flex items-center justify-center min-h-screen py-4 pt-8 bg-gradient-to-b from-black to-gray-800 via-black'>
//       <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 py-2 mx-auto md:flex-row'>
        
//         <div className='flex flex-col justify-center h-full md:w-2/3'>
//           <h2 className='hidden text-3xl font-semibold text-white sm:block sm:text-5xl'>
//            Dr. Ranjith Thangavel
//           </h2>
//           <p className='text-2xl font-semibold text-center text-white sm:hidden'> Dr. Ranjith Thangavel</p>
//            <p className='pt-4 text-xl font-semibold text-center text-white sm:text-2xl'>(Assistant Professor)</p>
//           <p className='pt-4 text-2xl font-semibold text-white'> Key Research Areas:-</p>
//           <p className='max-w-md py-2 text-gray-500'>
//               Energy Storage and Conversion , Lithium/Sodium-ion Batteries, Supercapacitors,Electrocatalysis,Electric vehicles,Battery Management System,Fuels-cells, Hydrogen Production and Storage
//           </p>

//           <div className='flex flex-col md:flex-row'>
//             <span className='text-white sm:pr-10'>
//               Email: <a href='mailto:ranjith.t@iitg.ac.in'>ranjith.t@iitg.ac.in</a>
//             </span>
//             {/* <span className='text-white'>Phone No: 9876543210</span> */}
//           </div>

//           <a
//             href='https://docs.google.com/forms/d/e/1FAIpQLScsmAP8GeM_b5ddHohW7xHWgjV3QAoKddninJZ2nyvx-ATAAA/viewform'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='w-fit'
//           >
//             <button className='flex items-center px-6 py-2 my-4 text-white rounded-md cursor-pointer group bg-gradient-to-r from-cyan-500 to-blue-500'>
//               Contact Me
//               <span className='duration-300 group-hover:rotate-90'>
//                 <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
//               </span>
//             </button>
//           </a>
//         </div>

//         <div className='my-4 md:w-1/3 md:my-0'>
//           <img
//             src='/sir.jpg'
//             width="280"
//             alt='my profile'
//             className='flex justify-center w-3/4 mx-auto rounded-[100%] md:w-full'
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className='relative flex items-center justify-center min-h-screen py-4 pt-8 bg-gradient-to-b from-black to-gray-800 via-black'>

      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img 
          src='/iit_tirupati.jpg' // replace with your image path
          alt='background'
          className='object-cover w-full h-full opacity-30'
        />
      </div>

      {/* Foreground Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full max-w-screen-lg px-4 py-2 mx-auto md:flex-row'>
        
        <div className='flex flex-col justify-center h-full md:w-2/3'>
          <h2 className='hidden text-3xl font-semibold text-white sm:block sm:text-5xl'>
           Dr. Ranjith Thangavel
          </h2>
          <p className='text-2xl font-semibold text-center text-white sm:hidden'> Dr. Ranjith Thangavel</p>
          <p className='pt-4 text-xl font-semibold text-center text-white sm:text-2xl'>(Assistant Professor)</p>
          <p className='pt-4 text-2xl font-semibold text-white'> Key Research Areas:-</p>
          <p className='max-w-md py-2 text-gray-300'>
              Energy Storage and Conversion, Lithium/Sodium-ion Batteries, Supercapacitors, Electrocatalysis, Electric Vehicles, Battery Management System, Fuel Cells, Hydrogen Production and Storage
          </p>

          <div className='flex flex-col md:flex-row'>
            {/* <span className='text-white sm:pr-10'>
              Email: <a href='mailto:ranjith.t@iitg.ac.in'>ranjith.t@iitg.ac.in</a>
            </span> */}
             <p className="mb-2">📧 <strong className='text-white'>Email:</strong> <a href="mailto:ranjith.t@iittp.ac.in" className="text-blue-400 underline">ranjith.t@iittp.ac.in</a></p>
          </div>

          <a
            href='/contact'
            target='_blank'
            rel='noopener noreferrer'
            className='w-fit'
          >
            <button className='flex items-center px-6 py-2 my-4 text-white rounded-md cursor-pointer group bg-gradient-to-r from-cyan-500 to-blue-500'>
              Contact Me
              <span className='duration-300 group-hover:rotate-90'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </a>
        </div>

        <div className='my-4 md:w-1/3 md:my-0'>
          <img
            src='/sir.jpg'
            width="280"
            alt='my profile'
            className='flex justify-center w-3/4 mx-auto rounded-[100%] md:w-full'
          />
        </div>

      </div>
    </div>
  );
};

export default Home;

