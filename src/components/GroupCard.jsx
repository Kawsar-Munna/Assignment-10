const GroupCard = ({ group }) => {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
        <div className="h-48 w-full overflow-hidden">
          <img src={group.image} alt={group.name} className="w-full h-full object-cover object-top" />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className={`inline-block ${group.tagBg} ${group.tagText} text-xs font-medium px-2.5 py-0.5 rounded`}>
                {group.category}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{group.name}</h3>
            </div>
            <span className="text-sm text-gray-600 flex items-center">
              <i className="ri-user-line mr-1"></i>{group.members} members
            </span>
          </div>
          <p className="text-gray-600 mb-4">{group.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              {group.avatars.map((url, idx) => (
                <img key={idx} className="w-8 h-8 rounded-full border-2 border-white" src={url} alt="avatar" />
              ))}
            </div>
            <button className="bg-primary text-white hover:bg-primary/90 px-4 py-2 text-sm font-medium rounded-button whitespace-nowrap">
              Join Group
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default GroupCard;
  