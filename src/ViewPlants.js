import React from 'react';

function ViewPlants({ plantsData }) {
  var devices = plantsData;
  return (
    <div className="plant-grid-view">
      {devices.map((device, index) => (
        <div key={index} className="plant-cell">
          {device.dryness_pct}%
          <label className='plant-id'>{device.id} dryness</label>
        </div>
      ))}
    </div>
  );
}

export default ViewPlants;

