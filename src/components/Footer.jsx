const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Branding */}
            <div>
              <div className="flex items-center mb-4">
                <span className="font-['Pacifico'] text-white text-2xl">HobbyHub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting people through shared interests and passions since 2025.
              </p>
              <div className="flex space-x-4">
                {['facebook-fill', 'twitter-x-fill', 'instagram-fill', 'linkedin-fill'].map(icon => (
                  <a key={icon} href="#" className="text-gray-400 hover:text-white">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`ri-${icon}`}></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
  
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                {['Home', 'All Groups', 'Create Group', 'My Groups', 'About Us'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Column 3: Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                {['Help Center', 'Community Guidelines', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Column 4: Subscribe */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with the latest groups and events in your area.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-button focus:outline-none flex-grow"
                />
                <button className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-r-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 HobbyHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="hover:text-white">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  