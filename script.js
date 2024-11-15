'use strict';

const city = prompt('What is the name of your town/city?');
const population = prompt(`What is the population of ${city}?`);

console.log(`${city} has a population of ${population}. That's ${population > 650000 ? 'more' : 'less'} than the city of Boston.`);