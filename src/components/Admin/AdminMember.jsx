import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminThesis = () => {
  const [candidates, setCandidates] = useState([]);
  const [form, setForm] = useState({
    name: "",
    period: "",
    thesis: "",
    institution: "",
    img: null,
  });
  const [editingId, setEditingId] = useState(null);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/thesis`);
      setCandidates(res.data);
    } catch (err) {
      console.error("Error fetching candidates:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setForm({ ...form, img: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("period", form.period);
      formData.append("thesis", form.thesis);
      formData.append("institution", form.institution);
      if (form.img) {
        formData.append("img", form.img);
      }

      if (editingId) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/thesis/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/thesis`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setForm({
        name: "",
        period: "",
        thesis: "",
        institution: "",
        img: null,
      });
      setEditingId(null);
      fetchCandidates();
    } catch (err) {
      console.error("Error submitting candidate:", err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this candidate?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/thesis/${id}`);
        fetchCandidates();
      } catch (err) {
        console.error("Error deleting candidate:", err);
      }
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      period: item.period,
      thesis: item.thesis,
      institution: item.institution,
      img: null, // don't load existing file, let user upload a new one if needed
    });
    setEditingId(item._id);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-gray-900 via-black to-blue-950">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl p-6 mx-auto mb-10 bg-white rounded shadow"
        encType="multipart/form-data"
      >
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          {editingId ? "Edit Candidate" : "Add Candidate"}
        </h2>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter candidate name"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          name="period"
          value={form.period}
          onChange={handleChange}
          placeholder="Enter research period"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          name="institution"
          value={form.institution}
          onChange={handleChange}
          placeholder="Enter institution"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <textarea
          name="thesis"
          value={form.thesis}
          onChange={handleChange}
          placeholder="Enter thesis title"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <div className="max-h-[50vh] overflow-y-auto px-4">
        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto">
          {candidates.map((item) => (
            <div
              key={item._id}
              className="p-6 bg-white border border-gray-200 rounded shadow"
            >
              <p className="font-semibold text-gray-800">Name: {item.name}</p>
              <p className="text-gray-700">Period: {item.period}</p>
              <p className="text-gray-700">Institution: {item.institution}</p>
              <p className="mt-2 text-gray-700">Thesis: {item.thesis}</p>
              {item.img && (
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/uploads/thesis/${item.img}`}
                  alt="Thesis"
                  className="mt-4 border rounded max-h-48"
                />
              )}
              <div className="mt-3 space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
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

export default AdminThesis;
