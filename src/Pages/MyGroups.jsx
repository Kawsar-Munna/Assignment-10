import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyGroups = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [createdGroups, setCreatedGroups] = useState([]);
  const [joinedGroups, setJoinedGroups] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/api/my-groups?email=${user.email}`)
        .then(res => res.json())
        .then(data => setCreatedGroups(data))
        .catch(err => console.error("Fetch error (created):", err));
    }
  }, [user]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/api/joined-groups?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJoinedGroups(data))
        .catch(err => console.error("Fetch error (joined):", err));
    }
  }, [user]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this group?")) return;

    const res = await fetch(`http://localhost:5000/api/group/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.success("Group deleted!");
      setCreatedGroups(createdGroups.filter((group) => group._id !== id));
    } else {
      toast.error("Delete failed");
    }
  };

  const handleLeave = async (id) => {
    if (!confirm("Leave this group?")) return;

    const res = await fetch(`http://localhost:5000/api/group/leave/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      toast.success("Left the group!");
      setJoinedGroups(joinedGroups.filter((group) => group._id !== id));
    } else {
      toast.error("Could not leave the group");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mt-6 space-y-16">
      {/* Created Groups */}
      <div>
        <h2 className="text-3xl font-bold text-purple-800 border-b-2 border-purple-300 inline-block mb-6">
          Groups i Created
        </h2>
        {createdGroups.length === 0 ? (
          <p className="text-gray-600">No groups created yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-purple-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-purple-800 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-purple-800 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-purple-800 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-purple-800 uppercase">Start Date</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-purple-800 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {createdGroups.map((group) => (
                  <tr key={group._id} className="hover:bg-purple-50 transition duration-200">
                    <td className="px-6 py-4">{group.name}</td>
                    <td className="px-6 py-4">{group.category}</td>
                    <td className="px-6 py-4">{group.location}</td>
                    <td className="px-6 py-4">{group.startDate}</td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => navigate(`/updateGroup/${group._id}`)}
                        className="text-blue-600 hover:underline"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Joined Groups */}
      <div>
        <h2 className="text-3xl font-bold text-green-800 border-b-2 border-green-300 inline-block mb-6">
          Groups i Joined
        </h2>
        {joinedGroups.length === 0 ? (
          <p className="text-gray-600">You haven’t joined any groups yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-green-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-green-800 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-green-800 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-green-800 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-green-800 uppercase">Start Date</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-green-800 uppercase">Created By</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-green-800 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {joinedGroups.map((group) => (
                  <tr key={group._id} className="hover:bg-green-50 transition duration-200">
                    <td className="px-6 py-4">{group.name}</td>
                    <td className="px-6 py-4">{group.category}</td>
                    <td className="px-6 py-4">{group.location}</td>
                    <td className="px-6 py-4">{group.startDate}</td>
                    <td className="px-6 py-4">{group.createdBy?.name || "Unknown"}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleLeave(group._id)}
                        className="text-red-600 hover:underline"
                      >
                        Leave
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGroups;
