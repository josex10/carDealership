import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {id: uuid(), brand: 'Toyota', model: 'Hilux'},
    {id: uuid(), brand: 'Nissan', model: 'NP300'},
    {id: uuid(), brand: 'Tesla', model: 'Model S'},
    {id: uuid(), brand: 'Hyundai', model: 'Tucson'}
];