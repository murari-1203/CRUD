# RESTfulAPI

A simple RESTful CRUD application built using **Node.js**, **Express.js**, and **EJS**.  
This project demonstrates how REST APIs work using in-memory data storage and server-side rendering.

---

## Features

- View all posts
- Create a new post
- View a single post
- Edit/update a post
- Delete a post
- Unique IDs using UUID
- Method Override for PATCH & DELETE requests
- EJS templating
- Static CSS support
- CORS enabled

---

## Tech Stack

- Node.js
- Express.js
- EJS
- UUID
- Method-Override
- CORS

---

## Project Structure

```txt
RESTFULAPI
│── node_modules
│── public
│   └── style.css
│
│── views
│   ├── edit.ejs
│   ├── form.ejs
│   ├── index.ejs
│   └── show.ejs
│
│── index.js
│── package.json
│── package-lock.json
│── .gitignore
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/RESTFULAPI.git
```

Move into the project folder:

```bash
cd RESTFULAPI
```

Install dependencies:

```bash
npm install
```

---

## Run the Project

Start the server:

```bash
node index.js
```

Server runs on:

```txt
http://localhost:3000
```

---

## REST Routes

| Method | Route | Description |
|---|---|---|
| GET | `/posts` | Show all posts |
| GET | `/posts/new` | Form to create new post |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | View a specific post |
| GET | `/posts/:id/edit` | Edit form |
| PATCH | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |

---

## Packages Used

### Express

Used to create the server and routes.

```bash
npm install express
```

### EJS

Used as the templating engine.

```bash
npm install ejs
```

### UUID

Generates unique IDs for posts.

```bash
npm install uuid
```

### Method Override

Allows HTML forms to send PATCH and DELETE requests.

```bash
npm install method-override
```

### CORS

Enables Cross-Origin Resource Sharing.

```bash
npm install cors
```

---

## Example Post Object

```js
{
    id: "uuid",
    username: "Murari",
    content: "Sample post content"
}
```

---

## Learning Concepts Covered

- REST API basics
- CRUD operations
- Express routing
- Dynamic routes
- Middleware
- EJS rendering
- Form handling
- Request parameters
- Request body parsing
- Static files
- Method overriding

---

## Future Improvements

- Database integration (MongoDB/MySQL)
- User authentication
- Better UI design
- Validation
- API versioning

---

## Author

Murari

---

## License

This project is open source and free to use.
