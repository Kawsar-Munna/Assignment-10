const CTASection = () => {
    return (
      <section className="relative py-24 overflow-hidden w-[90%] mx-auto mb-6">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            
            backgroundImage: `url('https://i.ibb.co/XHJsntq/42e4ee0ca9a6649906638a4fd3ba6f93.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/20"></div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to find your community?
              </h2>
              <p className="mt-6 text-xl text-white/90">
                Join thousands of passionate people who have already found their
                perfect hobby groups. Start your journey today!
              </p>
  
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-button inline-flex items-center group">
                  <i className="ri-user-add-line mr-2"></i>
                  Join Now
                </button>
                <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-button inline-flex items-center group">
                  <i className="ri-search-line mr-2"></i>
                  Browse Groups
                </button>
              </div>
  
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-3">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-white"
                    src="https://i.ibb.co/1GKZ3q46/313b131f2c9996e5c00ac4109af53809.jpg"
                    alt=""
                  />
                  <img
                    className="w-12 h-12 rounded-full border-2 border-white"
                    src="https://i.ibb.co/C3CGFbDR/8925fa1aace7a206182ef4308e8e8227.jpg"
                    alt=""
                  />
                  <img
                    className="w-12 h-12 rounded-full border-2 border-white"
                    src="https://i.ibb.co/PGqkQYq5/da3c7066ed2e61ca00c5e9e33f64a134.jpg"
                    alt=""
                  />
                </div>
                <div className="text-white">
                  <p className="text-2xl font-bold">2,500+</p>
                  <p className="text-sm opacity-90">Active Members</p>
                </div>
              </div>
            </div>
  
            {/* Stats Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <i className="ri-group-line ri-2x"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">500+ Groups</h3>
                      <p className="text-gray-600">Active communities across all interests</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <i className="ri-calendar-line ri-2x"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">1,200+ Events</h3>
                      <p className="text-gray-600">Monthly meetups and activities</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <i className="ri-map-pin-line ri-2x"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">50+ Cities</h3>
                      <p className="text-gray-600">Local communities near you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  