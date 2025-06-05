import React from 'react';
import './components/Dashboard.css'; // Assuming you have a CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <section>
        <h3>Your Info</h3>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
      </section>
      <section>
        <h3>Your Orders</h3>
        <ul>
          <li>Order #123 - $49.99 - Delivered</li>
          <li>Order #124 - $19.99 - In Progress</li>
        </ul>
      </section>
      <section>
        <h3>Receipts</h3>
        <ul>
          <li>Receipt #A1 - PDF</li>
          <li>Receipt #A2 - PDF</li>
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
