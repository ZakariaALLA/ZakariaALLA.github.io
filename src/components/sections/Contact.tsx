
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Section, SectionTitle } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate sending an email (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: t('contact.success'),
        description: 'I will get back to you as soon as possible.',
        variant: 'default',
      });
      
      // Reset form after successful submission
      reset();
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Section id="contact">
      <SectionTitle 
        title={t('contact.title')} 
        subtitle={t('contact.description')}
      />
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="animate-fade-in">
          <div className="bg-card p-8 rounded-lg shadow-sm">
            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`bg-blue-gradient p-3 rounded-full ${isRTL ? 'ml-4' : ''}`}>
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-muted-foreground">** ** ** ** **</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={`bg-blue-gradient p-3 rounded-full ${isRTL ? 'ml-4' : ''}`}>
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">zakaria.alla.20@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={`bg-blue-gradient p-3 rounded-full ${isRTL ? 'ml-4' : ''}`}>
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-muted-foreground">IDF, France</p>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-8 h-48 bg-muted rounded-lg overflow-hidden">
              <iframe
                title="Location Map"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9974.869052574171!2d2.2407821687989844!3d48.88628904137181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66502128aae1f%3A0x9dce86817f537c!2sGrande%20Arche%20de%20la%20D%C3%A9fense!5e1!3m2!1sfr!2sfr!4v1745760582130!5m2!1sfr!2sfr"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card p-8 rounded-lg shadow-sm space-y-6"
          >
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                {t('contact.name')}
              </label>
              <Input
                id="name"
                type="text"
                className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                placeholder={t('contact.name')}
                {...register('name', { required: true })}
                dir='ltr'
              />
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>
            
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                {t('contact.email')}
              </label>
              <Input
                id="email"
                type="email"
                className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                placeholder={t('contact.email')}
                {...register('email', { 
                  required: true, 
                  pattern: /^\S+@\S+\.\S+$/
                })}
                dir="ltr"
              />
              {errors.email?.type === 'required' && (
                <span className="text-sm text-red-500 mt-1">
                  This field is required
                </span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className="text-sm text-red-500 mt-1">
                  Please enter a valid email
                </span>
              )}
            </div>
            
            {/* Subject field */}
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                {t('contact.subject')}
              </label>
              <Input
                id="subject"
                type="text"
                className={`w-full ${errors.subject ? 'border-red-500' : ''}`}
                placeholder={t('contact.subject')}
                {...register('subject', { required: true })}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.subject && (
                <span className="text-sm text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>
            
            {/* Message field */}
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                {t('contact.message')}
              </label>
              <Textarea
                id="message"
                className={`w-full min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                placeholder={t('contact.message')}
                {...register('message', { required: true })}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {errors.message && (
                <span className="text-sm text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>
            
            {/* Submit button */}
            <Button 
              type="submit" 
              className="btn-gradient w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg 
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                t('contact.send')
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
