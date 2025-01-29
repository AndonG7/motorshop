import {Engine} from './app/shared/models/Engine';
import { Tag } from './app/shared/models/Tag';

export const sample_engines: Engine[] = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    price: 10,
    origins: ['italy'],
    imageUrl: 'assets/engine-1.jpg',
    tags: ['Volkswagen', 'Pizza', 'Lunch'],
    mileage: ''
  },
]

export const sample_tags:Tag[] = [
  { name: 'Сите', count: 6 },
  { name: 'Volkswagen', count: 4 },
  { name: 'BMW', count: 2 },
  { name: 'Peugeot', count: 3 },
  { name: 'Audi', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]
