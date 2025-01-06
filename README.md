# Template Repository

This is a template repository for setting up JavaScript applications with **Webpack**. It provides basic configurations for both development and production environments,
## Features

- **Development Environment**:
  - Hot Module Replacement (HMR) with Webpack Dev Server
  - Source maps for easier debugging
  - Automatically opens the browser on server start
  - Supports `.js`, `.jsx`, `.css`, and `.html` files

- **Production Environment**:
  - Code minification using `TerserPlugin`
  - CSS extraction with `MiniCssExtractPlugin`
  - Cache busting for better browser caching with hashed filenames
  - Clean the output directory before each build

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (v7 or higher) or Yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mx-99/template
   cd template
   ```
   ## Install dependencies
   ```
   npm install
   # or if using Yarn:
   yarn install
   ```
   ## Available Scripts
   npm run dev
   npm run build
   npm run deploy
