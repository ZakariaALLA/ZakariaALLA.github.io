import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

export function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, isRTL } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'resume', label: t('nav.resume') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current && activeSection !== current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#home" className="text-xl md:text-2xl font-bold gradient-text">
          Zakaria Alla
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <ul className={`flex ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <Button 
            variant="outline" 
            size="sm"
            className="ml-2" 
            onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
            aria-label={language === 'en' ? t('language.fr') : t('language.en')}
          >
            {language === 'en' ? 'Français' : 'English'}
          </Button>

          <Button 
            variant="outline" 
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            className="mr-2" 
            onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
          >
            {language === 'en' ? 'Français' : 'English'}
          </Button>

          <Button 
            variant="outline" 
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="outline"
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[64px] left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg animate-fade-in">
            <nav className="container mx-auto py-4">
              <ul className="flex flex-col items-center space-y-4">
                {navItems.map((item) => (
                  <li key={item.id} className="w-full">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block py-2 px-4 w-full text-center ${
                        activeSection === item.id
                          ? 'text-blue-500 font-medium'
                          : 'text-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
