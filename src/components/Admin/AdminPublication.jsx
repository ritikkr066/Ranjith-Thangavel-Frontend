import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPublication = () => {
  const [publications, setPublications] = useState([]);
  const [form, setForm] = useState({
    year: "",
    researchers: "",
    publication: "",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchPublications = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/publications`);
      setPublications(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/publications/${editingId}`,
          form
        );
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/publications`, form);
      }
      setForm({ year: "", researchers: "", publication: "" });
      setEditingId(null);
      fetchPublications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this publication?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/publications/${id}`);
        fetchPublications();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleEdit = (item) => {
    setForm({
      year: item.year,
      researchers: item.researchers,
      publication: item.publication,
    });
    setEditingId(item._id);
  };

 

  useEffect(() => {
    fetchPublications();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-blue-950 via-black to-gray-900 ">

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl p-6 mx-auto mb-10 bg-white rounded shadow"
      >
        <h2 className="mb-4 text-xl font-bold">
          {editingId ? "Edit Publication" : "Add New Publication"}
        </h2>
        <input
          name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="Year"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          name="researchers"
          value={form.researchers}
          onChange={handleChange}
          placeholder="Researcher Name"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <textarea
          name="publication"
          value={form.publication}
          onChange={handleChange}
          placeholder="Publication Details"
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
    <div className=" max-h-[50vh] overflow-y-auto px-4">
      <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto">
        {publications.map((item) => (
          <div
            key={item._id}
            className="p-6 bg-white border border-gray-200 rounded shadow"
          >
            <p className="mb-1 text-gray-500">
              Year: <span className="font-semibold">{item.year}</span>
            </p>
            <p className="font-medium text-gray-800">Researcher: {item.researchers}</p>
            <p className="text-gray-700">Publication: {item.publication}</p>
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

export default AdminPublication;
