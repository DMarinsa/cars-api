import { IsBoolean, IsIn, IsInt, IsString } from 'class-validator';
import { Brand } from './Brand';
import { Status } from './Status';

export class CarDto {
  @IsIn(Object.values(Brand))
  public brand: string;

  @IsInt()
  public model: number;

  @IsString()
  color: string;

  @IsIn(Object.values(Status))
  status: string;

  @IsBoolean()
  assigned: boolean;
}
