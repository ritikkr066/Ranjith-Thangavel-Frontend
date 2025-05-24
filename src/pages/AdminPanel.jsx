// import React, { useEffect, useState } from "react";
// import axios from "axios";
import AdminChangeForm from "../components/Admin/AdminChangeForm";
import AdminThesis from "../components/Admin/AdminMember";
import AdminProject from "../components/Admin/AdminProject";
import AdminPublication from "../components/Admin/AdminPublication";
import AdminResearchInterest from "../components/Admin/AdminResearchInterst";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  // const [publications, setPublications] = useState([]);
  // const [form, setForm] = useState({
  //   year: "",
  //   researchers: "",
  //   publication: "",
  // });
  // const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // const fetchPublications = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/publications");
  //     setPublications(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (editingId) {
  //       await axios.put(
  //         `http://localhost:5000/api/publications/${editingId}`,
  //         form
  //       );
  //     } else {
  //       await axios.post("http://localhost:5000/api/publications", form);
  //     }
  //     setForm({ year: "", researchers: "", publication: "" });
  //     setEditingId(null);
  //     fetchPublications();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   if (confirm("Are you sure you want to delete this publication?")) {
  //     try {
  //       await axios.delete(`http://localhost:5000/api/publications/${id}`);
  //       fetchPublications();
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // };

  // const handleEdit = (item) => {
  //   setForm({
  //     year: item.year,
  //     researchers: item.researchers,
  //     publication: item.publication,
  //   });
  //   setEditingId(item._id);
  // };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // useEffect(() => {
  //   fetchPublications();
  // }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-cyan-900 via-black to-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 rounded"
        >
          Logout
        </button>
      </div>

      <AdminPublication/>
      <AdminResearchInterest/>
      <AdminProject/>
      <AdminChangeForm/>
      <AdminThesis/>
    </div>
  );
};

export default AdminPanel;
