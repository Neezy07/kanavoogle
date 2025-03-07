import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        console.log('Verifying token...');
        const response = await fetch('http://localhost:5050/api/user/verify-token', {
          method: 'GET',
          credentials: 'include',
        });
  
        if (response.ok) {
          console.log('Token verified successfully');
          setIsAuthenticated(true);
        } else {
          console.log('Token verification failed');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
  
    verifyToken();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
