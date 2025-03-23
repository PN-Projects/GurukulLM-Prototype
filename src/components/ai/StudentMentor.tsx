
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
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  BrainIcon, 
  SendIcon, 
  MicIcon, 
  SaveIcon, 
  SettingsIcon,
  PlusIcon,
  FileTextIcon,
  ImageIcon,
  RefreshCwIcon,
  PauseIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'student' | 'mentor';
  timestamp: Date;
}

const StudentMentor: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [voiceActive, setVoiceActive] = useState(false);
  const [processingResponse, setProcessingResponse] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Initial greeting
    if (chatHistory.length === 0) {
      setChatHistory([
        {
          id: crypto.randomUUID(),
          text: "Welcome! I'm your dedicated learning mentor. How can I assist with your studies today?",
          sender: 'mentor',
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;
    
    // Add student message
    const studentMessage: ChatMessage = {
      id: crypto.randomUUID(),
      text: userInput,
      sender: 'student',
      timestamp: new Date(),
    };
    
    setChatHistory(prev => [...prev, studentMessage]);
    setUserInput('');
    setProcessingResponse(true);
    
    // Generate mentor response after delay
    setTimeout(() => {
      const mentorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        text: generateMentorResponse(userInput),
        sender: 'mentor',
        timestamp: new Date(),
      };
      
      setChatHistory(prev => [...prev, mentorMessage]);
      setProcessingResponse(false);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceInput = () => {
    setVoiceActive(!voiceActive);
  };

  // Unique response generation
  const generateMentorResponse = (query: string): string => {
    const responses = [
      "That's an interesting question! Let me guide you through this concept in detail.",
      "I understand your question. Here's how we can approach this learning challenge.",
      "Great inquiry! This is how I'd recommend understanding this topic better.",
      "Let's break down this concept into manageable parts for better comprehension.",
      "I think we can tackle this by exploring these key aspects first.",
      "Have you considered approaching this from a different perspective? Let me show you.",
      "I'd be happy to walk you through this step-by-step.",
      "Your question touches on an important area. Let's develop your understanding further.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <Card className="w-full h-[calc(100vh-10rem)] flex flex-col overflow-hidden border rounded-lg shadow-md">
      <CardHeader className="border-b px-4 py-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <BrainIcon className="h-5 w-5 text-primary" />
          <span>Learning Companion</span>
        </CardTitle>
      </CardHeader>
      
      <ScrollArea className="flex-1 px-4 py-2">
        <div className="space-y-4 py-2">
          {chatHistory.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3 group",
                message.sender === 'mentor' ? "mr-10" : "ml-10 justify-end"
              )}
            >
              {message.sender === 'mentor' && (
                <div className="bg-primary rounded-full p-1.5 mt-1">
                  <BrainIcon className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              
              <div
                className={cn(
                  "rounded-xl px-4 py-2.5 text-sm relative group max-w-[80%]",
                  message.sender === 'mentor' 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-primary text-primary-foreground ml-auto"
                )}
              >
                <div className="mb-1 whitespace-pre-wrap">{message.text}</div>
                <div 
                  className={cn(
                    "text-[10px] mt-1",
                    message.sender === 'mentor' 
                      ? "text-accent-foreground/60" 
                      : "text-primary-foreground/70"
                  )}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                
                {message.sender === 'mentor' && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="icon" className="h-6 w-6 rounded-full bg-background">
                      <SaveIcon className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
              
              {message.sender === 'student' && (
                <div className="bg-secondary rounded-full p-1.5 mt-1">
                  <Avatar className="h-4 w-4">
                    <img src="/placeholder.svg" alt="Student" />
                  </Avatar>
                </div>
              )}
            </div>
          ))}
          
          {processingResponse && (
            <div className="flex items-start gap-3 mr-10 group animate-pulse">
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
          
          <div ref={chatEndRef} />
        </div>
      </ScrollArea>
      
      <CardFooter className="p-4 border-t flex flex-col gap-4">
        <div className="w-full flex flex-row gap-2">
          <Button variant="outline" size="icon" className="shrink-0">
            <PlusIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="shrink-0">
            <FileTextIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="shrink-0">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <div className="flex flex-grow items-center relative">
            <Input
              ref={inputFieldRef}
              className="pr-20"
              placeholder="Ask your learning companion..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="absolute right-2 flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-8 w-8",
                  voiceActive && "text-red-500"
                )}
                onClick={toggleVoiceInput}
              >
                {voiceActive ? <PauseIcon className="h-4 w-4" /> : <MicIcon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleSendMessage}
                disabled={userInput.trim() === '' && !voiceActive}
              >
                <SendIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <SettingsIcon className="h-4 w-4" />
          </Button>
        </div>
        
        {voiceActive && (
          <div className="w-full flex items-center justify-center space-x-2 py-2 bg-red-50 dark:bg-red-900/20 rounded-md">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-red-500 font-medium">Recording voice input...</span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default StudentMentor;
