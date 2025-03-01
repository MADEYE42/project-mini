import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, MapPin, Phone, Clock, Guitar as Hospital, Ambulance } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface Hospital {
  id: string;
  name: string;
  distance: number;
  availableBeds: number;
  specialties: string[];
  address: string;
  phone: string;
  waitTime: string;
}

export const MedicalEmergency: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [location, setLocation] = useState('');
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [ambulanceRequested, setAmbulanceRequested] = useState(false);

  const activateEmergency = () => {
    setIsLoading(true);
    
    // Simulate getting user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude}, ${longitude}`);
        
        // Simulate API call to fetch nearby hospitals
        setTimeout(() => {
          const mockHospitals: Hospital[] = [
            {
              id: '1',
              name: 'City General Hospital',
              distance: 2.3,
              availableBeds: 5,
              specialties: ['Emergency Medicine', 'Cardiology', 'Neurology'],
              address: '123 Medical Center Blvd, City, State',
              phone: '(555) 123-4567',
              waitTime: '15-20 min'
            },
            {
              id: '2',
              name: 'Memorial Medical Center',
              distance: 3.7,
              availableBeds: 12,
              specialties: ['Trauma Care', 'Pediatrics', 'Surgery'],
              address: '456 Health Parkway, City, State',
              phone: '(555) 987-6543',
              waitTime: '5-10 min'
            },
            {
              id: '3',
              name: 'University Hospital',
              distance: 5.1,
              availableBeds: 8,
              specialties: ['Emergency Medicine', 'Orthopedics', 'Internal Medicine'],
              address: '789 University Drive, City, State',
              phone: '(555) 456-7890',
              waitTime: '25-30 min'
            }
          ];
          
          setHospitals(mockHospitals);
          setIsEmergencyActive(true);
          setIsLoading(false);
        }, 2000);
      },
      (error) => {
        console.error('Error getting location:', error);
        setIsLoading(false);
        // In a real app, handle this error appropriately
      }
    );
  };

  const requestAmbulance = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setAmbulanceRequested(true);
    // In a real app, this would make an API call to request an ambulance
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication Required</h2>
          <p className="text-gray-600 mb-6">
            You need to be logged in to access the Medical Emergency services. This ensures your medical information is available when needed.
          </p>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/login" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </Link>
            <Link 
              to="/register" 
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {ambulanceRequested ? (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <div className="bg-green-100 p-3 rounded-full inline-flex mb-4">
                <Ambulance className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ambulance Requested</h2>
              <p className="text-gray-600">
                An ambulance has been dispatched from {selectedHospital?.name}. Help is on the way!
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Ambulance Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Estimated arrival time</p>
                  <p className="font-medium">12 minutes</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ambulance ID</p>
                  <p className="font-medium">AMB-2023-456</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hospital</p>
                  <p className="font-medium">{selectedHospital?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-medium">{selectedHospital?.phone}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Your Information Has Been Shared</h3>
              <p className="text-gray-600 mb-4">
                The following information has been shared with the hospital:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Personal details (Name, Age, Gender)</li>
                <li>Medical history and allergies</li>
                <li>Current location</li>
                <li>Emergency contact information</li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex-1 flex items-center justify-center"
                onClick={() => window.location.href = `tel:911`}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 911
              </button>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex-1 flex items-center justify-center"
                onClick={() => setAmbulanceRequested(false)}
              >
                <Hospital className="h-5 w-5 mr-2" />
                View Hospitals
              </button>
            </div>
          </div>
        ) : isEmergencyActive ? (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Hospitals</h2>
              <p className="text-gray-600 mb-4">
                Based on your location, we've found these hospitals with available beds. Select one to proceed.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1 text-red-500" />
                <span>Using location: {location}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {hospitals.map((hospital) => (
                <div key={hospital.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{hospital.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{hospital.distance} miles away</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Available Beds</span>
                        <span className="text-sm font-medium text-green-600">{hospital.availableBeds}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Wait Time</span>
                        <span className="text-sm font-medium text-blue-600">{hospital.waitTime}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((specialty, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Address</h4>
                      <p className="text-sm text-gray-600">{hospital.address}</p>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <button 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                        onClick={() => requestAmbulance(hospital)}
                      >
                        <Ambulance className="h-5 w-5 mr-2" />
                        Request Ambulance
                      </button>
                      <a 
                        href={`tel:${hospital.phone}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Hospital
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <button 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded"
                onClick={() => setIsEmergencyActive(false)}
              >
                Cancel Emergency
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
              <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Emergency</h2>
              <p className="text-xl text-gray-600 mb-8">
                If you're experiencing a medical emergency, activate the emergency system to find nearby hospitals with available beds.
              </p>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl w-full flex items-center justify-center"
                onClick={activateEmergency}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Locating Hospitals...
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-6 w-6 mr-2" />
                    Activate Emergency
                  </>
                )}
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Location Detection</h4>
                    <p className="mt-1 text-gray-600">
                      We'll use your current location to find the nearest hospitals.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Hospital Selection</h4>
                    <p className="mt-1 text-gray-600">
                      View nearby hospitals with available beds and their specialties.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Information Sharing</h4>
                    <p className="mt-1 text-gray-600">
                      Your pre-registered medical information will be shared with the hospital you select.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Ambulance Request</h4>
                    <p className="mt-1 text-gray-600">
                      Request an ambulance directly through the app if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Important:</strong> If this is a life-threatening emergency, please call 911 immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};