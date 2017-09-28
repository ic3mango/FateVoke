import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <div className="fixed-action-btn">
        <Link to="#" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;
