// src/pages/About.jsx
// export default function About() {
//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">About Bookmark Manager</h2>
//       <p>
//         This Bookmark Manager app is built with React and TailwindCSS.  
//         It allows users to add, edit, delete, and filter bookmarks with tags,  
//         toggle dark mode, and save personalized data after login.
//       </p>
//     </div>
//   );
// }
import { FaBookmark, FaRocket, FaShieldAlt, FaSync, FaUsers, FaPalette } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <FaBookmark className="text-indigo-400 text-4xl mr-3" />
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Bookmark<span className="font-light">Manager</span>
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Your premium solution for organizing, accessing, and sharing bookmarks across all your devices.
          </p>
        </header>

        {/* Main Content */}
        <main>
          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              <span className="relative inline-block">
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
              </div>

              
          </section>

          {/* Stats Section */}
          {/* <section className="mb-20 bg-gray-800 rounded-xl p-8 shadow-xl">
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
          </section> */}

          {/* Team/Company Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Goals</h2>
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
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to organize your digital life?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of professionals who trust BookmarkManager with their important links.
          </p>
          <Link to='/login' 
            
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Start Free Today
          </Link>
        </div>
      </section>
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-400 border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Blog</a>
          </div>
          <p>© {new Date().getFullYear()} BookmarkManager. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
