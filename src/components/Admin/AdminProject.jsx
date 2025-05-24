import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminProject = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ Duration: "", Description: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/${editingId}`, form);
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/projects`, form);
      }
      setForm({ Duration: "", Description: "" });
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      console.error("Error submitting project:", err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/projects/${id}`);
        fetchProjects();
      } catch (err) {
        console.error("Error deleting project:", err);
      }
    }
  };

  const handleEdit = (item) => {
    setForm({ Duration: item.Duration, Description: item.Description });
    setEditingId(item._id);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-gray-900 via-black to-blue-950">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl p-6 mx-auto mb-10 bg-white rounded shadow"
      >
        <h2 className="mb-4 text-xl font-bold">
          {editingId ? "Edit Project" : "Add Project"}
        </h2>
        <input
          name="Duration"
          value={form.Duration}
          onChange={handleChange}
          placeholder="Enter project duration"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <textarea
          name="Description"
          value={form.Description}
          onChange={handleChange}
          placeholder="Enter project description"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <div className="max-h-[50vh] overflow-y-auto px-4">
        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto">
          {projects.map((item) => (
            <div
              key={item._id}
              className="p-6 bg-white border border-gray-200 rounded shadow"
            >
              <p className="font-semibold text-gray-800">Duration: {item.Duration}</p>
              <p className="mt-2 text-gray-700">Description: {item.Description}</p>
              <div className="mt-3 space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-3 py-1 text-white bg-yellow-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 text-white bg-red-600 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProject;
