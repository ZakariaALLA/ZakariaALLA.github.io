
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '@/components/ui/section';

export function About() {
  const { t } = useTranslation();
  
  const stats = [
    { value: '4+', label: t('about.experience') },
    { value: '8+', label: t('about.projects') },
    { value: '100%', label: t('about.clients') }
  ];
  
  return (
    <Section id="about">
      <SectionTitle title={t('about.title')} />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: Image */}
        <div className="relative animate-fade-in">
          <div className="absolute inset-0 bg-blue-gradient opacity-10 rounded-xl transform rotate-3"></div>
          <img 
            src="/ZakariaALLA.github.io/static/img/logoWhite.png" 
            alt="Zakaria Alla" 
            className="rounded-lg shadow-lg relative z-10 w-full max-w-md mx-auto"
          />
        </div>
        
        {/* Right side: Content */}
        <div className="animate-slide-in space-y-6">
          <p className="text-lg md:text-xl">
            {t('about.description')}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 my-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-lg bg-card shadow-sm"
              >
                <span className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </span>
                <span className="text-sm mt-2 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-lg">
            {t('about.bio')}
          </p>
        </div>
      </div>
    </Section>
  );
}
