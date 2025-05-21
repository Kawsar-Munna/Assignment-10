import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Users } from "lucide-react";

const GroupCard = ({ group }) => {
  const { user } = useContext(AuthContext);
  const [joined, setJoined] = useState(false);

  // ✅ Check if current user has already joined (based on email)
  useEffect(() => {
    if (group.joinedMembers && user?.email) {
      const already = group.joinedMembers.some(member => member.email === user.email);
      setJoined(already);
    }
  }, [group, user]);

  const handleJoin = async () => {
    if (!user) {
      toast.error("You must be logged in to join.");
      return;
    }
  
    const newMember = {
      email: user.email,
      avatar: user.photoURL || "https://ui-avatars.com/api/?name=User"
    };
  
    try {
      const res = await fetch(`http://localhost:5000/api/group/join/${group._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newMember)
      });
  
      const data = await res.json();
  
      if (res.ok) {
        toast.success("You joined the group!");
        setJoined(true);
  
        // 🔁 Update local group data to reflect new member
        group.joinedMembers = [...(group.joinedMembers || []), newMember];
      } else {
        toast.error(data.error || "Failed to join group");
      }
    } catch (error) {
      toast.error("Server error. Try again later.");
    }
  };
  

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
      {/* Image */}
      <img src={group.image} alt={group.name} className="w-full h-40 object-cover" />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Tag + Members */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {group.category}
          </span>
          <div className="flex items-center text-sm text-gray-600 gap-1">
            <Users className="w-4 h-4" />
            {group.joinedMembers?.length || 0} members
          </div>
        </div>

        {/* Title + Description */}
        <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{group.description}</p>

        {/* Avatars + Button */}
        <div className="flex justify-between items-center mt-4">
          {/* Avatars */}
          {group.joinedMembers?.length > 0 && (
            <div className="flex space-x-[-10px]">
              {group.joinedMembers.slice(0, 5).map((member, index) => (
                <img
                  key={index}
                  src={member.avatar || "https://ui-avatars.com/api/?name=U"}
                  alt={member.email}
                  className="w-7 h-7 rounded-full border shadow-sm"
                  title={member.email}
                />
              ))}
              {group.joinedMembers.length > 5 && (
                <span className="text-xs text-gray-500">
                  +{group.joinedMembers.length - 5} more
                </span>
              )}
            </div>
          )}

          {/* Join Button */}
          {joined ? (
            <button
              disabled
              className="bg-green-100 text-green-700 px-4 py-2 text-sm rounded cursor-not-allowed"
            >
              ✅ Joined
            </button>
          ) : (
            <button
              onClick={handleJoin}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm rounded"
            >
              Join Group
            </button>
          )}
        </div>
      </div>

      {/* See Details */}
      <Link
        to={`/group/${group._id}`}
        className="block text-center py-2 text-sm font-medium text-purple-700 hover:underline border-t border-gray-100"
      >
        See Details
      </Link>
    </div>
  );
};

export default GroupCard;
