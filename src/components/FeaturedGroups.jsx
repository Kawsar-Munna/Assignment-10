import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GroupCard from "./GroupCard";

const FeaturedGroups = () => {
  const navigate = useNavigate();
  const [featuredGroups, setFeaturedGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/featured-groups")
      .then(res => res.json())
      .then(data => setFeaturedGroups(data));
  }, []);

  const visibleGroups = featuredGroups.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Groups</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover popular hobby groups in your area and connect with people who share your interests.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleGroups.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No featured groups available.</p>
          ) : (
            visibleGroups.map((group) => (
              <GroupCard key={group._id} group={group} />
            ))
          )}
        </div>

        {/* View All Button */}
        {featuredGroups.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/groups")}
              className="bg-white text-primary hover:bg-gray-50 border border-primary px-6 py-3 text-base font-medium rounded-button"
            >
              View All Groups
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedGroups;
