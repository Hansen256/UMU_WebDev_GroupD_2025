# Web Space Uganda

A modern, minimalist website for a fictional Ugandan web development agency. This project showcases a complete multi-page website built with HTML, CSS, and JavaScript.

## Project Overview

**Web Space Uganda** is a team of six developers that creates and maintains websites and other web services, targeting small and medium-sized businesses and individuals in Uganda.

## Project Structure

```txt
group_D_final_paper/
│
├── index.html              # Home page with hero, stats, and services overview
├── about.html              # Team information, mission, values, and testimonials
├── services.html           # Detailed service descriptions with expandable content
├── packages.html           # Pricing packages, comparison table, and add-ons
├── gallery.html            # Portfolio with filterable projects and lightbox
├── contact.html            # Contact form with validation
│
├── css/
│   ├── global.css         # Shared styles (navigation, footer, buttons, utilities)
│   ├── pages.css          # All page-specific styles consolidated
│   └── responsive.css     # Responsive styles for mobile and tablet
│
├── js/
│   ├── global.js          # Shared functionality (navigation, animations, scroll)
│   ├── services.js        # Services page expand/collapse functionality
│   ├── form-validation.js # Contact form validation and submission
│   └── gallery.js         # Gallery filtering and lightbox modal
│
├── images/
│   ├── hero/              # Hero section images
│   ├── gallery/           # Project portfolio images
│   ├── team/              # Team member photos
│   └── icons/             # Icons and graphics
│
└── assets/
    └── favicon.ico        # Website favicon
```

## Design Features

### Color Scheme

- **Primary Color:** Deep Blue (#1a365d) - Trust and professionalism
- **Accent Color:** Vibrant Yellow (#f6c944) - Energy and optimism
- **Neutral Colors:** White (#ffffff), Light Gray (#f7fafc)
- **Text Colors:** Dark Gray (#2d3748), Light Gray (#718096)

### Key Features

- Modern & minimalist design
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Intersection Observer for fade-in effects
- Mobile hamburger menu
- Form validation with real-time feedback
- Filterable gallery with lightbox modal
- Fast loading and optimized performance

## Pages Overview

### 1. Home (index.html)

- Hero section with call-to-action
- Quick stats showcase
- Service overview cards
- Featured work preview
- Client benefits section

### 2. About (about.html)

- Company story and mission
- Team member profiles (6 developers)
- Core values
- 4-step process overview
- Client testimonials

### 3. Services (services.html)

- Web Design
- Web Development
- Website Maintenance
- SEO & Digital Marketing
- Consultation Services
- Expandable "Learn More" sections

### 4. Packages (packages.html)

- **Starter Package:** UGX 800,000
- **Business Package:** UGX 1,500,000 (Most Popular)
- **Enterprise Package:** UGX 3,000,000
- Detailed comparison table
- Add-ons section
- FAQ section

### 5. Gallery (gallery.html)

- 12 project showcases
- Filter by category (All, E-commerce, Corporate, Creative, Other)
- Lightbox modal with project details
- Navigation between projects
- Hover effects and smooth transitions

### 6. Contact (contact.html)

- Contact form with validation
- Real-time error checking
- Success message animation
- Contact information sidebar
- Social media links
- Business hours

## JavaScript Features

### main.js

- Mobile menu toggle
- Scroll animations (Intersection Observer)
- Smooth scrolling for anchor links
- Sticky navbar with shadow effect
- Expand/collapse buttons for services
- Back-to-top button
- Active page highlighting

### form-validation.js

- Real-time field validation
- Email format validation
- Phone number validation
- Character counter for message field
- Loading state on submission
- Success message display
- Prevention of multiple submissions

### gallery.js

- Category filtering
- Lightbox modal functionality
- Keyboard navigation (left, right, Esc)
- Next/Previous project navigation
- Dynamic project data display
- Smooth transitions
- Lazy loading for images

## Animations & Effects

- **Fade-in animations** on scroll
- **Hover effects** on cards and buttons
- **Smooth transitions** between states
- **Loading animations** for form submission
- **Modal animations** for lightbox
- **Filter transitions** in gallery

## Responsive Design

### Breakpoints

- **Desktop:** > 768px
- **Tablet:** 481px - 768px
- **Mobile:** <= 480px

### Mobile Features

- Hamburger menu navigation
- Touch-friendly buttons and links
- Optimized font sizes
- Stacked layouts for better readability
- Simplified navigation
