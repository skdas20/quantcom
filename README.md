# QuantCom - IEM Centre of Excellence for Quantum Computing Website

A modern, responsive React website for the IEM Centre of Excellence for Quantum Computing (QuantCom), featuring cutting-edge design, smooth animations, and comprehensive information about quantum computing research and education.

## 🚀 Features

- **Modern Design**: Clean, professional interface with quantum-inspired animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Smooth animations and hover effects using Framer Motion
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Accessibility**: WCAG 2.1 AA compliant design
- **Fast Performance**: Optimized images, lazy loading, and code splitting

## 🎨 Design System

### Color Palette
- **Primary Blue**: #4A90E2 (Logo background)
- **Secondary Orange**: #FF6B35 (Atomic symbol)
- **Accent White**: #FFFFFF
- **Text Dark**: #333333
- **Background Light**: #F8F9FA

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx          # Navigation header with mobile menu
│   │   ├── Footer.jsx          # Site footer with links and contact info
│   │   └── Layout.jsx          # Main layout wrapper
│   ├── home/
│   │   ├── HeroSection.jsx     # Animated hero section
│   │   ├── AboutPreview.jsx    # About section preview
│   │   ├── ResearchHighlights.jsx # Research areas showcase
│   │   ├── QuickStats.jsx      # Impact statistics
│   │   └── NewsUpdates.jsx     # Latest news and updates
├── pages/
│   ├── Home.jsx               # Homepage
│   ├── About.jsx              # About page with vision/mission
│   ├── Research.jsx           # Research areas and projects
│   ├── Team.jsx               # Team members and advisory board
│   ├── Publications.jsx       # Research publications
│   ├── Events.jsx             # Events and workshops
│   └── Contact.jsx            # Contact form and information
├── styles/
│   ├── GlobalStyles.js        # Global CSS styles
│   └── theme.js               # Design system tokens
└── App.js                     # Main app component with routing
```

## 🛠️ Tech Stack

### Core Technologies
- **React** 18.2.0 - Modern UI library
- **React Router** 6.8.0 - Client-side routing
- **Styled Components** 5.3.6 - CSS-in-JS styling
- **Framer Motion** 8.5.2 - Animation library

### Additional Libraries
- **React Hook Form** 7.43.1 - Form handling and validation
- **React Helmet** 6.1.0 - SEO meta tags
- **React Icons** 4.7.1 - Icon library
- **React Intersection Observer** 9.4.1 - Scroll animations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quantcom-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📖 Page Descriptions

### Homepage
- **Hero Section**: Animated quantum particle effects with center branding
- **About Preview**: Vision, mission, and key highlights
- **Research Areas**: Interactive cards showcasing research domains
- **Quick Stats**: Impact metrics with animations
- **News & Updates**: Latest announcements and achievements

### About Page
- Comprehensive center overview
- Vision and mission statements
- Organizational objectives
- Impact statistics
- Timeline of achievements

### Research Page
- Filterable research areas
- Detailed project descriptions
- Technology focus areas
- Active project counts

### Team Page
- Advisory Board (105+ years collective experience)
- Executive Committee
- Faculty and researchers
- Contact information for each member

### Publications Page
- Searchable publication database
- Filter by year, type, and category
- Publication details and abstracts
- Download and external links

### Events Page
- Upcoming conferences and workshops
- Past events archive
- Registration and details
- Event categories and filtering

### Contact Page
- Contact form with validation
- Office location and hours
- Multiple contact methods
- Social media links

## 🎯 Key Features Implementation

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

### Animations
- Scroll-triggered animations
- Hover and interaction effects
- Loading states and transitions
- Quantum particle animations

### Performance Optimizations
- Lazy loading for images
- Code splitting by routes
- Optimized bundle size
- Fast loading times

### SEO & Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Alt text for images
- Keyboard navigation support

## 🎨 Customization

### Colors
Edit `src/styles/theme.js` to modify the color palette:

```javascript
export const theme = {
  colors: {
    primary: '#4A90E2',    // Your primary brand color
    secondary: '#FF6B35',   // Your secondary color
    // ... other colors
  }
}
```

### Content
Update content in respective page components:
- Team information in `src/pages/Team.jsx`
- Research areas in `src/pages/Research.jsx`
- Publications in `src/pages/Publications.jsx`
- Contact details in `src/pages/Contact.jsx`

### Logo
Replace the logo implementation in `src/components/common/Header.jsx` with your actual logo image.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions about the website or technical support:
- Email: quantcom@iemcal.com
- GitHub Issues: Create an issue in this repository

## 🚀 Deployment

### Recommended Hosting Platforms
- **Vercel**: Automatic deployments from Git
- **Netlify**: Easy continuous deployment
- **AWS S3 + CloudFront**: Scalable static hosting
- **GitHub Pages**: Free hosting for public repositories

### Environment Variables
Create a `.env` file for any required environment variables:

```env
REACT_APP_API_URL=your-api-url
REACT_APP_CONTACT_EMAIL=your-contact-email
```

## 📈 Performance Metrics

The website is optimized for:
- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Development Scripts

- `npm start` - Start development server
- `npm build` - Create production build
- `npm test` - Run test suite
- `npm eject` - Eject from Create React App (irreversible)

---

Built with ❤️ for the quantum computing community by the QuantCom team.
