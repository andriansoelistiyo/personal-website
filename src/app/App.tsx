import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Mail, Linkedin, MessageCircle, ChevronDown } from 'lucide-react';
import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { portfolioProjects } from './data/projects';
import { LanguageProvider } from './context/LanguageContext';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { trackDownloadResume, trackContactClick, trackProjectCardClick } from './utils/analytics';
import { ScrollReveal } from './components/ScrollReveal';

// Lazy load ProjectDetail component
const ProjectDetail = lazy(() => import('./components/ProjectDetail').then(module => ({ default: module.ProjectDetail })));

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-neutral-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-base text-neutral-600 font-light">Loading...</p>
      </div>
    </div>
  );
}

// ScrollToTop component - automatically scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view in Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-TJ3R7N3PB5', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}

function HomePage() {
  const navigate = useNavigate();

  const experiences = [
    {
      company: "PT. Astra Graphia Information Technology (AGIT)",
      role: "Senior UI/UX Designer",
      period: "Apr 2021 - Present",
      type: "Full Time",
      description: "Led the comprehensive redesign of Astra Honda Motor ERP system (STAR Project) to improve usability and operational efficiency for internal users."
    },
    {
      company: "IFG Life",
      role: "Project Manager",
      period: "Dec 2022 - Dec 2023",
      type: "Freelance",
      description: "Managed internal projects including Design, Development, and SEO while facilitating agile ceremonies and ensuring project alignment."
    },
    {
      company: "PT. Telunjuk Komputasi Indonesia (Compas.co.id)",
      role: "Frontend Developer and UI/UX Designer",
      period: "Sep 2020 - Feb 2021",
      type: "Full Time",
      description: "Developed the Compas company profile website and internal dashboards, achieving significant conversion rate improvements through UX optimization."
    },
    {
      company: "PT. Telunjuk Komputasi Indonesia (Telunjuk.com)",
      role: "Frontend Developer and UI/UX Designer",
      period: "Apr 2018 - Aug 2020",
      type: "Full Time",
      description: "Refactored and maintained Telunjuk v3 platform using modern frontend technologies, achieving significant performance and conversion improvements."
    }
  ];

  const handleProjectClick = (projectSlug: string) => {
    trackProjectCardClick(projectSlug);
    navigate(`/project/${projectSlug}`);
  };

  // JSON-LD Structured Data for Person
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andrian Soelistiyo",
    "jobTitle": "UI/UX Designer",
    "description": "UI/UX Designer specializing in transforming complex systems into intuitive interfaces with 6+ years of experience in product design.",
    "url": "https://andriansoelistiyo.netlify.app",
    "email": "andrian.socialmedia@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/andrian-soelistiyo-6a9324a1/",
      "https://wa.me/6287788087738"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "PT. Astra Graphia Information Technology (AGIT)"
    },
    "knowsAbout": ["UI/UX Design", "Product Design", "User Experience", "Interface Design", "Usability Testing", "Design Systems"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Andrian Soelistiyo - UI/UX Designer Portfolio</title>
        <meta name="description" content="UI/UX Designer specializing in transforming complex systems into intuitive interfaces. 6+ years experience in product design with focus on clarity and user-centered solutions." />
        <meta name="keywords" content="UI/UX Designer, Product Designer, User Experience, Interface Design, Portfolio, Andrian Soelistiyo" />
        <meta name="author" content="Andrian Soelistiyo" />
        <link rel="canonical" href="https://andriansoelistiyo.netlify.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://andriansoelistiyo.netlify.app/" />
        <meta property="og:title" content="Andrian Soelistiyo - UI/UX Designer Portfolio" />
        <meta property="og:description" content="UI/UX Designer specializing in transforming complex systems into intuitive interfaces. 6+ years experience in product design." />
        <meta property="og:image" content="https://andriansoelistiyo.netlify.app/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://andriansoelistiyo.netlify.app/" />
        <meta property="twitter:title" content="Andrian Soelistiyo - UI/UX Designer Portfolio" />
        <meta property="twitter:description" content="UI/UX Designer specializing in transforming complex systems into intuitive interfaces. 6+ years experience in product design." />
        <meta property="twitter:image" content="https://andriansoelistiyo.netlify.app/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TJ3R7N3PB5"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TJ3R7N3PB5', {
              page_path: window.location.pathname,
            });
          `}
        </script>
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 min-h-screen flex items-center">
        <div className="max-w-[800px] py-24">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-4">
            Andrian Soelistiyo
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 font-light">
            UI/UX Designer
          </p>
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-12 font-light">
            I design digital experiences that solve real problems with clarity and precision. 
            With 6+ years in product design, I specialize in transforming complex systems into 
            intuitive interfaces that users love and businesses value.
          </p>
          <a 
            href="https://drive.google.com/file/d/11dlEC7nQYC23nPfFQzCkbDmxkX8jLG83/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-black text-black text-base font-normal transition-colors hover:bg-black hover:text-white"
            onClick={() => trackDownloadResume()}
          >
            Download Resume
          </a>
          
          <div className="flex items-center gap-2 mt-16 text-neutral-600">
            <span className="text-sm font-light">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-16">
            Selected Work
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {portfolioProjects.slice(0, 4).map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div 
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-neutral-100">
                  <ImageWithFallback
                    src={project.thumbnailImage}
                    alt={project.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-normal text-black group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-light">
                    {typeof project.role === 'string' ? project.role : project.role.en} • {project.year}
                  </p>
                  <p className="text-base text-neutral-700 leading-relaxed font-light">
                    {typeof project.impact === 'string' ? project.impact : project.impact.en}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-neutral-200">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-16">
            Experience
          </h2>
        </ScrollReveal>
        
        {/* Work Experience */}
        <div className="mb-12">
          <ScrollReveal delay={0.1}>
            <h3 className="text-xl font-normal text-black mb-8">Work History</h3>
          </ScrollReveal>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="border-l-2 border-black pl-8 py-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h4 className="text-lg font-normal text-black">{exp.role}</h4>
                    <span className="text-sm text-neutral-600 font-light">{exp.period}</span>
                  </div>
                  <p className="text-base text-neutral-800 mb-1 font-light">{exp.company}</p>
                  {exp.type && (
                    <p className="text-sm text-neutral-600 mb-3 font-light">{exp.type}</p>
                  )}
                  <p className="text-base text-neutral-700 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="pt-8">
            <a 
              href="https://drive.google.com/file/d/11dlEC7nQYC23nPfFQzCkbDmxkX8jLG83/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-black text-black text-base font-normal transition-colors hover:bg-black hover:text-white"
              onClick={() => trackDownloadResume()}
            >
              Download Resume
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-24 md:py-32 border-t border-neutral-200">
        <div className="max-w-[800px]">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-8">
              Let's Work Together
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-neutral-700 leading-relaxed mb-12 font-light">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hello, feel free to reach out.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-6">
              <a 
                href="mailto:andrian.socialmedia@gmail.com" 
                className="p-3 border border-black transition-colors hover:bg-black hover:text-white group"
                aria-label="Email"
                onClick={() => trackContactClick('email')}
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/andrian-soelistiyo-6a9324a1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-black transition-colors hover:bg-black hover:text-white group"
                aria-label="LinkedIn"
                onClick={() => trackContactClick('linkedin')}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/6287788087738" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-black transition-colors hover:bg-black hover:text-white group"
                aria-label="WhatsApp"
                onClick={() => trackContactClick('whatsapp')}
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 border-t border-neutral-200">
        <p className="text-sm text-neutral-600 font-light text-center">
          © 2026 Andrian Soelistiyo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentProject = portfolioProjects.find(p => p.slug === slug);

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Project Not Found</h1>
          <button 
            onClick={handleBackToHome}
            className="px-8 py-4 border border-black text-black text-base font-normal transition-colors hover:bg-black hover:text-white"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProjectDetail project={currentProject} onBack={handleBackToHome} />
    </Suspense>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetailPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </LanguageProvider>
  );
}