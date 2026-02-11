# SkillSeva Admin Panel - Complete Setup Guide

## 🎉 Admin Panel Successfully Created!

Your SkillSeva platform now has a fully functional admin panel with database-driven content management.

## 📋 What Has Been Built

### 1. **Authentication System**
- ✅ Secure JWT-based authentication
- ✅ HTTP-only cookie sessions
- ✅ Password hashing with bcrypt
- ✅ Protected API routes
- ✅ Admin login page at `/admin/login`

### 2. **Admin Dashboard** (`/admin/dashboard`)
- ✅ Overview statistics
- ✅ Quick action cards
- ✅ Responsive sidebar navigation
- ✅ Modern UI with smooth animations

### 3. **Cohorts Management** (`/admin/dashboard/cohorts`)
- ✅ Create, edit, and delete cohorts
- ✅ Set status: "ongoing" or "upcoming"
- ✅ Cloudinary image upload
- ✅ Full CRUD operations
- ✅ Frontend automatically fetches from database

### 4. **Events Management** (`/admin/dashboard/events`)
- ✅ Create meetups, workshops, and online events
- ✅ Add event details: category, date, location, type
- ✅ Upload event banners
- ✅ Optional: registration links, embed URLs, payment links
- ✅ Rich text descriptions
- ✅ Frontend automatically displays from database

### 5. **Media Management** (`/admin/dashboard/media`)
- ✅ Add YouTube videos
- ✅ Auto-extract video ID from URLs
- ✅ Live preview before publishing
- ✅ Video title and description management
- ✅ Frontend `/media` page fetches from database

### 6. **Moments Gallery** (`/admin/dashboard/moments`)
- ✅ Upload event/gallery photos
- ✅ Set display order
- ✅ Cloudinary integration
- ✅ Frontend displays dynamically

## 🚀 Quick Start

### Step 1: Admin Login Credentials

An admin user has been created:

```
Email: admin@skillseva.com
Password: admin123
```

**⚠️ IMPORTANT:** Change this password immediately after first login!

### Step 2: Access Admin Panel

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/admin/login`

3. Login with the credentials above

4. You'll be redirected to the dashboard

### Step 3: Start Managing Content

From the dashboard, you can:
- Click on any stat card to jump to that section
- Use the sidebar to navigate between sections
- Click "+ Add" buttons to create new content

## 📁 Project Structure

```
app/
├── admin/
│   ├── login/
│   │   └── page.tsx           # Login page
│   └── dashboard/
│       ├── layout.tsx          # Dashboard layout with sidebar
│       ├── page.tsx            # Dashboard home
│       ├── cohorts/
│       │   └── page.tsx        # Cohorts management
│       ├── events/
│       │   └── page.tsx        # Events management
│       ├── media/
│       │   └── page.tsx        # Media management
│       └── moments/
│           └── page.tsx        # Moments management
├── api/
│   └── admin/
│       ├── login/              # Authentication endpoints
│       ├── logout/
│       ├── me/
│       ├── cohorts/            # Cohorts API
│       ├── events/             # Events API
│       ├── media/              # Media API
│       ├── moments/            # Moments API
│       └── upload/             # Cloudinary upload
├── cohorts/
│   └── page.tsx                # Public cohorts page (now database-driven)
├── events/
│   └── page.tsx                # Public events page (now database-driven)
└── media/
    └── page.tsx                # Public media page (now database-driven)

components/
├── EventsGrid.tsx              # Now fetches from database
└── MomentsGrid.tsx             # Now fetches from database

lib/
├── mongodb.ts                  # Database connection
├── auth.ts                     # JWT utilities
└── middleware.ts               # API authentication middleware

models/
├── Admin.ts                    # Admin user model
├── Cohort.ts                   # Cohort model
├── Event.ts                    # Event model
├── Media.ts                    # Media model
└── Moment.ts                   # Moment model

scripts/
└── seed-admin.ts               # Create admin user
```

## 🔐 Security Features

1. **No Public Registration**: Admin users can only be created via seed script
2. **JWT Authentication**: Secure token-based auth with 7-day expiry
3. **HTTP-Only Cookies**: Prevents XSS attacks
4. **Password Hashing**: Bcrypt with salt rounds
5. **Protected Routes**: Middleware checks authentication on all write operations
6. **Hidden Access**: `/admin/login` is not linked anywhere on the public site

## 🎨 Features

### Image Upload
- All images automatically uploaded to Cloudinary
- Secure upload preset configuration
- Preview before saving
- Permanent cloud storage

### Dynamic Frontend
- All public pages (`/cohorts`, `/events`, `/media`) now fetch from database
- Real-time updates when content is added/edited/deleted
- Loading states and empty states
- Error handling

### Responsive Design
- Mobile-friendly admin dashboard
- Collapsible sidebar
- Touch-optimized forms
- Responsive tables and grids

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Create a new admin user
npm run seed:admin
```

