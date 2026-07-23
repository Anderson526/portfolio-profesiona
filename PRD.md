# Planning Guide

A sophisticated senior developer portfolio showcasing professional experience, contact information, and featured projects with an elegant minimalist design featuring 3D WebGL elements and refined micro-interactions.

**Experience Qualities**: 
1. **Professional** - Conveys technical excellence and attention to detail through polished 3D elements and smooth interactions
2. **Sophisticated** - Dark, elegant minimalism inspired by premium brands like Apple and BMW creates a refined atmosphere
3. **Interactive** - Thoughtful micro-interactions and WebGL effects engage visitors without overwhelming the content

**Complexity Level**: Light Application (multiple features with basic state)
- This is a content showcase portfolio with interactive elements, state management for navigation and project filtering, and persistent data for profile and projects

## Essential Features

### Hero Section with 3D Background
- **Functionality**: Displays developer name, title, and tagline with an animated 3D WebGL background
- **Purpose**: Creates immediate visual impact and establishes professional credibility
- **Trigger**: Page load
- **Progression**: Page loads → WebGL canvas initializes with particle/geometry animation → Hero content fades in with staggered animation → Subtle parallax on scroll
- **Success criteria**: 3D background renders smoothly (60fps), hero text is legible, animations complete within 1.5s

### Profile Section
- **Functionality**: Comprehensive developer information including bio, skills, experience timeline, and contact methods
- **Purpose**: Provides visitors with detailed background and ways to connect
- **Trigger**: Scroll or navigation click
- **Progression**: User scrolls/navigates → Section slides into view → Content elements animate in sequentially → Contact buttons have hover states with micro-animations
- **Success criteria**: All information is clearly organized, contact links work, timeline is chronological

### Project Gallery
- **Functionality**: Grid/masonry layout of project cards with filtering capabilities
- **Purpose**: Showcases portfolio work with quick access to details and live demos
- **Trigger**: Scroll to projects section or click navigation
- **Progression**: User enters section → Projects fade in with stagger → User hovers card → Card elevates with 3D transform → Click card → Opens project detail modal/page with repo link and live demo
- **Success criteria**: Projects load efficiently, filters work instantly, links navigate correctly, cards are visually distinct

### Project Detail View
- **Functionality**: Detailed project information including description, technologies, screenshots, repository link, and live demo link
- **Purpose**: Provides in-depth information about each project
- **Trigger**: Click on project card
- **Progression**: User clicks card → Modal/page opens with fade → Content displays with media → User can navigate to GitHub or live site → Close returns to gallery
- **Success criteria**: All project data displays correctly, external links open in new tabs, images load properly

### Admin Panel with Project Management
- **Functionality**: Secure admin interface for creating, editing, and deleting projects with search and filtering capabilities
- **Purpose**: Enables portfolio owner to manage content without code changes
- **Trigger**: Owner authentication via password or GitHub user verification
- **Progression**: Owner accesses admin → Authenticates → Views project list with search/filter → Can add new project → Edit existing → Delete unwanted → Changes persist immediately
- **Success criteria**: Authentication works, CRUD operations save correctly, search filters by title/description/technology, technology filter shows all unique techs, results counter updates, data persists between sessions

### Smooth Navigation
- **Functionality**: Fixed/sticky navigation with smooth scroll to sections
- **Purpose**: Enables easy navigation throughout the single-page portfolio
- **Trigger**: Click navigation item or scroll
- **Progression**: User clicks nav item → Page smoothly scrolls to section → Active nav item updates → Or user scrolls → Active nav updates based on visible section
- **Success criteria**: Scroll is smooth (no jumps), active state updates accurately, works on mobile

## Edge Case Handling
- **Missing Project Images**: Display elegant placeholder with project initial or icon
- **Long Project Descriptions**: Truncate with "read more" expansion in cards, full text in detail view
- **No Projects**: Show empty state with aesthetic illustration and message
- **WebGL Not Supported**: Fallback to gradient background with subtle CSS animation
- **Slow Network**: Show loading skeletons for project cards, lazy load images
- **External Links Failed**: Display error toast with retry option

## Design Direction
The design should evoke sophistication, technical mastery, and creative confidence through dark elegant minimalism with unexpected 3D depth and polished micro-interactions that surprise and delight without distracting from content.

## Color Selection
Dark elegant palette with high contrast and subtle accent highlights

