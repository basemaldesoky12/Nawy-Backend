Overview
 
  The backend is responsible for managing apartment data and providing APIs for the frontend to interact with. It utilizes a MongoDB database to store apartment information and follows a RESTful API architecture for handling requests.

Features

  -Define Mongoose schema for apartment data
  -Create a model to interact with the MongoDB database
  -Implement controllers to handle CRUD operations for apartments
  -Define routes to expose API endpoints for managing apartments
Technologies Used

  Node.js
  
  Express.js
  
  MongoDB
  
  Mongoose
  
Getting Started


To get started with the backend development, follow these steps:

Prerequisites


  Node.js and npm installed on your machine
  
  MongoDB installed and running locally or a MongoDB Atlas account for cloud deployment
  
Installation

  Clone the repository:
  
  git clone https://github.com/your-username/your-backend-repo.git
  
  cd your-backend-repo
  
  npm install
  
  npm run dev
API Endpoints

GET /apartments/page : Retrieve a list of apartments

GET /apartments/:refNo : Retrieve details of a specific apartment

POST /addapartment : Add a new apartment

