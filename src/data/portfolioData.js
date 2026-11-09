import shopstreamHomeImg from '../assets/shopstream-home.webp';
import shopstreamProductsImg from '../assets/shopstream-products.webp';
import shopstreamDetailsImg from '../assets/shopstream-details.webp';
import productInventoryImg from '../assets/product-inventory.webp';
import heroPortraitImg from '../assets/mohamed-nashaat-hero.webp';

import flowboardDashboardImg from '../assets/flowboard-dashboard.webp';
import flowboardKanbanImg from '../assets/flowboard-kanban.webp';
import flowboardTeamImg from '../assets/flowboard-team.webp';
import flowboardCalendarImg from '../assets/flowboard-calendar.webp';

export const personalInfo = {
  name: "MOHAMED NASHAAT",
  displayName: "Mohamed Nashaat",
  role: "Frontend Developer",
  intro:
    "I build responsive web apps with React and JavaScript. I'm a final-year computer science student at the Arab Open University, and I'm learning Node.js.",
  location: "Cairo, Egypt",
  email: "Mohamednashaat336@gmail.com",
  githubUrl: "https://github.com/mohamednashaat336-arch",
  linkedinUrl: "https://www.linkedin.com/in/mohamed-nashaat---/",
  cvPath: "/Mohamed-Nashaat-CV.pdf",
  portraitImage: heroPortraitImg,
};

export const aboutData = {
  paragraph1:
    "I'm a final-year computer science student at the Arab Open University, and I build frontend web apps with React and JavaScript.",
  paragraph2:
    "My main project so far is ShopStream, an e-commerce app with a storefront, a cart, and an admin dashboard. I'm now learning backend development with Node.js, so I can build full-stack apps.",
  points: [
    {
      icon: "code",
      title: "Reusable components",
      text: "I split each page into small React components, like the storefront, the cart, and the dashboard.",
    },
    {
      icon: "layout",
      title: "Works on every screen",
      text: "My layouts adapt to desktop, tablet, and mobile.",
    },
    {
      icon: "server",
      title: "Next: the backend",
      text: "I'm learning Node.js so I can build the server side of my apps too.",
    },
  ],
  facts: [
    { label: "Based in", value: "Cairo, Egypt" },
    { label: "Studying", value: "Computer Science, final year", sub: "Arab Open University" },
    { label: "Focus", value: "Frontend with React.js" },
    { label: "Learning", value: "Node.js (backend)" },
  ],
};

