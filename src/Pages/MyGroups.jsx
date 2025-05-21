import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const url = `http://localhost:5000/api/my-groups?email=${user.email}`;
      console.log("Calling:", url); // Log the actual URL
  
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("Request failed: " + res.status);
          return res.json();
        })
        .then((data) => {
          console.log("Fetched groups:", data);
          setGroups(data);
        })
        .catch((err) => {
          console.error("Fetch error:", err.message);
        });
    }
  }, [user]);
  
  

  

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this group?")) return;

    const res = await fetch(`http://localhost:5000/api/group/${id}`, {
      method: "DELETE"
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.success("Group deleted!");
      setGroups(groups.filter((group) => group._id !== id));
    } else {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">My Groups</h2>
      {groups.length === 0 ? (
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
              {groups.map((group) => (
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
  );
};

export default MyGroups;
