import React from 'react';

interface EmergencyInterfaceProps {
    vehicleInfo: { make: string; model: string; year: string };
    onVehicleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBreakdownTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const EmergencyInterface: React.FC<EmergencyInterfaceProps> = ({ vehicleInfo, onVehicleInput, onBreakdownTypeChange }) => {
    return (
        <div>
            {/* Input fields for vehicle information */}
            <input name="make" value={vehicleInfo.make} onChange={onVehicleInput} placeholder="Make" />
            <input name="model" value={vehicleInfo.model} onChange={onVehicleInput} placeholder="Model" />
            <input name="year" value={vehicleInfo.year} onChange={onVehicleInput} placeholder="Year" />
            <select onChange={onBreakdownTypeChange}>
                <option value="">Select Breakdown Type</option>
                <option value="flat tire">Flat Tire</option>
                <option value="engine failure">Engine Failure</option>
                {/* Add more options as needed */}
            </select>
        </div>
    );
};

export default EmergencyInterface; 