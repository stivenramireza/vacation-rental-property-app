import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Property from './pages/property/Property';
import Booking from './pages/booking/Booking';
import PropertyBookings from './pages/property_bookings/PropertyBookings';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Property />} />
            <Route path="/properties/:propertyId/bookings" element={<PropertyBookings />} />
            <Route path="/properties/:propertyId/book" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
