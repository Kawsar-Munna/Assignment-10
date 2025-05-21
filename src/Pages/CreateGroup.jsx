import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    location: "",
    maxMembers: "",
    startDate: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const groupData = {
      ...form,
      createdBy: {
        name: user.displayName,
        email: user.email
      }
    };

    try {
      const res = await fetch("http://localhost:5000/api/create-group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(groupData)
      });

      const data = await res.json();
      if (data.insertedId) {
        toast.success("Group created successfully!");
        setForm({
          name: "",
          category: "",
          description: "",
          location: "",
          maxMembers: "",
          startDate: "",
          image: ""
        });
      } else {
        toast.error("Failed to create group.");
      }
    } catch (err) {
      toast.error("Server error: " + err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Create Group</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Group Name" value={form.name} onChange={handleChange} className="input input-bordered" required />
        <select name="category" value={form.category} onChange={handleChange} className="input input-bordered" required>
          <option value="">Select Category</option>
          <option>Drawing & Painting</option>
          <option>Photography</option>
          <option>Video Gaming</option>
          <option>Fishing</option>
          <option>Running</option>
          <option>Cooking</option>
          <option>Reading</option>
          <option>Writing</option>
        </select>
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className="input input-bordered" required />
        <input type="number" name="maxMembers" placeholder="Max Members" value={form.maxMembers} onChange={handleChange} className="input input-bordered" required />
        <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="input input-bordered" required />
        <input type="url" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="input input-bordered" required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="input input-bordered col-span-full" required />
        <input type="text" readOnly className="input input-bordered" value={user.displayName} />
        <input type="email" readOnly className="input input-bordered" value={user.email} />
        <button type="submit" className="btn bg-purple-600 text-white col-span-full hover:bg-purple-700">
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
