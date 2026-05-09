# Aura Social

A modern social media platform built as a community-driven project. Aura Social enables users to share moments, connect with others, and build digital communities through an elegant, minimalist interface.

---

## Project Concept

### Vision

Aura Social was created to provide a lightweight, accessible social networking experience that prioritizes user connection over algorithmic manipulation. The platform emphasizes:

- **Authentic Sharing**: Users post thoughts, stories, and moments without algorithmic filtering
- **Direct Communication**: Real-time messaging fosters genuine relationships
- **Community Discovery**: Explore and connect with like-minded individuals
- **Privacy-First Design**: Local data storage ensures user control

### Core Philosophy

The project demonstrates that sophisticated social platforms can be built with fundamental web technologies while maintaining performance and user experience. It serves as both a functional application and an educational resource for full-stack development.

### Target Users

- Individuals seeking a distraction-free social experience
- Developers learning social platform architecture
- Communities wanting self-hosted social tools
- Users prioritizing data ownership and privacy

---

## Architecture Overview

### Frontend Layer

The client-side application uses vanilla JavaScript with a component-based mental model. All UI rendering occurs through DOM manipulation with CSS custom properties managing the dark luxury theme. State management relies on localStorage for persistence, with a polling mechanism simulating real-time updates.

Key frontend modules:
- Authentication interface (login/register screens)
- Feed renderer (stories, posts, suggestions)
- Messaging interface (conversation list, chat view)
- Profile management (stats, posts grid, edit forms)
- Notification center (activity tracking)
- Story viewer (modal with progress timing)

### Backend Layer (Development Phase)

The Node.js/Express backend provides REST API endpoints for:
- User authentication with JWT tokens
- Post CRUD operations
- Profile management with avatar uploads
- Messaging persistence
- Notification delivery

Database options include MongoDB (via Mongoose) and Supabase, with Passport.js handling OAuth integration.

### Data Flow

1. User actions trigger DOM updates immediately
2. localStorage synchronizes state across sessions
3. Backend API receives updates when connected
4. Polling mechanism refreshes data every 2 seconds
5. Conflict resolution prioritizes server state when online

---

## Feature Specifications

### Authentication System

- Username/password registration with validation
- Secure login with session persistence
- Auto-login on page reload
- Logout with complete state clearing

### Stories

- 24-hour ephemeral content
- Text-based stories with emoji avatars
- Progress bar navigation
- Reply functionality
- Seen-by tracking

### Posts

- Text content creation with emoji picker
- Like/unlike with counter updates
- Comment threading with nested display
- Share functionality (link copying)
- Time-ago formatting

### Messaging

- Direct conversations between users
- Real-time message polling
- Read receipt tracking
- Conversation list with previews
- Unread message indicators

### Notifications

- Like notifications on posts
- Comment notifications with text preview
- Follow notifications
- Read/unread status tracking
- Badge counter updates

### User Discovery

- Search by name or username
- Suggestion algorithm (non-followed users)
- Follow/unfollow actions
- Follower/following statistics

### Profiles

- Display name and bio editing
- Emoji avatar selection
- Post count statistics
- Follower/following counts
- Personal post grid

---

## Technology Stack

### Current Implementation

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Structure | HTML5 | Semantic document structure |
| Styling | CSS3 | Custom properties, flexbox, grid, animations |
| Logic | Vanilla JavaScript | DOM manipulation, state management |
| Storage | localStorage API | Client-side data persistence |
| Fonts | Google Fonts (DM Serif Display, DM Sans) | Typography |

### Backend Development

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Runtime | Node.js | Server execution environment |
| Framework | Express.js | HTTP request handling |
| Database | MongoDB / Supabase | Data persistence |
| ODM | Mongoose | MongoDB object modeling |
| Auth | JWT + Passport.js | Token-based authentication |
| Uploads | Multer | File handling middleware |
| Security | bcryptjs | Password hashing |

---

## Development Roadmap

### Phase One: Foundation (Completed)

Single-file application with complete social features using localStorage. All core functionality works offline.

### Phase Two: Backend Integration (In Progress)

REST API development with database persistence. JWT authentication replacing localStorage sessions. File upload system for avatars and media.

### Phase Three: Enhancement (Planned)

WebSocket implementation for true real-time messaging. React/Vite frontend migration. Mobile-responsive PWA features.

### Phase Four: Scale (Future)

Cloud deployment with CI/CD. Content moderation tools. Analytics dashboard. Monetization features for creators.

---

## Team Members and Contributions

### 1. alvin munga (Project Lead)

**Role**: Full-Stack Architect and Project Coordinator

**Contributions**:
- Established project repository structure and Git workflow
- Designed overall application architecture (frontend state management, backend API structure)
- Implemented JWT authentication system with bcrypt password hashing
- Created Express server configuration with CORS, session handling, and error middleware
- Integrated MongoDB connection with Mongoose schemas
- Set up Passport.js for Google OAuth authentication
- Developed environment variable configuration for development and production
- Coordinated team task assignments and code review processes
- Resolved merge conflicts and maintained code quality standards
- Deployed initial backend server on localhost with port management

**Technical Focus**: Node.js, Express.js, MongoDb, System Architecture

---

### 2. emmanuel wachira (Frontend Developer)

**Role**: User Interface Implementation and Interaction Design

