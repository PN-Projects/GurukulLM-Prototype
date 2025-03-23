
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import FeedbackCard from '@/components/feedback/FeedbackCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  MessageSquareIcon, 
  FilterIcon, 
  SearchIcon, 
  PlusIcon 
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const feedbacks = [
  {
    id: 1,
    authorName: 'Jessica Chen',
    avatarSrc: '/placeholder.svg',
    anonymous: false,
    date: 'Aug 12, 2023',
    content: "Professor Thompson's Machine Learning course was exceptional. The hands-on projects were challenging but extremely valuable for real-world applications. I especially appreciated the detailed feedback on assignments which helped me improve continuously.",
    rating: 5,
    tags: ['Machine Learning', 'Computer Science', 'Excellent Support'],
    likesCount: 24,
    dislikesCount: 1,
  },
  {
    id: 2,
    authorName: null,
    avatarSrc: null,
    anonymous: true,
    date: 'Jul 25, 2023',
    content: "The Advanced Database Systems course needs improvement. While the theoretical content was strong, there was a lack of practical examples and the assignments were often unclear. More structured lab sessions would help students apply the concepts better.",
    rating: 2,
    tags: ['Databases', 'Computer Science', 'Needs Improvement'],
    likesCount: 15,
    dislikesCount: 3,
  },
  {
    id: 3,
    authorName: 'Michael Johnson',
    avatarSrc: '/placeholder.svg',
    anonymous: false,
    date: 'Jun 18, 2023',
    content: "Dr. Rivera's AI Ethics seminar provides a balanced perspective on the societal implications of AI. The discussions were thought-provoking and the course materials were very current. I would recommend adding more case studies from non-Western contexts to broaden the perspective.",
    rating: 4,
    tags: ['AI Ethics', 'Philosophy', 'Well Structured'],
    likesCount: 32,
    dislikesCount: 0,
  },
  {
    id: 4,
    authorName: null,
    avatarSrc: null,
    anonymous: true,
    date: 'May 30, 2023',
    content: "The Introduction to Programming course moved too quickly for beginners. While the content was comprehensive, those without prior experience struggled to keep up. I suggest adding optional supplementary sessions for students who need extra help.",
    rating: 3,
    tags: ['Programming', 'Computer Science', 'Beginner Friendly'],
    likesCount: 8,
    dislikesCount: 2,
  },
];

const Feedback: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [ratingFilter, setRatingFilter] = useState<string>('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Filter feedbacks based on search and filters
  const filteredFeedbacks = feedbacks.filter(feedback => {
    const matchesSearch = searchQuery === '' || 
      feedback.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (feedback.authorName && feedback.authorName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      feedback.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRating = ratingFilter === '' || feedback.rating === parseInt(ratingFilter);
    
    // In a real app, this would filter by course
    const matchesCourse = selectedCourse === '';
    
    return matchesSearch && matchesRating && matchesCourse;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className={`pt-16 transition-all duration-300 ease-in-out ${!isMobile && sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="container mx-auto p-6">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Feedback Dashboard</h1>
              <p className="text-muted-foreground mt-1">Browse and submit feedback for courses and instructors</p>
            </div>
            
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="self-start md:self-auto">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Submit Feedback
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Submit Feedback</DialogTitle>
                  <DialogDescription>
                    Share your thoughts about a course or instructor. Your feedback helps improve the learning experience.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ml101">Machine Learning 101</SelectItem>
                        <SelectItem value="db202">Advanced Database Systems</SelectItem>
                        <SelectItem value="ai305">AI Ethics Seminar</SelectItem>
                        <SelectItem value="cs101">Introduction to Programming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="rating">Rating</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">★★★★★ Excellent</SelectItem>
                        <SelectItem value="4">★★★★☆ Great</SelectItem>
                        <SelectItem value="3">★★★☆☆ Good</SelectItem>
                        <SelectItem value="2">★★☆☆☆ Fair</SelectItem>
                        <SelectItem value="1">★☆☆☆☆ Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="feedback">Your Feedback</Label>
                    <Textarea 
                      id="feedback" 
                      placeholder="Share your experience, thoughts, and suggestions..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox 
                      id="anonymous" 
                      checked={isAnonymous}
                      onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                    />
                    <Label htmlFor="anonymous" className="text-sm font-normal">
                      Submit anonymously
                    </Label>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setDialogOpen(false)}>
                    Submit Feedback
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Filters and Search */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search feedbacks..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Courses</SelectItem>
                <SelectItem value="ml101">Machine Learning 101</SelectItem>
                <SelectItem value="db202">Advanced Database Systems</SelectItem>
                <SelectItem value="ai305">AI Ethics Seminar</SelectItem>
                <SelectItem value="cs101">Introduction to Programming</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Ratings</SelectItem>
                <SelectItem value="5">★★★★★ Only</SelectItem>
                <SelectItem value="4">★★★★☆ & Above</SelectItem>
                <SelectItem value="3">★★★☆☆ & Above</SelectItem>
                <SelectItem value="2">★★☆☆☆ & Above</SelectItem>
                <SelectItem value="1">★☆☆☆☆ & Above</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Feedback Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFeedbacks.length > 0 ? (
              filteredFeedbacks.map((feedback) => (
                <FeedbackCard
                  key={feedback.id}
                  avatarSrc={feedback.avatarSrc || undefined}
                  authorName={feedback.authorName || undefined}
                  anonymous={feedback.anonymous}
                  date={feedback.date}
                  content={feedback.content}
                  rating={feedback.rating}
                  tags={feedback.tags}
                  likesCount={feedback.likesCount}
                  dislikesCount={feedback.dislikesCount}
                />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <MessageSquareIcon className="h-12 w-12 text-muted-foreground/40 mb-4" />
                <h3 className="text-lg font-medium">No feedbacks found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your filters or search term</p>
              </div>
            )}
          </div>
          
          {filteredFeedbacks.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Feedback;
