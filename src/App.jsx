
import './App.css'
import Header from './components/Header'
import 'flowbite';
import Home from './pages/Home';
import Publication from './pages/Publications';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import { Routes, 
  Route,
  //  useLocation
   } from "react-router-dom";

import ProtectRoute from './ProtectRoute';
import ResearchInterest from './pages/ResearchInterest';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Contact from './pages/Contact';


function App() {
    // const location = useLocation();
  // const isLoginPage = location.pathname === "/login"

  return (
    <> 
      {/* <Header/>
    
     <div className='pt-16'>
        <Home/>
        <Publication/>
    </div> */}
     {/* {!isLoginPage && <Header />} */}
     <Header />
      <div className=''>
     <Routes>
     
      <Route path="/" element={<Home/>} />
       <Route path="/publication" element={<Publication />} />
        <Route path="/interest" element={<ResearchInterest />} />
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectRoute>
            <AdminPanel />
          </ProtectRoute>
        }
      />
    </Routes>
     </div>
     <footer className="w-full py-4 mt-auto text-center text-gray-400 bg-gradient-to-r from-gray-900 to-black">
      <p>&copy; {new Date().getFullYear()} Dr. Ranjith Thangavel. All rights reserved.</p>
    </footer>

    </>
  )
}

export default App
