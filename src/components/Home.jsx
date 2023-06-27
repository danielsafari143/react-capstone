import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loading } from '../features/country/countrySlice';
import IconArrowRightCircle from './IconArrowRightCircle';

const Home = () => {
  const data = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loading(false));
  });

  return (
    <div className="home">
      <ul className="countries">
        {
                data.country.map((item, index) => (
                  <li key={item.name.common}>
                    <Link
                      className={((index + 3) % 2) === 0 ? 'country' : 'country  pair-red'}
                      to="/details"
                      state={{ country: item.name.common }}
                    >
                      <div className="flag-items">
                        <img className="flag" src={item.flags.png !== undefined ? item.flags.png : 'Flag not avaible'} alt={item.name.official} />
                        <IconArrowRightCircle />
                      </div>

                      <div className="linke-div">
                        <p className="crt">{item.name.common.toUpperCase()}</p>
                        <p className="crt-sub">
                          AREA :
                          {` ${item.area}`}
                        </p>
                        <p className="crt-sub">
                          POPULATION :
                          {` ${item.population}`}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))
            }
      </ul>
    </div>
  );
};

export default Home;
