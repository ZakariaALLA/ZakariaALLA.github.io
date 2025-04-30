
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <Section id="home" className="relative overflow-hidden flex items-center justify-center">
      {/* Background effect - gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-[70%] left-[30%] w-[300px] h-[300px] rounded-full bg-blue-400/10 blur-2xl"></div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <p className="text-lg md:text-xl mb-2 animate-fade-in opacity-80">
          {t('home.greeting')}
        </p>
        
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 animate-fade-in ${isRTL ? 'rtl:text-right' : ''}`}>
          <span className="gradient-text">{t('home.name')}</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-8 animate-fade-in">
          {t('home.title')}
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mb-10 animate-fade-in">
          {t('home.description')}
        </p>
        
        <Button 
          className="ml-5 btn-gradient animate-fade-in"
          onClick={scrollToProjects}
        >
          {t('home.cta')}
        </Button>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground opacity-70"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Section>
  );
}
