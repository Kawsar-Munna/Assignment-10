import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const UpdateGroup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [group, setGroup] = useState(null);

  useEffect(() => {
    fetch(`https://server-pyv6.onrender.com/api/group/${id}`)
      .then(res => res.json())
      .then(data => {
        const formattedData = {
          ...data,
          startDate: data.startDate ? new Date(data.startDate).toISOString().split("T")[0] : ""
        };
        setGroup(formattedData);
      })
      .catch(err => toast.error("Failed to fetch group data."));
  }, [id]);

  const handleChange = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { _id, ...rest } = group;

    const updatedGroup = {
      ...rest,
      updatedBy: user?.email,
      startDate: group.startDate ? new Date(group.startDate).toISOString() : null,
    };
    

    try {
      const res = await fetch(`https://server-pyv6.onrender.com/api/group/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGroup)
      });

      const data = await res.json();
      if (data.modifiedCount > 0) {
        toast.success("Group updated successfully!");
        navigate('/myGroups');
      } else {
        toast.error("No changes were made.");
      }
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Update failed.");
    }
  };

  if (!group) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 border border-gray-200 rounded p-6 shadow bg-gradient-to-b from-red-50 to-purple-100">
      <h1 className="text-2xl font-bold text-purple-700 mb-6">Update Group</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>

<div className='mb-4'>
<div className='mb-2'>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={user.displayName || ''}
            readOnly
            className="w-full border px-4 py-2 rounded text-gray-500"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={user.email || ''}
            readOnly
            className="w-full border px-4 py-2 rounded text-gray-500"
          />
        </div>
</div>

          <div className='flex gap-2'></div>
          <label className="block font-medium text-gray-700">Group Name</label>
          <input
            type="text"
            name="name"
            value={group.name || ''}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={group.description || ''}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={group.location || ''}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Max Members</label>
          <input
            type="number"
            name="maxMembers"
            value={group.maxMembers || ''}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            min="1"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={group.startDate || ''}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            value={group.image || ''}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Update Group
        </button>
      </form>
    </div>
  );
};

export default UpdateGroup;
