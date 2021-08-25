# Inventory Management API

This is the inventory webapp, which uses the provided Rest api. 
It's an Angular 12.2.2 webapp and supports all the inventory CRUD actions and the reservation flow.

### Design
The api model contains 3 entities: 
- Product, Supplier and Category 

With the following relations:
- Product ManyToOne Supplier 
- Product ManyToOne Category

### Features:
- Supplier API operations
- Category API operations
- Product API operations
- Reservation flow

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

- To run a development web server and build the project it uses Node.js.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.

`npm install`

### To run locally:
First start the backend inventory-api: https://github.com/vriesjo/inventory-api/blob/main/README.md

Then to get to know the application a bit, build it on your local machine using the following command

`npm start`

The application is available here: http://localhost:4200

### Run dockerized version

Don't forget to start the backend inventory-api: https://github.com/vriesjo/inventory-api/blob/main/README.md
 
To run the dockerized version of this webapp, you just use the following command:

```
docker run --name inv-webapp-container -d -p 4200:80 vriesjo/inventory-webapp:v1.0.0
``` 

The first time it will download the public available image from:
 https://hub.docker.com/repository/docker/vriesjo/inventory-webapp
 
Building the image yourself is of course also possible and can be achieved by:
  
`docker build --tag  vriesjo/inventory-webapp:v1.0.1 .`