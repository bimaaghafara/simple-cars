export const carTypes = ['electrical', '2 wheels', 'sport'];

export const rimTypes = ['standard', 'sport'];

export const cars = [
  {
    type: carTypes[0],
    model: 'aaa qwerty',
    brand: 'toyota',
    parts: {
      rim: rimTypes[0],
      doors: 4,
      seats: 5,
      power: "600 KW (604HP)",
    }
  },
  {
    type: carTypes[1],
    model: 'bbb qwerty',
    brand: 'toyota',
    parts: {
      rim: rimTypes[1],
      doors: 4,
      seats: 7,
      cylinder: "1400 cc",
    }
  },
  {
    type: carTypes[0],
    model: 'ccc qwerty',
    brand: 'honda',
    parts: {
      rim: rimTypes[0],
      doors: 4,
      seats: 5,
      power: "700 KW (938HP)",
    }
  },
  {
    type: carTypes[1],
    model: 'ddd uiop',
    brand: 'honda',
    parts: {
      rim: rimTypes[1],
      doors: 4,
      seats: 7,
      cylinder: "2000 cc",
    }
  },
  {
    type: carTypes[2],
    model: 'eee uiop',
    brand: 'lamborghini',
    parts: {
      rim: rimTypes[0],
      doors: 2,
      seats: 2,
      cylinder: "6500 cc",
    }
  },
  {
    type: carTypes[2],
    model: 'fff uiop',
    brand: 'lamborghini',
    parts: {
      rim: rimTypes[1],
      doors: 2,
      seats: 4,
      cylinder: "6000 cc",
    }
  }
];