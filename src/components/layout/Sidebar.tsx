import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboardIcon,
  BrainIcon,
  MessageSquareIcon,
  TrophyIcon,
  UsersIcon,
  BarChartIcon,
  ClipboardCheckIcon,
  SettingsIcon,
  UserIcon,
  BookIcon,
  GraduationCapIcon,
  CoffeeIcon,
  BuildingIcon,
  ShieldIcon,
  SparkleIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const studentItems: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboardIcon size={18} />, href: '/dashboard' },
  { label: 'Personal Space', icon: <UserIcon size={18} />, href: '/student/personal' },
  { label: 'Learning Space', icon: <BookIcon size={18} />, href: '/learning' },
  { label: 'My AI Mentor', icon: <BrainIcon size={18} />, href: '/mentor' },
  { label: 'Achievements', icon: <TrophyIcon size={18} />, href: '/achievements' },
  { label: 'Feedback', icon: <MessageSquareIcon size={18} />, href: '/feedback' },
];

const teacherItems: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboardIcon size={18} />, href: '/dashboard' },
  { label: 'Private Space', icon: <CoffeeIcon size={18} />, href: '/teacher/private' },
  { label: 'Workspace', icon: <BuildingIcon size={18} />, href: '/workspace' },
  { label: 'AI Assistant', icon: <BrainIcon size={18} />, href: '/mentor' },
  { label: 'Students', icon: <UsersIcon size={18} />, href: '/learning' },
  { label: 'Analytics', icon: <BarChartIcon size={18} />, href: '/analytics' },
  { label: 'Feedback', icon: <MessageSquareIcon size={18} />, href: '/feedback' },
];

