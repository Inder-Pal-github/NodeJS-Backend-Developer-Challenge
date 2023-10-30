# NodeJS-Backend-Developer-Challenge

- This is a simple node.js project to create a API which allow use to perform CRUD operations for managinng books.

### Features:

- **CRUD** operations
  - Add a new book with title, author, summary.
  - View a list of all books
  - View details of a specific book by its ID
  - Update a book's details
  - Delete a book.
- **Swagger documentation** [https://red-shiny-raven.cyclic.app/docs](https://red-shiny-raven.cyclic.app/)
  - Created swagger documentation for CRUD operations performed on the books.

### Requirements:

- **Node.js**
- **Express.js**
- **Database**
  - **MongoDB**
- ODM ( Object Data Modeling library )
  - **_Mongoose_**
    - To manage relationships b/w data, provide schema validation and managing objects in MongoDB.

## How to run this project locally?

- Steps:
  - Open a new folder in your code editor (e.g VScode)
  - RUN: `git clone https://github.com/Inder-Pal-github/NodeJS-Backend-Developer-Challenge.git`
  - Install necessary dependencies:
  - RUN: `npm install`
  - To start this project:
    - RUN: `npm run start`
  - To start in development mode:
    - First install nodemon: `npm i nodemon`
    - RUN: `npm run dev`

### Project deployed link:

[https://red-shiny-raven.cyclic.app/](https://red-shiny-raven.cyclic.app/)

### Extra features:

- - **_Swagger documentation_**
    - Check out and try on [https://red-shiny-raven.cyclic.app/docs](https://red-shiny-raven.cyclic.app/)

### Features which can be implemented:

- - **_Authentication_**
    - Using **jsonwebtoken** and **bcrypt**
