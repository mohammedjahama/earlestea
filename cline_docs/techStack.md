# Technology Stack Documentation

## Frontend
### Next.js
- Framework Choice: Next.js 14
- Reasoning: Server-side rendering, optimized performance, and great developer experience
- Key Features Used:
  - App Router
  - Server Components
  - Image Optimization
  - API Routes

### TypeScript
- Version: Latest stable
- Implementation: Strict mode enabled
- Purpose: Type safety and better developer experience

### Styling
- Tailwind CSS: For responsive and utility-first styling
- CSS Modules: For component-specific styles
- Styled Components: For dynamic styling with Sanity Studio

## Content Management
### Sanity CMS
- Version: Latest (v3)
- Implementation: Embedded Studio
- Schema Types:
  - Portfolio Work
  - Tea Products
  - About Content
  - Quotes
  - Consultation Settings

## Deployment
### Vercel
- Production Environment: earlestea.com
- Preview Environments: Per PR
- Edge Functions: For API routes
- Analytics: Enabled for performance monitoring

## E-commerce
### Payment Processing
- Stripe Integration (Planned)
- Secure Checkout Flow
- Order Management

## Booking System
### Calendly Integration
- Embedded Calendar
- API Integration
- Automated Notifications

## Development Tools
- ESLint: Code quality
- Prettier: Code formatting
- Husky: Git hooks
- Jest: Testing framework

## Performance Optimization
- Next.js Image Optimization
- Code Splitting
- Dynamic Imports
- Cache Strategies

## Security
- HTTPS Enforcement
- Content Security Policy
- API Route Protection
- Environment Variables Management
