export interface ServiceData {
  // Basic info (existing properties)
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
  
  // New properties for detailed pages
  metadata: {
    title: string;
    description: string;
  };
  pageDescription: string; // Longer description for the page
  serviceIncludes: string[]; // List of specific services
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  ctaText: string; // Call to action text for the button
}

export const services: ServiceData[] = [
  {
    title: 'Tax Preparation',
    description:
      'Comprehensive tax return preparation for individuals and businesses with maximum deductions.',
    image: '/olga-delawrence-5616whx5NdQ-unsplash.jpg',
    icon: 'tax-preparation-icon.svg',
    link: '/services/tax-preparation',
    metadata: {
      title: "Tax Preparation Services | Prime Tax Solutions",
      description: "Professional tax preparation services for individuals and businesses."
    },
    pageDescription: "Our tax preparation services are designed to ensure you maximize your deductions while remaining fully compliant with all tax laws. We handle tax returns for individuals, small businesses, corporations, partnerships, and non-profit organizations.",
    serviceIncludes: [
      "Individual tax return preparation",
      "Business tax return preparation",
      "Estate and trust tax preparation",
      "Tax return review and second opinions",
      "Amended tax returns",
      "Back taxes and unfiled returns"
    ],
    benefits: [
      {
        title: "Maximized Deductions",
        description: "We identify all legitimate deductions to minimize your tax liability."
      },
      {
        title: "Stress Reduction",
        description: "Let our experts handle complex tax forms and calculations so you don't have to."
      },
      {
        title: "Audit Protection",
        description: "Professional preparation reduces audit risk and provides support if you are audited."
      },
      {
        title: "Time Savings",
        description: "Focus on what matters most while we handle the time-consuming tax preparation process."
      }
    ],
    process: [
      {
        title: "Information Gathering",
        description: "We collect all necessary financial documents and information."
      },
      {
        title: "Tax Analysis",
        description: "We analyze your financial situation to identify all possible deductions and credits."
      },
      {
        title: "Preparation & Review",
        description: "We prepare your returns with careful attention to detail and thorough review."
      },
      {
        title: "Filing & Documentation",
        description: "We file your returns electronically and provide you with complete documentation."
      }
    ],
    ctaText: "Schedule a Tax Preparation Consultation"
  },
  {
    title: 'Tax Planning',
    description:
      'Strategic planning to minimize tax liability and prepare for future financial decisions.',
    image: '/brett-jordan-cBY2CtqQ6YI-unsplash.jpg',
    icon: 'tax-planning-icon.svg',
    link: '/services/tax-planning',
    metadata: {
      title: "Tax Planning Services | Prime Tax Solutions",
      description: "Strategic tax planning to minimize your tax liability and prepare for future financial decisions."
    },
    pageDescription: "Tax planning shouldn't happen just during tax season. Our proactive approach helps you make financial decisions throughout the year with tax implications in mind, ultimately reducing your tax burden while ensuring compliance with all tax laws and regulations.",
    serviceIncludes: [
      "Year-round tax optimization strategies",
      "Business structure tax analysis",
      "Retirement tax planning",
      "Estate and inheritance tax planning",
      "Investment tax strategies",
      "Tax-efficient charitable giving",
      "Multi-year tax projection and modeling"
    ],
    benefits: [
      {
        title: "Reduced Tax Liability",
        description: "Through careful planning and legitimate tax strategies, we help minimize the amount you owe to federal, state, and local tax authorities."
      },
      {
        title: "Improved Cash Flow",
        description: "Proper tax planning ensures you're not overpaying throughout the year, freeing up cash for investments, business operations, or personal needs."
      },
      {
        title: "Long-term Wealth Building",
        description: "Making tax-efficient decisions now can significantly impact your wealth accumulation over time, particularly for retirement and estate planning."
      },
      {
        title: "Peace of Mind",
        description: "With strategic planning, you'll avoid last-minute surprises and the stress of unexpected tax bills during filing season."
      }
    ],
    process: [
      {
        title: "Comprehensive Assessment",
        description: "We review your financial situation, tax history, and future goals to identify opportunities."
      },
      {
        title: "Strategy Development",
        description: "We create a customized tax planning strategy aligned with your personal or business objectives."
      },
      {
        title: "Implementation",
        description: "We help you implement the strategies through clear guidance and actionable steps."
      },
      {
        title: "Ongoing Monitoring",
        description: "We continuously review your situation as tax laws and your circumstances change."
      }
    ],
    ctaText: "Schedule a Tax Planning Consultation"
  },
  {
    title: 'Bookkeeping',
    description:
      'Accurate financial record-keeping services to keep your business organized and compliant.',
    image: '/fin-0rHxkbcvQAE-unsplash.jpg',
    icon: 'bookkeeping-icon.svg',
    link: '/services/bookkeeping',
    metadata: {
      title: "Bookkeeping Services | Prime Tax Solutions",
      description: "Professional bookkeeping services to keep your finances organized, accurate, and up-to-date."
    },
    pageDescription: "Accurate bookkeeping is the foundation of sound financial management. Our bookkeeping services ensure your financial records are organized, accurate, and up-to-date, giving you the clarity you need to make informed business decisions and maintain tax compliance.",
    serviceIncludes: [
      "Monthly financial statement preparation",
      "General ledger maintenance",
      "Accounts payable management",
      "Accounts receivable tracking",
      "Bank and credit card reconciliation",
      "Payroll processing and reporting",
      "Sales tax collection and reporting",
      "Expense categorization and tracking",
      "Financial software setup and training",
      "Year-end financial preparation for tax filing"
    ],
    benefits: [
      {
        title: "Time Savings",
        description: "Free up your valuable time to focus on running and growing your business instead of managing financial paperwork."
      },
      {
        title: "Financial Clarity",
        description: "Gain clear insights into your business's financial health with accurate, up-to-date records and reports."
      },
      {
        title: "Tax Compliance",
        description: "Ensure your business meets all tax obligations on time and with accurate information, reducing audit risk."
      },
      {
        title: "Cost Control",
        description: "Identify unnecessary expenses and financial inefficiencies through detailed categorization and reporting."
      }
    ],
    process: [
      {
        title: "Initial Setup",
        description: "We establish or review your chart of accounts and accounting systems."
      },
      {
        title: "Regular Bookkeeping",
        description: "We record and categorize all financial transactions on an ongoing basis."
      },
      {
        title: "Monthly Reconciliation",
        description: "We reconcile accounts and prepare monthly financial statements."
      },
      {
        title: "Financial Reporting",
        description: "We deliver clear, actionable financial reports with insights for decision-making."
      }
    ],
    ctaText: "Get Started with Professional Bookkeeping"
  },
  {
    title: 'Financial Advisory',
    description:
      'Expert financial guidance to help you make informed decisions for your future.',
    image: '/jen-titus-gYaXHmxvwr0-unsplash.jpg',
    icon: 'financial-advisory-icon.svg',
    link: '/services/financial-advisory',
    metadata: {
      title: "Financial Advisory Services | Prime Tax Solutions",
      description: "Strategic financial planning and advisory services to help you achieve your financial goals."
    },
    pageDescription: "Our financial advisory services go beyond basic accounting to provide holistic financial guidance that integrates tax planning, investment considerations, retirement strategies, and business financial planning into a cohesive approach tailored to your unique goals.",
    serviceIncludes: [
      "Personal financial planning and goal setting",
      "Retirement planning and strategy",
      "Investment analysis and recommendations",
      "College funding strategies",
      "Estate planning coordination",
      "Cash flow management and budgeting",
      "Financial statement analysis for businesses",
      "Business financial projections and forecasting",
      "Risk management and insurance planning"
    ],
    benefits: [
      {
        title: "Tax-Integrated Planning",
        description: "Unlike many financial advisors, we incorporate tax implications into every financial decision, maximizing your after-tax returns."
      },
      {
        title: "Independent Advice",
        description: "We offer objective recommendations without bias toward specific financial products, focusing solely on what's best for your financial situation."
      },
      {
        title: "Comprehensive View",
        description: "We look at your complete financial picture, ensuring all aspects of your financial life work together harmoniously."
      },
      {
        title: "Proactive Planning",
        description: "We don't just react to financial events—we help you anticipate and prepare for future opportunities and challenges."
      }
    ],
    process: [
      {
        title: "Discovery & Goal Setting",
        description: "We explore your current financial situation, priorities, and long-term objectives."
      },
      {
        title: "Financial Analysis",
        description: "We analyze your assets, liabilities, cash flow, investments, and tax situation."
      },
      {
        title: "Strategy Development",
        description: "We create a customized financial plan that aligns with your goals and values."
      },
      {
        title: "Implementation & Monitoring",
        description: "We help you implement the plan and provide ongoing adjustments as needed."
      }
    ],
    ctaText: "Schedule a Financial Consultation"
  },
  {
    title: 'IRS Representation',
    description:
      'Professional representation in IRS matters including audits, appeals, and collections.',
    image: '/luis-caroca-h_YX8re2Uu4-unsplash.jpg',
    icon: 'irs-representation-icon.svg',
    link: '/services/irs-representation',
    metadata: {
      title: "IRS Representation Services | Prime Tax Solutions",
      description: "Professional representation during IRS audits, collections, and disputes to protect your interests."
    },
    pageDescription: "Facing an IRS audit or tax dispute can be intimidating and complex. As licensed tax professionals, we have the legal authority to represent you before the IRS, handling all communications and negotiations on your behalf to achieve the best possible resolution.",
    serviceIncludes: [
      "IRS audit representation and defense",
      "Tax collections assistance and payment plan negotiations",
      "Offer in Compromise (OIC) preparation and negotiation",
      "Penalty abatement requests",
      "IRS appeals and tax court representation",
      "Resolution of tax identity theft issues",
      "Innocent spouse relief claims",
      "Tax lien and levy assistance"
    ],
    benefits: [
      {
        title: "Expertise in Tax Law",
        description: "We understand complex tax regulations and IRS procedures that can significantly impact the outcome of your case."
      },
      {
        title: "Reduced Stress",
        description: "We handle all communications with the IRS, allowing you to focus on your business or personal life without the anxiety of direct IRS interactions."
      },
      {
        title: "Better Outcomes",
        description: "Professional representation often results in lower settlement amounts, reduced penalties, and more favorable payment arrangements."
      },
      {
        title: "Procedural Protection",
        description: "We ensure the IRS follows proper procedures and that your taxpayer rights are protected throughout the process."
      }
    ],
    process: [
      {
        title: "Case Evaluation",
        description: "We thoroughly review your tax situation, IRS notices, and all relevant documentation."
      },
      {
        title: "Strategy Development",
        description: "We create a tailored approach to address your specific tax issue effectively."
      },
      {
        title: "IRS Engagement",
        description: "We communicate and negotiate with the IRS on your behalf, presenting your case in the most favorable light."
      },
      {
        title: "Resolution & Compliance",
        description: "We finalize your agreement with the IRS and provide guidance to maintain compliance moving forward."
      }
    ],
    ctaText: "Get Professional IRS Representation"
  },
  {
    title: 'Business Formation',
    description:
      'Guidance on selecting and establishing the right business structure for your company.',
    image: '/imagine-buddy-FDaCU3etvAc-unsplash.jpg',
    icon: 'business-formation-icon.svg',
    link: '/services/business-formation',
    metadata: {
      title: "Business Formation Services | Prime Tax Solutions",
      description: "Expert guidance for establishing and structuring your new business for optimal tax advantages."
    },
    pageDescription: "The decisions you make when forming your business can have long-lasting tax and legal implications. Our business formation services help entrepreneurs choose the right entity structure and establish proper financial foundations that support your business goals while minimizing tax liability.",
    serviceIncludes: [
      "Entity selection guidance (LLC, S-Corp, C-Corp, Partnership, Sole Proprietorship)",
      "Tax ID (EIN) application assistance",
      "Business license and permit guidance",
      "State registration filings",
      "Initial tax compliance setup",
      "Accounting system establishment",
      "Payroll system setup",
      "Business tax planning from day one",
      "Financial projections for new businesses"
    ],
    benefits: [
      {
        title: "Tax Optimization",
        description: "Select the business structure that offers the most advantageous tax treatment for your situation."
      },
      {
        title: "Liability Protection",
        description: "Establish the right entity to protect your personal assets from business liabilities."
      },
      {
        title: "Future Growth Support",
        description: "Create a structure that can adapt and scale with your business as it grows and evolves."
      },
      {
        title: "Compliance Confidence",
        description: "Start your business with all legal and tax requirements properly addressed from day one."
      }
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "We discuss your business goals, plans for growth, financing needs, and risk factors."
      },
      {
        title: "Entity Selection",
        description: "We analyze the tax and liability implications of each entity type for your specific situation."
      },
      {
        title: "Formation Documentation",
        description: "We assist with preparing and filing the necessary formation documents with state and federal agencies."
      },
      {
        title: "Business Systems Setup",
        description: "We help establish accounting, tax, and financial reporting systems appropriate for your business."
      }
    ],
    ctaText: "Start Your Business Journey"
  },
];
