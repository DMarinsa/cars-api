import { IsNotEmpty } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from '../../domain/Brand';
import { Car } from '../../domain/Car';
import { Status } from '../../domain/Status';

@Entity()
export class CarEntity implements Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  @IsNotEmpty()
  brand: Brand;

  @Column()
  model: number;

  @Column()
  color: string;

  @Column()
  @CreateDateColumn()
  initialEntryDate: Date;

  @Column('string', { default: Status.Inactive })
  status: Status;

  @Column('boolean', { default: false })
  assigned: boolean;
}
