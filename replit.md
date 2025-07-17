# Running Grade Evaluation System

## Overview

This is a Korean running performance evaluation web application called "RunLevel" with the subtitle "내 러닝 등급은?" (What's My Running Grade?). The system allows users to input their running records (distance and time) and provides them with a grade from SS to F, along with encouraging messages and personalized training advice.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Build Process**: esbuild for server bundling
- **Development**: tsx for TypeScript execution in development

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Core Application Logic
- **Grade Calculation**: Client-side pace calculation (time/distance) with predefined grade thresholds
- **Grade System**: SS, S, A, B, C, D, F grades based on pace performance (minutes per kilometer)
- **Personalized Feedback**: Grade-specific motivational messages and training advice in Korean

### UI Components
- **Input Form**: Distance (km) and time (HH:MM:SS) input fields
- **Results Display**: Grade visualization with color-coded badges and detailed feedback
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Technical Stack
- **Component Library**: Comprehensive Shadcn/ui component set including forms, cards, inputs, buttons
- **Icons**: Lucide React icon library
- **Utilities**: Class variance authority for component variants, clsx for conditional classes
- **Form Handling**: React Hook Form with validation

## Data Flow

1. **User Input**: Users enter running distance and time through a form interface
2. **Client-side Calculation**: Pace is calculated in the browser (total time ÷ distance)
3. **Grade Assignment**: Calculated pace is compared against predefined grade thresholds
4. **Result Display**: Grade, pace, motivational message, and training advice are displayed
5. **No Server Persistence**: Currently operates as a client-side calculator without data storage

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom color scheme
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite Plugins**: Runtime error overlay, cartographer for Replit integration
- **TypeScript**: Full type safety with strict configuration
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Backend Dependencies
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Drizzle Kit**: Database schema management and migrations
- **Express Middleware**: JSON parsing, URL encoding, CORS handling

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite dev server with HMR for frontend development
- **TypeScript Compilation**: Real-time type checking without emission
- **Database**: In-memory storage for development, with option to use PostgreSQL

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript server to ESM format in `dist/`
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Deployment**: Single command build process for both frontend and backend

### Database Management
- **Schema Sharing**: Common schema definitions in `shared/` directory
- **Migration Strategy**: Drizzle migrations stored in `migrations/` directory
- **Connection Pooling**: Neon serverless driver for scalable connections