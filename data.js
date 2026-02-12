// Mock data for investment funds
// Extended with professional finance-grade metrics for enhanced dashboard

const fundsData = [
  {
    id: 1,
    name: "Equity Fund",
    category: "Equity",
    shortDescription: "High-growth stock investments for long-term wealth building",
    fullDescription: "This equity fund focuses on large-cap and mid-cap stocks across diverse sectors including technology, healthcare, and consumer goods. Designed for investors seeking capital appreciation over a 5-10 year horizon with moderate to high risk tolerance.",
    
    // Performance metrics
    startValue: 10000,  // Value 6 months ago (August 2025)
    currentValue: 11250, // Current value (February 2026)
    
    // Fund snapshot metrics
    riskLevel: "High",
    expenseRatio: 0.75,  // Annual expense ratio as percentage
    aum: 2450,  // Assets Under Management in millions USD
    investmentHorizon: "Long Term (7+ years)",
    
    // Detailed analysis
    investmentObjective: "To achieve long-term capital appreciation by investing primarily in a diversified portfolio of equity securities of companies with strong growth potential. The fund targets a mix of large-cap and mid-cap stocks across technology, healthcare, financial services, and consumer discretionary sectors.",
    volatilityNote: "This fund exhibits higher volatility compared to balanced or debt funds. Expect price fluctuations of ±15-25% annually. Suitable for investors with strong risk appetite and long investment horizons.",
    suitableFor: "Aggressive investors aged 25-45 with stable income, long-term wealth creation goals, and ability to withstand market volatility. Not suitable for retirees or conservative investors seeking stable income.",
    
    monthlySummary: [
      { month: "Aug 2025", summary: "Strong start with tech sector gains driving 3.2% growth", monthlyReturn: 3.2 },
      { month: "Sep 2025", summary: "Consolidation phase with minor 0.5% dip due to market volatility", monthlyReturn: -0.5 },
      { month: "Oct 2025", summary: "Recovery momentum with healthcare stocks leading 2.8% increase", monthlyReturn: 2.8 },
      { month: "Nov 2025", summary: "Steady growth of 1.9% supported by positive earnings reports", monthlyReturn: 1.9 },
      { month: "Dec 2025", summary: "Year-end rally pushing portfolio up 4.1% on strong consumer spending", monthlyReturn: 4.1 },
      { month: "Jan 2026", summary: "Slight correction of 1.2% as investors took profits after strong Q4", monthlyReturn: -1.2 }
    ]
  },
  {
    id: 2,
    name: "Debt Fund",
    category: "Debt",
    shortDescription: "Stable income through government and corporate bonds",
    fullDescription: "A conservative debt fund investing primarily in AAA-rated government securities and high-quality corporate bonds. Ideal for risk-averse investors seeking steady returns with capital preservation. Portfolio duration is maintained between 3-5 years to balance yield and interest rate risk.",
    
    // Performance metrics
    startValue: 10000,
    currentValue: 10320,
    
    // Fund snapshot metrics
    riskLevel: "Low",
    expenseRatio: 0.45,
    aum: 5280,
    investmentHorizon: "Short to Medium Term (1-3 years)",
    
    // Detailed analysis
    investmentObjective: "To generate regular income and preserve capital by investing in high-quality debt instruments including government securities, AAA-rated corporate bonds, and money market instruments. The fund maintains a balanced duration profile to minimize interest rate risk while optimizing yield.",
    volatilityNote: "Low volatility fund with minimal principal risk. Expected annual fluctuations of ±2-4%. Primary risk is interest rate changes affecting bond prices. Suitable for conservative investors prioritizing capital safety.",
    suitableFor: "Conservative investors, retirees seeking steady income, individuals with short to medium-term financial goals (1-3 years), and those looking to park surplus funds with minimal risk exposure.",
    
    monthlySummary: [
      { month: "Aug 2025", summary: "Stable performance with 0.5% return from bond coupon payments", monthlyReturn: 0.5 },
      { month: "Sep 2025", summary: "Minor gains of 0.4% as interest rates remained steady", monthlyReturn: 0.4 },
      { month: "Oct 2025", summary: "Slight uptick of 0.6% from new government securities allocation", monthlyReturn: 0.6 },
      { month: "Nov 2025", summary: "Consistent 0.5% growth maintaining steady income trajectory", monthlyReturn: 0.5 },
      { month: "Dec 2025", summary: "Strong month with 0.7% gain from corporate bond additions", monthlyReturn: 0.7 },
      { month: "Jan 2026", summary: "Modest 0.5% increase reflecting stable bond market conditions", monthlyReturn: 0.5 }
    ]
  },
  {
    id: 3,
    name: "Hybrid Fund",
    category: "Hybrid",
    shortDescription: "Balanced mix of stocks and bonds for moderate growth",
    fullDescription: "This balanced hybrid fund maintains a 60:40 equity-to-debt ratio, providing growth potential while managing downside risk. The equity portion focuses on blue-chip stocks, while the debt component invests in investment-grade bonds. Suitable for investors seeking moderate returns with controlled volatility.",
    
    // Performance metrics
    startValue: 10000,
    currentValue: 10680,
    
    // Fund snapshot metrics
    riskLevel: "Medium",
    expenseRatio: 0.65,
    aum: 3850,
    investmentHorizon: "Medium Term (3-5 years)",
    
    // Detailed analysis
    investmentObjective: "To provide balanced growth and income by maintaining a strategic allocation between equity (60%) and debt (40%) instruments. The fund dynamically rebalances to maintain target allocation while capitalizing on market opportunities in both asset classes.",
    volatilityNote: "Moderate volatility with balanced risk profile. Expected annual fluctuations of ±8-12%. The debt component cushions equity market downturns, making this suitable for investors seeking growth with reduced volatility compared to pure equity funds.",
    suitableFor: "Moderate risk investors aged 30-55, first-time mutual fund investors, those seeking balanced exposure to equity and debt, and investors with medium-term financial goals like children's education or home downpayment.",
    
    monthlySummary: [
      { month: "Aug 2025", summary: "Balanced gains of 1.8% with equity portion outperforming bonds", monthlyReturn: 1.8 },
      { month: "Sep 2025", summary: "Minor fluctuation showing 0.2% growth as equity and debt balanced out", monthlyReturn: 0.2 },
      { month: "Oct 2025", summary: "Solid 1.5% increase driven by both asset classes performing well", monthlyReturn: 1.5 },
      { month: "Nov 2025", summary: "Steady uptrend of 1.2% reflecting diversification benefits", monthlyReturn: 1.2 },
      { month: "Dec 2025", summary: "Best month with 2.3% gain from equity rally and bond stability", monthlyReturn: 2.3 },
      { month: "Jan 2026", summary: "Slight pullback of 0.2% as equity portion corrected slightly", monthlyReturn: -0.2 }
    ]
  },
  {
    id: 4,
    name: "Index Fund",
    category: "Index",
    shortDescription: "Low-cost tracking of major market indices",
    fullDescription: "A passive index fund that mirrors the performance of the S&P 500 index with minimal tracking error. Offers broad market exposure across 500 leading U.S. companies with extremely low expense ratios. Perfect for long-term investors who believe in market efficiency and want to match benchmark returns.",
    
    // Performance metrics
    startValue: 10000,
    currentValue: 11080,
    
    // Fund snapshot metrics
    riskLevel: "Medium-High",
    expenseRatio: 0.15,  // Very low for passive index tracking
    aum: 8920,
    investmentHorizon: "Long Term (5+ years)",
    
    // Detailed analysis
    investmentObjective: "To replicate the performance of the S&P 500 index by investing in the same stocks in proportional weights. The fund employs passive management with minimal trading, resulting in low costs and tax efficiency. Ideal for investors seeking broad U.S. equity market exposure.",
    volatilityNote: "Moderate-to-high volatility reflecting overall U.S. stock market movements. Expected annual fluctuations of ±12-18%. No active management to reduce downside risk, but diversification across 500 companies mitigates individual stock risk.",
    suitableFor: "Cost-conscious long-term investors, those believing in passive investing philosophy, retirement savers (401k/IRA), and investors seeking diversified U.S. equity exposure without active management fees.",
    
    monthlySummary: [
      { month: "Aug 2025", summary: "Index rose 2.8% tracking broad market gains across sectors", monthlyReturn: 2.8 },
      { month: "Sep 2025", summary: "Flat performance at 0.1% mirroring market consolidation", monthlyReturn: 0.1 },
      { month: "Oct 2025", summary: "Strong rebound of 2.5% following positive economic indicators", monthlyReturn: 2.5 },
      { month: "Nov 2025", summary: "Continued momentum with 1.7% gain matching S&P 500 benchmark", monthlyReturn: 1.7 },
      { month: "Dec 2025", summary: "Robust 3.2% increase driven by year-end market optimism", monthlyReturn: 3.2 },
      { month: "Jan 2026", summary: "Minor correction of 0.8% aligning with overall market pullback", monthlyReturn: -0.8 }
    ]
  }
];

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fundsData;
}
