const steps = [
    {
      icon: 'ri-search-line',
      title: 'Discover Groups',
      description: 'Browse through our diverse collection of hobby groups in your area based on your interests.',
    },
    {
      icon: 'ri-user-add-line',
      title: 'Join or Create',
      description: 'Join existing groups that match your interests or create your own to find fellow enthusiasts.',
    },
    {
      icon: 'ri-group-line',
      title: 'Meet & Connect',
      description: 'Attend events, share experiences, and build meaningful connections with people who share your passion.',
    }
  ];
  
  const HowItWorks = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How HobbyHub Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with like-minded people and build communities around your favorite activities in just a few simple steps.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 flex items-center justify-center text-primary">
                    <i className={`${step.icon} ri-2x`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  