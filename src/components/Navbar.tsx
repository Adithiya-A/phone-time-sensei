
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">Mobile Usage Tracker</Link>
          <div className="flex gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">Dashboard</Link>
            <Link to="/goals" className="text-sm font-medium hover:text-primary">Goals</Link>
            <Link to="/challenges" className="text-sm font-medium hover:text-primary">Challenges</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
