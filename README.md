# Investment Fund Dashboard

A static web application for viewing and comparing financial investment funds. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Fund Overview**: Browse 4 different fund types (Equity, Debt, Hybrid, Index)
- **Detailed Performance**: View 6-month performance metrics including growth percentages
- **Monthly Summaries**: Read month-by-month performance narratives
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive UI**: Click any fund card to view detailed information

## Quick Start

### Option 1: Using `serve` (Recommended)
```bash
npx serve
```

### Option 2: Using `http-server`
```bash
npx http-server -p 8080
```

After running either command, open your browser to the URL displayed in the terminal:
- Usually `http://localhost:3000` (for serve)
- Or `http://localhost:8080` (for http-server)

## Project Structure

```
investment-dashboard/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Application logic and interactivity
├── data.js         # Mock fund data
└── README.md       # This file
```

## How It Works

1. **Load Data**: Mock fund data is loaded from `data.js`
2. **Render Cards**: JavaScript dynamically creates fund cards on page load
3. **View Details**: Click any fund card to see detailed performance metrics
4. **Monthly Summary**: Scroll down to see month-by-month performance descriptions

## Fund Types

- **Equity Fund**: High-growth stock investments
- **Debt Fund**: Stable income through bonds
- **Hybrid Fund**: Balanced mix of stocks and bonds
- **Index Fund**: Low-cost market index tracking

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- No frameworks or build tools required

## Note

All financial data is mock/static and for demonstration purposes only.
