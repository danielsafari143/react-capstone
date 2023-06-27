import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import IconArrowLeft from './Arrow';
import Seach from './Search';

const Navbar = () => {
  const data = useSelector((state) => state.country);

  return (
    <header className="header">
      <Link to="/"><IconArrowLeft /></Link>
      {!data.isLoading ? <Seach /> : ''}
    </header>
  );
};

export default Navbar;