**Contributions**:
- Built responsive sidebar navigation with active state management
- Implemented feed layout with stories row, post creation, and post cards
- Created comment sections with toggle visibility and input handling
- Developed messaging interface with conversation list and chat bubbles
- Built notification center with styled notification cards
- Implemented profile page with statistics display and post grid
- Created story modal with progress bar animation and auto-close timing
- Added floating action button for quick post creation
- Implemented toast notification system for user feedback
- Ensured all interactive elements have hover states and transitions

**Technical Focus**: HTML5, CSS3, JavaScript DOM API, Responsive Design, CSS Animations

---

### 3. peter (Backend Developer)

**Role**: API Development and Database Engineering

**Contributions**:
- Designed MongoDB schema for users, posts, messages, and notifications
- Created RESTful API endpoints for all CRUD operations
- Implemented route handlers for authentication (register, login, me)
- Built post routes with like/unlike and comment functionality
- Developed profile routes with update and avatar upload capabilities
- Created messaging routes with conversation history retrieval
- Implemented notification generation and marking-as-read endpoints
- Added input validation and sanitization middleware
- Optimized database queries with indexing for username and email fields
- Created API documentation with endpoint specifications

**Technical Focus**: Node.js, Express.js, MongoDB, Mongoose, REST API Design, Query Optimization

---

### 4. richard (Mobile and PWA Developer)

**Role**: Cross-Platform Adaptation and Progressive Web App Features

**Contributions**:
- Adapted desktop interface for mobile screen sizes (under 768px breakpoints)
- Implemented touch-friendly interaction patterns replacing hover states
- Created PWA manifest file with app icons and theme colors
- Added service worker for offline functionality and caching
- Optimized asset loading for mobile network conditions
- Implemented viewport meta tags and touch-action CSS properties
- Created mobile-optimized story viewer with swipe gestures
- Added home screen installation prompts for iOS and Android
- Tested responsive behavior across multiple device emulators
- Implemented reduced-motion preferences for accessibility

**Technical Focus**: Progressive Web Apps, Service Workers, Mobile CSS, Touch Events, Cross-Browser Testing

---

### 5. mosses (DevOps Engineer)

**Role**: Deployment Infrastructure and Continuous Integration

**Contributions**:
- Created Docker configuration for consistent development environments
- Set up GitHub Actions workflow for automated testing on pull requests
- Configured Nginx reverse proxy for production deployment
- Implemented environment-based configuration management
- Set up MongoDB Atlas cloud database for staging environment
- Created deployment scripts for Heroku and AWS Elastic Beanstalk
- Configured SSL certificate management for HTTPS enforcement
- Implemented logging with Winston for error tracking
- Set up PM2 process manager for Node.js application uptime
- Created backup strategies for user data and uploaded media

**Technical Focus**: Docker, CI/CD, Nginx, AWS, Heroku, PM2, SSL/TLS, System Administration

---

### 6. bony (UI/UX Designer)

**Role**: Visual Design System and User Experience Architecture

**Contributions**:
- Created complete design system with CSS custom properties (colors, spacing, typography)
- Designed dark luxury theme with purple accent gradients and gold highlights
- Established typography hierarchy using DM Serif Display for headings and DM Sans for body
- Created consistent spacing system with 8px base grid
- Designed all interactive states (hover, active, focus, disabled)
- Implemented micro-interactions (button scales, border color transitions, opacity changes)
- Created empty state illustrations and messaging
- Designed story progress bar animation timing (5 seconds per story)
- Ensured color contrast ratios meet WCAG AA accessibility standards
- Created component documentation with usage examples

**Technical Focus**: CSS Architecture, Design Systems, Accessibility (WCAG), Animation Design, Typography

---

### 7. addlin (Quality Assurance Engineer)

**Role**: Testing Strategy and Security Auditing

**Contributions**:
- Created comprehensive test plan covering all user flows
- Implemented Jest unit tests for authentication logic
- Built Cypress end-to-end tests for critical paths (login, post creation, messaging)
- Performed security audit identifying XSS vulnerabilities in user input
- Implemented HTML escaping function (escHtml) for all user-generated content
- Tested localStorage edge cases (storage limits, quota exceeded errors)
- Validated form input patterns (username regex, password requirements)
- Tested concurrent user scenarios with multiple browser tabs
- Performed load testing on polling mechanism to prevent performance degradation
- Created bug tracking documentation with severity classification

**Technical Focus**: Jest, Cypress, Security Auditing, XSS Prevention, Performance Testing, Bug Tracking

---

##8 chelak (Community Manager and Technical Writer)

**Role**: Documentation, User Onboarding, and Community Engagement

**Contributions**:
- Authored comprehensive README with project concept and architecture explanation
- Created user onboarding guide with screenshots and step-by-step instructions
- Wrote API endpoint documentation with request/response examples
- Established contribution guidelines with Git workflow instructions
- Created issue templates for bug reports and feature requests
- Wrote inline code comments explaining complex logic sections
- Developed FAQ document addressing common setup issues
- Created demo data generation script for new contributors
- Managed community Discord/Slack channels for user support
- Curated feature request backlog with priority classification

**Technical Focus**: Technical Writing, Markdown, Documentation, Community Management, User Support

---

## Local Development Setup

### Prerequisites

- Node.js version 18 or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git for version control

### Installation Steps

1. Clone the repository

```bash
git clone https://github.com/fabby442/community-project.git
cd community-project
