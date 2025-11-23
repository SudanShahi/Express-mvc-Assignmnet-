This project demonstrates an Express.js REST API backend with full CRUD support for "cats" and "users," featuring well-organised source files and real-world code structure.
It includes file upload and custom thumbnail middleware using Sharp, and client-side AJAX tests with Fetch API.

Features
Modular Express codebase (src/ folder with api/controllers, api/models, api/routes)

RESTful endpoints for Cats and Users with dummy in-memory data

File upload endpoint for cat images with Multer

Custom middleware (createThumbnail) generates 160x160 PNG thumbnails for uploaded images (using Sharp)

AJAX frontend demo using plain HTML+JavaScript (upload-test.html)

Easy to test with Postman or VSCode REST Client

.gitignore excludes node_modules and uploaded images

Git version control follows proper branching and merging practices

Folder Structure
text
.
├── src/
│   ├── api/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── middlewares.js
│   ├── app.js
│   └── index.js
├── uploads/           # Images, thumbnails (ignored in git)
├── upload-test.html   # AJAX test page for API
├── api-test.http      # VSCode REST Client tests
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
How to Run
Install dependencies:

text
npm install
Start the server:

text
node src/index.js
Test API endpoints:

Use Postman or VSCode REST Client (see api-test.http)

Or, use the provided upload-test.html for frontend AJAX testing

API Endpoints
Cat Endpoints
Method	Route	Description
GET	/api/v1/cat	Get all cats
GET	/api/v1/cat/:id	Get a single cat by ID
POST	/api/v1/cat	Add a new cat (upload image)
PUT	/api/v1/cat/:id	Returns {message: "Cat item updated."}
DELETE	/api/v1/cat/:id	Returns {message: "Cat item deleted."}
User Endpoints
Method	Route	Description
GET	/api/v1/user	Get all users
GET	/api/v1/user/:id	Get a single user by ID
POST	/api/v1/user	Add a new user
PUT	/api/v1/user/:id	Returns {message: "User item updated."}
DELETE	/api/v1/user/:id	Returns {message: "User item deleted."}
Custom Thumbnail Middleware
Implemented in src/middlewares.js as createThumbnail

Generates a 160x160 PNG thumbnail for uploaded images after Multer

Thumbnail saved in uploads/ with filename suffix _thumb

AJAX Example
Test your endpoints with the included upload-test.html file

Uses Fetch API and async/await for AJAX requests

Version Control & Branching
Project uses git with main and feature branches (i.e., Assignment4 for middleware)

Changes/merges follow best practice for code collaboration

Author
Sudan Shahi
