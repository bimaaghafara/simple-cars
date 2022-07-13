import { useState } from 'react';
import { carTypes, cars as carsData } from './data';
import { Box, Autocomplete, TextField } from '@mui/material';

function App() {
  const [cars, setCars] = useState(carsData);
  const [filters, setFilters] = useState({});

  const handleSetFilter = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
    if (key === 'type') {
      if (value) setCars(carsData.filter(e => e[key] === value));
      else setCars(carsData);
    }
  } 

  return (
    <Box sx={{ p: 4 }}>
      <Box>
        <Autocomplete
          value={filters?.type || null}
          onChange={(event, newValue) => handleSetFilter('type', newValue)}
          options={carTypes}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Car Type" />}
        />
      </Box>
      <Box>
        {cars.map((car, i) => (
          <Box key={i}>
            {`${car.brand} - ${car.model} - ${car.type}`}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
