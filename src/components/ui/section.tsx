
import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-container ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
