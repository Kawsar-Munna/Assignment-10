import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GroupCard from "./GroupCard";
import LoadingSpinner from "./LoadingSpinner";
import { Fade, Reveal } from "react-awesome-reveal";

const FeaturedGroups = () => {
  const navigate = useNavigate();
  const [featuredGroups, setFeaturedGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/featured-groups")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load featured groups.");
        return res.json();
      })
      .then((data) => {
        setFeaturedGroups(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const visibleGroups = featuredGroups.slice(0, 6);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Featured Groups
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Discover popular hobby groups in your area and connect with people who share your interests.
          </p>
        </div>

        {/* Loader */}
        {loading && <LoadingSpinner />}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-500 dark:text-red-400">{error}</p>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleGroups.length === 0 ? (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-300">
                No featured groups available.
              </p>
            ) : (
              visibleGroups.map((group) => (
                <Reveal  key={group._id}>
                  <GroupCard group={group} />
                </Reveal>
              ))
            )}
          </div>
        )}

        {/* View All Button */}
        {!loading && !error && featuredGroups.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/groups")}
              className="bg-white text-primary hover:bg-gray-50 border border-primary px-6 py-3 text-base font-medium rounded-button dark:bg-gray-800 dark:text-white dark:border-gray-700"
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
