# Project Title
My Posts CRUD Application (My APP)

# Project Summary
The application My Posts is developed using the MEAN stack (MongoDB, Express, Angular, and Node.js). It is easy to use and user-friendly application allows the user to create and edit posts and provide delete functionality. The JWT web token provides the authentication feature, allowing the user to sign up for the app while the login credentials are securely stored in the MongoDB database.

The backend microservices are developed using Node.js and Express, allowing flexibility through the application to use/re-use the services anywhere necessary. MongoDB is the non-SQL database used in this application development stack to store all the posts and the passwords of the user accounts, which are hashed before saving to the database. The Angular framework is used to create a user-friendly front-end of the application, and the Angular Material is utilized to keep the design and color contrast of the application consistent.

Single-page applications (SPAs) developed by frameworks like Angular, React, etc., provide user-friendly, fast, and efficient web applications. SPAs are compartmentalized, where only the requested component of the whole webpage is actively updated, unlike loading/reloading the whole page like in a monolithic application.

RESTful APIs segment the backend into manageable microservice layers, enhancing scalability and interoperability. Each backend functionality operates independently, while the API allows for versatile service utilization throughout the application. This structure exposes business and application logic through accessible endpoints.

# Design Specifications
Angular materials were used in the MEAN application developed in this project to design and implement a user-friendly front-end interface. The responsive design gives the user flexibility to use the application to use it across any device with different screen sizes. The API links with the front end were made simple, allowing users to navigate to different components of the websites with minimal effort.

The authentication restrictions were made to perform specific functions like creating, editing, and deleting posts only when the users are logged in. Otherwise, any user will be able to access the application in read-only mode. To maintain the security of the users and applications, all the necessary secret keys and tokens are separated from the source code and are defined as environment variables on the WebStorm environment configurations.

# Future Work
The current version of My Posts can be modified and improvised by adding functionalities like a user profile management system allowing the users to add and edit their personal and bio information, add a profile picture, option to change passwords, and many more. To make the platform more social, additional features, including a like button, comment, and share, can be added. To improve the security of the application, multi-factor authentication (MFA) can be implemented to add a layer of authentication.

GitHub can be further used for version control, and platforms like Kubernetes and Docker can be used for deploying the app, which gives flexibility in scaling the application. MongoDB account can be upgraded to a proprietary account to handle the demand as MongoDB is a cloud-based platform that is easily scalable.


# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
