import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>Vacation Rental Property App</h1>
      <nav>
        <Link to="/" className="text-white mx-3">
          Home
        </Link>
        <Link to="/properties" className="text-white mx-3">
          Add a new property
        </Link>
      </nav>
    </header>
  );
};

export default Header;
