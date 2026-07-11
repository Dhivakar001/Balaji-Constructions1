# Balaji Constructions 🏗️
### *Quality • Strength • Trust • Transparency*

A premium, fully responsive, and highly interactive digital portal for a modern government-registered civil contractor. This application transforms typical construction black-box pricing into a transparent, client-first digital experience, built with React 19, TypeScript, and Tailwind CSS.

---

## 🚀 The Problem Balaji Constructions Solves

For the average homeowner or commercial developer, starting a civil construction project is often highly stressful. Clients face three major challenges:
1. **Lack of Price Transparency:** Black-box estimation rates that lead to surprise budget overruns during excavation or foundation work.
2. **Hidden Variables:** Soil conditions (such as sandy coastlines or sticky clay) radically affect structural footing requirements, but these are often omitted from initial quotes.
3. **Communication Friction:** It's difficult to bridge initial design desires with actionable engineering inputs.

**Our Solution:**
The **Balaji Constructions App** eliminates this guesswork by introducing an **Instant Civil Work Estimator** directly alongside their project portfolio. 
* It factors in **project sectors** (Residential, Commercial, Industrial).
* It dynamically incorporates **site soil conditions** (e.g., adding +15% for sandy/piling footings or +22% for clay/shoring needs) to protect clients from surprise foundation overheads.
* It supports dynamic material-finish tiers and optional engineering add-ons (like underground RCC sumps, rainwater harvesting, and roofing membranes).
* It introduces **Direct WhatsApp Sharing**, letting users export their exact configured quote variables directly to the engineering team's desk to initiate immediate site inspection.

---

## ✨ Key Features

### 1. Instant Civil Work Estimator
* **Dynamic Budgeting:** Interactive sliders for built-up area sizes ranging from 1,500 to 45,000 Sq. Ft.
* **Soil-Aware Calculations:** Adapts cost calculations dynamically depending on whether the site features Hard Red, Sandy, or Black Cotton soil.
* **Componentized Cost Breakdown:** Provides an itemized list of estimated foundation excavation, RCC frame casting, masonry, plastering, and flooring line-item cost realities.
* **Instant WhatsApp Integration:** Encodes the live parameters from the calculator into an elegant, custom WhatsApp message template, allowing users to send their draft specifications directly to the team.

### 2. Live Lead Register & Admin Desk
* **Inquiry Register:** Keeps a localized list of inquiries and quotes.
* **Direct Dispatch Actions:** Site engineers can click on any client inquiry to view the detailed structural selection, update statuses, or invoke an immediate WhatsApp callback.

### 3. Fully Responsive Design & UI
* **Adaptive Grid Layouts:** Custom styled with fluid container boxes, touch-friendly interactive targets (min 44px on mobile), and spacious typography.
* **Dynamic Header & Scroll Actions:** Sticky high-contrast navigation bar with quick responsive triggers and a smooth-scrolling "Scroll to Top" indicator for swift navigation on mobile screens.
* **Modern Typography**: "Space Grotesk" for display titles combined with "Inter" for UI and "JetBrains Mono" for financial estimate figures.

---

## 🛠️ Technology Stack

The application is engineered using high-performance modern web technologies:

| Technology | Purpose | Key Benefit |
| :--- | :--- | :--- |
| **React 19** | Core Frontend | Declarative UI, state-driven reactivity, and advanced component lifecycle hooks. |
| **TypeScript 5.8** | Static Type Safety | Eliminates runtime exceptions and guarantees safe prop-passing across calculators and lead counters. |
| **Vite 6** | Frontend Bundling | Ultra-fast Hot Module Replacement and production-optimized asset chunking. |
| **Tailwind CSS v4** | Rapid Responsive Styling | Utility-first responsive design (`sm:`, `md:`, `lg:`) to adapt layouts for phones, tablets, and wide screens. |
| **Motion** | Fluid Animations | Smooth transition layouts and micro-interactions for button presses, sliders, and page entries. |
| **Lucide React** | Iconography | High-quality, unified SVG indicators for active engineering metrics. |

---

## 📂 Project Structure

```bash
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx      # Comprehensive history, ethics, and registration metrics
│   │   ├── ContactSection.tsx    # Interactive query forms and quick WhatsApp hotlinks
│   │   ├── Footer.tsx            # Corporate footer with active WhatsApp Desk sharing
│   │   ├── Hero.tsx              # Display banner and primary lead triggers
│   │   ├── LeadCenter.tsx        # Internal administration dashboard for inquiry logging
│   │   ├── Navbar.tsx            # Sticky desktop and collapsible mobile navigation drawers
│   │   ├── ProjectsSection.tsx    # Filterable portfolio grid showcasing real masonry milestones
│   │   ├── QuoteCalculator.tsx   # Core civil pricing engine, soil selectors, and live invoice mocks
│   │   └── ServicesSection.tsx   # Detailed structural civil and design overview
│   ├── App.tsx                   # Main layout container and route state managers
│   ├── data.ts                   # Centralized contact numbers, email, services, and project details
│   ├── index.css                 # Global CSS stylesheet importing Tailwind CSS
│   ├── main.tsx                  # Application bootstrap entry point
│   └── types.ts                  # Shared interfaces for Inquiries, Soil types, and Project specs
├── package.json                  # Dependencies, build scripts, and CLI shortcuts
├── vite.config.ts                # Vite execution config and server port bindings
└── metadata.json                 # AI Studio sandbox configuration
```

---

## ⚡ Installation & Local Development

Follow these steps to run the Balaji Constructions website on your local machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### 1. Clone the repository and install dependencies
```bash
# Install package dependencies
npm install
```

### 2. Spin up the local development server
```bash
npm run dev
```
The application will launch locally at **`http://localhost:3000`** with host binding `0.0.0.0` for convenient multi-device testing over your local network.

### 3. Code Linting & Type Checks
Ensure there are no syntax anomalies or broken type contracts:
```bash
npm run lint
```

---

## 📦 Production Build & Deployment

To prepare a production-ready compiled build:

```bash
# Build static assets
npm run build
```

This compiles optimized, minimized chunk files into the `/dist` directory. The production package is fully optimized for static file hosting platforms such as Firebase Hosting, Netlify, Vercel, or custom Nginx servers.

---

*Built with precision and care for **Balaji Constructions**.*
