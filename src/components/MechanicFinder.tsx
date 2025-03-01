import React from 'react';

interface MechanicFinderProps {
    mechanics: Array<{ name: string; contact: string }>;
}

const MechanicFinder: React.FC<MechanicFinderProps> = ({ mechanics }) => {
    return (
        <div>
            <h2>Nearby Mechanics</h2>
            <ul>
                {mechanics.map((mechanic, index) => (
                    <li key={index}>{mechanic.name} - {mechanic.contact}</li>
                ))}
            </ul>
        </div>
    );
};

export default MechanicFinder; 