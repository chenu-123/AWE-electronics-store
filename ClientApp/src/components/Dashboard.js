import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>My Account</h2>
      <div className="user-info">
        <h3>Personal Details</h3>
        {/* Will display user data here */}
      </div>
      <div className="orders">
        <h3>My Orders</h3>
        {/* Will display orders here */}
      </div>
    </div>
  );
}

export default Dashboard;