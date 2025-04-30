
import { useEffect } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Resume } from '@/components/sections/Resume';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

import '@/i18n/i18n';

const Index = () => {
  useEffect(() => {
    // Initialize any necessary scripts or analytics here
    document.title = 'Zakaria Alla - Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Projects />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
