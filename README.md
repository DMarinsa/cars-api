# Cars Manager
## _A rest API_

### Features

- Read a list of cars
- Create cars
- Delete cars
- Update cars

### Installation

*Requirements*
- nodejs LTS currently (16.13.0)
- a way to load env vars
  - You can use whatever way you want. I recommend using a package like `env-cmd`
- once cloned locally you should be able to run
```sh
npm install
npm run build
env-cmd -f .env.example npm start
```

This will start an instance of the package on localhost:3000

#### Still to Do

* Add testing
* Dockerize the app
* Add features about news on each car.

#### License

MIT
