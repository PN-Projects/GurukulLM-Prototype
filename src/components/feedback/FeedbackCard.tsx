
import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from '@/components/common/Avatar';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { 
  MessageSquareIcon, 
  ThumbsUpIcon,
  ThumbsDownIcon, 
  FlagIcon,
  EyeOffIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FeedbackCardProps {
  avatarSrc?: string;
  authorName?: string;
  anonymous?: boolean;
  date: string;
  content: string;
  rating: number; // 1-5
  tags?: string[];
  likesCount?: number;
  dislikesCount?: number;
  className?: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  avatarSrc,
  authorName,
  anonymous = false,
  date,
  content,
  rating,
  tags = [],
  likesCount = 0,
  dislikesCount = 0,
  className,
}) => {
  const [liked, setLiked] = React.useState(false);
  const [disliked, setDisliked] = React.useState(false);
  const [reportDialogOpen, setReportDialogOpen] = React.useState(false);
  
  const handleLike = () => {
    if (disliked) {
      setDisliked(false);
    }
    setLiked(!liked);
  };
  
  const handleDislike = () => {
    if (liked) {
      setLiked(false);
    }
    setDisliked(!disliked);
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-md",
      className
    )}>
      <CardHeader className="p-4 pb-0 flex flex-row items-start justify-between space-y-0">
        <div className="flex items-center space-x-3">
          {anonymous ? (
            <div className="relative">
              <Avatar 
                size="md" 
                className="opacity-80"
              />
              <span className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-0.5">
                <EyeOffIcon size={12} className="text-gray-500" />
              </span>
            </div>
          ) : (
            <Avatar 
              src={avatarSrc} 
              name={authorName || "Anonymous"} 
              size="md" 
            />
          )}
          <div>
            <h4 className="font-medium text-sm">
              {anonymous ? "Anonymous" : authorName || "Anonymous"}
            </h4>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span 
              key={i} 
              className={cn(
                "text-lg",
                i < rating ? "text-amber-400" : "text-gray-300 dark:text-gray-600"
              )}
            >
              ★
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4 text-sm">
        <p className="whitespace-pre-line">{content}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center border-t">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "flex items-center space-x-1 text-xs",
              liked && "text-blue-500"
            )}
            onClick={handleLike}
          >
            <ThumbsUpIcon size={14} />
            <span>{liked ? likesCount + 1 : likesCount}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "flex items-center space-x-1 text-xs",
              disliked && "text-red-500"
            )}
            onClick={handleDislike}
          >
            <ThumbsDownIcon size={14} />
            <span>{disliked ? dislikesCount + 1 : dislikesCount}</span>
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 text-xs"
          >
            <MessageSquareIcon size={14} />
            <span>Reply</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 text-xs text-muted-foreground"
            onClick={() => setReportDialogOpen(true)}
          >
            <FlagIcon size={14} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
