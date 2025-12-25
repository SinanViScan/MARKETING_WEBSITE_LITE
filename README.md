# ViScan Marketing Website

A modern, responsive marketing website for ViScan - an AI-powered visual recognition platform. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Fully Responsive**: Mobile-first approach with responsive design for all devices
- **SEO Optimized**: Comprehensive SEO setup with meta tags, structured data, and sitemap
- **Performance Optimized**: Fast loading with Next.js optimizations and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **SEO**: next-seo, next-sitemap
- **Code Quality**: ESLint, Prettier, Husky

## 📁 Project Structure

```
marketing_website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page route
│   │   └── globals.css         # Global styles and animations
│   ├── components/
│   │   ├── home/               # Home page components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                 # shadcn/ui components
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   ├── robots.txt              # Search engine crawler guidance
│   └── sitemap.xml             # Auto-generated sitemap
├── next-sitemap.config.js      # Sitemap configuration
├── .prettierrc                 # Prettier configuration
├── .eslintrc.json              # ESLint configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marketing_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Components

### Home Page Sections

1. **Hero Section** - Main landing area with call-to-action
2. **Features Section** - Key product features with icons
3. **Testimonials Section** - Customer reviews and statistics
4. **CTA Section** - Call-to-action with trial and demo options
5. **Footer** - Navigation links and company information

### Design Features

- **Gradient Backgrounds**: Modern gradient designs throughout
- **Animated Elements**: Smooth blob animations and hover effects
- **Responsive Grid**: Flexible layouts that adapt to screen sizes
- **Interactive Cards**: Hover effects and transitions
- **Modern Typography**: Clean, readable font hierarchy

## 🔧 Configuration

### SEO Setup

The website includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawler guidance
- **Canonical URLs**: Proper canonical link tags

### Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by routes
- **Bundle Analysis**: Optimized bundle sizes
- **Caching**: Static generation for better performance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The website can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **AWS Amplify**: Connect your repository for automatic deployments
- **Docker**: Use the provided Dockerfile for containerized deployment

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 SEO Features

- **Page Speed**: Optimized for Core Web Vitals
- **Accessibility**: WCAG 2.1 AA compliant
- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Rich snippets for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Proper crawler guidance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email contact@viscan.ai or visit our website at [viscan.ai](https://viscan.ai).

---

Built with ❤️ by the ViScan Team
