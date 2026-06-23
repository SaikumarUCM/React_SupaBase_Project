# 🥤 Supa Smoothies

A sleek smoothie recipe directory built with **React**, **TypeScript**, and **Supabase**. Browse, create, update, and delete recipes with a simple CRUD interface backed by PostgreSQL.

## 🌟 Features

- **Browse recipes** — View all smoothies in a responsive grid
- **Sort & filter** — Order by creation date, title, or rating
- **Create recipes** — Add new smoothies with title, method, and rating
- **Update recipes** — Edit existing recipes via dynamic routes
- **Delete recipes** — Remove smoothies directly from the home page
- **Type-safe data** — Shared TypeScript interfaces for Supabase records

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 18, TypeScript |
| Backend / Database | Supabase (PostgreSQL) |
| Routing | React Router v6 |
| Styling | CSS3 |
| Tooling | Create React App, ESLint |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- A [Supabase](https://supabase.com/) project with a `Smoothies` table (see schema below)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd SuperSmoothies
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy the example env file and fill in your Supabase credentials:

   ```bash
   cp .env.example .env
   ```

   ```env
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode |
| `npm run build` | Create an optimized production build |
| `npm test` | Launch the test runner |
| `npm run eject` | Eject from Create React App (one-way) |

## 🗄️ Database Schema

Create a `Smoothies` table in Supabase with the following columns:

| Column | Type | Notes |
| --- | --- | --- |
| `id` | `uuid` | Primary key (auto-generated) |
| `title` | `text` | Recipe name |
| `method` | `text` | Preparation instructions |
| `rating` | `int4` | Numeric rating |
| `created_at` | `timestamptz` | Defaults to `now()` |

The TypeScript interface in `src/types/smoothie.ts` mirrors this schema.

## 📂 Project Structure

```
src/
├── App.tsx                 # Root layout, navigation, and routes
├── index.tsx               # React entry point
├── components/
│   └── SmoothieCart.tsx    # Recipe card with edit & delete actions
├── config/
│   └── SuperbaseClient.ts  # Supabase client initialization
├── pages/
│   ├── Home.tsx            # Recipe list with sorting
│   ├── Create.tsx          # Add a new smoothie
│   └── Update.tsx          # Edit an existing smoothie
└── types/
    └── smoothie.ts         # Shared Smoothie interface
```

## 🗺️ Routes

| Path | Page | Description |
| --- | --- | --- |
| `/` | Home | List and sort all smoothies |
| `/create` | Create | Add a new recipe |
| `/:id` | Update | Edit a recipe by ID |
