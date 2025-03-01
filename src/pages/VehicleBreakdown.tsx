import React, { useState, useEffect } from "react";
import { FaCarCrash, FaTools, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// Define the type for mechanics
interface Mechanic {
  name: string;
  address: string;
  contacts: string[]; // Define contacts as an array of strings
  mapLink: string; // Add mapLink for clickable address
}

const VehicleBreakdown: React.FC = () => {
  const [vehicleInfo, setVehicleInfo] = useState({ make: "", model: "", year: "" });
  const [breakdownType, setBreakdownType] = useState("");
  const [mechanics, setMechanics] = useState<Mechanic[]>([]); // Use the Mechanic type
  const [loading, setLoading] = useState(false);

  const handleVehicleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleInfo({ ...vehicleInfo, [e.target.name]: e.target.value });
  };

  const handleBreakdownTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBreakdownType(e.target.value);
  };

  const fetchNearbyMechanics = () => {
    setLoading(true);
    setTimeout(() => {
      const fetchedMechanics: Mechanic[] = [ // Use the Mechanic type here
        {
          name: "Mahinder Auto Store",
          address: "C-18/27, Chembur Camp, C.G Road, Opp. Golf Club, Chembur East, Mumbai - 400074",
          mapLink: "https://www.google.com/maps?q=C-18/27,+Chembur+Camp,+C.G+Road,+Opp.+Golf+Club,+Chembur+East,+Mumbai+-+400074",
          contacts: ["9322220293", "9833212598 (Siraj)", "8433554972 (Sameer)", "9004178598 (Vinod)", "7506837745 (Suraj)"],
        },
        {
          name: "Welcome Engineering Works",
          address: "Opp. Golf Club, Chembur Camp, C.G Road, Chembur East, Mumbai - 400074",
          mapLink: "https://www.google.com/maps?q=Opp.+Golf+Club,+Chembur+Camp,+C.G+Road,+Chembur+East,+Mumbai+-+400074",
          contacts: ["9867530826", "8108276378 (Akram)"],
        },
      ];
      setMechanics(fetchedMechanics);
      setLoading(false);
    }, 1500); // Simulated delay
  };

  useEffect(() => {
    if (vehicleInfo.make && breakdownType) {
      fetchNearbyMechanics();
    }
  }, [vehicleInfo, breakdownType]);

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center py-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-4">
          <FaCarCrash className="text-red-900 text-4xl mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-black">Vehicle Breakdown Assistance</h1>
          <p className="text-gray-600">Enter vehicle details and breakdown type to find nearby mechanics.</p>
        </div>

        {/* Vehicle Details Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="make"
            placeholder="Vehicle Make (e.g., Honda, Toyota)"
            value={vehicleInfo.make}
            onChange={handleVehicleInput}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <input
            type="text"
            name="model"
            placeholder="Vehicle Model (e.g., Civic, Corolla)"
            value={vehicleInfo.model}
            onChange={handleVehicleInput}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <input
            type="text"
            name="year"
            placeholder="Vehicle Year (e.g., 2020)"
            value={vehicleInfo.year}
            onChange={handleVehicleInput}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
          <select
            name="breakdownType"
            value={breakdownType}
            onChange={handleBreakdownTypeChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
          >
            <option value="">Select Breakdown Type</option>
            <option value="flat-tire">Flat Tire</option>
            <option value="engine-failure">Engine Failure</option>
            <option value="battery-dead">Battery Dead</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Find Mechanics Button */}
        <div className="text-center mt-4">
          <button
            onClick={fetchNearbyMechanics}
            className="bg-red-900 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-800 transition flex items-center justify-center mx-auto"
          >
            <FaTools className="mr-2" />
            Find Mechanics
          </button>
        </div>

        {/* Loading Indicator */}
        {loading && <p className="text-center text-gray-500 mt-4">Finding nearby mechanics...</p>}

        {/* Mechanics List */}
        {!loading && mechanics.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-black">Available Mechanics</h2>
            <div className="mt-4 space-y-4">
              {mechanics.map((mechanic, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-black">{mechanic.name}</h3>

                  {/* Clickable Address */}
                  <p className="text-gray-600 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-red-900" />
                    <a
                      href={mechanic.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {mechanic.address}
                    </a>
                  </p>

                  <p className="mt-2 text-black font-semibold">Contact No.:</p>
                  <ul className="text-gray-700">
                    {mechanic.contacts.map((contact, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaPhoneAlt className="mr-2 text-green-600" />
                        <a href={`tel:${contact.split(" ")[0]}`} className="text-blue-600 hover:underline">
                          {contact}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Emergency Note */}
      <div className="mt-4 text-sm bg-yellow-100 text-black p-3 rounded-lg w-full max-w-3xl">
        <strong className="text-yellow-800">Important:</strong> If this is a life-threatening situation, please call roadside assistance immediately.
      </div>
    </div>
  );
};

export default VehicleBreakdown;
