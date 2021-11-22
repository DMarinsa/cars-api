import { Brand } from './Brand';
import { Status } from './Status';

export interface Car {
  id: number;
  brand: Brand;
  model: number;
  color: string;
  initialEntryDate: Date;
  status: Status;
  assigned: boolean;
}
