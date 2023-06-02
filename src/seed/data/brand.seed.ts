import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {id: uuid(), name: 'Toyota', createAt: new Date().getTime()},
    {id: uuid(), name: 'Nissan', createAt: new Date().getTime()},
    {id: uuid(), name: 'Tesla', createAt: new Date().getTime()},
    {id: uuid(), name: 'Hyundai', createAt: new Date().getTime()}
];