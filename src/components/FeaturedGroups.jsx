import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GroupCard from "./GroupCard";
import LoadingSpinner from "./LoadingSpinner";
import { Fade, Reveal } from "react-awesome-reveal";
import ErrorBoundary from "./ErrorBoundary";

const FeaturedGroupsContent = () => {
  const navigate = useNavigate();
  const [featuredGroups, setFeaturedGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchFeaturedGroups = async () => {
      try {
        const response = await fetch("https://server-pyv6.onrender.com/api/groups");
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received from server");
        }
        setFeaturedGroups(data);
      } catch (err) {
        console.error("Error fetching featured groups:", err);
        setError(err.message || "Failed to load featured groups. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedGroups();
  }, []);

  const visibleGroups = Array.isArray(featuredGroups) ? featuredGroups.slice(0, 6) : [];

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

        {loading && <LoadingSpinner />}

        {!loading && error && (
          <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-red-600 dark:text-red-300">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleGroups.length === 0 ? (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-300">
                No featured groups available at the moment.
              </p>
            ) : (
              visibleGroups.map((group) => (
                <Reveal key={group._id} triggerOnce>
                  <GroupCard group={group} />
                </Reveal>
              ))
            )}
          </div>
        )}

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

const FeaturedGroups = () => (
  <ErrorBoundary>
    <FeaturedGroupsContent />
  </ErrorBoundary>
);

export default FeaturedGroups;
