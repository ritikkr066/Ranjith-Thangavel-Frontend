import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminResearchInterest = () => {
  const [interests, setInterests] = useState([]);
  const [form, setForm] = useState({ Interest: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchInterests = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/researchinterest`);
      setInterests(res.data);
    } catch (err) {
      console.error("Error fetching interests:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/researchinterest/${editingId}`, form);
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/researchinterest`, form);
      }
      setForm({ Interest: "" });
      setEditingId(null);
      fetchInterests();
    } catch (err) {
      console.error("Error submitting interest:", err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this interest?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/researchinterest/${id}`);
        fetchInterests();
      } catch (err) {
        console.error("Error deleting interest:", err);
      }
    }
  };

  const handleEdit = (item) => {
    setForm({ Interest: item.Interest });
    setEditingId(item._id);
  };

  useEffect(() => {
    fetchInterests();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-blue-950 via-black to-gray-900 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl p-6 mx-auto mb-10 bg-white rounded shadow"
      >
        <h2 className="mb-4 text-xl font-bold">
          {editingId ? "Edit Research Interest" : "Add Research Interest"}
        </h2>
        <input
          name="Interest"
          value={form.Interest}
          onChange={handleChange}
          placeholder="Enter research interest"
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
          {interests.map((item) => (
            <div
              key={item._id}
              className="p-6 bg-white border border-gray-200 rounded shadow"
            >
              <p className="text-gray-800">{item.Interest}</p>
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

export default AdminResearchInterest;
