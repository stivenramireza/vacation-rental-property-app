import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>Vacation Rental Property App</h1>
      <nav>
        <Link to="/" className="text-white mx-3">
          Home
        </Link>
        <Link to="/property" className="text-white mx-3">
          Create a property
        </Link>
        <Link to="/booking" className="text-white mx-3">
          Book a property
        </Link>
      </nav>
    </header>
  );
};

export default Header;
