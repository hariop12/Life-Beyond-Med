# Deployment Guide - Life Beyond Medicine

## Deploy to Vercel with MongoDB

### Step 1: Prepare Your Project

Make sure all files are ready and MongoDB connection is set up.

### Step 2: Deploy to Vercel

**Option A: From v0 (Easiest)**
1. Click the **"Publish"** button in the top right
2. Sign in with your Vercel account
3. Choose a project name
4. Click **"Deploy"**

**Option B: Using Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

**Option C: From GitHub**
1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click Deploy

### Step 3: Add Environment Variable

After deployment, add your MongoDB connection string:

1. Go to your project on Vercel
2. Navigate to **Settings → Environment Variables**
3. Add new variable:
   - **Name:** `MONGODB_URI`
   - **Value:** `mongodb+srv://mnc4umnc_db_user:rHXfJcT4wLCCFJsf@lifebeyondmedicine.6jk7ma2.mongodb.net/`
4. Click **"Save"**
5. Go to **Deployments** tab
6. Click **"Redeploy"** on the latest deployment

### Step 4: Test Your Application

1. Visit your deployed URL
2. Go to the Contact page
3. Fill out and submit the booking form
4. Check your MongoDB database to confirm data is being saved

### Database Collections

Your app will automatically create these collections:
- **bookings** - Stores all consultation booking requests

### Local Development

1. Create `.env.local` file in your project root:
```env
MONGODB_URI=mongodb+srv://mnc4umnc_db_user:rHXfJcT4wLCCFJsf@lifebeyondmedicine.6jk7ma2.mongodb.net/
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Troubleshooting

**MongoDB Connection Issues:**
- Verify your IP is whitelisted in MongoDB Atlas (or allow all: 0.0.0.0/0)
- Check that your MongoDB URI is correct
- Ensure the database user has read/write permissions

**Deployment Issues:**
- Make sure `MONGODB_URI` is added in Vercel environment variables
- Redeploy after adding environment variables
- Check Vercel deployment logs for errors

### API Endpoints

- **POST /api/bookings** - Submit new booking
- **GET /api/bookings** - Get all bookings (for admin use)

### Your MongoDB Details

- **Cluster:** lifebeyondmedicine.6jk7ma2.mongodb.net
- **Database:** lifebeyondmedicine (automatically created)
- **Collection:** bookings (automatically created on first submission)

### Success!

Your React app is now deployed with MongoDB integration. All booking form submissions will be saved to your MongoDB database.
