// Google Analytics Event Tracking Utility

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined event trackers
export const trackDownloadResume = () => {
  trackEvent('download', 'Resume', 'Download Resume Button');
};

export const trackViewProject = (projectName: string) => {
  trackEvent('view', 'Project', projectName);
};

export const trackContactClick = (method: 'email' | 'linkedin' | 'whatsapp') => {
  trackEvent('contact', 'Contact', method);
};

export const trackProjectCardClick = (projectName: string) => {
  trackEvent('click', 'Project Card', projectName);
};

export const trackLanguageChange = (language: string) => {
  trackEvent('change', 'Language', language);
};

export const trackBackToHome = () => {
  trackEvent('click', 'Navigation', 'Back to Home');
};

export const trackExternalLink = (linkName: string) => {
  trackEvent('click', 'External Link', linkName);
};
