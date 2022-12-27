import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './styles.scss'

const Dashboard = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1>Hi i am Dhanesh raj P M</h1>
      <span>Web Developer</span>
      <nav>
        <ul>
          <li>
            <Link to="/qr-code-component">QR CODE COMPONENT</Link>
          </li>
          <li>
            <Link to="/product-preview-card">PRODUCT PREVIEW CARD</Link>
          </li>
          <li>
            <Link to="/single-price-grid-page">SINGLE PRICE GRID PAGE</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Dashboard;