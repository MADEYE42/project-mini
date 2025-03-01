import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MedicalEmergency } from './pages/MedicalEmergency';
import VehicleBreakdown from './pages/VehicleBreakdown';
import { UserProfile } from './pages/UserProfile';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medical-emergency" element={<MedicalEmergency />} />
            <Route path="/vehicle-breakdown" element={<VehicleBreakdown />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;