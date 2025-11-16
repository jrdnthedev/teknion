# Teknion - Purchase Order Management System

A modern Angular application for managing purchase orders, shipments, and order tracking. Built with Angular 20.3 and featuring Server-Side Rendering (SSR) support.

## 🚀 Features

- **Purchase Order Management**: View, track, and manage purchase orders with detailed status information
- **Shipment Tracking**: Monitor shipments across multiple carriers (FedEx, UPS, DHL, BlueDart)
- **Real-time Alerts**: Track order and shipment alerts with severity levels
- **Responsive Design**: Mobile-friendly interface with reusable component library
- **Server-Side Rendering**: Enhanced performance and SEO with Angular SSR
- **Modern Architecture**: Domain-driven design with reactive state management

## 📋 Application Structure

### Core Domains
- **Purchase Orders**: Complete order lifecycle management
- **Shipments**: Multi-instance shipment tracking with carrier integration
- **Order Lines**: Individual item tracking and management

### Shared Components
- **Table**: Generic data table with currency formatting
- **Card**: Reusable content containers
- **Accordion**: Collapsible content sections
- **Alert Banner**: Status and notification display
- **Navigation**: Application routing and layout

## 🛠️ Technology Stack

- **Angular 20.3** - Modern web framework
- **TypeScript 5.9** - Type-safe development
- **RxJS 7.8** - Reactive programming
- **Angular SSR** - Server-side rendering
- **Express 5.1** - Server runtime
- **Jasmine & Karma** - Testing framework

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
# or
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload when you change source files.

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run watch      # Build in watch mode for development
npm test           # Run unit tests
npm run serve:ssr:teknion  # Serve SSR build
```

## 🏗️ Building

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized for production deployment.

## 🧪 Testing

Run the unit test suite:
```bash
npm test
```

Tests are written using Jasmine and executed with Karma test runner.

## 📱 Application Routes

- `/` - Redirects to purchase orders
- `/purchase-order` - Purchase order list view
- `/purchase-order/purchase-order-detail/:poId` - Detailed order view

## 🔧 Development Guidelines

### Code Organization
- **Domain-driven structure**: Features organized by business domain
- **Component isolation**: Each component has its own CSS, HTML, and spec files
- **Shared utilities**: Reusable components in the shared module
- **State management**: Reactive state using RxJS BehaviorSubject

### Code Scaffolding
Generate new components:
```bash
ng generate component component-name
```

View all available schematics:
```bash
ng generate --help
```

## 🌐 Server-Side Rendering

This application supports SSR for improved performance and SEO. The server build includes:
- Express server setup
- Angular Universal integration
- Optimized server-side rendering

## 📦 Dependencies

### Core Dependencies
- `@angular/core`, `@angular/common`, `@angular/router` - Angular framework
- `@angular/ssr` - Server-side rendering support
- `rxjs` - Reactive programming library
- `express` - Server runtime

### Development Dependencies
- `@angular/cli` - Angular development tools
- `typescript` - TypeScript compiler
- `jasmine-core`, `karma` - Testing framework

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
