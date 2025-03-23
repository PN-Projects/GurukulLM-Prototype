
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import StudentMentor from '@/components/ai/StudentMentor';
import TeacherAssistant from '@/components/ai/TeacherAssistant';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BrainIcon, GraduationCapIcon, CoffeeIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Mentor: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'teacher'>('student');
  const isMobile = useIsMobile();

  const toggleNavigation = () => {
    setNavigationOpen(!navigationOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={toggleNavigation} sidebarOpen={navigationOpen} />
      <Sidebar open={navigationOpen} onClose={() => setNavigationOpen(false)} />
      
      <main className={`pt-16 transition-all duration-300 ease-in-out ${!isMobile && navigationOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-2 animate-fade-in">
              <BrainIcon className="text-primary" />
              {userRole === 'student' ? 'Learning Companion' : 'Educational Assistant'}
              <Badge variant="outline" className="ml-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                AI Powered
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              {userRole === 'student' 
                ? 'Your personal AI mentor to help with studies and learning'
                : 'Intelligent assistant for curriculum planning and teaching'
              }
            </p>
          </div>
          
          <div className="flex justify-end mb-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <Tabs 
              value={userRole} 
              onValueChange={(value) => setUserRole(value as 'student' | 'teacher')}
              className="w-[280px]"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCapIcon size={16} />
                  Learner
                </TabsTrigger>
                <TabsTrigger value="teacher" className="flex items-center gap-2">
                  <CoffeeIcon size={16} />
                  Educator
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            {userRole === 'student' ? <StudentMentor /> : <TeacherAssistant />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mentor;
