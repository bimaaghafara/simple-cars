export const carTypes = ['electrical', '2 wheels', 'sport'];

export const velgTypes = ['standard', 'sport'];

export const cars = [
  {
    type: carTypes[0],
    model: 'aaa',
    brand: 'Toyota',
    parts: [
      {
        velg: velgTypes[0],
        doors: 4,
        seats: 5,
        power: 600,
      }
    ]
  },
  {
    type: carTypes[1],
    model: 'bbb',
    brand: 'Toyota',
    parts: [
      {
        velg: velgTypes[1],
        doors: 4,
        seats: 7,
        cylinder: 1400,
      }
    ]
  },
  {
    type: carTypes[0],
    model: 'ccc',
    brand: 'honda',
    parts: [
      {
        velg: velgTypes[0],
        doors: 4,
        seats: 5,
        power: 700,
      }
    ]
  },
  {
    type: carTypes[1],
    model: 'ddd',
    brand: 'honda',
    parts: [
      {
        velg: velgTypes[1],
        doors: 4,
        seats: 7,
        cylinder: 2000,
      }
    ]
  },
  {
    type: carTypes[2],
    model: 'eee',
    brand: 'Lamborghini',
    parts: [
      {
        velg: velgTypes[0],
        doors: 2,
        seats: 2,
        cylinder: 6500,
      }
    ]
  },
  {
    type: carTypes[2],
    model: 'fff',
    brand: 'Lamborghini',
    parts: [
      {
        velg: velgTypes[1],
        doors: 2,
        seats: 4,
        cylinder: 6000,
      }
    ]
  }
];