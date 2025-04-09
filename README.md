# DJ Portfolio

This is a personal portfolio project built with **Next.js** and **Tailwind CSS**, showcasing a responsive design with light and dark mode support. The project includes a theme switcher, a navigation bar, and other customizable components. It also integrates with the **Spotify API** to fetch and display selected playlists, giving the audience an idea of the music you can play.

## Features

- **Dark Mode Support**: Toggle between light and dark themes using the theme switcher.
- **Responsive Design**: Optimized for various screen sizes.
- **Customizable Components**: Easily extendable and reusable components.
- **Spotify API Integration**: Fetches and displays your selected playlists to showcase your music preferences.
- **Next.js Framework**: Server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dj_portfolio.git
   cd dj_portfolio
   
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev   
   ```

4. Open your browser and navigate to http://localhost:3000.

## Deployment

This project is ready to be deployed on platforms like Vercel. Simply connect your repository and follow the deployment instructions.

## Folder structure
```
src/
├── app/
│   ├── components/       # Reusable components (e.g., Navbar, ThemeSwitch)
│   ├── layout.tsx        # Root layout for the app
│   ├── provider.tsx      # Context providers
├── public/               # Static assets (e.g., favicon, images)
├── styles/               # Global CSS files
```
