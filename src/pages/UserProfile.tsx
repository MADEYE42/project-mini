import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, AlertCircle, Car, Shield, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const UserProfile: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    dob: '',
    gender: '',
    bloodType: '',
    address: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    }
  });
  
  // Medical Information State
  const [medicalInfo, setMedicalInfo] = useState({
    allergies: '',
    medications: '',
    conditions: '',
    insuranceProvider: '',
    insuranceNumber: '',
    primaryPhysician: '',
    physicianPhone: ''
  });
  
  // Vehicle Information State
  const [vehicleInfo, setVehicleInfo] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    licensePlate: '',
    vin: '',
    insuranceProvider: '',
    insuranceNumber: '',
    roadAssistanceProvider: '',
    roadAssistanceNumber: ''
  });
  
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }
  
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setPersonalInfo(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev] as Record<string, string>,
          [child]: value
        }
      }));
    } else {
      setPersonalInfo(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleMedicalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMedicalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleVehicleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVehicleInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call to save user data
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 bg-blue-600 text-white">
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full mr-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-blue-100">{user?.email}</p>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'personal'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('personal')}
              >
                <User className="h-5 w-5 inline mr-2" />
                Personal Information
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'medical'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('medical')}
              >
                <AlertCircle className="h-5 w-5 inline mr-2" />
                Medical Information
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'vehicle'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('vehicle')}
              >
                <Car className="h-5 w-5 inline mr-2" />
                Vehicle Information
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {saveSuccess && (
              <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      Your information has been saved successfully.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {/* Personal Information Tab */}
              {activeTab === 'personal' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={personalInfo.name}
                        onChange={handlePersonalInfoChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={personalInfo.phone}
                        onChange={handlePersonalInfoChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={personalInfo.dob}
                        onChange={handlePersonalInfoChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={personalInfo.gender}
                        onChange={handlePersonalInfoChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">
                        Blood Type
                      </label>
                      <select
                        id="bloodType"
                        name="bloodType"
                        value={personalInfo.bloodType}
                        onChange={handlePersonalInfoChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="">Select blood type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="unknown">Unknown</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Home Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={personalInfo.address}
                      onChange={handlePersonalInfoChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="emergencyContact.name" className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Name
                        </label>
                        <input
                          type="text"
                          id="emergencyContact.name"
                          name="emergencyContact.name"
                          value={personalInfo.emergencyContact.name}
                          onChange={handlePersonalInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="emergencyContact.relationship" className="block text-sm font-medium text-gray-700 mb-1">
                          Relationship
                        </label>
                        <input
                          type="text"
                          id="emergencyContact.relationship"
                          name="emergencyContact.relationship"
                          value={personalInfo.emergencyContact.relationship}
                          onChange={handlePersonalInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="emergencyContact.phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          id="emergencyContact.phone"
                          name="emergencyContact.phone"
                          value={personalInfo.emergencyContact.phone}
                          onChange={handlePersonalInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Medical Information Tab */}
              {activeTab === 'medical' && (
                <div>
                  <div className="mb-6">
                    <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">
                      Allergies
                    </label>
                    <textarea
                      id="allergies"
                      name="allergies"
                      rows={3}
                      value={medicalInfo.allergies}
                      onChange={handleMedicalInfoChange}
                      placeholder="List any allergies you have..."
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="medications" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Medications
                    </label>
                    <textarea
                      id="medications"
                      name="medications"
                      rows={3}
                      value={medicalInfo.medications}
                      onChange={handleMedicalInfoChange}
                      placeholder="List any medications you're currently taking..."
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="conditions" className="block text-sm font-medium text-gray-700 mb-1">
                      Medical Conditions
                    </label>
                    <textarea
                      id="conditions"
                      name="conditions"
                      rows={3}
                      value={medicalInfo.conditions}
                      onChange={handleMedicalInfoChange}
                      placeholder="List any medical conditions you have..."
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Insurance Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-1">
                          Insurance Provider
                        </label>
                        <input
                          type="text"
                          id="insuranceProvider"
                          name="insuranceProvider"
                          value={medicalInfo.insuranceProvider}
                          onChange={handleMedicalInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="insuranceNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Insurance Number
                        </label>
                        <input
                          type="text"
                          id="insuranceNumber"
                          name="insuranceNumber"
                          value={medicalInfo.insuranceNumber}
                          onChange={handleMedicalInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Primary Physician</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="primaryPhysician" className="block text-sm font-medium text-gray-700 mb-1">
                          Physician Name
                        </label>
                        <input
                          type="text"
                          id="primaryPhysician"
                          name="primaryPhysician"
                          value={medicalInfo.primaryPhysician}
                          onChange={handleMedicalInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="physicianPhone" className="block text-sm font-medium text-gray-700 mb-1">
                          Physician Phone
                        </label>
                        <input
                          type="tel"
                          id="physicianPhone"
                          name="physicianPhone"
                          value={medicalInfo.physicianPhone}
                          onChange={handleMedicalInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Vehicle Information Tab */}
              {activeTab === 'vehicle' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Make
                      </label>
                      <input
                        type="text"
                        id="make"
                        name="make"
                        value={vehicleInfo.make}
                        onChange={handleVehicleInfoChange}
                        placeholder="e.g., Toyota"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Model
                      </label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        value={vehicleInfo.model}
                        onChange={handleVehicleInfoChange}
                        placeholder="e.g., Camry"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Year
                      </label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        value={vehicleInfo.year}
                        onChange={handleVehicleInfoChange}
                        placeholder="e.g., 2019"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle Color
                      </label>
                      <input
                        type="text"
                        id="color"
                        name="color"
                        value={vehicleInfo.color}
                        onChange={handleVehicleInfoChange}
                        placeholder="e.g., Silver"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700 mb-1">
                        License Plate
                      </label>
                      <input
                        type="text"
                        id="licensePlate"
                        name="licensePlate"
                        value={vehicleInfo.licensePlate}
                        onChange={handleVehicleInfoChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="vin" className="block text-sm font-medium text-gray-700 mb-1">
                        VIN Number
                      </label>
                      <input
                        type="text"
                        id="vin"
                        name="vin"
                        value={vehicleInfo.vin}
                        onChange={handleVehicleInfoChange}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Vehicle Insurance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-1">
                          Insurance Provider
                        </label>
                        <input
                          type="text"
                          id="insuranceProvider"
                          name="insuranceProvider"
                          value={vehicleInfo.insuranceProvider}
                          onChange={handleVehicleInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="insuranceNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Policy Number
                        </label>
                        <input
                          type="text"
                          id="insuranceNumber"
                          name="insuranceNumber"
                          value={vehicleInfo.insuranceNumber}
                          onChange={handleVehicleInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Roadside Assistance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="roadAssistanceProvider" className="block text-sm font-medium text-gray-700 mb-1">
                          Provider
                        </label>
                        <input
                          type="text"
                          id="roadAssistanceProvider"
                          name="roadAssistanceProvider"
                          value={vehicleInfo.roadAssistanceProvider}
                          onChange={handleVehicleInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="roadAssistanceNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Membership Number
                        </label>
                        <input
                          type="text"
                          id="roadAssistanceNumber"
                          name="roadAssistanceNumber"
                          value={vehicleInfo.roadAssistanceNumber}
                          onChange={handleVehicleInfoChange}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg flex items-center"
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5 mr-2" />
                      Save Information
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};