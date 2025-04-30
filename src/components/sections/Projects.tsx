import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from "react-router-dom";
import { Video } from "lucide-react";

// Project type definition
type ProjectCategory = 'web' | 'mobile' | 'desktop';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  codeUrl?: string;
  technologies: string[];
}

// Project card component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="bg-card rounded-lg overflow-hidden shadow-md hover-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Project image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-blue-gradient text-white px-3 py-1 rounded-full text-xs">
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-muted px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6">{project.description}</p>
        
        <div className="flex space-x-3">
          {/* Live Demo (video) button */}
          <Button 
            variant="outline" 
            size="sm"
            className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
            onClick={() => navigate(`/projects/${project.id}/demo`)}
          >
            <Video className="mr-1" />
            {t('projects.viewDemo')}
          </Button>
          {/* Source code button */}
          {project.codeUrl && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(project.codeUrl, '_blank')}
            >
              {t('projects.viewCode')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export function Projects() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Sample project data
  const projects: Project[] = t('resume.projects.list', { returnObjects: true });
  
  // Filter categories
  const categories = [
    { id: 'all', label: t('projects.filter.all') },
    { id: 'web', label: t('projects.filter.web') },
    { id: 'mobile', label: t('projects.filter.mobile') },
    { id: 'desktop', label: t('projects.filter.desktop') }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <Section id="projects" className="bg-muted/30">
      <SectionTitle title={t('projects.title')} />
      
      {/* Category filter */}
      <div className="flex flex-wrap justify-center mb-12 gap-3">
        {categories.map(category => (
          <Button 
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={activeCategory === category.id ? "bg-blue-gradient" : ""}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
