# Waste Powertech - Energy from Waste

A modern, multi-language React website for **Waste Powertech SRL**, showcasing innovative waste-to-energy technology with zero CO2 emissions through molecular disintegration.

## 🌍 Overview

Waste Powertech transforms municipal and industrial waste into clean energy using cutting-edge molecular disintegration technology. This website presents the company's mission, technology, certifications, and project references across multiple languages.

## 📋 Features

- **Multi-Language Support**: English, Romanian, Hungarian, German, Chinese, French, Polish, Spanish, Turkish, Italian, and Greek
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Interactive Sections**: Animated components with Framer Motion
- **Dark/Light Theme**: Customizable UI theme system
- **Project Gallery**: Image galleries with lazy loading for References and Certificates
- **Contact Forms**: Direct messaging with email validation
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with accessibility statement

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Styling**: Material-UI (MUI), CSS3
- **Animations**: Framer Motion
- **Internationalization**: react-i18next
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: React Icons
- **Image Handling**: react-modal-image, Lazy loading
- **Form Handling**: Email validation and submission

## 📁 Project Structure

```
wptech/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar           # Navigation (desktop & mobile)
│   │   ├── ContactForm      # Email contact form
│   │   ├── SectionShapes    # Decorative elements
│   │   ├── MainVideo        # Video section
│   │   └── PrivacyMap       # Google Maps with privacy
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── FFooter.jsx      # Footer
│   │   ├── company/         # Company pages
│   │   │   ├── News.jsx
│   │   │   ├── History.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Sustainability.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Accessibility.jsx
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   └── TermsOfUse.jsx
│   │   └── products/        # Product pages
│   │       ├── Technology.jsx
│   │       ├── References.jsx
│   │       └── FactoryPage.jsx
│   ├── data/                # Data management
│   │   └── newsData.jsx     # News articles
│   ├── images/              # Image assets
│   │   └── Imageholder.js   # Centralized image imports
│   ├── locales/             # i18n translation files
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── i18n.js              # i18n configuration
│   └── main.jsx             # Entry point
├── public/                  # Static assets
│   ├── docs/                # PDF presentations
│   ├── bg-*.jpg             # Background images
│   └── manifest.json        # PWA manifest
├── index.html               # HTML template with CSS variables
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js v16+ ([Download](https://nodejs.org/))
- npm v7+ or yarn v1.22+

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wpowertechgit/wptemporary.git
   cd wptech
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## 🌐 Supported Languages

- 🇬🇧 English (en)
- 🇷🇴 Romanian (ro)
- 🇭🇺 Hungarian (hu)
- 🇩🇪 German (de)
- 🇫🇷 French (fr)
- 🇵🇱 Polish (pl)
- 🇪🇸 Spanish (sp)
- 🇹🇷 Turkish (tr)
- 🇮🇹 Italian (it)
- 🇬🇷 Greek (gr)
- Chinese (zh)
## 🎨 Theming

The site uses CSS custom properties (variables) defined in `index.html` for easy theming:

- `--page-bg` - Page background
- `--section-bg-1` - Section background
- `--heading-color` - Heading text color
- `--card-text` - Card text color
- `--footer-bg` / `--footer-text` - Footer colors
- Theme-specific colors for buttons, links, and components

## 📱 Responsive Breakpoints

- **Mobile**: xs (< 600px)
- **Tablet**: md (960px - 1264px)
- **Desktop**: lg (1264px+)
- **4K**: 2000px+

## 🔐 Features Breakdown

### Company Pages
- **Home**: Hero section with technology overview and latest news
- **About > News**: Latest company news and announcements
- **About > History**: Company timeline (2015-2024)
- **About > Team**: Team members and management
- **Company > Sustainability**: Environmental initiatives and goals
- **Company > Certificates**: ISO certifications and compliance documents
- **Products > Technology**: Detailed technology explanation with visuals
- **Products > References**: Project gallery for urban and industrial waste management
- **Contact**: Contact form, location map, and business information

### Legal Pages
- **Privacy Policy**: GDPR-compliant data protection information
- **Terms of Use**: Website terms and conditions
- **Accessibility**: WCAG accessibility statement

## 📧 Developer Information

- **Email**: tkrisztian@wpowertech.ro
- **Company**: SC Waste Powertech SRL

## 📄 Key Files

- `index.html` - Main HTML with CSS variables for theming
- `vite.config.js` - Vite build configuration
- `package.json` - Dependencies and scripts
- `src/i18n.js` - Internationalization setup
- `src/locales/` - Translation files (JSON)

## 🔄 Development Workflow

1. Create components in `src/components/`
2. Create pages in `src/pages/`
3. Add translations to `src/locales/[lang].json`
4. Use `useTranslation()` hook for multi-language support
5. Apply responsive design with Material-UI's `useMediaQuery`
6. Test across languages with i18n selector in navbar

## 🚢 Deployment

The site is configured for cPanel deployment:
- See `.cpanel.yml` for automated deployment settings
- Build output goes to `dist/` directory
- Deploy via cPanel, GitHub Actions, or manual upload

## 📜 License

This project is licensed under a **Custom Commercial License**. See [LICENSE](LICENSE) file for details.

All rights reserved © 2026 **SC Waste Powertech SRL**

## 🤝 Contributing

For team members and authorized contributors:
1. Create a feature branch
2. Commit changes with clear messages
3. Submit pull requests for review

## 📚 Additional Resources

- [Material-UI Documentation](https://mui.com/)
- [React Router Docs](https://reactrouter.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [i18next Documentation](https://www.i18next.com/)
- [Vite Guide](https://vitejs.dev/)

---

**Last Updated**: January 2026
**Maintained By**: Waste Powertech Development Team
