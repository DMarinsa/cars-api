import express, { Application } from "express";
import { Connection } from "typeorm";
import { CarsRoute, Database } from "./modules";

export class App {

  public app: Application;
  private db: Database;
  private carsRoute: CarsRoute;
  constructor() {
    this.app = express();
    this.db = new Database();
    this.db.getConnection('default');
  }

  public async listen() {
    const connection = await this.db.getConnection('default');

    this.initializeRoutes(connection);
    this.app.listen(3000, () => {
      console.log(`Server started at http://localhost:3000`);
    });

    this.app.on('connection', () => {
      console.info('connection');
    });

    this.app.on('error', error => {
      console.error(error);
    });
  }

  private initializeRoutes(connection: Connection){
    this.carsRoute = new CarsRoute(connection);
    this.app.use(this.carsRoute.path, this.carsRoute.router);
  }

  public getServer() {
    return this.app;
  }
}
