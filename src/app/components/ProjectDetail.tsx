import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Project } from '../data/projects';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { trackViewProject, trackContactClick, trackBackToHome, trackExternalLink } from '../utils/analytics';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageSet, setCurrentImageSet] = useState<string[]>([]);
  
  // Helper function to get bilingual text based on current language
  const getText = (bilingualText: { en: string; id: string }) => {
    return bilingualText[language];
  };

  // Helper function to get bilingual array based on current language
  const getArray = (bilingualArray?: { en: string[]; id: string[] }) => {
    if (!bilingualArray) return [];
    return bilingualArray[language] || [];
  };

  // Open lightbox with specific image
  const openLightbox = (images: string[], index: number) => {
    setCurrentImageSet(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigate to previous image
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentImageSet.length - 1 : prev - 1
    );
  };

  // Navigate to next image
  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === currentImageSet.length - 1 ? 0 : prev + 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageSet.length]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);
  
  const projectDescription = getText(project.overview.description);
  const projectRole = getText(project.role);
  const projectUrl = `https://andriansoelistiyo.netlify.app/project/${project.slug}`;

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": projectDescription,
    "author": {
      "@type": "Person",
      "name": "Andrian Soelistiyo",
      "jobTitle": "UI/UX Designer",
      "url": "https://andriansoelistiyo.netlify.app"
    },
    "datePublished": project.year,
    "image": project.thumbnailImage,
    "url": projectUrl
  };

  // Breadcrumb Structured Data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://andriansoelistiyo.netlify.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": project.title,
        "item": projectUrl
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{project.title} - Andrian Soelistiyo | UI/UX Designer</title>
        <meta name="description" content={projectDescription} />
        <meta name="keywords" content={`${project.title}, UI/UX Design, Case Study, ${projectRole}, Andrian Soelistiyo`} />
        <link rel="canonical" href={projectUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={projectUrl} />
        <meta property="og:title" content={`${project.title} - Andrian Soelistiyo`} />
        <meta property="og:description" content={projectDescription} />
        <meta property="og:image" content={project.thumbnailImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={projectUrl} />
        <meta property="twitter:title" content={`${project.title} - Andrian Soelistiyo`} />
        <meta property="twitter:description" content={projectDescription} />
        <meta property="twitter:image" content={project.thumbnailImage} />
        
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
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      <LanguageToggle />
      
      {/* Back Navigation */}
      <div className="max-w-[900px] mx-auto px-6 md:px-12 pt-12">
        <button
          onClick={() => {
            onBack();
            trackBackToHome();
          }}
          className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-base font-light">Back to Home</span>
        </button>
      </div>

      {/* Project Title */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pt-12 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
          {project.title}
        </h1>
      </section>

      {/* Project Overview */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-12">
        <h2 className="text-2xl font-extrabold text-black mb-6">📌 Project Overview</h2>
        <p className="text-lg text-neutral-700 leading-relaxed font-light mb-6">
          {getText(project.overview.description)}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base mb-8">
          <div>
            <span className="font-normal text-black">Role: </span>
            <span className="font-light text-neutral-700">{getText(project.role)}</span>
          </div>
          <div>
            <span className="font-normal text-black">{t('timeline')}: </span>
            <span className="font-light text-neutral-700">{getText(project.overview.timeline)}</span>
          </div>
          <div>
            <span className="font-normal text-black">Year: </span>
            <span className="font-light text-neutral-700">{project.year}</span>
          </div>
          <div>
            <span className="font-normal text-black">{t('platform')}: </span>
            <span className="font-light text-neutral-700">{getText(project.overview.platform)}</span>
          </div>
          <div>
            <span className="font-normal text-black">{t('methodology')}: </span>
            <span className="font-light text-neutral-700">{getText(project.overview.methodology)}</span>
          </div>
        </div>
        
        {project.projectUrl && (
          <a 
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-black text-black text-base font-normal transition-colors hover:bg-black hover:text-white"
            onClick={() => trackViewProject(project.title)}
          >
            View Project
          </a>
        )}
      </section>

      {/* Hero Image */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
        <div className="overflow-hidden bg-neutral-100">
          <ImageWithFallback
            src={project.thumbnailImage}
            alt={project.title}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
        <h2 className="text-2xl font-extrabold text-black mb-6">🎯 Problem Statement</h2>
        
        <div className="space-y-4">
          <p className="text-base text-neutral-700 font-light">
            {language === 'en' ? 'Based on early research:' : 'Berdasarkan riset awal:'}
          </p>
          <ul className="space-y-2 pl-0">
            {getArray(project.problemStatement).map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-neutral-400 mt-1.5">•</span>
                <span className="text-lg text-neutral-700 font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research & Insights */}
      {project.research && project.research.length > 0 && (
        <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-2xl font-extrabold text-black mb-6">🔎 Research & Insights</h2>
          
          <div className="space-y-8">
            {project.research.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-normal text-black mb-4">{getText(item.title)}</h3>
                <ul className="space-y-2 pl-0">
                  {getArray(item.findings).map((finding, findingIdx) => (
                    <li key={findingIdx} className="flex items-start gap-3">
                      <span className="text-neutral-400 mt-1.5">•</span>
                      <span className="text-lg text-neutral-700 font-light">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* User Personas */}
      {project.personas && project.personas.length > 0 && (
        <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-2xl font-extrabold text-black mb-6">👥 User Personas</h2>
          
          <div className="space-y-8">
            {project.personas.map((persona, idx) => (
              <div key={idx} className="bg-neutral-50 p-6 md:p-8 space-y-6">
                <div>
                  <p className="text-lg font-normal text-black mb-2">{getText(persona.title)}</p>
                  <p className="text-lg font-normal text-black">Name: {persona.name}</p>
                  <p className="text-base text-neutral-700 font-light">Occupation: {getText(persona.occupation)}</p>
                </div>
                
                <div>
                  <p className="text-base font-normal text-black mb-3">{t('goals')}:</p>
                  <ul className="space-y-2 pl-0">
                    {getArray(persona.goals).map((goal, goalIdx) => (
                      <li key={goalIdx} className="flex items-start gap-3">
                        <span className="text-neutral-400 mt-1.5">•</span>
                        <span className="text-base text-neutral-700 font-light">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-base font-normal text-black mb-3">{t('pain_points')}:</p>
                  <ul className="space-y-2 pl-0">
                    {getArray(persona.painPoints).map((pain, painIdx) => (
                      <li key={painIdx} className="flex items-start gap-3">
                        <span className="text-neutral-400 mt-1.5">•</span>
                        <span className="text-base text-neutral-700 font-light">{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* How Might We */}
      {project.howMightWe && (
        <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
          <div className="bg-yellow-50 p-6 md:p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-extrabold text-black mb-6">💭 How Might We</h2>
            <ul className="space-y-3 pl-0">
              {getArray(project.howMightWe).map((question, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-1.5">•</span>
                  <span className="text-lg text-neutral-700 font-light">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Solution Strategy */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
        <h2 className="text-2xl font-extrabold text-black mb-6">💡 Solution Strategy</h2>
        
        <div className="space-y-8">
          {project.solutionStrategy.map((strategy, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-normal text-black mb-3">{getText(strategy.title)}</h3>
              <p className="text-lg text-neutral-700 leading-relaxed font-light">
                {getText(strategy.description)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* User Journey Map */}
      {project.userJourneyMap && project.userJourneyMap.length > 0 && (
        <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-2xl font-extrabold text-black mb-6">🗺 User Journey Map</h2>
          
          <div className="space-y-12">
            {project.userJourneyMap.map((journey, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-normal text-black mb-4">{getText(journey.persona)}</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-neutral-300">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="border border-neutral-300 px-4 py-3 text-left text-sm font-normal text-black">
                          {language === 'en' ? 'Stage' : 'Tahap'}
                        </th>
                        <th className="border border-neutral-300 px-4 py-3 text-left text-sm font-normal text-black">
                          {language === 'en' ? 'Action' : 'Aksi'}
                        </th>
                        <th className="border border-neutral-300 px-4 py-3 text-left text-sm font-normal text-black">
                          {language === 'en' ? 'Thoughts' : 'Pikiran'}
                        </th>
                        <th className="border border-neutral-300 px-4 py-3 text-left text-sm font-normal text-black">
                          {language === 'en' ? 'Pain Points' : 'Pain Points'}
                        </th>
                        <th className="border border-neutral-300 px-4 py-3 text-left text-sm font-normal text-black">
                          {language === 'en' ? 'Opportunity' : 'Peluang'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {journey.stages.map((stage, stageIdx) => (
                        <tr key={stageIdx} className="hover:bg-neutral-50">
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-700 font-light align-top">
                            {getText(stage.stage)}
                          </td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-700 font-light align-top">
                            {getText(stage.action)}
                          </td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-700 font-light italic align-top">
                            {getText(stage.thoughts)}
                          </td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-700 font-light align-top">
                            {getText(stage.painPoints)}
                          </td>
                          <td className="border border-neutral-300 px-4 py-3 text-sm text-neutral-700 font-light align-top">
                            {getText(stage.opportunity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* User Flow */}
      {project.userFlow && (
        <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-2xl font-extrabold text-black mb-6">🔄 User Flow</h2>
          <p className="text-lg text-neutral-700 font-light mb-8">
            {getText(project.userFlow.description)}
          </p>
          {project.userFlow.images.length > 0 ? (
            <div className="space-y-8">
              {project.userFlow.images.map((img, idx) => (
                <div key={idx} className="bg-neutral-100 flex items-center justify-center">
                  <ImageWithFallback
                    src={img}
                    alt={`${project.title} - User Flow ${idx + 1}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    onClick={() => openLightbox(project.userFlow.images, idx)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <p className="text-base text-neutral-700 font-light italic">
                {language === 'en' 
                  ? '🚧 This section is currently being developed and will be available soon.' 
                  : '🚧 Bagian ini sedang dalam pengembangan dan akan tersedia segera.'}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Design Screens */}
      {project.designScreens && project.designScreens.length > 0 ? (
        <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-2xl font-extrabold text-black mb-6">🎨 Design Screens</h2>
          <div className="space-y-12">
            {project.designScreens.map((screen, idx) => (
              <div key={idx} className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black">
                    {getText(screen.title)}
                  </h3>
                  <p className="text-base text-neutral-600 font-light">
                    {getText(screen.subtitle)}
                  </p>
                </div>
                <div className="bg-neutral-100 flex items-center justify-center">
                  <ImageWithFallback
                    src={screen.image}
                    alt={`${project.title} - Screen ${idx + 1}`}
                    className="w-full h-auto object-contain cursor-pointer"
                    loading="lazy"
                    onClick={() => openLightbox(project.designScreens.map(s => s.image), idx)}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-2xl font-extrabold text-black mb-6">🎨 Design Screens</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <p className="text-base text-neutral-700 font-light italic">
              {language === 'en' 
                ? '🚧 This section is currently being developed and will be available soon.' 
                : '🚧 Bagian ini sedang dalam pengembangan dan akan tersedia segera.'}
            </p>
          </div>
        </section>
      )}

      {/* Usability Testing */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
        <h2 className="text-2xl font-extrabold text-black mb-6">🔁 Usability Testing</h2>
        
        <p className="text-lg text-neutral-700 font-light mb-6">
          {language === 'en' ? 'Tested with' : 'Diuji dengan'} {getText(project.usabilityTesting.participants)}.
        </p>
        
        <div className="space-y-6">
          <div>
            <p className="text-base font-normal text-black mb-3">
              {language === 'en' ? 'Results:' : 'Hasil:'}
            </p>
            <ul className="space-y-2 pl-0">
              {getArray(project.usabilityTesting.results).map((result, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-1.5">•</span>
                  <span className="text-lg text-neutral-700 font-light">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {getArray(project.usabilityTesting.iterations).length > 0 && (
            <div>
              <p className="text-base font-normal text-black mb-3">
                {language === 'en' ? 'Iteration:' : 'Iterasi:'}
              </p>
              <ul className="space-y-2 pl-0">
                {getArray(project.usabilityTesting.iterations).map((iteration, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-neutral-400 mt-1.5">•</span>
                    <span className="text-lg text-neutral-700 font-light">{iteration}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Impact */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
        <h2 className="text-2xl font-extrabold text-black mb-6">📊 Impact</h2>
        <ul className="space-y-2 pl-0">
          {getArray(project.results).map((result, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-neutral-400 mt-1.5">•</span>
              <span className="text-lg text-neutral-700 font-light">{result}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Key Learnings */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
        <h2 className="text-2xl font-extrabold text-black mb-6">🧠 Key Learnings</h2>
        <ul className="space-y-2 pl-0">
          {getArray(project.keyLearnings).map((learning, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-neutral-400 mt-1.5">•</span>
              <span className="text-lg text-neutral-700 font-light">{learning}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Back to Work */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16 pt-16">
        <button
          onClick={onBack}
          className="px-8 py-4 border border-black text-black text-base font-normal transition-colors hover:bg-black hover:text-white"
        >
          Back to Work
        </button>
      </section>

      {/* Let's Work Together */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-24 border-t border-neutral-200 pt-16">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-8">
          Let's Work Together
        </h2>
        <p className="text-lg text-neutral-700 leading-relaxed mb-12 font-light">
          Interested in collaborating or have a project in mind? I'd love to hear from you.
        </p>
        
        <div className="flex items-center gap-4">
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
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-[900px] max-h-[900px]">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full shadow-md"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <ImageWithFallback
              src={currentImageSet[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}