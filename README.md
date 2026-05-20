# 🥤 Supa Smoothies

A sleek and simple smoothie recipe directory built with **React** and **Supabase**.

## 🌟 Features
- **View Recipes**: Browse a delicious list of smoothie recipes.
- **Manage Content**: Add and update smoothie recipes via a Supabase backend.
- **Real-time Data**: Powered by Supabase for seamless data fetching and storage.

## 🛠️ Tech Stack
- **Frontend**: React.js
- **Backend/Database**: Supabase (PostgreSQL)
- **Routing**: React Router
- **Styling**: CSS3

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.
- A Supabase project with a `Smoothies` table.

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd supasmoothies
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

4. **Run the app:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure
- `src/pages`: Contains the Home, Create, and Update pages.
- `src/config`: Contains the Supabase client configuration.
- `public`: Contains the static HTML template.
