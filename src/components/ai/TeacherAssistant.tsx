
import React, { useState, useRef, useEffect } from 'react';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  BrainIcon, 
  SendIcon, 
  MicIcon, 
  PencilIcon, 
  ClipboardCheckIcon,
  GraduationCapIcon,
  BarChart3Icon,
  HelpCircleIcon,
  CheckCircleIcon,
  PlusIcon,
  FileTextIcon,
  ImageIcon
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import Badge from '@/components/common/Badge';
import { Avatar } from '@/components/ui/avatar';

interface InstructorMessage {
  id: string;
  text: string;
  sender: 'instructor' | 'assistant';
  timestamp: Date;
  category?: 'analysis' | 'recommendation' | 'general';
}

const TeacherAssistant: React.FC = () => {
  const [currentView, setCurrentView] = useState('discussion');
  const [messageInput, setMessageInput] = useState('');
  const [assessmentText, setAssessmentText] = useState('');
  const [pupilName, setPupilName] = useState('');
  const [conversation, setConversation] = useState<InstructorMessage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const conversationEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set welcome message
    if (conversation.length === 0) {
      setConversation([
        {
          id: crypto.randomUUID(),
          text: "Welcome to your teaching assistant. I can help with assessment grading, curriculum planning, and instructional insights.",
          sender: 'assistant',
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    scrollToLatestMessage();
  }, [conversation]);

  const scrollToLatestMessage = () => {
    conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    
    const instructorMessage: InstructorMessage = {
      id: crypto.randomUUID(),
      text: messageInput,
      sender: 'instructor',
      timestamp: new Date(),
    };
    
    setConversation(prev => [...prev, instructorMessage]);
    setMessageInput('');
    setIsProcessing(true);
    
    // Generate response
    setTimeout(() => {
      const assistantMessage: InstructorMessage = {
        id: crypto.randomUUID(),
        text: generateAssistantResponse(),
        sender: 'assistant',
        timestamp: new Date(),
        category: 'general',
      };
      
      setConversation(prev => [...prev, assistantMessage]);
      setIsProcessing(false);
    }, 1500);
  };

  const handleAssessWork = () => {
    if (assessmentText.trim() === '' || pupilName.trim() === '') return;
    
    const instructorMessage: InstructorMessage = {
      id: crypto.randomUUID(),
      text: `Please assess this work by ${pupilName}:\n\n${assessmentText}`,
      sender: 'instructor',
      timestamp: new Date(),
    };
    
    setConversation(prev => [...prev, instructorMessage]);
    setAssessmentText('');
    setPupilName('');
    setCurrentView('discussion');
    setIsProcessing(true);
    
    // Generate assessment
    setTimeout(() => {
      const assessmentResult: InstructorMessage = {
        id: crypto.randomUUID(),
        text: generateAssessmentFeedback(pupilName),
        sender: 'assistant',
        timestamp: new Date(),
        category: 'analysis',
      };
      
      setConversation(prev => [...prev, assessmentResult]);
      setIsProcessing(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && currentView === 'discussion') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Unique response generators
  const generateAssistantResponse = (): string => {
    const responses = [
      "I can help develop custom lesson sequences based on your teaching philosophy and student needs.",
      "I've examined the class performance data and have insights on areas where intervention might be beneficial.",
      "Based on recent assessments, here are some engagement strategies to consider for your upcoming lessons.",
      "The data shows these specific learning gaps that could be addressed with targeted activities.",
      "Let me help streamline your assessment workflow while providing meaningful student feedback.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateAssessmentFeedback = (name: string): string => {
    return `## Assessment for ${name}\n\n` +
      `**Overall Evaluation: B+ (88%)**\n\n` +
      `**Strengths:**\n` +
      `- Demonstrates solid conceptual understanding\n` +
      `- Well-structured presentation of ideas\n` +
      `- Effective use of supporting examples\n\n` +
      `**Areas for Development:**\n` +
      `- Could expand analytical depth\n` +
      `- Some claims would benefit from additional evidence\n` +
      `- Several minor grammar and style issues noted\n\n` +
      `**Suggested Feedback:**\n` +
      `"Your work shows good command of the material. To improve further, focus on developing deeper analysis and ensuring all assertions are well-supported. I've highlighted specific sections that could be enhanced."\n\n` +
      `**Learning Gap Identified:**\n` +
      `The student may benefit from additional support with critical thinking skills and proper citation methods.`;
  };

  return (
    <Card className="w-full h-[calc(100vh-10rem)] shadow-md flex flex-col border rounded-lg">
      <CardHeader className="px-4 py-3 border-b">
        <CardTitle className="text-lg flex items-center gap-2">
          <BrainIcon className="h-5 w-5 text-primary" />
          <span>Educational Assistant</span>
        </CardTitle>
      </CardHeader>
      
      <Tabs value={currentView} onValueChange={setCurrentView} className="flex flex-col flex-1">
        <div className="border-b">
          <TabsList className="justify-start rounded-none border-b bg-transparent px-4 h-12">
            <TabsTrigger
              value="discussion"
              className={cn(
                "rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-4 h-12",
                "transition-all duration-200"
              )}
            >
              Discussion
            </TabsTrigger>
            <TabsTrigger
              value="assessment"
              className={cn(
                "rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-4 h-12",
                "transition-all duration-200"
              )}
            >
              Assessment
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className={cn(
                "rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none px-4 h-12",
                "transition-all duration-200"
              )}
            >
              Resources
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="discussion" className="flex-1 flex flex-col data-[state=inactive]:hidden mt-0 p-0">
          <ScrollArea className="flex-1 px-4 py-2">
            <div className="space-y-4 py-2">
              {conversation.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3 group transition-all",
                    message.sender === 'assistant' ? "mr-10" : "ml-10 justify-end"
                  )}
                >
                  {message.sender === 'assistant' && (
                    <div className="bg-primary rounded-full p-1.5 mt-1 shrink-0">
                      <BrainIcon className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                  
                  <div
                    className={cn(
                      "rounded-xl px-4 py-2.5 text-sm relative max-w-[80%]",
                      message.sender === 'assistant' 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-primary text-primary-foreground ml-auto"
                    )}
                  >
                    {message.category === 'analysis' ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ 
                          __html: message.text
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\n\n/g, '<br/><br/>')
                            .replace(/^#{1,6}\s+(.+)$/gm, '<h4>$1</h4>')
                            .replace(/^- (.+)$/gm, '<li>$1</li>')
                            .replace(/<li>/g, '<ul><li>')
                            .replace(/<\/li>/g, '</li></ul>')
                            .replace(/<\/ul><ul>/g, '')
                        }} />
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{message.text}</div>
                    )}
                    
                    <div 
                      className={cn(
                        "text-[10px] mt-1",
                        message.sender === 'assistant' 
                          ? "text-accent-foreground/60" 
                          : "text-primary-foreground/70"
                      )}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    
                    {message.sender === 'assistant' && (
                      <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                        <Button variant="outline" size="icon" className="h-6 w-6 rounded-full bg-background">
                          <PencilIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {message.sender === 'instructor' && (
                    <div className="bg-secondary rounded-full p-1.5 mt-1 shrink-0">
                      <Avatar className="h-4 w-4">
                        <img src="/placeholder.svg" alt="Instructor" />
                      </Avatar>
                    </div>
                  )}
                </div>
              ))}
              
              {isProcessing && (
                <div className="flex items-start gap-3 mr-10 animate-pulse">
                  <div className="bg-primary rounded-full p-1.5 mt-1">
                    <BrainIcon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-xl bg-accent px-4 py-3 text-sm flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 bg-accent-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="h-2 w-2 bg-accent-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              )}
              
              <div ref={conversationEndRef} />
            </div>
          </ScrollArea>
          
          <CardFooter className="p-4 border-t flex flex-row gap-2">
            <div className="flex flex-grow items-center relative">
              <Input
                className="pr-20"
                placeholder="Message your educational assistant..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <div className="absolute right-2 flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                >
                  <MicIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleSendMessage}
                  disabled={messageInput.trim() === ''}
                >
                  <SendIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardFooter>
        </TabsContent>
        
        <TabsContent value="assessment" className="flex-1 flex flex-col data-[state=inactive]:hidden mt-0 p-4">
          <ScrollArea className="flex-1">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Pupil Name</label>
                <Input 
                  placeholder="Enter pupil name" 
                  value={pupilName}
                  onChange={(e) => setPupilName(e.target.value)}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Work to Assess</label>
                <Textarea
                  placeholder="Paste pupil's work here..."
                  className="min-h-[200px]"
                  value={assessmentText}
                  onChange={(e) => setAssessmentText(e.target.value)}
                />
              </div>
              
              <Button
                className="w-full"
                onClick={handleAssessWork}
                disabled={assessmentText.trim() === '' || pupilName.trim() === ''}
              >
                <ClipboardCheckIcon className="h-4 w-4 mr-2" />
                Generate Assessment
              </Button>
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="resources" className="flex-1 flex flex-col data-[state=inactive]:hidden mt-0 p-4">
          <ScrollArea className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6 pb-4 flex items-center gap-3">
                  <div className="bg-primary/10 rounded-md p-2">
                    <GraduationCapIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Curriculum Builder</h3>
                    <p className="text-xs text-muted-foreground">Develop comprehensive lesson sequences</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6 pb-4 flex items-center gap-3">
                  <div className="bg-primary/10 rounded-md p-2">
                    <ClipboardCheckIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Bulk Assessment</h3>
                    <p className="text-xs text-muted-foreground">Process multiple submissions efficiently</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6 pb-4 flex items-center gap-3">
                  <div className="bg-primary/10 rounded-md p-2">
                    <BarChart3Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Learning Analytics</h3>
                    <p className="text-xs text-muted-foreground">Visualize pupil progress data</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6 pb-4 flex items-center gap-3">
                  <div className="bg-primary/10 rounded-md p-2">
                    <HelpCircleIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Study Guide Creator</h3>
                    <p className="text-xs text-muted-foreground">Generate comprehensive learning resources</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default TeacherAssistant;
