# Investment Fund Dashboard

A professional, feature-rich static web application for viewing, comparing, and analyzing investment funds. Built with vanilla HTML, CSS, and JavaScript—no frameworks, no dependencies, no build tools required.

## ✨ Features

### 📊 Comprehensive Fund Coverage
- **12 Investment Funds** across diverse categories:
  - **Core Funds**: Equity, Debt, Hybrid, Index
  - **Mutual Funds**: Large Cap, Mid Cap, Small Cap
  - **Specialized**: ELSS (Tax Saving), Sectoral (Technology), International Equity, Gold, Liquid
- **Dynamic Fund Cards**: Responsive grid displaying all funds with key metrics
- **Comparison Matrix**: Side-by-side table comparing all funds across metrics

### 📈 Advanced Analytics
- **Performance Charts**: Native Canvas-based line charts showing 6-12 month performance trends
- **Real-time Metrics**: Current returns, volatility, risk levels, and AUM calculations
- **Month-by-Month Breakdown**: Detailed monthly performance narratives and returns
- **Risk Assessment**: Dynamic risk badges (Low, Medium, Medium-High, High) with color coding

### 🌙 Dark Mode
- **Toggleable Theme**: Click the moon icon (🌙) in the header to switch themes
- **Persistent Preference**: Theme choice saved to localStorage and restored on reload
- **Full Coverage**: Dark mode adapts colors across all UI elements including charts
- **Theme-Aware Charts**: Canvas charts automatically adjust colors for optimal visibility

### 📱 Responsive Design
- **Mobile First**: Optimized for phones, tablets, and desktops
- **Adaptive Layouts**: Grid and table layouts adjust to screen size
- **Touch-Friendly**: Larger tap targets and responsive spacing on mobile
- **Performance Optimized**: Fast load times with zero external dependencies

### 🎯 Interactive UI
- **Fund Selection**: Click any fund card or table row to view detailed information
- **Auto-Scrolling**: Details section automatically scrolls into view on mobile
- **Real-Time Updates**: Charts and details update instantly when switching funds
- **Smooth Animations**: Polished transitions and slide-in effects

## Fund Types

### Tier 1: Traditional Categories (4 funds)
| Fund | Type | Risk | Focus |
|------|------|------|-------|
| Equity Fund | Large Cap Equities | High | Long-term capital appreciation |
| Debt Fund | Government & Corporate Bonds | Low | Stable income and capital preservation |
| Hybrid Fund | 60% Equity / 40% Debt | Medium | Balanced growth with downside protection |
| Index Fund | S&P 500 Tracking | Medium-High | Passive market exposure with low costs |

### Tier 2: Specialized Categories (8 funds)
| Fund | Type | Risk | Key Benefit |
|------|------|------|------------|
| Mutual Fund - Large Cap | Large Cap Stocks | Medium-High | Active management + stability |
| Mutual Fund - Mid Cap | Mid Cap Growth | High | Higher growth potential, emerging leaders |
| Mutual Fund - Small Cap | Small/Micro Cap | High | Exceptional growth potential |
| ELSS Tax Saving Fund | Equity with Tax Benefits | Medium-High | Section 80C deduction + wealth creation |
| Sectoral Fund - Technology | Pure Tech Exposure | High | Sector concentration, AI/Cloud trends |
| International Equity Fund | Global Markets | Medium-High | Currency diversification + global exposure |
| Gold Fund | Precious Metals | Low | Inflation hedge, portfolio insurance |
| Liquid Fund | Money Market Instruments | Low | Ultra-short-term parking, high liquidity |

## Quick Start

### Option 1: Using `serve` (Recommended)
```bash
npx serve
```

### Option 2: Using `http-server`
```bash
npx http-server -p 8080
```

Open your browser to the displayed URL:
- Usually `http://localhost:3000` (for serve)
- Or `http://localhost:8080` (for http-server)

## How to Use

1. **Browse Funds**: View all 12 funds in the responsive grid or comparison table
2. **Compare Metrics**: Check expense ratios, AUM, risk levels, and investment horizons
3. **View Details**: Click any fund card to see:
   - Investment objectives and strategies
   - Performance trends (6-month visual chart)
   - Monthly breakdown with returns
   - Risk assessment and volatility information
   - Investor suitability profile
