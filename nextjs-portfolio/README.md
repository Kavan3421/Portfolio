# Kavan Patel - Next.js Portfolio

A modern, interactive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion featuring stunning 3D animations and full mobile responsiveness.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with glassmorphism effects
- 🌓 **Dark Mode** - Seamless theme switching with system preference detection
- 🎭 **3D Animations** - Interactive Three.js scene with floating tech icons
- ⚡ **Performance** - Optimized with Next.js 14 App Router and dynamic imports
- 📱 **Fully Responsive** - Perfect display on all devices (mobile, tablet, desktop)
- 🎬 **Smooth Animations** - Framer Motion for fluid page transitions
- 🎯 **Interactive Particles** - Custom particle system background
- 📧 **Contact Form** - Functional contact form with validation
- 🚀 **SEO Optimized** - Meta tags, semantic HTML, and structured data
- ♿ **Accessible** - ARIA labels and keyboard navigation support

## 🛠️ Technologies Used

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

### Animations & 3D
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js

### UI Components
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📦 Installation

1. **Clone or navigate to the project:**
   ```bash
   cd "c:\Users\Kavan Patel\Desktop\Projects\Portfolio\nextjs-portfolio"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy images:**
   Copy your images from the old portfolio to the new one:
   ```bash
   mkdir public
   xcopy /E /I "..\images" "public\images"
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextjs-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ThemeProvider.tsx   # Theme context and toggle
│   ├── Header.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Scene3D.tsx         # 3D animated scene
│   ├── ParticlesBackground.tsx  # Particle system
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Testimonials.tsx    # Testimonials slider
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── ScrollToTop.tsx     # Scroll to top button
├── public/
│   └── images/             # Your images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `components/Hero.tsx`:
   - Update typing animation texts
   - Change social media links
   - Modify introduction text

2. **About Section** - Edit `components/About.tsx`:
   - Update education details
   - Change statistics
   - Modify resume link

3. **Projects** - Edit `components/Projects.tsx`:
   - Add/remove projects
   - Update project details, images, and links

4. **Contact Info** - Edit `components/Contact.tsx`:
   - Update location, phone, email
   - Modify social media links

### Styling

- **Colors**: Modify `tailwind.config.ts` and `app/globals.css`
- **Fonts**: Change in `app/layout.tsx`
- **Animations**: Adjust in individual components

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Build for Production

```bash
npm run build
npm start
```

## 📱 Mobile Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and adapt to different screen sizes.

## ⚡ Performance Tips

- Images are optimized automatically by Next.js
- 3D scene uses dynamic imports for better initial load
- Lazy loading for off-screen content
- Optimized fonts with next/font

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🐛 Common Issues

### TypeScript Errors
If you see TypeScript errors, run:
```bash
npm install
```

### 3D Scene Not Loading
Make sure all Three.js dependencies are installed:
```bash
npm install three @react-three/fiber @react-three/drei
```

### Dark Mode Not Working
Clear your browser's localStorage and refresh.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Kavan Patel**
- LinkedIn: [Kavan Patel](https://www.linkedin.com/in/kavan-patel-763319251/)
- GitHub: [@kavan3421](https://github.com/kavan3421)
- Twitter: [@Kavanpatel51](https://x.com/Kavanpatel51)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Three.js community for 3D capabilities
- Tailwind CSS for utility-first styling

---

Made with ❤️ and lots of coffee ☕
