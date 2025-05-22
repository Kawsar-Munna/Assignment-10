import { useEffect, useState } from "react";
import GroupCard from "../components/GroupCard";
import LoadingSpinner from "../components/LoadingSpinner";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [featuredGroups, setFeaturedGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(
          `https://server-pyv6.onrender.com/api/groups`
        );
        const data = await response.json();
        setGroups(data);
        setFeaturedGroups(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-6">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Featured Groups */}
          <h2 className="text-2xl font-bold mb-4 text-purple-700">
            Featured Groups
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {featuredGroups.map((group) => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>

          {/* All Groups */}
          <h2 className="text-2xl font-bold mb-4 text-gray-800">All Groups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {groups.map((group) => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllGroups;
