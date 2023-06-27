import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterCountry } from '../features/country/countrySlice';

const Seach = () => {
  const dispatch = useDispatch();
  const [result, setResult] = useState('');

  return (
    <div>
      <input
        className="inpute"
        type="text"
        onChange={(e) => {
          dispatch(filterCountry(e.target.value));
          setResult(e.target.value);
        }}
        value={result}
      />
    </div>
  );
};

export default Seach;
