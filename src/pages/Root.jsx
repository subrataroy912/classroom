// src/pages/Root.jsx
import React, { useState, useEffect, useCallback } from 'react';
import LandingPage from './LandingPage';
import UserHome from './UserHome';

export default function Root() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start loading while checking auth

  // Simulate verifying an existing session/token on initial mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // e.g., const token = localStorage.getItem('token');
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulated API delay
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogin = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate login network request
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsAuthenticated(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate logout cleanup / backend revoke
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-slate-950"
        role="status"
        aria-live="polite"
      >
        <div
          className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
        <span className="sr-only">Loading application...</span>
      </div>
    );
  }

  return isAuthenticated ? (
    <UserHome onLogout={handleLogout} />
  ) : (
    <LandingPage onLogin={handleLogin} />
  );
}