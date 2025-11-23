# Express MVC Assignment

This project implements a RESTful API server to manage users and cats, built using Node.js, Express, and the MVC architectural pattern.

## Features

- All CRUD endpoints for cats and users
- In-memory dummy data models (no database required)
- File upload for cat images using Multer
- Custom middleware: Generates 160x160px PNG thumbnails with Sharp
- Organized project structure (`src/controllers`, `src/models`, `src/routes`)
- `.gitignore` excludes `node_modules` and uploaded files
- Tested using REST Client (api-test.http) and upload-test.html (for image upload)

## Endpoints

### Cat Endpoints

- `GET /api/v1/cat` - Get all cats
- `GET /api/v1/cat/:id` - Get a cat by ID
- `POST /api/v1/cat` - Add a cat (with optional image upload)
- `PUT /api/v1/cat/:id` - Update a cat (returns confirmation)
- `DELETE /api/v1/cat/:id` - Delete a cat (returns confirmation)

### User Endpoints

- `GET /api/v1/user` - Get all users
- `GET /api/v1/user/:id` - Get a user by ID
- `POST /api/v1/user` - Add a user
- `PUT /api/v1/user/:id` - Update a user (returns confirmation)
- `DELETE /api/v1/user/:id` - Delete a user (returns confirmation)

## Project Structure
