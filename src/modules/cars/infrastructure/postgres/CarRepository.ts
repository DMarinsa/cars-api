import { Connection, MongoRepository } from 'typeorm';
import { Car } from '../../domain/Car';
import { CarEntity } from './CarEntity';

export class CarsRepository {

  private repository: MongoRepository<CarEntity>;

  constructor(connection: Connection) {
    this.repository = connection.getMongoRepository(CarEntity);
  }

  public async getAll(): Promise<Car[]> {
    return this.repository.find();
  }

  public async updateOne(id: number, update: Car): Promise<Car> {
    const foundCar = await this.repository.findOneOrFail(id);

    return this.repository.save({
      ...foundCar,
      ...update,
    });
  }

  public async deleteOne(id: number): Promise<void> {
    await this.repository.delete({ id });
  }

  public async createOne(car: Car): Promise<Car> {
    return this.repository.create(car);
  }
}
