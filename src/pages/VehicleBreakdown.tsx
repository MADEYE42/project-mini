import React, { useState, useEffect } from 'react';
import EmergencyInterface from '../components/EmergencyInterface'; // Import necessary components
import MechanicFinder from '../components/MechanicFinder'; // Import necessary components

const VehicleBreakdown: React.FC = () => {
    // State variables for vehicle information and mechanics
    const [vehicleInfo, setVehicleInfo] = useState({ make: '', model: '', year: '' });
    const [breakdownType, setBreakdownType] = useState('');
    const [mechanics, setMechanics] = useState<{ name: string; contact: string }[]>([]); // Define the type here

    // Function to handle vehicle information input
    const handleVehicleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVehicleInfo({ ...vehicleInfo, [e.target.name]: e.target.value });
    };

    // Function to handle breakdown type selection
    const handleBreakdownTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBreakdownType(e.target.value);
    };

    // Function to fetch nearby mechanics based on vehicle info and breakdown type
    const fetchNearbyMechanics = () => {
        // Simulated API call to fetch mechanics based on vehicleInfo and breakdownType
        const fetchedMechanics = [
            { name: 'Joe\'s Garage', contact: '123-456-7890' },
            { name: 'Auto Repair Shop', contact: '987-654-3210' },
        ];
        setMechanics(fetchedMechanics); // Update the mechanics state with fetched data
    };

    // Effect to fetch mechanics when vehicle info or breakdown type changes
    useEffect(() => {
        if (vehicleInfo.make && breakdownType) {
            fetchNearbyMechanics();
        }
    }, [vehicleInfo, breakdownType]);

    return (
        <div>
            <h1>Vehicle Breakdown Assistance</h1>
            <EmergencyInterface 
                vehicleInfo={vehicleInfo} 
                onVehicleInput={handleVehicleInput} 
                onBreakdownTypeChange={handleBreakdownTypeChange} 
            />
            <MechanicFinder mechanics={mechanics} />
        </div>
    );
};

export default VehicleBreakdown;
