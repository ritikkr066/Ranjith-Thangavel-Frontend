import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../utils/auth";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
   if (
      username === import.meta.env.VITE_ADMIN_USERNAME &&
      password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      setAuth();
      navigate('/admin');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-cyan-900 via-black to-gray-800">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 border rounded"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full p-2 text-white bg-blue-500 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
