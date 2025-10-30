# Alexander Anchikhorov's Professional Portfolio

A modern, interactive portfolio website showcasing the professional journey and technical expertise of Alexander Anchikhorov, a Full Stack Developer specializing in frontend technologies.

![Portfolio Preview](resources/skills-network.png)

## 🌟 Overview

This portfolio website serves as a comprehensive digital resume and professional showcase, featuring:

- **Interactive Skills Visualization**: Dynamic radar chart displaying technical competencies
- **Career Timeline**: Detailed professional experience with expandable project details
- **Project Portfolio**: Curated showcase of key projects and achievements
- **Professional Networking**: Contact forms and social media integration
- **Responsive Design**: Optimized for all devices and screen sizes

## ✨ Key Features

### 🎯 Interactive Components
- **Skills Radar Chart**: Filterable visualization of technical skills with proficiency levels
- **Experience Timeline**: Chronological career progression with detailed role descriptions
- **Project Gallery**: Filterable portfolio with modal detail views
- **Contact Form**: Real-time validation and professional networking integration

### 🎨 Design & UX
- **Modern UI**: Clean, professional design with subtle animations
- **Particle Effects**: Dynamic background animations using p5.js
- **Typewriter Effects**: Engaging text animations for hero section
- **Smooth Transitions**: Anime.js-powered micro-interactions
- **Mobile-First**: Responsive design starting from 320px width

### 📊 Data Visualization
- **ECharts Integration**: Interactive charts for skills and experience data
- **Progress Tracking**: Visual representation of career progression
- **Technology Tags**: Color-coded skill categorization
- **Achievement Metrics**: Quantified project outcomes and impacts

## 🛠️ Technology Stack

### Frontend Framework
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox, Grid, and custom properties
- **Vanilla JavaScript**: ES6+ features with modular architecture

### Libraries & Tools
- **Anime.js**: Smooth animations and page transitions
- **ECharts.js**: Interactive data visualization
- **Splitting.js**: Text animation effects
- **Typed.js**: Typewriter animations
- **Splide.js**: Responsive carousel functionality
- **p5.js**: Creative coding for particle effects

### Design System
- **Color Palette**: Professional charcoal, amber, and teal scheme
- **Typography**: Playfair Display (headings) + Inter (body) + JetBrains Mono (code)
- **Grid System**: 12-column responsive layout
- **Animation Library**: Custom CSS animations with JavaScript enhancement

## 📁 Project Structure

```
cv-resume/
├── index.html              # Landing page with hero and skills overview
├── experience.html         # Career timeline and professional history
├── projects.html           # Project portfolio and achievements
├── contact.html            # Contact form and professional networking
├── main.js                 # Core JavaScript functionality
├── resources/              # Media assets and images
│   ├── hero-portrait.png   # Professional portrait
│   ├── skills-network.png  # Skills visualization
│   ├── tech-background.png # Background textures
│   └── hero-portrait.png   # Updated portrait image
├── design.md               # Design style guide and specifications
├── interaction.md          # Interaction design documentation
├── outline.md              # Project structure and planning
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cv-resume.git
   cd cv-resume
   ```

2. **Serve locally** (recommended for development)
   ```bash
   # Using Python (if available)
   python -m http.server 8000

   # Using Node.js (if available)
   npx serve .

   # Or use any static file server
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Development

The project uses vanilla HTML/CSS/JS with no build process required. Simply edit the files and refresh your browser to see changes.

### Deployment

This is a static website that can be deployed to any web hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Connect repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **Traditional hosting**: Upload files via FTP

## 📱 Usage

### Navigation
- **Desktop**: Use the sticky navigation bar for smooth scrolling
- **Mobile**: Tap the hamburger menu for navigation options

### Interactive Features
- **Skills Chart**: Click different areas to filter and explore competencies
- **Timeline**: Click on career milestones for detailed information
- **Projects**: Use filters to browse by technology or project type
- **Contact**: Fill out the form for professional inquiries

### Accessibility
- Full keyboard navigation support
- Screen reader compatible
- High contrast ratios for readability
- Alternative text for all images

## 🎨 Customization

### Colors
Modify the CSS custom properties in each HTML file's `<style>` section:

```css
:root {
  --primary-color: #2C3E50;    /* Deep charcoal */
  --secondary-color: #F39C12;  /* Warm amber */
  --accent-color: #16A085;     /* Soft teal */
}
```

### Content
Update personal information in the respective HTML files:
- `index.html`: Hero section and skills data
- `experience.html`: Career timeline and achievements
- `projects.html`: Project portfolio and descriptions
- `contact.html`: Contact information and networking links

### Skills Data
Modify the skills chart data in `main.js` or inline scripts within `index.html`.

## 📈 Performance

### Optimization Features
- **Lazy Loading**: Images load as needed
- **Minified Assets**: Optimized CSS and JavaScript
- **Efficient Animations**: GPU-accelerated transforms
- **Progressive Enhancement**: Works without JavaScript

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

While this is a personal portfolio, suggestions for improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers and devices
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Alexander Anchikhorov**
- **Email**: [aanchikhorov@gmail.com](mailto:aanchikhorov@gmail.com)
- **LinkedIn**: [linkedin.com/in/alexander-anchikhorov-78692b184](https://www.linkedin.com/in/alexander-anchikhorov-78692b184/)
- **Xing**: [xing.com/profile/Alexander_Anchikhorov](https://www.xing.com/profile/Alexander_Anchikhorov/)
- **Location**: Niederdreisbach, Germany

---

*Built with modern web technologies and a focus on user experience and performance.*
