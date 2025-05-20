import { useState } from 'react';

const categories = [
  { name: 'Outdoor', icon: 'ri-footprint-line', color: 'text-blue-600' },
  { name: 'Reading', icon: 'ri-book-open-line', color: 'text-purple-600' },
  { name: 'Photography', icon: 'ri-camera-line', color: 'text-green-600' },
  { name: 'Cooking', icon: 'ri-restaurant-line', color: 'text-red-600' },
  { name: 'Wellness', icon: 'ri-mental-health-line', color: 'text-yellow-600' },
  { name: 'Games', icon: 'ri-gamepad-line', color: 'text-indigo-600' },
];

const CreateGroup = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [privacy, setPrivacy] = useState('public');

  const handleDescriptionChange = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-pink-50 via-indigo-50 to-white rounded-2xl shadow-xl p-10 border border-gray-100 mt-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Create a New Group</h1>
          <p className="mt-3 text-lg text-gray-600">Unite people around your favorite hobby with a vibrant new group</p>
        </div>

        <form className="space-y-8">
          {/* Group Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Group Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              placeholder="Enter group name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full px-4 py-3 text-left border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-sm flex justify-between items-center"
              >
                <span>{selectedCategory || 'Select a category'}</span>
                <i className="ri-arrow-down-s-line text-xl"></i>
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
                  <div className="p-2">
                    {categories.map((cat, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.name);
                          setDropdownOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                      >
                        <i className={`${cat.icon} ${cat.color} text-lg`}></i>
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
            <textarea
              rows="4"
              maxLength="500"
              onChange={handleDescriptionChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none shadow-sm"
              placeholder="Describe your group"
            ></textarea>
            <div className="mt-1 text-sm text-gray-500 flex justify-between">
              <span>Be clear and descriptive</span>
              <span>{charCount}/500</span>
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Group Privacy</h2>
            <div className="space-y-4">
              {['public', 'private'].map((type) => (
                <label key={type} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="privacy"
                    value={type}
                    checked={privacy === type}
                    onChange={() => setPrivacy(type)}
                    className="hidden"
                  />
                  <div className={`w-full flex items-center space-x-3 p-4 border ${privacy === type ? 'border-primary bg-primary/5' : 'border-gray-200'} rounded-xl transition-all shadow-sm`}>
                    <i className={`ri-${type === 'public' ? 'global' : 'lock'}-line text-primary text-xl`}></i>
                    <div className="flex-grow">
                      <span className="block text-sm font-semibold text-gray-900 capitalize">{type} Group</span>
                      <span className="block text-sm text-gray-500">
                        {type === 'public' ? 'Anyone can see and join this group' : 'Only approved members can join'}
                      </span>
                    </div>
                    <div className="w-5 h-5 border-2 rounded-full flex items-center justify-center">
                      {privacy === type && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Meeting Location</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <i className="ri-map-pin-line text-gray-400"></i>
              </div>
              <input
                type="text"
                required
                className="pl-10 w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                placeholder="Enter meeting location"
              />
            </div>
          </div>

          {/* Max Members */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Maximum Members</label>
            <input
              type="number"
              min="2"
              max="1000"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              placeholder="Enter maximum number of members"
            />
            <p className="mt-1 text-sm text-gray-500">Minimum 2, maximum 1000 members</p>
          </div>

          {/* Image Upload */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Group Image</h2>
            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-xl bg-white/50">
              <div className="text-center">
                <i className="ri-image-add-line text-3xl text-gray-400 mx-auto"></i>
                <div className="text-sm text-gray-600 mt-2">
                  <label htmlFor="image" className="cursor-pointer font-medium text-primary hover:text-primary">
                    <span>Upload a file</span>
                    <input id="image" name="image" type="file" className="sr-only" accept="image/*" />
                  </label>
                  <span className="pl-1">or drag and drop</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white hover:bg-primary/90 px-6 py-3 text-base font-semibold rounded-xl shadow-md"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;