import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, AlertCircle, Car, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <AlertCircle className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Crisis Call</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/medical-emergency" className="px-3 py-2 rounded-md hover:bg-blue-700 flex items-center">
              <AlertCircle className="h-5 w-5 mr-1" />
              <span>Medical Emergency</span>
            </Link>
            <Link to="/vehicle-breakdown" className="px-3 py-2 rounded-md hover:bg-blue-700 flex items-center">
              <Car className="h-5 w-5 mr-1" />
              <span>Vehicle Breakdown</span>
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="px-3 py-2 rounded-md hover:bg-blue-700 flex items-center">
                  <User className="h-5 w-5 mr-1" />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={logout}
                  className="px-3 py-2 rounded-md bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 rounded-md hover:bg-blue-700">
                  Login
                </Link>
                <Link to="/register" className="px-3 py-2 rounded-md bg-white text-blue-600 hover:bg-gray-100">
                  Register
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/medical-emergency" 
              className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <AlertCircle className="h-5 w-5 mr-1" />
              <span>Medical Emergency</span>
            </Link>
            <Link 
              to="/vehicle-breakdown" 
              className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Car className="h-5 w-5 mr-1" />
              <span>Vehicle Breakdown</span>
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/profile" 
                  className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-1" />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block px-3 py-2 rounded-md bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
