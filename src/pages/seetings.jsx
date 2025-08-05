// src/pages/Settings.jsx
// import ThemeToggle from '../components/ThemeToggle';

// export default function Settings({ darkMode, setDarkMode }) {
//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Settings</h2>
//       <div className="flex items-center gap-4">
//         <span>Dark Mode:</span>
//         <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
//       </div>
//     </div>
//   );
// }
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaHeadset } from 'react-icons/fa';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <FaPaperPlane className="text-indigo-400 text-4xl mr-3" />
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Contact <span className="font-light">Us</span>
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12"> 
          {/* Contact Form */}
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

          {/* Contact Information */}
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
                    <p className="text-gray-400">+880-159-521</p>
                    <p className="text-gray-400">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-500/20 mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100">Headquarters</h3>
                    <p className="text-gray-400">123 School Street</p>
                    <p className="text-gray-400">Kanchan Bazar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support & Social */}
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
        </main> 

        {/* FAQ Teaser */}
        <section className="mt-20 bg-gray-800 rounded-xl p-8 shadow-xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Quick Answers?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Check out our comprehensive FAQ section for instant solutions to common questions.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 inline-flex items-center">
              Visit Help Center
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 border-t border-gray-800 pt-8 mt-16">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Careers</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Blog</a>
          </div>
          <p>© {new Date().getFullYear()} BookmarkManager. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;