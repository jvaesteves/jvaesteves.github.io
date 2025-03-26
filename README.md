# Portfolio Website

My personal portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- React 18 with Hooks
- TypeScript for type safety
- Vite for fast development and building
- SCSS for styling
- ESLint and Prettier for code quality

## Project Structure

```
src/
├── assets/         # Static assets (images, styles, etc.)
├── components/     # Reusable React components
├── App.tsx        # Root component
└── main.tsx       # Application entry point
```

## Features

- Modern React with TypeScript
- Component-based architecture
- Responsive design with SCSS
- Fast development with Vite
- Code quality tools (ESLint, Prettier)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions.

### Setup Instructions

1. Create a GitHub repository named `jvaesteves.github.io` (or your preferred GitHub username)
2. Push your code to the repository
3. Go to your repository settings > Pages
4. Ensure the source is set to "GitHub Actions"
5. The site will be available at `https://jvaesteves.github.io/`

### Manual Deployment

You can also trigger a manual deployment by going to the Actions tab in your GitHub repository and selecting "Deploy to GitHub Pages" workflow.
