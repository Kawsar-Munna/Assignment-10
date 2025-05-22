import { useEffect, useState } from "react";
import GroupCard from "../components/GroupCard";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [featuredGroups, setFeaturedGroups] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/groups`)
      .then(res => res.json())
      .then(data => setGroups(data));

    fetch(`${process.env.REACT_APP_API}/api/featured-groups`)
      .then(res => res.json())
      .then(data => setFeaturedGroups(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-6">
      {/* Featured Groups */}
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Featured Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {featuredGroups.map(group => (
          <GroupCard key={group._id} group={group} />
        ))}
      </div>

      {/* All Groups */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {groups.map(group => (
          <GroupCard key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
