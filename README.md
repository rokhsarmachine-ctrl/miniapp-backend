# Mini App Backend

A lightweight Node.js + Express backend scaffold for a mini application with PostgreSQL, Redis, JWT authentication, file uploads, and modular route structure.

## Features

- Express API server
- PostgreSQL connection setup
- Redis cache service
- JWT-based auth middleware
- Structured routes for auth, cities, providers, products, orders, and uploads
- Docker and Docker Compose support

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a local environment file:
   ```bash
   cp .env.example .env
   ```
3. Start the app:
   ```bash
   npm run dev
   ```

## Docker

```bash
docker-compose up --build
```

## Project Structure

```text
src/
  index.js
  config.js
  db.js
  sql/schema.sql
  services/cache.js
  services/storage.js
  middleware/auth.js
  routes/
    auth.js
    cities.js
    providers.js
    products.js
    orders.js
    uploads.js
```

## License

MIT
