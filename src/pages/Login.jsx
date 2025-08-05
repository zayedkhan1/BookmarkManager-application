// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim()) {
//       onLogin(username.trim());
//       navigate('/');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md dark:bg-gray-800"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-white">Login</h2>
//         <input
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <button
//           type="submit"
//           className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import { FaBookmark, FaRocket, FaShieldAlt, FaSync, FaUsers, FaPalette } from 'react-icons/fa';

function HomePage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Navigation */}
      {/* <nav className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaBookmark className="text-indigo-400 text-2xl mr-2" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Bookmark<span className="font-light">Manager</span>
          </span>
        </div>
        <button 
          onClick={() => setShowLogin(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
        >
          Sign In
        </button>
      </nav> */}

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Organize. Access. Share.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Your premium bookmark management solution across all devices. Never lose a link again.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
    
    {/* <main className="grid grid-cols-1 lg:grid-cols-2 gap-12"> 
      
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 relative pb-2">
              <span className="relative inline-block">
                Send Us a Message
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-indigo-500 rounded-full"></span>
              </span>
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                  <option>Account Help</option>
                  <option>Business Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

         
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6 relative pb-2">
                <span className="relative inline-block">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-purple-500 rounded-full"></span>
                </span>
              </h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-500/20 mr-4 flex-shrink-0">
                    <FaEnvelope className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100">Email</h3>
                    <p className="text-gray-400">support@bookmarkmanager.com</p>
                    <p className="text-gray-400">business@bookmarkmanager.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-purple-500/20 mr-4 flex-shrink-0">
                    <FaPhone className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-500/20 mr-4 flex-shrink-0">
                    <FaMapMarkedAlt className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100">Headquarters</h3>
                    <p className="text-gray-400">123 Bookmark Street</p>
                    <p className="text-gray-400">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-green-500/20 mr-4">
                    <FaHeadset className="text-green-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Live Support</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Need immediate help? Our support team is available 24/7.
                </p>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  Start Live Chat
                </button>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 rounded-lg bg-gray-700 hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    <FiTwitter className="text-xl" />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-gray-700 hover:bg-gray-500/20 text-gray-300 hover:text-gray-100 transition-colors duration-300">
                    <FiGithub className="text-xl" />
                  </a>
                  <a href="#" className="p-3 rounded-lg bg-gray-700 hover:bg-blue-600/20 text-gray-300 hover:text-blue-500 transition-colors duration-300">
                    <FiLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>  */}
            
             <main className='max-w-7xl mx-auto'>
                      {/* Features Section */}
                      <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-12 text-center relative">
                          <span className="relative inline-block p-4">
                            Why Choose BookmarkManager?
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
                          </span>
                        </h2>
            
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {/* Feature 1 */}
                          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            <div className="flex items-center mb-4">
                              <div className="p-3 rounded-lg bg-indigo-500/20 mr-4">
                                <FaSync className="text-indigo-400 text-2xl" />
                              </div>
                              <h3 className="text-xl font-semibold">Cross-Device Sync</h3>
                            </div>
                            <p className="text-gray-300">
                              Access your bookmarks anywhere, anytime. Our seamless sync technology keeps your data updated across all your devices.
                            </p>
                          </div>
            
                          {/* Feature 2 */}
                          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            <div className="flex items-center mb-4">
                              <div className="p-3 rounded-lg bg-purple-500/20 mr-4">
                                <FaShieldAlt className="text-purple-400 text-2xl" />
                              </div>
                              <h3 className="text-xl font-semibold">Military-Grade Security</h3>
                            </div>
                            <p className="text-gray-300">
                              Your data is encrypted end-to-end. We never store or access your bookmarks without your permission.
                            </p>
                          </div>
            
                          {/* Feature 3 */}
                          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            <div className="flex items-center mb-4">
                              <div className="p-3 rounded-lg bg-blue-500/20 mr-4">
                                <FaPalette className="text-blue-400 text-2xl" />
                              </div>
                              <h3 className="text-xl font-semibold">Customizable Interface</h3>
                            </div>
                            <p className="text-gray-300">
                              Personalize your experience with themes, layouts, and organizational systems that work for you.
                            </p>
                          </div>
            
                          {/* Feature 4 */}
                          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            <div className="flex items-center mb-4">
                              <div className="p-3 rounded-lg bg-green-500/20 mr-4">
                                <FaRocket className="text-green-400 text-2xl" />
                              </div>
                              <h3 className="text-xl font-semibold">Lightning Fast</h3>
                            </div>
                            <p className="text-gray-300">
                              Optimized search algorithms and minimal design ensure you find what you need in milliseconds.
                            </p>
                          </div>
            
                          {/* Feature 5 */}
                          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            <div className="flex items-center mb-4">
                              <div className="p-3 rounded-lg bg-yellow-500/20 mr-4">
                                <FiExternalLink className="text-yellow-400 text-2xl" />
                              </div>
                              <h3 className="text-xl font-semibold">Smart Previews</h3>
                            </div>
                            <p className="text-gray-300">
                              Get rich link previews with thumbnails and descriptions before you click, saving you time.
                            </p>
                          </div>
            
                          {/* Feature 6 */}
                          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            <div className="flex items-center mb-4">
                              <div className="p-3 rounded-lg bg-red-500/20 mr-4">
                                <FaUsers className="text-red-400 text-2xl" />
                              </div>
                              <h3 className="text-xl font-semibold">Collaboration</h3>
                            </div>
                            <p className="text-gray-300">
                              Share collections with teams or friends, with fine-grained permission controls.
                            </p>
                          </div>
                        </div>
                      </section>
            
                      {/* Stats Section */}
                      <section className="mb-20 bg-gray-800 rounded-xl p-8 shadow-xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                          <div className="p-4">
                            <div className="text-4xl font-bold text-indigo-400 mb-2">10K+</div>
                            <div className="text-gray-400">Active Users</div>
                          </div>
                          <div className="p-4">
                            <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
                            <div className="text-gray-400">Bookmarks Saved</div>
                          </div>
                          <div className="p-4">
                            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                            <div className="text-gray-400">Uptime</div>
                          </div>
                          <div className="p-4">
                            <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                            <div className="text-gray-400">Support</div>
                          </div>
                        </div>
                      </section>
            
                      {/* Team/Company Section */}
                      {/* <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Vision</h2>
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                          <div className="lg:w-1/2">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-1 inline-block">
                              <div className="bg-gray-900 rounded-lg p-4 h-full w-full">
                                <p className="text-gray-300 italic text-lg">
                                  "We believe in a web where your favorite content is always at your fingertips, organized exactly how you want it, without compromising your privacy or security."
                                </p>
                                <div className="mt-4 flex items-center">
                                  <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                                    <span className="text-xl font-bold">BM</span>
                                  </div>
                                  <div>
                                    <div className="font-semibold">BookmarkManager Team</div>
                                    <div className="text-sm text-gray-400">Since 2023</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-1/2 space-y-6">
                            <p className="text-gray-300">
                              BookmarkManager was born out of frustration with existing solutions that were either too simplistic or overly complex. We wanted to create the perfect balance - powerful features with an intuitive interface.
                            </p>
                            <p className="text-gray-300">
                              Our team of web enthusiasts and productivity experts work tirelessly to deliver a bookmarking experience that feels premium yet accessible to everyone.
                            </p>
                            <p className="text-gray-300">
                              We're committed to continuous improvement, regularly adding features based on user feedback while maintaining our core principles of speed, security, and simplicity.
                            </p>
                          </div>
                        </div>
                      </section> */}
                    </main>

      {/* Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
            <blockquote className="text-xl italic text-gray-300 mb-6">
              "BookmarkManager has completely transformed how I organize my research. I can access all my important links from any device instantly."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                <span className="text-lg font-bold">JD</span>
              </div>
              <div>
                <div className="font-semibold">Jane Doe</div>
                <div className="text-sm text-gray-400">Research Scientist</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="mb-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Vision</h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-1 inline-block">
                  <div className="bg-gray-900 rounded-lg p-4 h-full w-full">
                    <p className="text-gray-300 italic text-lg">
                      "We believe in a web where your favorite content is always at your fingertips, organized exactly how you want it, without compromising your privacy or security."
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center mr-4">
                        <span className="text-xl font-bold">BM</span>
                      </div>
                      <div>
                        <div className="font-semibold">BookmarkManager Team</div>
                        <div className="text-sm text-gray-400">Since 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <p className="text-gray-300">
                  BookmarkManager was born out of frustration with existing solutions that were either too simplistic or overly complex. We wanted to create the perfect balance - powerful features with an intuitive interface.
                </p>
                <p className="text-gray-300">
                  Our team of web enthusiasts and productivity experts work tirelessly to deliver a bookmarking experience that feels premium yet accessible to everyone.
                </p>
                <p className="text-gray-300">
                  We're committed to continuous improvement, regularly adding features based on user feedback while maintaining our core principles of speed, security, and simplicity.
                </p>
              </div>
            </div>
          </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to organize your digital life?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of professionals who trust BookmarkManager with their important links.
          </p>
          <button 
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Start Free Today
          </button>
        </div>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-8 w-full max-w-md relative">
            <button 
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Welcome Back</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
              >
                Continue
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4 text-center">
              Don't have an account? <span className="text-indigo-400 cursor-pointer">Sign up</span>
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaBookmark className="text-indigo-400 text-xl mr-2" />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                BookmarkManager
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} BookmarkManager. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
