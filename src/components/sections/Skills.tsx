
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '@/components/ui/section';
import { Code, Layers, Database, GitBranch, Server, Compass} from 'lucide-react';

export function Skills() {
  const { t } = useTranslation();

  // Technical Skills - categories
  const techSkills = [
    {
      category: "Programming Languages",
      icon: <Code className="inline-block mr-2 text-blue-500" />,
      skills: ["Java (8, 17, 21)", "TypeScript / JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Compass className="inline-block mr-2 text-blue-500" />,
      skills: ["Spring, Spring boot", "Spring security", "Angular (14, 17, 18)", "Hibernate / JPA"],
    },
    {
      category: "Databases",
      icon: <Database className="inline-block mr-2 text-blue-500" />,
      skills: ["PostgreSQL", "Oracle DB", "Sybase", "MSSQL"],
    },
    {
      category: "CI/CD & Version Control",
      icon: <GitBranch className="inline-block mr-2 text-blue-500" />,
      skills: ["Git", "GitLab / BitBucket", "Jenkins", "SonarQube"],
    },
    {
      category: "DevOps & Containers",
      icon: <Server className="inline-block mr-2 text-blue-500" />,
      skills: ["Docker", "Kubernetes", "Rancher"],
    },
    {
      category: "Software Architecture",
      icon: <Layers className="inline-block mr-2 text-blue-500" />,
      skills: ["DDD - Hexagonal", "Microservices", "BDD", "RESTful API"],
    },
  ];

  // Soft Skills - categories
  const softSkills = [
    {
      category: "Collaboration",
      skills: ["Communication", "Teamwork", "Support and willingness to share knowledge"],
    },
    {
      category: "Problem Solving",
      skills: ["Analytical Thinking", "Creative Thinking", "Attention to Detail"],
    },
    {
      category: "Professionalism",
      skills: ["Time Management", "Adaptability",  "Autonomy"],
    },
  ];

  return (
    <Section id="skills" className="bg-muted/30">
      <SectionTitle title={t('skills.title')} />

      {/* Technical Skills */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-blue-500">{t('Hard Skills') || "Technical Skills"}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {techSkills.map((cat) => (
            <div key={cat.category} className="bg-card p-6 rounded-lg shadow-sm animate-fade-in">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                {cat.icon}{cat.category}
              </h4>
              <ul className="space-y-2 list-disc list-inside text-md">
                {cat.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-500">{t('Soft Skills') || "Soft Skills"}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {softSkills.map((cat) => (
            <div key={cat.category} className="bg-card p-6 rounded-lg shadow-sm animate-fade-in">
              <h4 className="text-lg font-semibold mb-3">{cat.category}</h4>
              <ul className="space-y-2 list-disc list-inside text-md">
                {cat.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