const adminItems: NavItem[] = [
  { label: 'Admin Panel', icon: <ShieldIcon size={18} />, href: '/admin' },
  { label: 'Student Spaces', icon: <GraduationCapIcon size={18} />, href: '/student/personal' },
  { label: 'Learning Space', icon: <BookIcon size={18} />, href: '/learning' },
  { label: 'Teacher Spaces', icon: <CoffeeIcon size={18} />, href: '/teacher/private' },
  { label: 'Workspace', icon: <BuildingIcon size={18} />, href: '/workspace' },
  { label: 'Analytics', icon: <BarChartIcon size={18} />, href: '/analytics' },
  { label: 'Feedback', icon: <MessageSquareIcon size={18} />, href: '/feedback' },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [userRole, setUserRole] = React.useState<'student' | 'teacher' | 'admin'>('student');
  
  const getNavItems = () => {
    switch(userRole) {
      case 'admin': return adminItems;
      case 'teacher': return teacherItems;
      default: return studentItems;
    }
  };

  const navItems = getNavItems();

  React.useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile, open]);

  if ((isMobile && !open) || (!isMobile && open)) {
    return (
      <div className="fixed left-0 top-16 bottom-0 z-40 w-64 border-r bg-background transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full py-6 px-3">
          <div className="flex items-center justify-center p-2 mb-6">
            <div className="relative">
              <Button 
                variant="outline" 
                className="w-full justify-between py-2 px-4 rounded-xl text-sm font-medium mb-2"
                onClick={() => setUserRole('student')}
              >
                <span className={cn(
                  "flex items-center transition-all duration-300",
                  userRole === 'student' ? "text-primary font-medium" : "text-muted-foreground"
                )}>
                  <GraduationCapIcon size={16} className="mr-2" />
                  Student
                </span>
                {userRole === 'student' && (
                  <SparkleIcon size={16} className="text-primary animate-pulse" />
                )}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-between py-2 px-4 rounded-xl text-sm font-medium mb-2"
                onClick={() => setUserRole('teacher')}
              >
                <span className={cn(
                  "flex items-center transition-all duration-300",
                  userRole === 'teacher' ? "text-primary font-medium" : "text-muted-foreground"
                )}>
                  <CoffeeIcon size={16} className="mr-2" />
                  Teacher
                </span>
                {userRole === 'teacher' && (
                  <SparkleIcon size={16} className="text-primary animate-pulse" />
                )}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-between py-2 px-4 rounded-xl text-sm font-medium"
                onClick={() => setUserRole('admin')}
              >
                <span className={cn(
                  "flex items-center transition-all duration-300",
                  userRole === 'admin' ? "text-primary font-medium" : "text-muted-foreground"
                )}>
                  <ShieldIcon size={16} className="mr-2" />
                  Admin
                </span>
                {userRole === 'admin' && (
                  <SparkleIcon size={16} className="text-primary animate-pulse" />
                )}
              </Button>
            </div>
          </div>

          <nav className="space-y-1 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all group relative overflow-hidden",
                  location.pathname === item.href
                    ? "text-primary-foreground bg-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
                onClick={isMobile ? onClose : undefined}
              >
                <span className={cn(
                  "mr-3 transition-all",
                  location.pathname === item.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                )}>
                  {item.icon}
                </span>
                {item.label}
                {location.pathname === item.href && (
                  <span className="absolute inset-0 bg-primary opacity-10 animate-pulse" />
                )}
              </Link>
            ))}
          </nav>

          <div className="pt-6 mt-6 border-t">
            <Link
              to="/settings"
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              <SettingsIcon size={18} className="mr-3 text-muted-foreground group-hover:text-foreground" />
              Settings
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isMobile && open) {
    return (
      <>
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fade-in" 
          onClick={onClose}
        />
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-background border-r shadow-lg animate-slide-in">
          <div className="flex flex-col h-full pt-16 pb-6 px-3">
            <div className="flex items-center justify-center p-2 mb-6">
              <div className="relative">
                <Button 
                  variant="outline" 
                  className="w-full justify-between py-2 px-4 rounded-xl text-sm font-medium mb-2"
                  onClick={() => setUserRole('student')}
                >
                  <span className={cn(
                    "flex items-center transition-all duration-300",
                    userRole === 'student' ? "text-primary font-medium" : "text-muted-foreground"
                  )}>
                    <GraduationCapIcon size={16} className="mr-2" />
                    Student
                  </span>
                  {userRole === 'student' && (
                    <SparkleIcon size={16} className="text-primary animate-pulse" />
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between py-2 px-4 rounded-xl text-sm font-medium mb-2"
                  onClick={() => setUserRole('teacher')}
                >
                  <span className={cn(
                    "flex items-center transition-all duration-300",
                    userRole === 'teacher' ? "text-primary font-medium" : "text-muted-foreground"
                  )}>
                    <CoffeeIcon size={16} className="mr-2" />
                    Teacher
                  </span>
                  {userRole === 'teacher' && (
                    <SparkleIcon size={16} className="text-primary animate-pulse" />
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between py-2 px-4 rounded-xl text-sm font-medium"
                  onClick={() => setUserRole('admin')}
                >
                  <span className={cn(
                    "flex items-center transition-all duration-300",
                    userRole === 'admin' ? "text-primary font-medium" : "text-muted-foreground"
                  )}>
                    <ShieldIcon size={16} className="mr-2" />
                    Admin
                  </span>
                  {userRole === 'admin' && (
                    <SparkleIcon size={16} className="text-primary animate-pulse" />
                  )}
                </Button>
              </div>
            </div>

            <nav className="space-y-1 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all group relative overflow-hidden",
                    location.pathname === item.href
                      ? "text-primary-foreground bg-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  onClick={onClose}
                >
                  <span className={cn(
                    "mr-3 transition-all",
                    location.pathname === item.href
                      ? "text-primary-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {item.icon}
                  </span>
                  {item.label}
                  {location.pathname === item.href && (
                    <span className="absolute inset-0 bg-primary opacity-10 animate-pulse" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="pt-6 mt-6 border-t">
              <Link
                to="/settings"
                className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                onClick={onClose}
              >
                <SettingsIcon size={18} className="mr-3 text-muted-foreground group-hover:text-foreground" />
                Settings
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default Sidebar;
