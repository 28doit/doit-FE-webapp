import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <hr />
      <Link to="/join">Join</Link>
    </>
  );
};

export default Header;
