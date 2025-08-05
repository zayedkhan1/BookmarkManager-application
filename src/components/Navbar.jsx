import { Link, useLocation} from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
//  import { FiLogOut, FiBookmark, FiHome, FiInfo, FiMail } from 'react-icons/fi';
import { FiHome,FiInfo,FiMail,FiBookmark } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';
function Navbar({ user, onLogout }) {
    
  
   const location = useLocation();
   const isActive = (path) => location.pathname === path;

  return (
    <nav className="px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
       
      <div className="max-w-7xl mx-auto flex justify-between items-center">
         <Link to="/" className="flex items-center group">
           <FaBookmark className="text-indigo-400 text-2xl mr-3 group-hover:text-indigo-300 transition-colors" />
           <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:from-indigo-300 group-hover:to-purple-400 transition-all">
             Bookmark<span className="font-light">Manager</span>           </span>
         </Link>
        
           <div className="hidden md:flex items-center space-x-8">
           <Link 
            to="/" 
            className={`flex items-center py-2 px-1 border-b-2 ${isActive('/') ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:text-white hover:border-gray-400'} transition-colors duration-300`}
          >
            <FiHome className="mr-2" />
            Home
          </Link>
          <Link 
            to="/about" 
            className={`flex items-center py-2 px-1 border-b-2 ${isActive('/about') ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:text-white hover:border-gray-400'} transition-colors duration-300`}
          >
            <FiInfo className="mr-2" />
            About
          </Link>
          <Link 
            to="/contact" 
            className={`flex items-center py-2 px-1 border-b-2 ${isActive('/contact') ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:text-white hover:border-gray-400'} transition-colors duration-300`}
          >
            <FiMail className="mr-2" />
            Contact
          </Link>
         
            <Link 
              to="/bookmarks" 
              className={`flex items-center py-2 px-1 border-b-2 ${isActive('/bookmarks') ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:text-white hover:border-gray-400'} transition-colors duration-300`}
            >
              <FiBookmark className="mr-2" />
              My Bookmarks
            </Link>
          
        </div>
<div  className="flex items-center space-x-4" >
 {user ? (
          <button
            onClick={onLogout}
          className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 group"

          >
            {/* <FiLogOut /> Logout */}
             <FiLogOut className="group-hover:rotate-180 transition-transform" />
                <span className="hidden md:inline">Logout</span>
          </button>
          

        )
      :
       <button
         
        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
       >
       Login
       </button>
      }
</div>

       
      </div>
    </nav>
  );
}

export default Navbar;


