import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart, 
  CalendarIcon, 
  ChevronDown, 
  FileText, 
  Plus, 
  Rocket, 
  UserRound, 
  Users2 
} from "lucide-react";

const TeacherDashboard: React.FC = () => {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Active Students
          </CardTitle>
          <Users2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12</div>
          <p className="text-black dark:text-white text-xs text-muted-foreground">
            Than last week
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            New Assignments
          </CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+4</div>
          <p className="text-black dark:text-white text-xs text-muted-foreground">
            Than last week
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Class Performance
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">85%</div>
          <p className="text-black dark:text-white text-xs text-muted-foreground">
            Overall student progress
          </p>
          <Progress 
            value={85} 
            className="h-2 w-full bg-muted"
          />
        </CardContent>
      </Card>
      
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Track overall class performance and identify areas for improvement.
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <BarChart className="h-[200px] w-full" />
        </CardContent>
      </Card>
      
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Midterm Exam</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Guest Lecture</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Student Spotlight</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg" alt="Student Avatar" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="mt-4 text-center">
            <p className="font-medium">Jane Doe</p>
            <p className="text-sm text-muted-foreground">
              Outstanding performance in recent assignment.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboard;
