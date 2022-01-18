import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Charge Stations</h1>
      <div className="links">
        <Link to="/" style={{
          color: 'white',
          backgroundColor: '#a252fd',
          borderRadius: '8px'
        }}>Home</Link>
        <Link to="/24h_city_stations" style={
          (useLocation().pathname === '/24h_city_stations') ? { color: '#a252fd' } : {}
        }>24h Stations</Link>
        <Link to="/public_stations" style={
          (useLocation().pathname === '/public_stations') ? { color: '#a252fd' } : {}
        }>Public Stations</Link>
        <Link to="/private_stations" style={
          (useLocation().pathname === '/private_stations') ? { color: '#a252fd' } : {}
        }>Private Stations</Link>
      </div>
    </nav>
  );
}

export default Navbar;