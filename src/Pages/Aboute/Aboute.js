import React, { useState } from 'react';

const Aboute = () => {
  const [mode, setMode] = useState('');
  const [address, setAddress] = useState('');

  const handleModeChange = (event) => {
    setMode(event.target.value);
    setAddress('');
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="mode"
            value="offline"
            checked={mode === 'offline'}
            onChange={handleModeChange}
          />
          Offline
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="mode"
            value="online"
            checked={mode === 'online'}
            onChange={handleModeChange}
          />
          Online
        </label>
      </div>
      {mode === 'offline' && (
        <div>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
            />
          </label>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Aboute;
