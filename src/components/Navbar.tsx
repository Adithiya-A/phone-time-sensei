
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md gradient-bg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <Link to="/" className="font-bold text-xl">UsageTrack</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground font-medium hover:text-primary transition-colors">Dashboard</Link>
          <Link to="/goals" className="text-foreground font-medium hover:text-primary transition-colors">Goals</Link>
          <Link to="/settings" className="text-foreground font-medium hover:text-primary transition-colors">Settings</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button className="gradient-bg">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
