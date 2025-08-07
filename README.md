# Willow.ai

A plant diagnosis application that helps you identify and diagnose issues with your plant friends. Built with Next.js and modern UI components, with AI functionality handled by the backend.

## Features

- 🌱 Plant diagnosis interface
- 🎨 Beautiful, modern UI with Tailwind CSS and shadcn/ui components
- 🚀 Fast development with Turbopack
- 📱 Responsive design
- 🌙 Dark mode support

## Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **TypeScript**: Full TypeScript support
- **UI Components**: Radix UI primitives
- **Backend**: AI functionality handled separately

## Prerequisites

Before running the application, make sure you have:

- Node.js 20+ installed
- npm or yarn package manager

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd willow-ai-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

### Development Mode

To start the development server with Turbopack:

```bash
npm run dev
```

The application will be available at [http://localhost:9002](http://localhost:9002)

### Production Build

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack on port 9002 |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
willow-ai-app/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── plant-diagnosis.tsx  # Main plant diagnosis component
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── docs/                 # Documentation
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Development Tips

1. **Hot Reload**: The development server uses Turbopack for faster hot reloading
2. **Type Safety**: Full TypeScript support with strict mode enabled
3. **UI Components**: Uses shadcn/ui for consistent, accessible components
4. **Styling**: Tailwind CSS with custom design tokens
5. **Backend Integration**: Plant diagnosis functionality is handled by the backend API

## Troubleshooting

### Common Issues

1. **Port already in use**: The app runs on port 9002 by default. Make sure no other service is using this port.

2. **Build errors**: Run `npm run typecheck` to identify TypeScript issues.

3. **Styling issues**: Make sure Tailwind CSS is properly configured and classes are being applied correctly.

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Visit [shadcn/ui documentation](https://ui.shadcn.com/)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary.
