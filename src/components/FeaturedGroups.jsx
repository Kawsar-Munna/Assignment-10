import GroupCard from './GroupCard';
import { useNavigate } from 'react-router-dom';

const featuredGroups = [
  {
    name: 'Urban Explorers',
    category: 'Outdoor',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
    members: 42,
    description: 'Weekly hiking adventures exploring urban trails and city parks.',
    image: 'https://i.ibb.co/XHJsntq/42e4ee0ca9a6649906638a4fd3ba6f93.jpg',
    avatars: [
        'https://i.ibb.co/1GKZ3q46/313b131f2c9996e5c00ac4109af53809.jpg',
        'https://i.ibb.co/C3CGFbDR/8925fa1aace7a206182ef4308e8e8227.jpg',
        'https://i.ibb.co/7NL8dDXY/d07892e1de11df437f6df6ce833333e0.jpg'
    ]
  },
  {
    name: 'Literary Circle',
    category: 'Reading',
    tagBg: 'bg-purple-100',
    tagText: 'text-purple-800',
    members: 28,
    description: 'Monthly book discussions focusing on contemporary fiction and classics.',
    image: 'https://i.ibb.co/nq7KGTBz/ba00e712ce68cc819da8655dd15343c3.jpg',
    avatars: [
        'https://i.ibb.co/1GKZ3q46/313b131f2c9996e5c00ac4109af53809.jpg',
        'https://i.ibb.co/C3CGFbDR/8925fa1aace7a206182ef4308e8e8227.jpg',
        'https://i.ibb.co/7NL8dDXY/d07892e1de11df437f6df6ce833333e0.jpg'
    ]
  },
  // Add 4 more group objects similarly...
  {
    name: 'Shutter Squad',
    category: 'Photography',
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
    members: 35,
    description: 'Photography enthusiasts meeting for photo walks, technique workshops, and equipment sharing.',
    image: 'https://i.ibb.co/5gk9W0c7/6134a8de5717aa5e207f6bdbe57ae0dc.jpg',
    avatars: [
      'https://i.ibb.co/1GKZ3q46/313b131f2c9996e5c00ac4109af53809.jpg',
      'https://i.ibb.co/C3CGFbDR/8925fa1aace7a206182ef4308e8e8227.jpg',
      'https://i.ibb.co/7NL8dDXY/d07892e1de11df437f6df6ce833333e0.jpg'
    ]
  },
  {
    name: 'Culinary Explorers',
    category: 'Cooking',
    tagBg: 'bg-red-100',
    tagText: 'text-red-800',
    members: 31,
    description: 'Cooking enthusiasts sharing recipes, techniques, and monthly themed potluck dinners.',
    image: 'https://i.ibb.co/zh24SPwD/c511c98a071e0695193513dab6379ed1.jpg',
    avatars: [
      'https://i.ibb.co/1GKZ3q46/313b131f2c9996e5c00ac4109af53809.jpg',
      'https://i.ibb.co/C3CGFbDR/8925fa1aace7a206182ef4308e8e8227.jpg',
      'https://i.ibb.co/7NL8dDXY/d07892e1de11df437f6df6ce833333e0.jpg'
    ]
  },
  {
    name: 'Mindful Movers',
    category: 'Wellness',
    tagBg: 'bg-yellow-100',
    tagText: 'text-yellow-800',
    members: 26,
    description: 'Weekly yoga and meditation sessions focused on mindfulness and stress reduction.',
    image: 'https://i.ibb.co/rK9RJsvL/36036e640c47fb139c7aa28356ace74a.jpg',
    avatars: [
        'https://i.ibb.co/1GKZ3q46/313b131f2c9996e5c00ac4109af53809.jpg',
        'https://i.ibb.co/C3CGFbDR/8925fa1aace7a206182ef4308e8e8227.jpg',
        'https://i.ibb.co/7NL8dDXY/d07892e1de11df437f6df6ce833333e0.jpg'
    ]
  },
  {
    name: 'Strategy Masters',
    category: 'Games',
    tagBg: 'bg-indigo-100',
    tagText: 'text-indigo-800',
    members: 38,
    description: 'Weekly board game nights featuring strategy games, card games, and social deduction games.',
    image: 'https://i.ibb.co/zWyGpF2w/679aebeabeb03eee4556d4e3573e57c3.jpg',
    avatars: [
        'https://i.ibb.co/0pt8z9wj/ac1bf70988608ab9c6ab9034d658da1a.jpg',
        'https://i.ibb.co/0pt8z9wj/ac1bf70988608ab9c6ab9034d658da1a.jpg',
        'https://i.ibb.co/0pt8z9wj/ac1bf70988608ab9c6ab9034d658da1a.jpg'
    ]
  },
  {
    name: 'Strategy Masters',
    category: 'Games',
    tagBg: 'bg-indigo-100',
    tagText: 'text-indigo-800',
    members: 38,
    description: 'Weekly board game nights featuring strategy games, card games, and social deduction games.',
    image: 'https://i.ibb.co/zWyGpF2w/679aebeabeb03eee4556d4e3573e57c3.jpg',
    avatars: [
        'https://i.ibb.co/0pt8z9wj/ac1bf70988608ab9c6ab9034d658da1a.jpg',
        'https://i.ibb.co/0pt8z9wj/ac1bf70988608ab9c6ab9034d658da1a.jpg',
        'https://i.ibb.co/0pt8z9wj/ac1bf70988608ab9c6ab9034d658da1a.jpg'
    ]
  }
];


const FeaturedGroups = () => {
    const navigate = useNavigate();
    const visibleGroups = featuredGroups.slice(0, 6); // Only show 6 initially
  
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
            {visibleGroups.map((group, index) => (
              <GroupCard key={index} group={group} />
            ))}
          </div>
  
          {/* View All Button */}
          {featuredGroups.length > 6 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/groups')}
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
