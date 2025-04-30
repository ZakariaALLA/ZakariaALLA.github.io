
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, SectionTitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProjectDemo() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const mockProjects = t('resume.projectsdetails', { returnObjects: true });
  const { id } = useParams();
  const project = mockProjects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <Section id="project-demo-not-found">
        <SectionTitle title={t("projects.demoNotFound") || "Project Not Found"} />
        <Button onClick={() => navigate(-1)} className="mt-4">
          {t("projects.back") || "Back"}
        </Button>
      </Section>
    );
  }

  return (
    <Section id="project-demo">
      <SectionTitle title={project.title || "Project Demo"} />
      <div className="mb-6">
        <Button onClick={() => navigate(-1)} variant="outline" className="mb-4">
          {t("projects.back") || "Back"}
        </Button>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-muted-foreground mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-muted px-3 py-1 rounded-full text-xs">{tech}</span>
          ))}
        </div>
      </div>
      <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-black">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            controls
            className="w-full h-64 object-contain bg-black"
          >
            {t("projects.videoNotSupported") || "Video not supported."}
          </video>
        ) : (
          <div className="w-full bg-black flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out">
                  <Carousel opts={{ align: "center" }}>
                    <CarouselContent className="px-4">
                      {project.images.map((item, index) => (
                        <CarouselItem key={index}>
                          <div className="p-4">
                            <img src={item}></img>
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
          </div>
        )}
      </div>
    </Section>
  );
}
