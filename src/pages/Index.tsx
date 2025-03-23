
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  GraduationCapIcon, 
  Users2Icon, 
  BrainIcon, 
  RocketIcon, 
  ArrowRightIcon,
  CheckIcon,
  StarIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureHighlight = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 rounded-xl border bg-background shadow-md flex flex-col items-center text-center md:items-start md:text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const FeaturesGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <FeatureHighlight
      icon={<BrainIcon className="w-6 h-6 text-primary" />}
      title="Personalized Learning Companion"
      description="Every learner receives an adaptive AI companion that tailors its approach to individual learning styles and academic goals."
    />
    <FeatureHighlight
      icon={<GraduationCapIcon className="w-6 h-6 text-primary" />}
      title="Intelligent Assessment"
      description="Our AI-driven evaluation system delivers comprehensive feedback and identifies specific improvement opportunities."
    />
    <FeatureHighlight
      icon={<RocketIcon className="w-6 h-6 text-primary" />}
      title="Growth Recognition System"
      description="A gamified learning journey with milestone markers, progression levels, and achievements to enhance motivation."
    />
    <FeatureHighlight
      icon={<Users2Icon className="w-6 h-6 text-primary" />}
      title="Educator Companion"
      description="Smart tools for educators to evaluate learner progress, develop curriculum materials, and provide targeted assistance."
    />
    <FeatureHighlight
      icon={<StarIcon className="w-6 h-6 text-primary" />}
      title="Collaborative Learning Network"
      description="Learners can form study circles and engage in healthy academic competition based on progress metrics."
    />
    <FeatureHighlight
      icon={<CheckIcon className="w-6 h-6 text-primary" />}
      title="Continuous Improvement System"
      description="Open communication channel allowing learners to provide anonymous assessment of their educational experience."
    />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/20 z-[-1]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              Transforming Education Through Artificial Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Education Reimagined with <span className="text-primary">AI Integration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Unlock the potential of every learner with AI-powered personalized education, insightful feedback, and comprehensive performance analytics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Link to="/dashboard">
                <Button size="lg" className="rounded-full px-8">
                  Begin Journey
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/mentor">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Experience AI Companion
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Visual elements */}
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4" id="features">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transform Learning with AI Integration</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform merges cutting-edge artificial intelligence with educational expertise to create an adaptive learning environment tailored to each student's unique needs.
            </p>
          </div>
          
          <FeaturesGrid />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students and educators already experiencing the benefits of AI-enhanced educational methodologies.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="rounded-full px-8">
                Start Your Educational Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-primary mr-2">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">G</div>
              </div>
              <span className="font-medium text-lg">GurukulLM</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/mentor" className="hover:text-foreground transition-colors">AI Companion</Link>
              <Link to="/feedback" className="hover:text-foreground transition-colors">Feedback</Link>
              <Link to="/achievements" className="hover:text-foreground transition-colors">Achievements</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} GurukulLM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
