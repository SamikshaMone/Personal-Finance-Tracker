import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaMoneyBillWave,
  FaChartPie,
  FaClipboardList,
  FaCog,
} from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const navItemStyle = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-teal-600 hover:text-white transition ${
      isActive ? 'bg-teal-700 text-white' : 'text-white'
    }`;

  return (
    <aside className="w-64 bg-teal-600 text-white min-h-screen p-4 space-y-3">
      <h2 className="text-xl font-bold tracking-wider px-4 mb-4">
        PERSONAL<br />FINANCE<br />TRACKER
      </h2>

      <NavLink to="/dashboard" className={navItemStyle}>
        <FaTachometerAlt className="mr-3" /> Dashboard
      </NavLink>
      <NavLink to="/transactions" className={navItemStyle}>
        <FaMoneyBillWave className="mr-3" /> Transactions
      </NavLink>
      <NavLink to="/budgets" className={navItemStyle}>
        <FaClipboardList className="mr-3" /> Budgets
      </NavLink>
      <NavLink to="/reports" className={navItemStyle}>
        <FaChartPie className="mr-3" /> Reports
      </NavLink>
      <NavLink to="/settings" className={navItemStyle}>
        <FaCog className="mr-3" /> Settings
      </NavLink>
    </aside>
  );
};

export default Sidebar;

