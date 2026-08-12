# Portfolio Admin API

Node.js/Express API for projects, blog posts, contact inbox, replies, uploads, settings, and admin authentication.

## Run locally

1. Copy `.env.example` to `.env` and set a strong `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.
2. Start MongoDB locally or set `MONGODB_URI` to MongoDB Atlas.
3. Run `npm install`.
4. Run `npm run seed:admin` once.
5. Run `npm run dev`.
6. In the React app, set `REACT_APP_API_URL=http://localhost:5000/api`.

Uploaded images are stored locally under `uploads/` for development. Replace the Multer disk storage with S3/Cloudinary before using multiple production instances. Contact replies require the optional SMTP variables.

## Main routes

- Public: `GET /api/projects`, `GET /api/blogs`, `GET /api/blogs/:slug`, `GET /api/settings`, `POST /api/contacts`
- Auth: `POST /api/auth/login`, `GET /api/auth/me`
- Admin: CRUD under `/api/admin/projects` and `/api/admin/blogs`; inbox under `/api/admin/contacts`; `PUT /api/admin/settings`; `GET /api/admin/dashboard`
