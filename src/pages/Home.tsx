import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Car, Shield, Clock, Users, Award } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Emergency Response When You Need It Most
              </h1>
              <p className="text-xl mb-8">
                Connecting people in emergencies with hospitals and mechanics through a streamlined platform for faster response times.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/medical-emergency" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                >
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Medical Emergency
                </Link>
                <Link 
                  to="/vehicle-breakdown" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                >
                  <Car className="mr-2 h-5 w-5" />
                  Vehicle Breakdown
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Emergency Response" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">Simple steps to get help in an emergency</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Register Your Information</h3>
              <p className="text-gray-600">
                Pre-register your personal details, medical history, and vehicle information to save time during emergencies.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Request Emergency Help</h3>
              <p className="text-gray-600">
                With one click, activate emergency mode and share your location to find nearby hospitals or mechanics.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Connected & Assisted</h3>
              <p className="text-gray-600">
                Your information is shared with the service provider, and help is dispatched to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Emergency Services</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive solutions for life's unexpected moments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Medical Emergency */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold">Medical Emergency</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Quick access to hospitals with available beds, ambulance services, and seamless sharing of your medical information.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Pre-registered medical history and allergies</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Real-time hospital bed availability</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Ambulance tracking and dispatch</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Insurance information sharing</span>
                </li>
              </ul>
              <Link 
                to="/medical-emergency" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg"
              >
                Learn More
              </Link>
            </div>
            
            {/* Vehicle Breakdown */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Car className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold">Vehicle Breakdown</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Connect with nearby mechanics, share vehicle details and location, and get back on the road quickly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Stored vehicle information for quick sharing</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Mechanic finder with specialization filters</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Real-time location sharing</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Direct communication with service providers</span>
                </li>
              </ul>
              <Link 
                to="/vehicle-breakdown" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">Benefits that make a difference when it matters most</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Faster Response Times</h3>
              <p className="text-gray-600">
                Pre-registered information and streamlined communication reduce critical response time.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhanced Safety</h3>
              <p className="text-gray-600">
                Verified service providers and real-time tracking ensure your safety during emergencies.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Network</h3>
              <p className="text-gray-600">
                Access to a growing network of hospitals and mechanics across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">Real stories from people we've helped</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <div className="flex text-yellow-400">
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "When my son had a severe allergic reaction, this app helped us find the nearest hospital with available beds. The pre-registered medical information saved precious time during admission."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Michael Rodriguez" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <div className="flex text-yellow-400">
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "My car broke down on a remote highway at night. Within minutes, I was connected with a mechanic who could fix my specific issue and tracked their arrival in real-time."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Jennifer Lee" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Jennifer Lee</h4>
                  <div className="flex text-yellow-400">
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                    <Award className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone with a chronic condition, having my medical history readily available during an emergency hospitalization made a huge difference in the quality of care I received."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Prepared for Any Emergency</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Register today to ensure you're ready when emergencies happen. Your information is secure and only shared when you need help.
          </p>
          <Link 
            to="/register" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};