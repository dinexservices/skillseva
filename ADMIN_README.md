# SkillSeva Admin Panel

## Overview

The admin panel allows you to manage all aspects of your SkillSeva platform including:
- **Cohorts**: Manage ongoing and upcoming cohort programs
- **Events**: Create and manage meetups, workshops, and online events
- **Media**: Add and organize YouTube videos
- **Moments**: Upload gallery photos from your events

## Getting Started

### 1. Create Admin User

First, you need to create an admin account. Run the seed script:

```bash
npx ts-node scripts/seed-admin.ts
```

This will create an admin user with:
- **Email**: `admin@skillseva.com`
- **Password**: `admin123`

**⚠️ IMPORTANT**: Change this password immediately after your first login!

### 2. Access Admin Panel

Navigate to: `/admin/login`

- This route is not linked anywhere on the site for security
- No public registration is available
- Only existing admins can access the dashboard

### 3. Login

1. Go to `/admin/login`
2. Enter your admin credentials
3. You'll be redirected to `/admin/dashboard`

## Admin Dashboard Features

### Dashboard Home (`/admin/dashboard`)
- Overview of all content counts
- Quick action links to manage each section

### Cohorts Management (`/admin/dashboard/cohorts`)
- Add, edit, and delete cohort programs
- Set status as "ongoing" or "upcoming"
- Upload cohort images via Cloudinary
- Manage cohort details and links

### Events Management (`/admin/dashboard/events`)
- Create meetups, workshops, and online events
- Add event details: date, location, type (online/in-person)
- Upload event banners
- Add registration links, embed URLs, and payment links
- Rich text descriptions

### Media Management (`/admin/dashboard/media`)
- Add YouTube videos
- Auto-extract video ID from YouTube URLs
- Preview videos before publishing
- Manage video titles and descriptions

### Moments Gallery (`/admin/dashboard/moments`)
- Upload event photos to gallery
- Set display order
- Cloudinary integration for image hosting

## Image Upload

All images are uploaded to Cloudinary automatically:
- Cohort banners
- Event images
- Gallery photos

Make sure your Cloudinary credentials are set in `.env`:
```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_UPLOAD_PRESET=your-upload-preset
```

## Security Features

- JWT-based authentication
- HTTP-only cookies for session management
- Protected API routes with middleware
- No admin registration endpoint (must be seeded)
- Password hashing with bcrypt

## Environment Variables

Required environment variables:

```env
# MongoDB
MONGODB_URI=your-mongodb-connection-string

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_UPLOAD_PRESET=your-upload-preset
```

## API Endpoints

### Authentication
- `POST /api/admin/login` - Login
- `POST /api/admin/logout` - Logout
- `GET /api/admin/me` - Get current admin

### Cohorts
- `GET /api/admin/cohorts` - List all cohorts (public)
- `POST /api/admin/cohorts` - Create cohort (protected)
- `GET /api/admin/cohorts/[id]` - Get single cohort
- `PUT /api/admin/cohorts/[id]` - Update cohort (protected)
- `DELETE /api/admin/cohorts/[id]` - Delete cohort (protected)

### Events
- `GET /api/admin/events` - List all events (public)
- `POST /api/admin/events` - Create event (protected)
- `GET /api/admin/events/[id]` - Get single event
- `PUT /api/admin/events/[id]` - Update event (protected)
- `DELETE /api/admin/events/[id]` - Delete event (protected)

### Media
- `GET /api/admin/media` - List all media (public)
- `POST /api/admin/media` - Create media (protected)
- `GET /api/admin/media/[id]` - Get single media
- `PUT /api/admin/media/[id]` - Update media (protected)
- `DELETE /api/admin/media/[id]` - Delete media (protected)

### Moments
- `GET /api/admin/moments` - List all moments (public)
- `POST /api/admin/moments` - Create moment (protected)
- `DELETE /api/admin/moments/[id]` - Delete moment (protected)

### Upload
- `POST /api/admin/upload` - Upload image to Cloudinary (protected)

## Frontend Integration

The public-facing pages automatically fetch data from the database:

- `/cohorts` - Displays cohorts from database
- `/events` - Displays events from database
- `/media` - Displays videos from database
- Events page also shows moments gallery from database

## Notes

- All timestamps are automatically managed by MongoDB
- Images are permanently stored in Cloudinary
- Delete operations remove database entries but not Cloudinary images
- The admin panel is fully responsive and works on mobile devices

## Support

For issues or questions, contact the development team.
