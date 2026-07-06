export const profile = {
  name: 'Muhammad Tufail',
  role: 'Senior Magento / Adobe Commerce Developer',
  tagline:
    'Enterprise-level engineer specializing in Adobe Commerce, warehouse automation, and scalable ecosystem engineering.',
  availability: 'Open to new opportunities'
};

export const projectCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'magento', label: 'Magento / Adobe Commerce' },
  { key: 'warehouse', label: 'Warehouse & Logistics' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'wordpress', label: 'WordPress' }
];

export const projects = [
  {
    title: 'Magento Sales Order View Optimization',
    category: 'magento',
    featured: true,
    description:
      'Re-architected the Magento admin sales order view with AJAX-based tab loading and on-demand rendering of comments, labels, timelines, and related-order sections.',
    highlights: [
      'Cut initial order-view load time by deferring heavy sections until requested',
      'Button-wise rendering keeps admins productive on large order histories',
      'Built with native Magento UI components for upgrade safety'
    ],
    tech: ['Magento 2', 'AJAX', 'UI Components', 'Performance'],
    image: 'order-opt.png',
    icon: '⚙️'
  },
  {
    title: 'Deals Management System',
    category: 'magento',
    featured: true,
    description:
      'Advanced Magento deals engine supporting percentage and fixed discounts with live preview, storefront widgets, carousels, countdown timers, and restriction rules.',
    highlights: [
      'Live admin preview of deals before publishing',
      'Countdown timers, carousels, and widget placements out of the box',
      'Multi-product assignment with granular restriction rules'
    ],
    tech: ['Magento 2', 'Widgets', 'Promotions', 'JavaScript'],
    image: 'deals-sys.png',
    icon: '🔥'
  },
  {
    title: 'Warehouse ERP Automation System',
    category: 'warehouse',
    featured: true,
    description:
      'End-to-end warehouse management and ERP automation covering order processing, dispatch management, and real-time stock synchronization.',
    highlights: [
      'Automated order-to-dispatch workflows across warehouse stations',
      'Real-time stock synchronization between ERP and storefront',
      'Reduced manual dispatch handling through rule-based routing'
    ],
    tech: ['ERP', 'Warehouse Systems', 'Magento 2', 'Automation'],
    image: 'warehouse.png',
    icon: '🏭'
  },
  {
    title: 'Developer Toolkit Platform',
    category: 'fullstack',
    featured: true,
    description:
      'A DevToolkit platform with a code-analysis UI, integrated GraphQL playground (Altair-style), REST API manager (Postman-style), API registry, and advanced log viewer.',
    highlights: [
      'One workspace replacing several external developer tools',
      'GraphQL playground and REST client wired to environment registries',
      'Advanced log viewer with filtering and trace correlation'
    ],
    tech: ['GraphQL', 'REST APIs', 'DevTools', 'React'],
    image: 'covers/dev-toolkit.svg',
    icon: '🧠'
  },
  {
    title: 'AI Import Export & Image Generator',
    category: 'magento',
    featured: true,
    description:
      'Enterprise import/export module with prompt-based AI image generation, validation handling, rollback protection, and exception management workflows.',
    highlights: [
      'AI-generated product imagery from admin-defined prompts',
      'Rollback protection guards catalogs against bad imports',
      'Structured exception workflows for failed rows'
    ],
    tech: ['Magento 2', 'AI Integration', 'Import/Export', 'Automation'],
    image: 'covers/ai-import.svg',
    icon: '🤖'
  },
  {
    title: 'Magento SSO Integration System',
    category: 'magento',
    featured: true,
    description:
      'Secure single sign-on for Magento frontend and backend authentication using GraphQL and direct integrations with centralized user access management.',
    highlights: [
      'Unified authentication across storefront and admin',
      'GraphQL-driven token exchange with centralized access control',
      'Hardened session handling for enterprise security requirements'
    ],
    tech: ['Magento 2', 'GraphQL', 'Authentication', 'Security'],
    image: 'covers/sso.svg',
    icon: '🔐'
  },
  {
    title: 'Magento Dynamic Branding Module',
    category: 'magento',
    description:
      'Admin-driven module to dynamically manage login page branding, header banners, and storefront visuals directly from system configuration.',
    highlights: [
      'Zero-deploy branding changes from system configuration',
      'Scoped per store view for multi-brand setups'
    ],
    tech: ['Magento 2', 'Admin Config', 'Theming'],
    image: 'covers/branding.svg',
    icon: '🎨'
  },
  {
    title: 'Database Diff & Rollback Management',
    category: 'magento',
    description:
      'Database import system supporting FTP uploads, diff analysis, selective data imports, rollback features, and database comparison workflows.',
    highlights: [
      'Visual diff between candidate and live databases',
      'Selective imports with one-click rollback safety net'
    ],
    tech: ['Magento 2', 'MySQL', 'FTP', 'Tooling'],
    image: 'covers/db-diff.svg',
    icon: '🗄️'
  },
  {
    title: 'Shop Display Order & Draft System',
    category: 'warehouse',
    description:
      'Enterprise shop display order system with version control, location-based drafts, dispatch workflows, cron automation, and handheld SKU scanning.',
    highlights: [
      'Versioned drafts per retail location',
      'Handheld SKU scanning integrated with dispatch workflows'
    ],
    tech: ['Magento 2', 'Cron Jobs', 'Handheld Devices'],
    image: 'covers/shop-display.svg',
    icon: '🏬'
  },
  {
    title: '3D Stack Image Warehouse System',
    category: 'warehouse',
    description:
      'Advanced SKU image and dimensions management system integrated with UniFi cameras and handheld warehouse devices.',
    highlights: [
      'Automated SKU photography via UniFi camera integration',
      'Dimension capture feeding carton and pallet planning'
    ],
    tech: ['Magento 2', 'UniFi', 'REST APIs', 'Devices'],
    image: 'covers/stack-image.svg',
    icon: '📸'
  },
  {
    title: 'Return Cross-Docking Workflow',
    category: 'warehouse',
    description:
      'Warehouse automation workflow that redirects returned non-damaged products directly into next-day fulfillment orders.',
    highlights: [
      'Returns re-enter fulfillment without restocking delay',
      'Cuts handling time and shelf churn for resellable stock'
    ],
    tech: ['Magento 2', 'WMS', 'Shipping APIs'],
    image: 'covers/cross-dock.svg',
    icon: '🚛'
  },
  {
    title: 'Shipping & Logistics Integrations',
    category: 'warehouse',
    description:
      'Integrated DHL, Royal Mail, APC, Panther, and Pallex shipping systems with warehouse and workstation management solutions.',
    highlights: [
      'Five carrier APIs unified behind one dispatch workflow',
      'Label generation and tracking wired into warehouse stations'
    ],
    tech: ['DHL', 'Royal Mail', 'APC', 'Pallex', 'Panther'],
    image: 'covers/shipping.svg',
    icon: '📦'
  },
  {
    title: 'Magento Stock Management API System',
    category: 'warehouse',
    description:
      'Magento 2 stock management integrated with warehouse systems using REST APIs for automated inventory synchronization.',
    highlights: [
      'Automated two-way inventory sync with the warehouse',
      'Eliminated manual stock reconciliation'
    ],
    tech: ['Magento 2', 'REST APIs', 'Inventory'],
    image: 'covers/stock-api.svg',
    icon: '📊'
  },
  {
    title: 'Small Item Batch Management System',
    category: 'warehouse',
    description:
      'Tablet-based batch processing system for bulk order handling, scanning, and warehouse item management.',
    highlights: [
      'Batch picking optimized for small-item throughput',
      'Tablet UI purpose-built for warehouse floor use'
    ],
    tech: ['Tablet Systems', 'Warehouse', 'Automation'],
    image: 'covers/batch.svg',
    icon: '📱'
  },
  {
    title: 'Magento Daily Deals Extension',
    category: 'magento',
    description:
      'Custom Magento 2 extension featuring deal scheduling, widgets, CSV imports, restrictions, and advanced admin tools.',
    highlights: [
      'Scheduled deals with CSV bulk import',
      'Restriction engine for customer groups and store views'
    ],
    tech: ['Magento 2', 'PHP', 'MySQL', 'JavaScript'],
    image: 'covers/daily-deals.svg',
    icon: '⏱️'
  },
  {
    title: 'Enterprise MERN eCommerce Platform',
    category: 'fullstack',
    description:
      'Scalable MERN stack platform with enterprise dashboards, APIs, role-based access, and advanced backend architecture.',
    highlights: [
      'Role-based dashboards for multi-team operations',
      'API-first architecture ready for headless clients'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    image: 'covers/mern.svg',
    icon: '⚡'
  },
  {
    title: 'Tender & Quote Management Platform',
    category: 'fullstack',
    description:
      'Tender management platform supporting quote workflows, printing, multi-company portfolios, sales analytics, and revenue tracking.',
    highlights: [
      'Multi-company portfolios with isolated quote pipelines',
      'Sales analytics and revenue tracking dashboards'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Reporting'],
    image: 'covers/tender.svg',
    icon: '📑'
  },
  {
    title: 'Personal Expense Tracking System',
    category: 'fullstack',
    description:
      'Modern expense management application with analytics, category tracking, reports, and multi-user financial management.',
    highlights: [
      'Category analytics with periodic reports',
      'Multi-user budgets with per-role visibility'
    ],
    tech: ['Laravel', 'REST APIs', 'Dashboards'],
    image: 'covers/expense.svg',
    icon: '💰'
  },
  {
    title: 'AJAX PHP Ticket Management System',
    category: 'fullstack',
    description:
      'AJAX-driven PHP ticketing system with role management, ticket workflows, notifications, and multi-user handling.',
    highlights: [
      'Role-based ticket queues and escalation workflows',
      'Real-time notifications without page reloads'
    ],
    tech: ['PHP', 'AJAX', 'MySQL'],
    image: 'covers/tickets.svg',
    icon: '🎫'
  },
  {
    title: 'WooCommerce Subscription Plugin',
    category: 'wordpress',
    description:
      'WooCommerce subscription management plugin with advanced controls for pause, cancel, restrictions, and custom workflows.',
    highlights: [
      'Customer self-service pause and cancel flows',
      'Restriction rules and custom lifecycle hooks for merchants'
    ],
    tech: ['WordPress', 'WooCommerce', 'PHP'],
    image: 'covers/woo-subs.svg',
    icon: '🧩'
  }
];

export const skillGroups = [
  {
    title: 'eCommerce & CMS',
    icon: '🛒',
    skills: ['Magento 2 / Adobe Commerce', 'Magento 1.x', 'WordPress', 'WooCommerce', 'Multi-Store Setup', 'Checkout Customization']
  },
  {
    title: 'Backend Engineering',
    icon: '⚙️',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'MVC Architecture']
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: ['React.js', 'JavaScript', 'jQuery / AJAX', 'Tailwind CSS', 'HTML & CSS', 'UI Components']
  },
  {
    title: 'Data & Infrastructure',
    icon: '🗄️',
    skills: ['MySQL', 'MongoDB', 'SQL Server', 'Elasticsearch', 'Docker', 'Nginx', 'Varnish Cache', 'Linux', 'Git & GitHub']
  },
  {
    title: 'Enterprise & Operations',
    icon: '🏭',
    skills: ['Warehouse Management', 'Shipping APIs (DHL, Royal Mail, APC)', 'ERP Integrations', 'SSO & Authentication', 'Cron Automation', 'Google Analytics']
  },
  {
    title: 'Security & Quality',
    icon: '🔐',
    skills: ['Security Analysis', 'Web Vulnerability Assessment', 'Bash Scripting', 'Code Review', 'Performance Optimization']
  }
];

export const experience = [
  {
    period: 'Jan 2024 — Present',
    role: 'Magento Developer (SWE-II)',
    company: 'Tile Mountain',
    location: 'UK-based · Islamabad',
    points: [
      'Developing custom Magento modules, themes, and extensions to enhance functionality and store branding.',
      'Optimizing inventory, performance, and multi-store setups; leading Magento 2 upgrades.',
      'Integrating APIs, Elasticsearch, and customized checkout for improved UX and conversions.',
      'Building analytics, API, and GraphQL layers for seamless external system connections.'
    ]
  },
  {
    period: 'Jun 2022 — Jan 2024',
    role: 'Jr. Magento Developer',
    company: 'Tile Mountain',
    location: 'UK-based · Islamabad',
    points: [
      'Delivered module and theme development, multi-store setups, speed optimization, and issue resolution.',
      'Handled API integration, Google Analytics, Elasticsearch, and Magento 1.x → 2.x migration.'
    ]
  },
  {
    period: 'Jan 2022 — Present',
    role: 'Freelance Developer',
    company: 'Independent',
    location: 'Remote',
    points: [
      'WordPress customization: custom post types, plugins, and subscription account flows.',
      'PHP and Magento development: modules, extensions, theme setup, and checkout customization.'
    ]
  },
  {
    period: 'Jan 2022 — May 2022',
    role: 'PHP Developer Intern',
    company: 'Dynamics Inspire Pvt Ltd',
    location: 'Denmark-based · Islamabad',
    points: [
      'Frontend and backend development with PHP, MySQL, JavaScript, AJAX, and jQuery across WordPress and Typo3.'
    ]
  }
];

export const education = {
  degree: 'BCS (Hons) — Bachelor of Computer Science',
  school: 'Abdul Wali Khan University Mardan, Pakistan',
  period: '2017 — 2021',
  note: 'Thesis: Final Year Project Management System (FYPMS) using Core PHP'
};

export const certifications = [
  { title: 'Node.js & UI/UX', issuer: 'UNDP Pakistan' },
  { title: 'Cyber Security & Vulnerability Assessment', issuer: 'KP Cyber Response Center' },
  { title: 'Azure Developer Associate', issuer: 'Genesee Solution' },
  { title: 'Fundamentals of Digital Marketing', issuer: 'Google Digital Garage' }
];

export const stats = [
  { value: '5+', label: 'Years in Magento' },
  { value: '6+', label: 'Years in PHP / Laravel' },
  { value: '40+', label: 'Enterprise Projects' },
  { value: '15+', label: 'Custom Magento Modules' }
];

export const services = [
  {
    icon: '🛒',
    title: 'Magento 2 Development',
    desc: 'Custom Magento modules, Adobe Commerce systems, GraphQL APIs, and scalable enterprise solutions.'
  },
  {
    icon: '🚚',
    title: 'Warehouse Automation',
    desc: 'Cross-docking workflows, WMS integrations, warehouse dashboards, and shipping automation systems.'
  },
  {
    icon: '🔐',
    title: 'SSO & Security Systems',
    desc: 'Frontend/backend authentication, SSO integrations, API security, and enterprise access management.'
  },
  {
    icon: '💻',
    title: 'Full Stack Development',
    desc: 'Laravel, React.js, Node.js, REST APIs, admin dashboards, and scalable backend systems.'
  },
  {
    icon: '🌐',
    title: 'WordPress & Plugins',
    desc: 'WordPress customization, custom post types, and high-performance plugin development.'
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    desc: 'Speed optimization, Varnish caching, Elasticsearch tuning, and Magento upgrade management.'
  }
];

export const contactInfo = {
  email: 'tufailkaran434@gmail.com',
  phone: '+92 317 9942601',
  linkedin: 'https://www.linkedin.com/in/tufailkaran/',
  github: 'https://github.com/tufailkaran',
  resume: 'Muhammad Tufail Resume.pdf',
  location: 'Rawalpindi, Pakistan'
};
