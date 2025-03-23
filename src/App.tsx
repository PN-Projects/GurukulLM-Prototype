
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Mentor from "./pages/Mentor";
import Feedback from "./pages/Feedback";
import Achievements from "./pages/Achievements";
import NotFound from "./pages/NotFound";

// New spaces
import StudentPersonal from "./pages/spaces/StudentPersonal";
import LearningSpace from "./pages/spaces/LearningSpace";
import TeacherPrivate from "./pages/spaces/TeacherPrivate";
import WorkspacePublic from "./pages/spaces/WorkspacePublic";
import AdminPanel from "./pages/spaces/AdminPanel";

const App = () => {
  // Initialize QueryClient inside the component function
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/achievements" element={<Achievements />} />
            
            {/* New space routes */}
            <Route path="/student/personal" element={<StudentPersonal />} />
            <Route path="/learning" element={<LearningSpace />} />
            <Route path="/teacher/private" element={<TeacherPrivate />} />
            <Route path="/workspace" element={<WorkspacePublic />} />
            <Route path="/admin" element={<AdminPanel />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
