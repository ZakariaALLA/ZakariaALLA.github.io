
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Section, SectionTitle } from '@/components/ui/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

interface TimelineItemProps {
  title: string;
  place: string;
  year: string;
  description: string;
}

const TimelineItem = ({ title, place, role, period, location, intro, projects, team, missions, technologies }) => (
  <div className="mb-8 relative w-full">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
      <h3 className="text-xl font-bold text-blue-500">{title} {place && (<> - {place}</>)} | {role}</h3>
      <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full mt-1 md:mt-0">
        {period}, {location}
      </span>
    </div>
    <h4 className="text-lg mb-2 font-medium">{intro}</h4>
    {projects && projects.length > 0 && (
      <>
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="ml-3 text-md font-bold text-green-500">
              {project.label}
            </h3>
            <p className="ml-3 text-md-foreground">
              {project.desc}
            </p>
          </div>
        ))}
      </>
    )}
    <br></br>
    <p className="ml-3 text-md-foreground">Team : {team}</p>
    <br></br>
    <h3 className="ml-3 text-md font-bold text-green-500">Missions : </h3>
    <ul>
      {missions.map((item) => (
        <li className="ml-6">- {item}</li>
      ))}
    </ul>
    <h3 className="ml-3 text-md font-bold text-green-500">Technolgies : </h3>
    <p className="ml-3 text-md-foreground">{technologies}</p>
  </div>
);

const EducationCard = ({ title, place, year, description }: TimelineItemProps) => (
  <div className="bg-card rounded-lg p-6 shadow-sm border border-border h-full flex flex-col">
    <div className="mb-2">
      <h3 className="text-xl font-bold text-blue-500">{title}</h3>
      <span className="inline-block mt-2 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
        {year}
      </span>
    </div>
    <h4 className="text-lg mb-2 font-medium">{place}</h4>
    <p className="text-muted-foreground flex-grow">{description}</p>
  </div>
);

export function Resume() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  // Education data
  const education =  t('resume.education.list', { returnObjects: true });

  // Experience data
  const experience = t('resume.experience.list', { returnObjects: true });
  const handleDownload = () => {
    window.open('/static/pdf/CV_Zakaria_alla_dev_fullstack_vFr.pdf', '_blank');
  };

  return (
    <Section id="resume">
      <SectionTitle title={t('resume.title')} />
      <div className="flex justify-center mb-8">
        <Button className="btn-gradient" onClick={handleDownload}>
          {t('resume.download')}
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </Button>
      </div>

      {/* Experience - Full row with improved responsiveness */}
      <div className="mb-12 animate-fade-in">
        <h3 className="text-2xl font-bold gradient-text mb-8">
          {t('resume.experience')}
        </h3>
        <div className="relative">
          <Carousel opts={{ align: "center" }}>
            <CarouselContent className="px-4">
              {experience.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <TimelineItem
                      title={item.company}
                      place={item.client}
                      role={item.role}
                      period={item.period}
                      location={item.location}
                      intro={item.intro}
                      projects={item.projects}
                      team={item.team}
                      missions={item.missions}
                      technologies={item.technologies}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12" />
              <CarouselNext className="absolute -right-12" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Education - Three columns in the same row */}
      <div className="mb-12 animate-fade-in">
        <h3 className="text-2xl font-bold gradient-text mb-8">
          {t('resume.education')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {education.map((item, index) => (
            <EducationCard
              key={index}
              title={item.title}
              place={item.place}
              year={item.year}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
