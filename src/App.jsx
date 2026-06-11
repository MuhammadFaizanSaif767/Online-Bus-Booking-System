import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import CustomerLayout from './components/layout/CustomerLayout';
import ManagerLayout from './components/layout/ManagerLayout';
import Home from './pages/customer/Home';
import SearchResults from './pages/customer/SearchResults';
import SeatSelection from './pages/customer/SeatSelection';
import Auth from './pages/customer/Auth';
import Splash from './pages/customer/Splash';
import Checkout from './pages/customer/Checkout';
import BookingSuccess from './pages/customer/BookingSuccess';
import MyBookings from './pages/customer/MyBookings';
import Profile from './pages/customer/Profile';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import AdminDashboard from './pages/manager/AdminDashboard';
import BusManagement from './pages/manager/BusManagement';
import TripManagement from './pages/manager/TripManagement';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />

            {/* Auth Routes (no layout) */}
            <Route path="/login" element={<Auth mode="login" />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<BookingSuccess />} />

            {/* Public / Customer Routes */}
            <Route element={<CustomerLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/seat-selection" element={<SeatSelection />} />
              <Route path="/bookings" element={<MyBookings />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            
            {/* Manager / Admin Routes */}
            <Route path="/manager" element={<ManagerLayout />}>
              <Route index element={<ManagerDashboard />} />
              <Route path="buses" element={<BusManagement />} />
              <Route path="trips" element={<TripManagement />} />
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="*" element={<div className="p-8 text-center text-xl">Manager Placeholder</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

