import { Router } from 'express';
import { Connection } from 'typeorm';
import { Routes, validationMiddleware } from '../../../shared';
import { CarsController } from '../../application/CarsController';
import { CarDto } from '../../domain/CarDto';

export class CarsRoute implements Routes {
  public path = '/cars';
  public router = Router();
  private carsController: CarsController;

  constructor(connection: Connection) {
    this.carsController = new CarsController(connection);
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.carsController.retrieve);
    this.router.post(`${this.path}`, validationMiddleware(CarDto, 'body'), this.carsController.create);
    this.router.patch(
      `${this.path}/:id`,
      validationMiddleware(Number, 'params'),
      validationMiddleware(CarDto, 'body', true),
      this.carsController.patchOne,
    );
    this.router.delete(`${this.path}/:id`, validationMiddleware(Number, 'params'), this.carsController.deleteOne);
  }
}
