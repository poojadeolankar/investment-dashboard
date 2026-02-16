// Main JavaScript file for Investment Fund Dashboard
// Enhanced with professional finance-grade features

// ========================================
// Initialize Application on Page Load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

/**
 * Initialize the application by rendering fund cards and comparison table
 */
function initializeApp() {
  loadThemePreference();
  setupThemeToggle();
  renderFundCards();
  renderComparisonTable();
}

// ========================================
// Render Fund Cards with Snapshots
// ========================================

/**
 * Dynamically creates and renders fund cards from data
 * Now includes fund snapshot metrics
 */
function renderFundCards() {
  const fundsListContainer = document.getElementById('fundsList');
  
  // Clear any existing content
  fundsListContainer.innerHTML = '';
  
  // Create a card for each fund in the data
  fundsData.forEach(fund => {
    const cardElement = createFundCard(fund);
    fundsListContainer.appendChild(cardElement);
  });
}

/**
 * Creates a single fund card element with snapshot metrics
 * @param {Object} fund - Fund data object
 * @returns {HTMLElement} - Card element
 */
function createFundCard(fund) {
  // Calculate 6-month return percentage
  const sixMonthReturn = calculateGrowthPercentage(fund.startValue, fund.currentValue);
  const returnClass = sixMonthReturn >= 0 ? 'return-positive' : 'return-negative';
  
  // Determine risk class
  const riskClass = fund.riskLevel.toLowerCase().replace('-', '');
  
  // Create card container
  const card = document.createElement('div');
  card.className = 'fund-card';
  card.setAttribute('data-fund-id', fund.id);
  
  // Build card inner HTML with enhanced snapshot
  card.innerHTML = `
    <div class="fund-card-header">
      <div class="fund-card-title">
        <h3 class="fund-name">${fund.fundName}</h3>
        <span class="category-badge">${fund.fundType}</span>
      </div>
      <p class="fund-description">${fund.description}</p>
    </div>
    
    <div class="fund-snapshot">
      <div class="snapshot-title">Fund Snapshot</div>
      <div class="snapshot-grid">
        <div class="snapshot-item">
          <span class="snapshot-label">6-Month Return</span>
          <span class="snapshot-value ${returnClass}">${formatPercentage(sixMonthReturn)}</span>
        </div>
        <div class="snapshot-item">
          <span class="snapshot-label">Risk Level</span>
          <span class="snapshot-value risk-${riskClass}">${fund.riskLevel}</span>
        </div>
        <div class="snapshot-item">
          <span class="snapshot-label">Expense Ratio</span>
          <span class="snapshot-value">${fund.expenseRatio}%</span>
        </div>
        <div class="snapshot-item">
          <span class="snapshot-label">AUM</span>
          <span class="snapshot-value">$${fund.AUM}M</span>
        </div>
        <div class="snapshot-item" style="grid-column: 1 / -1;">
          <span class="snapshot-label">Investment Horizon</span>
          <span class="snapshot-value" style="font-size: 0.95rem;">${fund.investmentHorizon}</span>
        </div>
      </div>
    </div>
  `;
  
  // Add click event listener to show fund details
  card.addEventListener('click', () => {
    showFundDetails(fund.id);
    
    // Smooth scroll to details section on mobile/tablet
    const detailsSection = document.getElementById('fundDetails');
    setTimeout(() => {
      if (window.innerWidth <= 1024) {
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  });
  
  return card;
}

// ========================================
// Render Comparison Table
// ========================================

/**
 * Creates a comparison table showing all funds side-by-side
 */
function renderComparisonTable() {
  const tableBody = document.querySelector('#comparisonTable tbody');
  
  // Clear existing content
  tableBody.innerHTML = '';
  
  // Create a row for each fund
  fundsData.forEach(fund => {
    const sixMonthReturn = calculateGrowthPercentage(fund.startValue, fund.currentValue);
    const returnClass = sixMonthReturn >= 0 ? 'positive' : 'negative';
    const riskClass = fund.riskLevel.toLowerCase().replace('-', '');
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${fund.fundName}</td>
      <td><span class="table-return ${returnClass}">${formatPercentage(sixMonthReturn)}</span></td>
      <td><span class="table-risk ${riskClass}">${fund.riskLevel}</span></td>
      <td>${fund.expenseRatio}%</td>
      <td>$${fund.AUM}M</td>
      <td>${fund.investmentHorizon}</td>
    `;
    
    // Make row clickable
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      showFundDetails(fund.id);
      const detailsSection = document.getElementById('fundDetails');
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    tableBody.appendChild(row);
  });
}

// ========================================
// Display Fund Details (Enhanced)
// ========================================

/**
 * Shows detailed information for a selected fund
 * Enhanced with best/worst month analysis
 * @param {number} fundId - ID of the fund to display
 */
function showFundDetails(fundId) {
  // Find the fund data by ID
  const fund = fundsData.find(f => f.id === fundId);
  
  if (!fund) {
    console.error('Fund not found:', fundId);
    return;
  }
  
  // Get details section and remove hidden class
  const detailsSection = document.getElementById('fundDetails');
  detailsSection.classList.remove('hidden');
  
  // Store fund ID for theme toggle redraw
  const fundNameElement = document.getElementById('detailsFundName');
  fundNameElement.setAttribute('data-fund-id', fund.id);
  
  // Populate fund name and category
  document.getElementById('detailsFundName').textContent = fund.fundName;
  document.getElementById('detailsCategory').textContent = fund.fundType;
  
  // Set risk badge
  const riskBadge = document.getElementById('detailsRiskBadge');
  const riskClass = fund.riskLevel.toLowerCase().replace('-', '');
  riskBadge.textContent = `${fund.riskLevel} Risk`;
  riskBadge.className = `risk-badge ${riskClass}`;
  
  // Populate investment objective
  document.getElementById('detailsObjective').textContent = fund.investmentObjective;
  
  // Populate performance values
  document.getElementById('detailsStartValue').textContent = formatCurrency(fund.startValue);
  document.getElementById('detailsCurrentValue').textContent = formatCurrency(fund.currentValue);
  
  // Calculate and display growth percentage
  const growthPercentage = calculateGrowthPercentage(fund.startValue, fund.currentValue);
  const growthElement = document.getElementById('detailsGrowth');
  growthElement.textContent = formatPercentage(growthPercentage);
  
  // Add positive or negative class based on growth
  if (growthPercentage >= 0) {
    growthElement.classList.add('growth');
    growthElement.classList.remove('negative');
  } else {
    growthElement.classList.add('negative');
    growthElement.classList.remove('growth');
  }
  
  // Calculate and display best/worst months
  const { bestMonth, worstMonth } = findBestWorstMonths(fund.monthlyPerformance);
  
  document.getElementById('detailsBestMonth').textContent = formatPercentage(bestMonth.return);
  document.getElementById('detailsWorstMonth').textContent = formatPercentage(worstMonth.return);
  
  // Display AUM
  document.getElementById('detailsAUM').textContent = `$${fund.AUM}M`;
  
  // Populate volatility note and suitability
  document.getElementById('detailsVolatility').textContent = fund.volatilityText;
  document.getElementById('detailsSuitability').textContent = fund.investorSuitability;
  
  // Render monthly summary with returns
  renderMonthlySummary(fund.monthlyPerformance);
  
  // Render performance chart
  renderPerformanceChart(fund.monthlyPerformance);
}

// ========================================
// Render Monthly Summary (Enhanced)
// ========================================

/**
 * Renders the monthly performance summary list with return percentages
 * @param {Array} monthlyPerformance - Array of month objects
 */
function renderMonthlySummary(monthlyPerformance) {
  const summaryContainer = document.getElementById('monthlySummaryList');
  
  // Clear existing content
  summaryContainer.innerHTML = '';
  
  // Create an element for each month
  monthlyPerformance.forEach(monthData => {
    const returnClass = monthData.return >= 0 ? 'positive' : 'negative';
    
    const monthItem = document.createElement('div');
    monthItem.className = 'month-item';
    
    monthItem.innerHTML = `
      <span class="month-name">${monthData.month}</span>
      <span class="month-return ${returnClass}">${formatPercentage(monthData.return)}</span>
      <p class="month-summary">${monthData.summary}</p>
    `;
    
    summaryContainer.appendChild(monthItem);
  });
}

// ========================================
// Utility Functions
// ========================================

/**
 * Finds the best and worst performing months from monthly summary
 * @param {Array} monthlyPerformance - Array of month objects
 * @returns {Object} - {bestMonth, worstMonth}
 */
function findBestWorstMonths(monthlyPerformance) {
  let bestMonth = monthlyPerformance[0];
  let worstMonth = monthlyPerformance[0];
  
  monthlyPerformance.forEach(month => {
    if (month.return > bestMonth.return) {
      bestMonth = month;
    }
    if (month.return < worstMonth.return) {
      worstMonth = month;
    }
  });
  
  return { bestMonth, worstMonth };
}

/**
 * Calculates the percentage growth between two values
 * @param {number} startValue - Initial value
 * @param {number} currentValue - Current value
 * @returns {number} - Growth percentage
 */
function calculateGrowthPercentage(startValue, currentValue) {
  if (startValue === 0) return 0;
  return ((currentValue - startValue) / startValue) * 100;
}

/**
 * Formats a number as currency (USD)
 * @param {number} value - Numeric value
 * @returns {string} - Formatted currency string
 */
function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

/**
 * Formats a number as a percentage with sign
 * @param {number} value - Numeric value
 * @returns {string} - Formatted percentage string
 */
function formatPercentage(value) {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

// ========================================
// Performance Chart Rendering (Canvas)
// ========================================

let chartInstance = null;

/**
 * Renders a line chart for monthly performance using Canvas API
 * @param {Array} monthlyPerformance - Array of monthly return objects
 */
function renderPerformanceChart(monthlyPerformance) {
  const canvas = document.getElementById('performanceChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Set canvas size based on container
  const parent = canvas.parentElement;
  canvas.width = parent.offsetWidth - 40;
  canvas.height = 300;
  
  // Extract data
  const labels = monthlyPerformance.map(m => m.month.split(' ')[0]); // Just month abbreviation
  const dataPoints = monthlyPerformance.map(m => m.return);
  
  // Calculate min/max for Y-axis scaling
  const minValue = Math.min(...dataPoints, 0);
  const maxValue = Math.max(...dataPoints, 0);
  const padding = Math.abs(maxValue - minValue) * 0.15;
  const yMin = minValue - padding;
  const yMax = maxValue + padding;
  const yRange = yMax - yMin;
  
  // Chart dimensions
  const chartPadding = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartWidth = canvas.width - chartPadding.left - chartPadding.right;
  const chartHeight = canvas.height - chartPadding.top - chartPadding.bottom;
  
  // Get theme colors
  const isDarkMode = document.body.classList.contains('dark-mode');
  const colors = {
    gridLine: isDarkMode ? '#334155' : '#e2e8f0',
    axisText: isDarkMode ? '#cbd5e1' : '#475569',
    lineStroke: dataPoints[dataPoints.length - 1] >= 0 ? '#10b981' : '#dc2626',
    lineFill: dataPoints[dataPoints.length - 1] >= 0 ? '#d1fae50d' : '#fee2e20d',
    pointColor: '#3b82f6'
  };
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = isDarkMode ? '#1e293b' : '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw grid lines and Y-axis labels
  ctx.strokeStyle = colors.gridLine;
  ctx.fillStyle = colors.axisText;
  ctx.font = '12px Inter, sans-serif';
  ctx.textAlign = 'right';
  
  const gridLines = 5;
  for (let i = 0; i <= gridLines; i++) {
    const y = chartPadding.top + (chartHeight / gridLines) * i;
    const value = yMax - (yRange / gridLines) * i;
    
    // Grid line
    ctx.beginPath();
    ctx.moveTo(chartPadding.left, y);
    ctx.lineTo(canvas.width - chartPadding.right, y);
    ctx.stroke();
    
    // Y-axis label
    ctx.fillText(value.toFixed(1) + '%', chartPadding.left - 10, y + 4);
  }
  
  // Draw X-axis labels
  ctx.textAlign = 'center';
  ctx.fillStyle = colors.axisText;
  for (let i = 0; i < labels.length; i++) {
    const x = chartPadding.left + (chartWidth / (labels.length - 1)) * i;
    ctx.fillText(labels[i], x, canvas.height - chartPadding.bottom + 20);
  }
  
  // Draw axes
  ctx.strokeStyle = colors.axisText;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(chartPadding.left, chartPadding.top);
  ctx.lineTo(chartPadding.left, canvas.height - chartPadding.bottom);
  ctx.lineTo(canvas.width - chartPadding.right, canvas.height - chartPadding.bottom);
  ctx.stroke();
  
  // Draw line chart
  ctx.strokeStyle = colors.lineStroke;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  
  ctx.beginPath();
  dataPoints.forEach((value, index) => {
    const x = chartPadding.left + (chartWidth / (dataPoints.length - 1)) * index;
    const y = chartPadding.top + chartHeight - ((value - yMin) / yRange) * chartHeight;
    
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();
  
  // Draw data points
  ctx.fillStyle = colors.pointColor;
  dataPoints.forEach((value, index) => {
    const x = chartPadding.left + (chartWidth / (dataPoints.length - 1)) * index;
    const y = chartPadding.top + chartHeight - ((value - yMin) / yRange) * chartHeight;
    
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
  });
}

// ========================================
// Dark Mode Toggle
// ========================================

/**
 * Load theme preference from localStorage and apply
 */
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIcon('☀️');
  } else {
    document.body.classList.remove('dark-mode');
    updateThemeIcon('🌙');
  }
}

/**
 * Setup theme toggle button click handler
 */
function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark ? '☀️' : '🌙');
    
    // Redraw chart with new theme colors
    const detailsSection = document.getElementById('fundDetails');
    if (!detailsSection.classList.contains('hidden')) {
      const fundId = parseInt(document.getElementById('detailsFundName').getAttribute('data-fund-id') || '0');
      if (fundId > 0) {
        const fund = fundsData.find(f => f.id === fundId);
        if (fund) {
          renderPerformanceChart(fund.monthlyPerformance);
        }
      }
    }
  });
}

/**
 * Update the theme toggle button icon
 * @param {string} icon - Icon to display
 */
function updateThemeIcon(icon) {
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    const iconSpan = toggleBtn.querySelector('.theme-icon');
    if (iconSpan) {
      iconSpan.textContent = icon;
    }
  }
}
