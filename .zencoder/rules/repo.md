---
description: Repository Information Overview
alwaysApply: true
---

# My Portfolio Information

## Summary
This is a personal portfolio website built with React, bootstrapped using Create React App. It features multiple pages including Home, About, Projects, and Contact sections. The project uses modern React (v19) with React Router for navigation and Tailwind CSS for styling.

## Structure
- **public/**: Contains static assets and the HTML entry point
- **src/**: Main source code directory
  - **components/**: Reusable UI components (Navbar, Footer)
  - **pages/**: Page components (Home, About, Projects, Contact)
- **package.json**: Project configuration and dependencies

## Language & Runtime
**Language**: JavaScript/React
**Version**: React 19.1.0
**Build System**: Create React App
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react: ^19.1.0
- react-dom: ^19.1.0
- react-router-dom: ^7.7.0
- framer-motion: ^12.23.6
- lucide-react: ^0.525.0
- react-scripts: 5.0.1

**Development Dependencies**:
- tailwindcss: ^4.1.11
- postcss: ^8.5.6
- autoprefixer: ^10.4.21
- @testing-library/react: ^16.3.0
- @testing-library/jest-dom: ^6.6.3

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Testing
**Framework**: Jest with React Testing Library
**Test Location**: src/App.test.js and potentially other test files
**Configuration**: src/setupTests.js
**Run Command**:
```bash
npm test
```