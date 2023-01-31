# AppTesteApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test --code-coverage` to execute  the coverage tests.

## Running program

Run `npm install` to install all dependencies of this project.

Run `ng serve` to run this application.

## About

This project is made using the Angular CLI 15.0.4.

Also, this project implements an service which is designed to communicate with an mocked backend server and returns an cooperative employee previously inserted in database and shows information in 3 distinct components using sharing data between those components (I'm sharing data using @Input()).

There's a fake database in `src/api/base-cpf.json` which contains information about the cooperative employee who you desire to recover. So, if you want to add, edit or remove employees to the database for search, you can just edit object in this JSON file, respecting the structure that is stored in this file.

For now, if you wish to get an employee from the database, just type the following CPF's value: `11122233344` to return data already registered.

In case that you search a non existent CPF, the application will show a modal saying that this employee is not registered in database.

this application is working with bootstrap for responsive components, and separates all backend communications in services folder, using only Class in Typescript files (I'm not using interfaces) and some tests cover in components using Jasmine/Karma. If you wish to run tests, you can check `Running unit tests` for details on how to run it.

