# Inventory Management API

This is the inventory webapp, which uses the provided rest api. 
It's an Angular 12.2.2 webapp. 

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

- To run a development web server and build the project it uses Node.js.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.

`
npm install
`

### Design
The api model has 3 entities: 
- Product, Supplier and Category 

With the following relations:
- Product ManyToOne Supplier 
- Product ManyToOne Category

### Features:
- Supplier CRUD operations
- Category CRUD operations
- Product CRUD operations
- Reservation operations

### To run locally:
To start the project use the followng command:
`npm start`

The application is available here: http://localhost:7070

### Run dockerized version
 WIP
