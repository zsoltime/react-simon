const random = (min, max) => {
  if (typeof min === 'undefined') {
    return Math.random();
  }
  if (typeof max === 'undefined') {
    return Math.floor(Math.random() * (min + 1));
  }
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

const pickRandomElement = array => array[random(array.length - 1)];

export const randomArray = (values, length) => (
  [...new Array(length)].map(() => pickRandomElement(values))
);
