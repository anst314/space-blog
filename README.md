# Space Blog using MERN Stack

This is a space blog web application built using the MERN (MongoDB, Express.js, REACT, Node.js) stack.
It allows users to read and post articles related to space astronomy.

## Installation
To run this application on your local machine, follow these steps:

1. Clone repository to your local machine

2. Install dependencies for the server:

cd server
npm install

3. Install dependencies for the client:
cd ../client
npm install

4. Create '.env' file in the 'server' directory and add the following environment variables:
DATABASE_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>

5. Start the server:
npm run server

6. In separate terminal window, start the client:
npm run client

7. Open your browser window and navigate to http://localhost:3000

## Technologies Used
* MongoDB: NoSQL database used to store articles, comments, and user information

* Express.js Server framework used to handle API requests and routing

* React.js CLient-side JavaScript library used to create the user interface

* Node.js JavaScript runtime used to run the server-side code

* Mongoose: Object Data Modeling (ODM) library used to interact with MongoDB

* Redux: State management library used to manage global application state

* Bootstrap: Front-end CSS framework used to style the application

* Heroku: Website host

### Trello 
Planning organized on the following site:
https://trello.com/b/LA8MnFpb/project-planning

### Diagram.draw.io
This framework is used to describe the layout of the program. CLick the link to observe.
https://app.diagrams.net/#G1jt1iNoBXriKQ5_wqbrIkgmz9Wz6s7M-e

### Wireframe:
Backend schema diagram displayed on site:
https://lucid.app/lucidchart/691c741a-b036-4df9-a05d-fb76bc0f481c/edit?beaconFlowId=BDB535B3A542DDF1&invitationId=inv_3f62aa70-e518-40f4-9f7f-3b7cbf7f8ea7&page=0_0#

## Known Issues


## Acknowledgements
References used to assist in the project:
* https://github.com/AbeTavarez/MERN-infrastructure-P1
* https://reactrouter.com/en/main/hooks/use-params
* https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
* https://jwt.io/
* https://www.lucidchart.com/pages/er-diagrams?a=0
* https://github.com/AbeTavarez/mern-app-deployment