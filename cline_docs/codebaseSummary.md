# Codebase Summary

## Project Structure
```
earlestea/
├── src/                    # Source code directory
│   ├── pages/             # Next.js pages
│   ├── components/        # React components
│   ├── styles/           # Global styles and CSS modules
│   └── lib/              # Utility functions and shared code
├── public/               # Static assets
│   ├── images/          # Project images
│   ├── videos/          # Project videos
│   └── fonts/           # Custom fonts
├── sanity/              # Sanity CMS configuration
│   ├── schemas/         # Content type definitions
│   └── desk/           # Studio customization
└── cline_docs/          # Project documentation
```

## Key Components and Their Interactions
1. Frontend (Next.js)
   - Pages structure using App Router
   - Component hierarchy for reusability
   - TypeScript integration for type safety

2. Media Handling
   - Dual support for local and Cloudflare media
   - VideoPlayer component with HLS support
   - Optimized image loading with Next.js Image
   - Responsive media display

3. Content Management (Sanity)
   - Embedded studio at /studio route
   - Custom schemas for content types
   - Real-time content updates

4. Data Flow
   - Server-side rendering with Next.js
   - API routes for dynamic data
   - Sanity client for content fetching

## External Dependencies
- Next.js 14
- Sanity v3
- TypeScript
- Tailwind CSS
- Framer Motion
- HLS.js for video streaming
- (Future) Stripe for payments
- (Future) Calendly for bookings

## Recent Significant Changes
1. Media Handling Updates
   - Added support for local video files
   - Implemented fallback for Cloudflare media
   - Optimized image loading
   - Added video streaming capabilities

2. Component Improvements
   - Enhanced Portfolio display
   - Added TeaShop functionality
   - Implemented consultation booking
   - Created timeline view

3. Styling Updates
   - Added custom font integration
   - Improved responsive design
   - Enhanced animations

## User Feedback Integration
- Focus on visual appeal
- Emphasis on portfolio presentation
- Tea product showcase requirements
- Consultation booking workflow

## Development Guidelines
1. Code Organization
   - Component-based architecture
   - Type-safe development
   - Mobile-first approach

2. Performance Considerations
   - Image optimization
   - Video streaming optimization
   - Code splitting
   - SEO optimization

3. Testing Strategy
   - Component testing
   - Integration testing
   - Performance monitoring

## Additional Documentation
- projectRoadmap.md: Project goals and timeline
- techStack.md: Technology choices and architecture
- currentTask.md: Active development focus
- TypeSafetyAndState.md: Type system guidelines
- code_analysis.md: Code review and refactoring notes
