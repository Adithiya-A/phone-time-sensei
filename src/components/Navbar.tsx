
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">Mobile Usage Tracker</Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-sm font-medium hover:text-primary">Dashboard</Link>
            <Link to="/goals" className="text-sm font-medium hover:text-primary">Goals</Link>
            <Link to="/challenges" className="text-sm font-medium hover:text-primary">Challenges</Link>
            
            {user ? (
              <Button variant="outline" size="sm" onClick={() => signOut()}>
                Sign Out
              </Button>
            ) : (
              <Link to="/auth">
                <Button size="sm">Sign In</Button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
