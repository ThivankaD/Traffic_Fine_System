# User Web Application

A React + Vite web version of the Traffic Fine System mobile application.

## Features

- Login/Signup with JWT authentication
- Dashboard with stats and quick search
- Fine payment portal
- Issue fine form (for officers)
- Profile management
- Responsive design matching mobile app colors
- Payment modal with saved card support

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app runs on `http://localhost:5174` by default.

## API Configuration

The app connects to the backend at `http://localhost:5000/api/v1`

All API endpoints:

- `/auth/login` - Login
- `/auth/signup` - Register new user
- `/fines/*` - Fine management
- `/payments` - Payment processing
- `/fine-categories` - Fine categories
- `/users/me/cards` - Saved cards

## Build

```bash
npm run build
```

## Environment

Make sure the backend is running on port 5000 before starting the web app.
