import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Analytics from '../components/Analytics';
import Tracker from '../components/Tracker';
import History from '../components/History';

function AllRoute() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/dashboard/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
      <Route path="/dashboard/tracker" element={<ProtectedRoute><Tracker /></ProtectedRoute>} />
      <Route path="/dashboard/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} /> */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
  );
}

export default AllRoute;