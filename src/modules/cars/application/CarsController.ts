import { Request, Response, NextFunction } from 'express';
import { Connection } from 'typeorm';
import { CarsRepository } from '../infrastructure/postgres/CarRepository';

export class CarsController {
  
  private carsRepository: CarsRepository;
  constructor (connection: Connection) {
    this.carsRepository = new CarsRepository(connection);
  }

  async retrieve(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cars = await this.carsRepository.getAll();
      res.status(200).json({ data: cars, message: 'getAll' });
    } catch (error) {
      next(error);
    }
  }

  async patchOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const carDto = req.body;
      const updatedCar = await this.carsRepository.updateOne(Number.parseInt(req.params.id), carDto);
      res.status(200).json(updatedCar);
    } catch (error) {
      next(error);
    }
  }

  async deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.carsRepository.deleteOne(Number.parseInt(req.params.id));
      res.status(204);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const carDto = req.body;
      const createdCar = await this.carsRepository.createOne(carDto);
      res.status(200).json(createdCar);
    } catch (error) {
      next(error);
    }
  }
}
