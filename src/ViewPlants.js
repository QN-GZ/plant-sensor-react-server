import React from 'react';

function ViewPlants({ plantsData }) {
  var devices = plantsData;
  return (
    <div className="plant-grid-view">
      {devices.map((device, index) => (
        <div key={index} className="plant-cell">
          {100 - device.dryness_pct}%
          <label className='plant-id'>{device.id} soil moisture</label>
        </div>
      ))}
    </div>
  );
}

export default ViewPlants;

