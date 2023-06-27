import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loading } from '../features/country/countrySlice';

const Home = () => {
  const data = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loading(false));
  });

  return (
    <div className="home">
      <div className="countries">
        {
                data.country.map((item, index) => (
                  <Link
                    className={((index + 3) % 2) === 0 ? 'country' : 'country pair-red'}
                    key={item.name.common}
                    to="/details"
                    state={{ country: item.name.common }}
                  >
                    <div className="flag-items">
                      {item.name.common.toUpperCase()}
                      <img className="flag" src={item.flags.png !== undefined ? item.flags.png : 'Flag not avaible'} alt={item.name.official} />
                    </div>
                    <div className="linke-div">
                      <p>
                        AREA
                        {index + 3}
                        :
                        {item.area}
                      </p>
                      <p>
                        POPULCATION:
                        {item.population}
                      </p>
                    </div>
                  </Link>
                ))
            }
      </div>
    </div>
  );
};

export default Home;
