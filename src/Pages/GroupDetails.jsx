import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const GroupDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [group, setGroup] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/group/${id}`)
      .then(res => res.json())
      .then(data => {
        setGroup(data);
        if (user && data?.joinedMembers?.includes(user.email)) {
          setJoined(true);
        }
      });
  }, [id, user]);

  const handleJoin = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/group/join/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("You joined the group!");
        setJoined(true);
        setGroup(prev => ({
          ...prev,
          joinedMembers: [...(prev.joinedMembers || []), user.email]
        }));
      } else {
        toast.error(data.error);
      }
    } catch (err) {
      toast.error("Join failed. Try again.");
    }
  };

  if (!group) return <p className="text-center mt-10">Loading group...</p>;

  const isFull = (group.joinedMembers?.length || 0) >= parseInt(group.maxMembers);
  const isExpired = new Date(group.startDate) < new Date();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      <img src={group.image} alt={group.name} className="w-full h-64 object-cover rounded-lg shadow" />

<div className="flex justify-between items-center mt-6 border-b border-gray-200 pb-2">
<h1 className="text-3xl font-extrabold text-purple-700">{group.name}</h1>
<p className="text-sm text-gray-500 font-medium bg-blue-100 px-2 py-1 rounded-full">{group.category}</p>
</div>
<p className="mt-2 text-gray-700 text-lg">{group.description}</p>

{/* Detail Grid */}
<div className="mt-6 bg-white shadow rounded-lg p-6 border border-gray-100">
  <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Group Details</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
    <div className="flex justify-between sm:block">
      <span className="font-medium">Location: </span>
      <span className="text-blue-600">{group.location || "N/A"}</span>
    </div>
    <div className="flex justify-between sm:block">
      <span className="font-medium ">Start Date: </span>
      <span className="text-blue-600">{group.startDate ? new Date(group.startDate).toLocaleDateString() : "Not set"}</span>
    </div>
    <div className="flex justify-between sm:block">
      <span className="font-medium">Max Members:</span>
      <span>{group.maxMembers || "Not defined"}</span>
    </div>
    <div className="flex justify-between sm:block">
      <span className="font-medium">Current Members:</span>
      <span>{group.joinedMembers?.length || 0}</span>
    </div>
  </div>
</div>

      {/* <div className="mt-4 text-sm text-gray-600">
        <p><strong>Location:</strong> {group.location}</p>
        <p><strong>Start Date:</strong> {group.startDate}</p>
        <p><strong>Max Members:</strong> {group.maxMembers}</p>
        <p><strong>Current Members:</strong> {group.joinedMembers?.length || 0}</p>
      </div> */}

      {/* ✅ Join Logic */}
      <div className="mt-6">
        {joined ? (
          <button disabled className="bg-green-100 text-green-700 px-6 py-2 rounded font-medium cursor-not-allowed">
            ✅ You joined this group
          </button>
        ) : isExpired ? (
          <p className="text-red-600 font-semibold">⛔ This group has already started.</p>
        ) : isFull ? (
          <p className="text-orange-600 font-semibold">⚠️ This group is full.</p>
        ) : (
          <button onClick={handleJoin} className="bg-purple-600 text-white px-6 py-2 rounded font-medium hover:bg-purple-700">
            Join Group
          </button>
        )}
      </div>
    </div>
  );
};

export default GroupDetails;
