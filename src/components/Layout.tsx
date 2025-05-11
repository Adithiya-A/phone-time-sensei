
import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-6 mx-auto max-w-7xl">
        {children}
      </main>
      <footer className="bg-muted py-4">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          Mobile Usage Tracker &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