export const navLinks = [
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const shopstreamProject = {
  id: "shopstream",
  title: "ShopStream — E-Commerce",
  shortTitle: "ShopStream",
  category: "E-Commerce",
  status: "Completed",
  tagline: "Responsive storefront and admin dashboard",
  description:
    "A responsive e-commerce app built with React. Visitors can browse products, filter by category, and manage a shopping cart. An admin dashboard handles the inventory.",
  liveUrl: "https://shop-stream-ecommerce-tau.vercel.app/",
  githubUrl: "https://github.com/mohamednashaat336-arch/ShopStream-Ecommerce",
  mainImage: shopstreamHomeImg,
  techStack: [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Bootstrap 5",
    "Axios",
    "React Router",
    "Vite",
    "Git & GitHub",
    "Responsive Design",
  ],
  views: [
    {
      id: "storefront",
      badge: "Storefront",
      label: "Home & Featured",
      title: "Storefront & Featured Products",
      description:
        "The main store landing page, highlighting featured product collections, seasonal items, and quick links to explore the catalog.",
      image: shopstreamHomeImg,
      caption: "Storefront landing page with product showcases and collection links.",
    },
    {
      id: "catalog",
      badge: "Product Catalog",
      label: "Catalog & Filters",
      title: "Product Catalog & Category Filtering",
      description:
        "Catalog view with category filters, dynamic sorting, and search functionality to help users quickly find what they need.",
      image: shopstreamProductsImg,
      caption: "Product catalog with category filtering and sorting.",
    },
    {
      id: "cart",
      badge: "Shopping Cart",
      label: "Cart Overview",
      title: "Shopping Cart & Order Summary",
      description:
        "Interactive shopping cart with item quantity updates, real-time total calculations, and an order summary.",
      image: shopstreamDetailsImg,
      caption: "Shopping cart with real-time price updates and item controls.",
    },
    {
      id: "admin",
      badge: "Admin Dashboard",
      label: "Inventory Management",
      title: "Product Inventory Dashboard",
      description:
        "An internal management interface with a searchable inventory table, stock status indicators, and summary metrics.",
      image: productInventoryImg,
      caption: "Admin inventory dashboard with search and stock tracking.",
    },
  ],
  keyHighlights: [
    {
      title: "Modular Components",
      detail: "Built using clean, reusable React components across the storefront, cart, and dashboard.",
    },
    {
      title: "Filtering & Search",
      detail: "Category filtering and search tools that allow visitors to find products easily.",
    },
    {
      title: "Interactive Cart",
      detail: "Real-time state handling for item quantities, price totals, and product removal.",
    },
    {
      title: "Admin Dashboard",
      detail: "Searchable data table with product inventory status and key metrics.",
    },
  ],
};

export const flowboardProject = {
  id: "flowboard",
  title: "FlowBoard — Project Management",
  shortTitle: "FlowBoard",
  category: "Project Management",
  status: "Completed",
  tagline: "Project management and team collaboration dashboard",
  description:
    "A React-based project management and team collaboration dashboard designed to organize projects, manage tasks, track progress, and coordinate team workflows through an interactive workspace.",
  liveUrl: "https://flowboard-azure-zeta.vercel.app/",
  githubUrl: "https://github.com/mohamednashaat336-arch/FlowBoard",
  mainImage: flowboardDashboardImg,
  techStack: [
    "React",
    "Vite",
    "JavaScript",
    "React Router",
    "Context API",
    "Bootstrap 5",
    "CSS3",
    "Lucide React",
    "Recharts",
    "dnd-kit",
    "LocalStorage",
  ],
  views: [
    {
      id: "dashboard",
      badge: "Dashboard",
      label: "Overview Dashboard",
      title: "Interactive Project Dashboard",
      description:
        "Central command center with key metrics, analytics charts, progress tracking, and recent activity logs.",
      image: flowboardDashboardImg,
      caption: "Interactive analytics dashboard displaying real-time project metrics and progress.",
    },
    {
      id: "kanban",
      badge: "Kanban Board",
      label: "Kanban Board",
      title: "Kanban Board with Drag & Drop",
      description:
        "Visual workflow management board enabling smooth drag-and-drop task movements across status columns using dnd-kit.",
      image: flowboardKanbanImg,
      caption: "Drag-and-drop Kanban board with column transitions and priority sorting.",
    },
    {
      id: "team",
      badge: "Team Management",
      label: "Team Management",
      title: "Team Collaboration & Role Permissions",
      description:
        "Team directory workspace for managing members, assigning project-level roles, and coordinating task ownership.",
      image: flowboardTeamImg,
      caption: "Team collaboration workspace with role-based member assignments.",
    },
    {
      id: "calendar",
      badge: "Calendar",
      label: "Task Calendar",
      title: "Task Scheduling & Calendar",
      description:
        "Interactive calendar view for tracking sprint timelines, upcoming deliverables, and milestone scheduling.",
      image: flowboardCalendarImg,
      caption: "Calendar view for deadline scheduling and milestone tracking.",
    },
  ],
  keyHighlights: [
    {
      title: "Interactive Dashboard",
      detail: "Visual charts and progress metrics to track project status, completion rates, and team velocity.",
    },
    {
      title: "Kanban with Drag & Drop",
      detail: "Fluid drag-and-drop column transitions and task sorting built with dnd-kit.",
    },
    {
      title: "Task Scheduling & Calendar",
      detail: "Interactive calendar view for organizing task deadlines, milestones, and sprint scheduling.",
    },
    {
      title: "Team Roles & Permissions",
      detail: "Project-level role assignment, member management, and task ownership claiming.",
    },
    {
      title: "Authentication UI & LocalStorage",
      detail: "Client-side authentication interface with persistent state powered by Context API and LocalStorage.",
    },
    {
      title: "Theme & Responsive Design",
      detail: "Adaptive interface supporting Dark and Light themes across desktop, tablet, and mobile screens.",
    },
  ],
};

export const projects = [shopstreamProject, flowboardProject];

export const learningNow = ["Node.js (backend)"];

const skillCategories = [
  { name: "Core Frontend", description: "The languages and standards behind every page" },
  { name: "Libraries & Routing", description: "Packages for navigation, requests, and layout" },
  { name: "Tools & Workflow", description: "How I build, version, and ship" },
  { name: "More tools", description: "Other tools used in my projects" },
];

const techCategory = {
  "HTML5": "Core Frontend",
  "CSS3": "Core Frontend",
  "JavaScript": "Core Frontend",
  "JavaScript (ES6+)": "Core Frontend",
  "React": "Core Frontend",
  "React.js": "Core Frontend",
  "React Router": "Libraries & Routing",
  "Context API": "Libraries & Routing",
  "Axios": "Libraries & Routing",
  "Bootstrap 5": "Libraries & Routing",
  "Lucide React": "Libraries & Routing",
  "Recharts": "Libraries & Routing",
  "dnd-kit": "Libraries & Routing",
  "LocalStorage": "Libraries & Routing",
  "Vite": "Tools & Workflow",
  "Git & GitHub": "Tools & Workflow",
  "Responsive Design": "Tools & Workflow",
};

const techOrder = (tech) => {
  const i = Object.keys(techCategory).indexOf(tech);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

function buildSkills(projectList) {
  const usedIn = new Map();
  projectList.forEach((project) => {
    (project.techStack || []).forEach((tech) => {
      if (!usedIn.has(tech)) usedIn.set(tech, []);
      usedIn.get(tech).push(project.shortTitle || project.title);
    });
  });

  return skillCategories
    .map((category) => ({
      category: category.name,
      description: category.description,
      skills: [...usedIn.entries()]
        .filter(([tech]) => (techCategory[tech] || "More tools") === category.name)
        .sort(([a], [b]) => techOrder(a) - techOrder(b))
        .map(([tech, titles]) => ({ name: tech, usedIn: titles })),
    }))
    .filter((category) => category.skills.length > 0);
}

export const skills = buildSkills(projects);
