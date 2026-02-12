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
        <h3 class="fund-name">${fund.name}</h3>
        <span class="category-badge">${fund.category}</span>
      </div>
      <p class="fund-description">${fund.shortDescription}</p>
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
          <span class="snapshot-value">$${fund.aum}M</span>
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
      <td>${fund.name}</td>
      <td><span class="table-return ${returnClass}">${formatPercentage(sixMonthReturn)}</span></td>
      <td><span class="table-risk ${riskClass}">${fund.riskLevel}</span></td>
      <td>${fund.expenseRatio}%</td>
      <td>$${fund.aum}M</td>
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
  
  // Populate fund name and category
  document.getElementById('detailsFundName').textContent = fund.name;
  document.getElementById('detailsCategory').textContent = fund.category;
  
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
  const { bestMonth, worstMonth } = findBestWorstMonths(fund.monthlySummary);
  
  document.getElementById('detailsBestMonth').textContent = formatPercentage(bestMonth.monthlyReturn);
  document.getElementById('detailsWorstMonth').textContent = formatPercentage(worstMonth.monthlyReturn);
  
  // Display AUM
  document.getElementById('detailsAUM').textContent = `$${fund.aum}M`;
  
  // Populate volatility note and suitability
  document.getElementById('detailsVolatility').textContent = fund.volatilityNote;
  document.getElementById('detailsSuitability').textContent = fund.suitableFor;
  
  // Render monthly summary with returns
  renderMonthlySummary(fund.monthlySummary);
}

// ========================================
// Render Monthly Summary (Enhanced)
// ========================================

/**
 * Renders the monthly performance summary list with return percentages
 * @param {Array} monthlySummary - Array of month objects
 */
function renderMonthlySummary(monthlySummary) {
  const summaryContainer = document.getElementById('monthlySummaryList');
  
  // Clear existing content
  summaryContainer.innerHTML = '';
  
  // Create an element for each month
  monthlySummary.forEach(monthData => {
    const returnClass = monthData.monthlyReturn >= 0 ? 'positive' : 'negative';
    
    const monthItem = document.createElement('div');
    monthItem.className = 'month-item';
    
    monthItem.innerHTML = `
      <span class="month-name">${monthData.month}</span>
      <span class="month-return ${returnClass}">${formatPercentage(monthData.monthlyReturn)}</span>
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
 * @param {Array} monthlySummary - Array of month objects
 * @returns {Object} - {bestMonth, worstMonth}
 */
function findBestWorstMonths(monthlySummary) {
  let bestMonth = monthlySummary[0];
  let worstMonth = monthlySummary[0];
  
  monthlySummary.forEach(month => {
    if (month.monthlyReturn > bestMonth.monthlyReturn) {
      bestMonth = month;
    }
    if (month.monthlyReturn < worstMonth.monthlyReturn) {
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