- **Primary Color**: Deep Space Blue `oklch(0.25 0.05 250)` - Represents depth, professionalism, and technical expertise
- **Secondary Colors**: 
  - Midnight Black `oklch(0.15 0.01 250)` for backgrounds and cards
  - Slate Gray `oklch(0.45 0.02 250)` for secondary text and borders
- **Accent Color**: Electric Cyan `oklch(0.75 0.15 195)` - High-tech highlight for CTAs, links, and interactive elements
- **Foreground/Background Pairings**: 
  - Background (Midnight Black oklch(0.15 0.01 250)): Primary text (Bright White oklch(0.95 0 0)) - Ratio 12.5:1 ✓
  - Primary (Deep Space Blue oklch(0.25 0.05 250)): White text (oklch(0.95 0 0)) - Ratio 9.8:1 ✓
  - Accent (Electric Cyan oklch(0.75 0.15 195)): Dark text (oklch(0.15 0.01 250)) - Ratio 10.2:1 ✓
  - Card (Dark Slate oklch(0.18 0.02 250)): Primary text (oklch(0.95 0 0)) - Ratio 11.3:1 ✓

## Font Selection
Modern technical aesthetic with geometric precision balanced by approachable readability

- **Primary Font**: Space Grotesk - Geometric sans-serif that conveys technical precision with personality
- **Secondary Font**: JetBrains Mono - Monospace for code snippets and technical details
- **Typographic Hierarchy**: 
  - H1 (Hero Name): Space Grotesk Bold/72px/tight tracking (-0.02em)
  - H2 (Section Headers): Space Grotesk Bold/48px/tight tracking (-0.01em)
  - H3 (Card Titles): Space Grotesk Semibold/24px/normal tracking
  - Body (Main Content): Space Grotesk Regular/16px/relaxed line-height (1.7)
  - Caption (Metadata): Space Grotesk Regular/14px/normal tracking with reduced opacity
  - Code (Technical): JetBrains Mono Regular/14px/mono spacing

## Animations
Animations should feel premium and purposeful—subtle spring physics for interactions, smooth parallax for depth, and elegant page transitions that enhance rather than delay the experience.

Key animation moments:
- Hero entrance with staggered text and 3D background initialization
- Project cards with hover lift (3D transform) and subtle glow
- Section reveal with fade + slide on scroll intersection
- Contact button pulse on hover with ripple effect
- Smooth scroll with easing (ease-in-out-cubic)
- WebGL particles/geometry with subtle mouse parallax
- Modal enter/exit with backdrop blur and scale animation

## Component Selection
- **Components**: 
  - Card for project items with hover effects
  - Dialog for project details modal
  - Button for CTAs with primary/secondary variants
  - Badge for technology tags
  - Separator for section dividers
  - Tooltip for icon hints
  - Tabs for experience/education switching
  - Scroll Area for long content
- **Customizations**: 
  - 3D WebGL canvas component using Three.js for hero background
  - Custom project card with 3D hover transform using framer-motion
  - Animated timeline component for experience
  - Custom navigation with scroll spy and smooth scrolling
  - Parallax wrapper component for depth effects
- **States**: 
  - Buttons: default/hover (glow + slight scale)/active (scale down)/disabled (opacity 40%)
  - Cards: default/hover (elevate with shadow + rotate)/active (scale + glow)
  - Links: default/hover (underline slide-in + color shift)/visited (subtle opacity)
  - Inputs: default/focus (cyan border glow)/error (red border pulse)/success (green border)
- **Icon Selection**: 
  - @phosphor-icons/react throughout
  - GithubLogo for repository links
  - Globe for live demos
  - EnvelopeSimple for email
  - LinkedinLogo, TwitterLogo for social
  - Code, Briefcase, GraduationCap for sections
  - CaretRight for CTAs and navigation
- **Spacing**: 
  - Section padding: py-24 (96px) on desktop, py-16 (64px) on mobile
  - Card padding: p-6 (24px)
  - Grid gaps: gap-8 (32px) for project grid
  - Content max-width: max-w-7xl (1280px) centered
  - Element spacing: space-y-4 (16px) for related content
- **Mobile**: 
  - Navigation collapses to hamburger menu with slide-in drawer
  - Project grid: 3 columns desktop → 2 columns tablet → 1 column mobile
  - Hero text size reduces: 72px → 56px → 40px
  - Section padding reduces proportionally
  - 3D effects simplified on mobile for performance
  - Touch-friendly button sizes (min 44px height)
