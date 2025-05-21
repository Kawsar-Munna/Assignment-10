import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [createdGroups, setCreatedGroups] = useState([]);
  const [joinedGroups, setJoinedGroups] = useState([]);

  // Fetch Created Groups
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/api/my-groups?email=${user.email}`)
        .then(res => res.json())
        .then(data => setCreatedGroups(data))
        .catch(err => console.error("Fetch error (created):", err));
    }
  }, [user]);

  // Fetch Joined Groups
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/api/joined-groups?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJoinedGroups(data))
        .catch(err => console.error("Fetch error (joined):", err));
    }
  }, [user]);

  // Handle Delete Created Group
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this group?")) return;

    const res = await fetch(`http://localhost:5000/api/group/${id}`, {
      method: "DELETE"
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
      body: JSON.stringify({ email: user.email })
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
    <div className="max-w-6xl mx-auto p-4 mt-6 space-y-12">
      {/* 🔹 Created Groups */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Groups I Created</h2>
        {createdGroups.length === 0 ? (
          <p>No groups created yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Start Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {createdGroups.map((group) => (
                  <tr key={group._id}>
                    <td>{group.name}</td>
                    <td>{group.category}</td>
                    <td>{group.location}</td>
                    <td>{group.startDate}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                      {/* Optional: Add Update Button */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 🔹 Joined Groups */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Groups I Joined</h2>
        {joinedGroups.length === 0 ? (
          <p>You haven’t joined any groups yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Start Date</th>
                  <th>Created By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {joinedGroups.map((group) => (
                  <tr key={group._id}>
                    <td>{group.name}</td>
                    <td>{group.category}</td>
                    <td>{group.location}</td>
                    <td>{group.startDate}</td>
                    <td>{group.createdBy?.name || "Unknown"}</td>
                    <td>
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