## 📝 Environment Variables

Your `.env` file is configured with:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://...

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Cloudinary
CLOUDINARY_CLOUD_NAME=somug
CLOUDINARY_API_KEY=688536322269477
CLOUDINARY_API_SECRET=C4xLqlO0OR87vyrH3oLxv9x9Wbg
CLOUDINARY_UPLOAD_PRESET=zpn6u7rm
```

## 📖 Usage Guide

### Adding a Cohort

1. Go to `/admin/dashboard/cohorts`
2. Click "+ Add Cohort"
3. Fill in the form:
   - Title (e.g., "UI/UX Design Cohort")
   - Description
   - Upload an image
   - Link (slug for the cohort detail page)
   - Alt text for the image
   - Status: "ongoing" or "upcoming"
4. Click "Create Cohort"
5. The cohort will immediately appear on `/cohorts` page

### Adding an Event

1. Go to `/admin/dashboard/events`
2. Click "+ Add Event"
3. Fill in:
   - Category (MEETUP, WORKSHOP, etc.)
   - Title
   - Date
   - Location
   - Type (Online/In-person)
   - Description (can be long-form)
   - Optional: Registration link, Embed URL, Payment link
   - Upload event banner
4. Click "Create Event"
5. Event appears on `/events` page

### Adding Media

1. Go to `/admin/dashboard/media`
2. Click "+ Add Video"
3. Enter:
   - Video title
   - YouTube URL or Video ID
   - Description
4. Preview the video
5. Click "Add Video"
6. Video appears on `/media` page

### Adding Moments

1. Go to `/admin/dashboard/moments`
2. Click "+ Add Photo"
3. Enter alt text and optional display order
4. Upload image
5. Click "Add Photo"
6. Photo appears in the moments gallery on `/events` page

## 🔄 Frontend Integration

The following pages now automatically fetch data from MongoDB:

- **`/cohorts`**: Displays cohorts from the database (filtered by status)
- **`/events`**: Shows all events from the database
- **`/media`**: Lists all videos from the database
- **`/events` (bottom section)**: Displays moments gallery

No hardcoded data remains!

## 🐛 Troubleshooting

### "Unauthorized" error when trying to create/edit content
- Make sure you're logged in
- Try logging out and back in
- Check if your JWT token is still valid (7-day expiry)

### Images not uploading
- Verify Cloudinary credentials in `.env`
- Check Cloudinary upload preset is configured
- Ensure upload preset allows unsigned uploads

### Database connection errors
- Verify `MONGODB_URI` in `.env`
- Check MongoDB Atlas network access
- Ensure database name is correct

### Content not appearing on frontend
- Hard refresh the page (Cmd+Shift+R)
- Check browser console for errors
- Verify API route is returning data

## 📚 API Documentation

All API endpoints are documented in `ADMIN_README.md`.

### Public Endpoints (No Auth Required)
- `GET /api/admin/cohorts` - Get all cohorts
- `GET /api/admin/events` - Get all events
- `GET /api/admin/media` - Get all media
- `GET /api/admin/moments` - Get all moments

### Protected Endpoints (Auth Required)
- `POST /api/admin/cohorts` - Create cohort
- `PUT /api/admin/cohorts/[id]` - Update cohort
- `DELETE /api/admin/cohorts/[id]` - Delete cohort
- (Same pattern for events, media, moments)

## 🎯 Next Steps

1. **Change Admin Password**: Login and create a new admin with a strong password
2. **Add Content**: Start populating your cohorts, events, and media
3. **Test Everything**: Verify all features work as expected
4. **Deploy**: When ready, deploy to production with environment variables

## ✨ Features Summary

✅ Complete admin authentication system
✅ Dashboard with statistics
✅ Full CRUD operations for all content types
✅ Cloudinary image hosting
✅ YouTube video integration
✅ Database-driven frontend pages
✅ Responsive mobile-friendly design
✅ Secure JWT authentication
✅ Protected API routes
✅ Loading and empty states
✅ Form validation
✅ Error handling

## 🎨 Admin Panel Preview

- **Login Page**: Clean, centered login form
- **Dashboard**: Stats cards + quick actions
- **Management Pages**: Tables/grids with edit/delete actions
- **Forms**: Modern, validated forms with image upload
- **Navigation**: Collapsible sidebar with icons

## 🚨 Important Notes

1. **No Direct Admin Registration**: For security, there's no public admin registration page
2. **Seed Script**: Use `npm run seed:admin` to create new admin users
3. **JWT Expiry**: Tokens expire after 7 days
4. **Cloudinary Storage**: Images are permanently stored (not deleted when DB entry is removed)
5. **MongoDB Models**: All content is properly typed with TypeScript

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Review the terminal for server errors
3. Verify environment variables are set correctly
4. Ensure MongoDB connection is active

---

**Congratulations! Your SkillSeva admin panel is ready to use! 🎉**

Access it at: `http://localhost:3000/admin/login`
