# Teknion - Purchase Order Management System

A modern Angular application for managing purchase orders, shipments, and order tracking. Built with Angular 20.3 and featuring Server-Side Rendering (SSR) support with Netlify deployment capabilities.

## 🚀 Features

- **Purchase Order Management**: View, track, and manage purchase orders with detailed status information
- **Shipment Tracking**: Monitor shipments and shipment instances across multiple carriers
- **Real-time Alerts**: Track order and shipment alerts with severity levels and tags
- **Responsive Design**: Mobile-friendly interface with reusable component library
- **Server-Side Rendering**: Enhanced performance and SEO with Angular SSR
- **Modern Architecture**: Domain-driven design with reactive state management using signals
- **Netlify Integration**: Optimized for Netlify deployment with Angular runtime

## 📋 Application Structure

### Core Domains
- **Purchase Orders**: Complete order lifecycle management with status tracking (`Active`, `Cancelled`, `Partially Shipped`)
- **Shipments**: Multi-instance shipment tracking with carrier integration
- **Order Lines**: Individual item tracking and management
- **Order Tags & Alerts**: Categorization and notification system

### Shared Components
- **Table**: Generic data table with TypeScript generics and currency formatting
- **Card**: Reusable content containers
- **Accordion**: Collapsible content sections  
- **Alert Banner**: Status and notification display
- **Navigation**: Application routing and layout

### State Management
- **Reactive Services**: RxJS BehaviorSubject-based state management
- **Observable Patterns**: Stream-based data flow with reactive programming
- **Signal Integration**: Modern Angular signals for component state

## 🛠️ Technology Stack

- **Angular 20.3** - Modern web framework with standalone components
- **TypeScript 5.9** - Strict type checking with modern ES2022 target
- **RxJS 7.8** - Reactive programming with observables
- **Angular SSR** - Server-side rendering with Express integration
- **Express 5.1** - Server runtime for SSR
- **Netlify Angular Runtime 3.0** - Deployment optimization
- **Jasmine & Karma** - Testing framework with coverage reporting
- **Prettier** - Code formatting with Angular HTML parser

## 🚦 Getting Started

### Prerequisites
- Node.js ^18.0.0
- npm (included with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd teknion
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm start
# Application will be available at http://localhost:4200
```

The app will automatically reload when you change source files.

### Available Scripts

```bash
npm start                    # Start development server (ng serve)
npm run build               # Build for production with SSR
npm run watch              # Build in watch mode for development  
npm test                   # Run unit tests with Karma
npm run serve:ssr:teknion  # Serve pre-built SSR application
```

### TypeScript Configuration

The project uses strict TypeScript settings for better code quality:
- Strict mode enabled with `noImplicitReturns` and `noFallthroughCasesInSwitch`
- Angular strict templates and injection parameters
- ES2022 target with modern module preservation
- Experimental decorators for Angular components

## 🏗️ Building

Build the project for production with SSR support:
```bash
npm run build
```

The build artifacts will be stored in the `dist/teknion/` directory with both client and server builds optimized for production deployment.

### Build Configuration
- **Output Mode**: Server (SSR enabled)
- **Bundle Budgets**: 500kB warning, 1MB error limit for initial bundle
- **Component Styles**: 4kB warning, 8kB error limit per component
- **Optimization**: Production builds include minification and tree-shaking

## 🧪 Testing

Run the unit test suite:
```bash
npm test
```

Tests are written using Jasmine and executed with Karma test runner.

## 📱 Application Routes

- `/` - Redirects to purchase orders listing  
- `/purchase-order` - Purchase order list view (PoList component)
- `/purchase-order/purchase-order-detail/:poId` - Detailed order view (PoDetail component as child route)

### Route Structure
The application uses Angular Router with nested routes, where the detail view is rendered as a child of the list view for better UX and state management.

## 🔧 Development Guidelines

### Code Organization
- **Domain-driven structure**: Features organized by business domain under `src/app/domains/`
- **Component isolation**: Each component includes `.ts`, `.html`, `.css`, and `.spec.ts` files
- **Shared utilities**: Reusable components in `src/app/shared/components/`  
- **State management**: Reactive state using RxJS BehaviorSubject with Observable patterns
- **Standalone components**: Modern Angular architecture without NgModules
- **TypeScript generics**: Used in shared components like Table for type safety

### Component Architecture
- **Signals**: Modern Angular reactivity for component state
- **Imports array**: Components declare their dependencies explicitly
- **Template and style co-location**: Each component owns its template and styles

### Data Models
Well-defined TypeScript interfaces for:
- `PurchaseOrderModel` with status types and relationships
- `OrderLineModel`, `OrderAlertModel`, `OrderTagModel`
- `ShipmentModel` and `ShipmentInstanceModel`

### Code Scaffolding
Generate new components:
```bash
ng generate component component-name
# Creates standalone component with all required files
```

View all available schematics:
```bash
ng generate --help
```

## 🌐 Server-Side Rendering

This application includes full SSR support for improved performance and SEO:

### SSR Configuration
- **Entry Point**: `src/server.ts` - Express server setup
- **Main Server**: `src/main.server.ts` - Angular Universal bootstrap
- **Output Mode**: Server build with client hydration
- **Netlify Integration**: Optimized with `@netlify/angular-runtime`

### Deployment
- Production builds include both client and server bundles
- Express server serves SSR pages with client-side hydration
- Compatible with Netlify Edge Functions and serverless deployment

### Performance Benefits
- Faster initial page load through server-side rendering
- Better SEO with pre-rendered HTML content
- Improved Core Web Vitals scores

## 📦 Dependencies

### Core Dependencies
- `@angular/core@^20.3.0` - Angular framework core
- `@angular/common@^20.3.0` - Common Angular directives and pipes
- `@angular/router@^20.3.0` - Angular routing
- `@angular/forms@^20.3.0` - Reactive and template-driven forms
- `@angular/ssr@^20.3.4` - Server-side rendering support
- `@netlify/angular-runtime@^3.0.1` - Netlify deployment optimization
- `rxjs@~7.8.0` - Reactive programming library
- `express@^5.1.0` - Node.js server framework

### Development Dependencies
- `@angular/cli@^20.3.4` - Angular command line tools
- `@angular/build@^20.3.4` - Modern Angular build system
- `typescript@~5.9.2` - TypeScript compiler with strict settings
- `jasmine-core@~5.9.0` & `karma@~6.4.0` - Testing framework
- `@types/express@^5.0.1` - TypeScript definitions for Express

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support and questions, please contact the development team.
