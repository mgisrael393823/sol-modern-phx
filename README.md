# SOL Modern Phoenix - Lease-Up Strategy Blueprint

## Overview
SOL Modern Blueprint is a comprehensive strategic framework designed to optimize the lease-up process, identify competitive advantages, and provide actionable recommendations to maximize occupancy and rental revenue for the Roosevelt Row/Downtown Phoenix market. This Next.js application delivers premium, gated content for clients and prospects.

## Features
- **Interactive Blueprint Sections**: Executive Summary, Market Intelligence, Competitive Landscape, Strategic Opportunities, Pricing Framework, Go-to-Market Roadmap, and Opportunity Map
- **Premium Content Gating**: Proprietary strategic frameworks and implementation plans protected behind gated access
- **Responsive Design**: Fully mobile-responsive interface built with Tailwind CSS
- **Modern UI Components**: Custom-built UI components for consistent styling
- **SEO Optimized**: Meta tags and proper heading structure for improved search visibility

## Technology Stack
- **Framework**: Next.js
- **UI**: React, Tailwind CSS, shadcn/ui components
- **Styling**: Custom design system with Montserrat typography
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/mgisrael393823/sol-modern-phx.git
cd sol-modern-phx
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```
├── public/             # Static files (PDFs, images)
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── GatedContent/   # Content gating components
│   │   ├── Home/           # Homepage sections
│   │   ├── Layout/         # Navigation and layout
│   │   └── ui/             # Base UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Next.js pages
│   └── styles/         # Global styles
└── next.config.mjs     # Next.js configuration
```

## UI Components
- **Heading**: Typography component with configurable heading levels
- **HighlightBox**: Content container with multiple style variants
- **StatDisplay**: Data visualization component for metrics
- **GatedContent**: Premium content wrapper with teaser and access dialog

## Development Guidelines

### Styling Conventions
- Follow the established color scheme:
  - Primary: `#E57161` (coral)
  - Secondary: `#151617` (dark)
  - Background: `#FCFAF5` (cream)
  - Border: `#E8E3D9` (light beige)
  - Text: `#333333` (dark gray), `#777777` (medium gray)
- Use the Montserrat font family for all text

### Component Development
- Create new components in the appropriate subdirectory
- Export components from an index file if they're part of a group
- Use TypeScript interfaces for props
- Follow the established pattern of functional components with named exports

### Content Updates
- Maintain consistent SWOT analysis structure across sections
- Update data visualizations with actual data when available
- Keep gated premium content clearly identified

## Deployment
The application is configured for deployment on Vercel. Push changes to the main branch to trigger automatic deployment.

```bash
git add .
git commit -m "Description of changes"
git push
```

## License
Proprietary - All rights reserved.

## Contact
For access to premium content or inquiries: misrael00@gmail.com