4. **Toggle Theme**: Click the 🌙 icon in the header to switch to dark mode
5. **Switch Funds**: Click different funds to instantly update the performance chart

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Project Structure

```
investment-dashboard/
├── index.html      # HTML5 semantic markup with dynamically rendered content
├── styles.css      # Complete styling with CSS variables for light/dark themes
├── script.js       # Dynamic rendering, Canvas charting, dark mode logic
├── data.js         # Centralized fund database (12 funds with 7-month history)
└── README.md       # Project documentation
```

## Technical Architecture

### Data Model (`data.js`)
- **Single Source of Truth**: All 12 funds defined in one data structure
- **Complete Fund Profile**: Each fund includes 20+ properties:
  - Basic Info: `id`, `fundName`, `fundType`, `description`
  - Risk Profile: `riskLevel`, `volatilityText`, `investorSuitability`
  - Financial Metrics: `expenseRatio`, `AUM`, `investmentHorizon`
  - Performance Data: `startingValue`, `currentValue`, `monthlyPerformance` (7 entries)
  - Analysis: `investmentObjective`, `bestMonth`, `weakestMonth`

### Dynamic Rendering (`script.js`)
- **Zero Hardcoding**: All UI elements generated from data
- **Fund Cards**: Auto-created responsive grid from `fundsData`
- **Comparison Table**: Dynamically populated with all fund metrics
- **Canvas Charts**: Real-time performance visualizations:
  - Responsive sizing (adapts to container width)
  - Dynamic axis scaling from data ranges
  - Theme-aware colors (green/red based on performance)
  - Grid lines and labeled axes
  - Updates when switching funds or toggling theme

### Styling System (`styles.css`)
- **CSS Variables**: Complete theme system via custom properties
- **Light Mode**: Professional finance palette (default)
- **Dark Mode**: Full alternative theme with optimized contrast ratios
- **Responsive Breakpoints**:
  - Desktop: 1024px and up
  - Tablet: 768px - 1023px
  - Mobile: Below 768px
- **No Framework Dependencies**: Pure CSS Grid, Flexbox, and Media Queries

## Technologies Used

| Component | Implementation | Benefits |
|-----------|-----------------|----------|
| **Charting** | HTML5 Canvas 2D API | Native support, no dependencies, full control |
| **Theming** | CSS Custom Properties | Dynamic theme switching without JS hacks |
| **Persistence** | localStorage API | Theme preference saved client-side |
| **Layout** | CSS Grid & Flexbox | Modern, responsive, no Grid polyfills needed |
| **DOM Rendering** | Vanilla JavaScript | Direct control, instant updates, minimal overhead |
| **Build Tools** | None | Serve directly, no transpilation or bundling |

## Performance Characteristics

- **Bundle Size**: ~30KB total (HTML + CSS + JS unminified)
- **Load Time**: < 1 second on modern connections
- **Interactivity**: Instant fund switching and chart updates
- **Dark Mode Toggle**: Immediate without page reload
- **Mobile Optimization**: Responsive grid adapts to all screen sizes
- **No External Requests**: Everything self-contained (no CDN dependencies)

## Browser Features Used

✅ HTML5 Semantic Elements  
✅ CSS Grid & CSS Variables  
✅ Canvas 2D Rendering  
✅ localStorage API  
✅ ES6+ JavaScript (Arrow functions, const/let, Template literals)  
✅ Flexbox Layout  
✅ CSS Media Queries  
✅ CSS Transforms & Transitions  

## Development Notes

- **No Build Step Required**: Edit files and reload browser
- **No Package Dependencies**: Works with just `npx serve` or `npx http-server`
- **Extensible Data**: Add new funds by adding objects to `fundsData` array
- **Theme System**: Easily add new themes by duplicating CSS variables in new selector
- **Chart Logic**: Canvas chart can be extended with different visualization types

## Future Enhancement Ideas

- Fund filtering by risk level or asset class
- Comparison mode to juxtapose 2-3 funds
- Search functionality for fund discovery
- Export fund details as PDF
- Additional chart types (bar, pie for allocation)
- Real-time data integration via API
- User watchlist/favorites with localStorage
- Monthly performance comparison view

## Note

All financial data in this dashboard is **mock/static** and for demonstration purposes only. This is not actual financial advice or real fund data. Always consult financial advisors before making investment decisions.


