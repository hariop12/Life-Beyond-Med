# Life Beyond Medicine - Holistic Wellness Platform

A modern, full-featured React/Next.js application for holistic healing and wellness services with MongoDB integration.

## Features

- **Responsive Design** - Works perfectly on all devices
- **Service Pages** - Detailed information about holistic healing services
- **Contact/Booking Form** - Integrated with MongoDB for data persistence
- **About Page** - Information about practitioners and philosophy
- **MongoDB Integration** - All bookings saved to cloud database

## Tech Stack

- **React 19.2** - Modern React with latest features
- **Next.js 16** - App Router with server components
- **MongoDB** - Cloud database for storing bookings
- **TypeScript** - Type-safe code
- **CSS** - Custom styling preserved from original design

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file:
```env
MONGODB_URI=your_mongodb_connection_string
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions to Vercel.

### Quick Deploy to Vercel

1. Click "Publish" button in v0
2. Add `MONGODB_URI` environment variable in Vercel
3. Redeploy

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact/booking page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── api/
│       └── bookings/route.ts # Booking API endpoint
├── components/
│   ├── navigation.tsx        # Navigation component
│   └── footer.tsx            # Footer component
├── lib/
│   └── mongodb.ts            # MongoDB connection
└── public/                   # Static assets
```

## API Endpoints

### POST /api/bookings
Submit a new consultation booking.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "service": "naturopath",
  "date": "2024-01-15",
  "time": "10:00",
  "consultationType": "in-person",
  "message": "Health concerns...",
  "firstVisit": true,
  "terms": true
}
```

### GET /api/bookings
Retrieve all bookings (admin use).

## MongoDB Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create database user
4. Whitelist IP (0.0.0.0/0 for all IPs)
5. Get connection string
6. Add to environment variables

## Environment Variables

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
```

## Original Design Preserved

This React conversion maintains 100% of the original HTML/CSS design:
- All original CSS files converted to globals.css
- Same UI components and layout
- Same color scheme and typography
- Same functionality and interactions

## Support

For deployment issues or questions, contact support at info@lifebeyondmedicine.com

## License

MIT
