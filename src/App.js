import { useState, useEffect } from 'react';
import { carTypes, cars as carsData } from './data';
import useDebounce from './hooks/useDebonce';
import {
  Box,
  Autocomplete,
  TextField,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

function App() {
  const [cars, setCars] = useState(carsData);
  const [filters, setFilters] = useState({});
  const debouncedFilters = useDebounce(filters, 500);

  const handleSetFilter = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  } 

  useEffect(() => {
    let filteredData = carsData;
    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (key === 'type' && value) {
        filteredData = filteredData.filter(e => e.type === value);
      }
      if (key === 'search' && value) {
        filteredData = filteredData.filter(e => {
          const isConsist = (words, v) => words.toLowerCase().includes(v.toLowerCase());
          return isConsist(e.brand, value) || isConsist(e.model, value);
        });
      }
    });
    setCars(filteredData);
  }, [debouncedFilters]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Cars</Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Autocomplete
          value={filters?.type || null}
          onChange={(e, newValue) => handleSetFilter('type', newValue)}
          options={carTypes}
          renderInput={(params) => <TextField {...params} label="Car Type" />}
          sx={{ width: 300, maxWidth: '100%' }}
        />
        <TextField
          value={filters?.search || ""}
          onChange={e => handleSetFilter('search', e.target.value)}
          label="Search"
          placeholder="Search Car Brand / Model"
          sx={{ width: 300, maxWidth: '100%' }}
        />
      </Stack>
      <List sx={{ maxWidth: 616 }}>
        {cars.map((car, i) => (
          <Box key={i}>
            <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <ListItemText
                primary={
                  <Typography sx={{ textTransform: 'capitalize' }}>
                    {`${car.brand} - ${car.model}`}
                  </Typography>
                }
              />
              <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>
                {`Type: ${car.type}`}
              </Typography>
              {Object.keys(car.parts).map((key, i) => (
                <Typography key={i} variant="caption" sx={{ textTransform: 'capitalize' }}>
                  {`${key}: ${car.parts[key]}`}
                </Typography>
              ))}
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
}

export default App;
