import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminChangeForm = () => {
  const [form, setForm] = useState({ formLink: "" });
  const [latestForm, setLatestForm] = useState(null);

  const fetchLatestForm = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setLatestForm(res.data);
      if (res.data?.formLink) {
        setForm({ formLink: res.data.formLink });
      }
    } catch (err) {
      console.error("Error fetching form link:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/contact`, form);
      fetchLatestForm();
        window.alert("Form saved!");
    } catch (err) {
      console.error("Error submitting form link:", err);
    }
  };

  useEffect(() => {
    fetchLatestForm();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-gray-900 via-black to-blue-950">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl p-6 mx-auto mb-10 bg-white rounded shadow"
      >
        <h2 className="mb-4 text-xl font-bold">
          {latestForm ? "Update Form Link" : "Add Form Link"}
        </h2>
        <input
          name="formLink"
          value={form.formLink}
          onChange={handleChange}
          placeholder="Enter Google Form link"
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded"
        >
          Save
        </button>
      </form>

      {latestForm && (
        <div className="max-w-2xl p-6 mx-auto bg-white border border-gray-200 rounded shadow">
          <p className="text-blue-700 break-words">
            <a
              href={latestForm.formLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {latestForm.formLink}
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated:{" "}
            {new Date(latestForm.createdAt).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminChangeForm;
