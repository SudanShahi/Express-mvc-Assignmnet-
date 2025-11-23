# Express MVC Assignment — Backend API for React Hooks Course

This project provides a RESTful API server for managing users and cats, designed to integrate with frontend applications, such as those built in React using hooks. Built using Node.js, Express, and an MVC pattern.

## Features

- All CRUD endpoints for cats and users
- In-memory dummy data models (for quick testing; no DB required)
- File upload API for cat images with thumbnail generation (Sharp)
- Clean structure for easy React frontend consumption
- `.gitignore` excludes `node_modules` and uploaded files
- API tested with REST Client and upload-test.html (for image uploads)

## Usage in a React Project

This backend is intended to be consumed by a React frontend, making use of React hooks, such as `useState`, `useEffect`, and `useCallback` for API requests (using `fetch` or axios).  
Sample usages:
- Fetch cats via `GET /api/v1/cat` and update with hooks
- Create and update users or cats from React forms
- Upload cat images via frontend form using `FormData`

You can use the endpoints directly in your React components.

## Endpoints

(Cats/User endpoints as before...)

## How to Run

1. Install backend dependencies:
npm install

2. Start backend server:

node scr/index.js
