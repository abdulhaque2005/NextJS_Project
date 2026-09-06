# NextJS E-Commerce Product Browser

This is a modern, high-performance Next.js application designed for browsing, searching, and viewing detailed product information dynamically. It uses the App Router for smooth, modular navigation and fetches standard product catalog data from DummyJSON.

## Features

- Dynamic Routing: Separate specific routes for individual products, filtered category lists, and the main product dashboard using a catch-all strategy.
- Category Filtering: Interactive scrollable category options to view subsets of products quickly without heavy page loads. 
- Fast Searching: A lightweight client-side search input seamlessly filters products by their mapped titles.
- Skeleton Loading Screens: Includes well-designed server loading states through Next.js loading components to provide immediate visual feedback during API calls.
- Responsive Design: Professionally formatted, using clean white and green Tailwind CSS themes to deliver a robust and premium layout suitable for any screen size.

## Project Architecture

- /app/products/[[...slug]]: Handles the catch-all logic containing distinct server-rendered blocks for default catalog, categories, and single item views.
- /app/component/Inputfield.jsx: A responsive and clean client component providing localized URL query manipulation.
- /app/products/[[...slug]]/loading.tsx: Provides skeleton outlines preserving structure while server data is fulfilled.

## Installation and Execution

1. Make sure Node.js is installed.
2. Run "npm install" to configure all the dependencies.
3. Start the local server with "npm run dev".
4. Open your browser and navigate to the local host port shown in your terminal.