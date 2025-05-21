import { useEffect, useState } from "react";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/groups")
      .then(res => res.json())
      .then(data => setGroups(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-6">
      <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">All Hobby Groups</h2>
      
      {groups.length === 0 ? (
        <p className="text-center">No groups found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {groups.map(group => (
            <div key={group._id} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={group.image} alt={group.name} className="w-full h-40 object-cover" />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-purple-600">{group.name}</h3>
                <p className="text-sm text-gray-600">{group.category}</p>
                <p className="text-sm text-gray-500 line-clamp-2">{group.description}</p>
                <p className="text-sm"><strong>Location:</strong> {group.location}</p>
                <p className="text-sm"><strong>Start:</strong> {group.startDate}</p>
                <p className="text-sm"><strong>Max Members:</strong> {group.maxMembers}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroups;
