
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  BellIcon, 
  MessageSquareIcon, 
  SearchIcon,
  MenuIcon,
  XIcon,
  UserIcon,
  BookIcon,
  GraduationCapIcon,
  CoffeeIcon,
  UsersIcon,
  ShieldIcon
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, sidebarOpen }) => {
  const location = useLocation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background/80 backdrop-blur-md z-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="md:hidden"
          >
            {sidebarOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">G</div>
            </div>
            <span className="font-medium text-lg hidden md:block">GurukulLM</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Student Spaces</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[220px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/student/personal" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                          <UserIcon size={18} className="text-purple-500" />
                          <div>
                            <div className="font-medium">Personal Space</div>
                            <p className="text-xs text-muted-foreground">Private and personal access</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/learning" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                          <BookIcon size={18} className="text-blue-500" />
                          <div>
                            <div className="font-medium">Learning Space</div>
                            <p className="text-xs text-muted-foreground">Teacher-supervised learning</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Teacher Spaces</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[220px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/teacher/private" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                          <CoffeeIcon size={18} className="text-amber-500" />
                          <div>
                            <div className="font-medium">Private Space</div>
                            <p className="text-xs text-muted-foreground">Teacher's personal area</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/workspace" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                          <UsersIcon size={18} className="text-green-500" />
                          <div>
                            <div className="font-medium">Workspace</div>
                            <p className="text-xs text-muted-foreground">Public teacher workspace</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/admin" 
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      location.pathname === "/admin"
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    <ShieldIcon size={16} className="mr-1" />
                    Admin
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/dashboard" 
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      location.pathname === "/dashboard"
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <SearchIcon size={20} />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
            <BellIcon size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full animate-ping-slow" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground mr-2">
            <MessageSquareIcon size={20} />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full p-0 w-9 h-9">
                <Avatar className="h-9 w-9 transition transform hover:scale-105">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback className="bg-accent">
                    <UserIcon size={18} className="text-accent-foreground" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/student/personal" className="flex items-center w-full">Personal Space</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/learning" className="flex items-center w-full">Learning Space</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
