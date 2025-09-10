# URL Shortener

A full-stack URL shortener application built with Node.js (Express) for the backend and React (Vite) for the frontend. The project uses Docker for containerization and includes a simple MongoDB-based model for storing and retrieving shortened URLs.

## Features

### Backend
- **Shorten URLs:** Accepts long URLs and generates unique short codes.
- **Redirect:** Redirects users from a short URL to the original long URL.
- **Statistics:** (Planned) Track the number of times a short URL is used.
- **REST API:** Provides endpoints for creating and resolving short URLs.
- **MongoDB Integration:** Stores URL mappings in a MongoDB database.
- **Dockerized:** Easily deployable using Docker and Docker Compose.

### Frontend
- **User Interface:** Simple and clean UI for submitting URLs and receiving short links.
- **Copy to Clipboard:** (Planned) One-click copy of the shortened URL.
- **URL Validation:** (Planned) Checks for valid URL input before submission.
- **Statistics Display:** (Planned) Show usage statistics for each short URL.

## Planned / Future Features
- **User Authentication:** Allow users to manage their own short URLs.
- **Custom Short Codes:** Let users specify custom aliases for their short URLs.
- **Analytics Dashboard:** Visualize usage statistics and trends.
- **Expiration Dates:** Option to set expiration for short URLs.
- **QR Code Generation:** Generate QR codes for each short URL.
- **Bulk URL Shortening:** Upload and shorten multiple URLs at once.
- **Admin Panel:** Manage all URLs and users.

## Getting Started

### Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (for local development)

### Running with Docker Compose

```sh
docker-compose up --build
```

The backend will be available at `http://localhost:5000` and the frontend at `http://localhost:3000`.

### Running Locally (Without Docker)

#### Backend
```sh
cd backend
npm install
npm start
```

#### Frontend
```sh
cd frontend
npm install
npm run dev
```

## Project Structure

```
backend/
  index.js           # Express server
  models/Url.js      # Mongoose model for URLs
  routes/urlRoutes.js# API routes
  Dockerfile         # Backend Docker config
frontend/
  src/               # React source code
  components/        # React components
  Dockerfile         # Frontend Docker config
  vite.config.js     # Vite config
  index.html         # Main HTML file
```

## License

This project is open source and available under the [MIT License](LICENSE).
