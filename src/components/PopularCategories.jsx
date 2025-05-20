const categories = [
    { name: 'Outdoor', count: 86, icon: 'ri-footprint-line', bg: 'bg-blue-50', hover: 'hover:bg-blue-100', color: 'text-blue-600' },
    { name: 'Reading', count: 64, icon: 'ri-book-open-line', bg: 'bg-purple-50', hover: 'hover:bg-purple-100', color: 'text-purple-600' },
    { name: 'Photography', count: 52, icon: 'ri-camera-line', bg: 'bg-green-50', hover: 'hover:bg-green-100', color: 'text-green-600' },
    { name: 'Cooking', count: 48, icon: 'ri-restaurant-line', bg: 'bg-red-50', hover: 'hover:bg-red-100', color: 'text-red-600' },
    { name: 'Wellness', count: 39, icon: 'ri-mental-health-line', bg: 'bg-yellow-50', hover: 'hover:bg-yellow-100', color: 'text-yellow-600' },
    { name: 'Games', count: 72, icon: 'ri-gamepad-line', bg: 'bg-indigo-50', hover: 'hover:bg-indigo-100', color: 'text-indigo-600' },
    { name: 'Arts & Crafts', count: 58, icon: 'ri-palette-line', bg: 'bg-pink-50', hover: 'hover:bg-pink-100', color: 'text-pink-600' },
    { name: 'Technology', count: 45, icon: 'ri-code-line', bg: 'bg-cyan-50', hover: 'hover:bg-cyan-100', color: 'text-cyan-600' },
    { name: 'Music', count: 67, icon: 'ri-music-line', bg: 'bg-orange-50', hover: 'hover:bg-orange-100', color: 'text-orange-600' },
    { name: 'Gardening', count: 34, icon: 'ri-plant-line', bg: 'bg-lime-50', hover: 'hover:bg-lime-100', color: 'text-lime-600' },
    { name: 'Film & TV', count: 42, icon: 'ri-film-line', bg: 'bg-rose-50', hover: 'hover:bg-rose-100', color: 'text-rose-600' },
    { name: 'More', count: 120, icon: 'ri-more-line', bg: 'bg-teal-50', hover: 'hover:bg-teal-100', color: 'text-teal-600' }
  ];
  
  const PopularCategories = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Categories</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore groups by category and find the perfect community for your interests.
            </p>
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="group">
                <div className={`aspect-square ${cat.bg} ${cat.hover} rounded-lg flex flex-col items-center justify-center p-6 transition-all`}>
                  <div className={`w-12 h-12 flex items-center justify-center ${cat.color} mb-3`}>
                    <i className={`${cat.icon} ri-2x`}></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{cat.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{cat.count} groups</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PopularCategories;
  