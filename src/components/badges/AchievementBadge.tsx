
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  BrainIcon, 
  CheckCircleIcon, 
  AwardIcon,
  BookOpenIcon,
  GraduationCapIcon,
  LightbulbIcon,
  StarIcon,
  TrophyIcon,
  ZapIcon,
  RocketIcon,
  FlameIcon
} from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';

type BadgeType = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'blue' 
  | 'green' 
  | 'purple';

interface AchievementBadgeProps {
  type: BadgeType;
  icon?: React.ReactNode;
  title: string;
  description: string;
  unlocked?: boolean;
  progress?: number;
  className?: string;
}

const icons = {
  brain: <BrainIcon />,
  checkCircle: <CheckCircleIcon />,
  award: <AwardIcon />,
  book: <BookOpenIcon />,
  graduation: <GraduationCapIcon />,
  lightbulb: <LightbulbIcon />,
  star: <StarIcon />,
  trophy: <TrophyIcon />,
  zap: <ZapIcon />,
  rocket: <RocketIcon />,
  flame: <FlameIcon />
};

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  type,
  icon,
  title,
  description,
  unlocked = false,
  progress = 0,
  className,
}) => {
  const typeClasses = {
    gold: 'bg-badge-gold/20 text-amber-600 dark:text-amber-400 border-badge-gold/60',
    silver: 'bg-badge-silver/20 text-slate-600 dark:text-slate-300 border-badge-silver/60',
    bronze: 'bg-badge-bronze/20 text-amber-800 dark:text-amber-500 border-badge-bronze/60',
    blue: 'bg-badge-blue/20 text-blue-600 dark:text-blue-400 border-badge-blue/60',
    green: 'bg-badge-green/20 text-emerald-600 dark:text-emerald-400 border-badge-green/60',
    purple: 'bg-badge-purple/20 text-purple-600 dark:text-purple-400 border-badge-purple/60',
  };

  const borderGlowClasses = {
    gold: 'shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    silver: 'shadow-[0_0_15px_rgba(148,163,184,0.2)]',
    bronze: 'shadow-[0_0_15px_rgba(180,83,9,0.2)]',
    blue: 'shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    green: 'shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    purple: 'shadow-[0_0_15px_rgba(139,92,246,0.2)]',
  };

  const getIconComponent = (iconName: keyof typeof icons) => {
    return icons[iconName] || <AwardIcon />;
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div 
            className={cn(
              'relative flex flex-col items-center justify-center w-20 h-20 rounded-lg border-2',
              typeClasses[type],
              unlocked ? borderGlowClasses[type] : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700',
              'transition-all duration-500 ease-in-out',
              'hover:scale-105 cursor-pointer',
              className
            )}
          >
            <div className={cn(
              'flex items-center justify-center h-10 w-10 rounded-full',
              unlocked ? `bg-white dark:bg-gray-800 ${typeClasses[type]}` : 'bg-gray-200 dark:bg-gray-700'
            )}>
              <div className={cn(
                'w-6 h-6',
                !unlocked && 'opacity-30'
              )}>
                {icon || <AwardIcon size={24} />}
              </div>
            </div>
            
            {!unlocked && progress > 0 && (
              <>
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-b-md overflow-hidden">
                  <div 
                    className={cn(
                      'h-full rounded-b-md transition-all duration-1000',
                      unlocked ? 'bg-opacity-100' : 'bg-opacity-70',
                      type === 'gold' ? 'bg-amber-500' : 
                      type === 'silver' ? 'bg-slate-400' : 
                      type === 'bronze' ? 'bg-amber-600' :
                      type === 'blue' ? 'bg-blue-500' : 
                      type === 'green' ? 'bg-emerald-500' : 
                      'bg-purple-500'
                    )}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="absolute bottom-2 text-xs font-medium">{progress}%</span>
              </>
            )}
            
            {unlocked && (
              <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5 border border-white dark:border-gray-700">
                <CheckCircleIcon size={14} className="text-green-500" />
              </div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          align="center" 
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 shadow-lg rounded-lg max-w-xs"
        >
          <div className="text-center">
            <h4 className={cn(
              "font-semibold mb-1",
              !unlocked && "text-gray-500"
            )}>
              {title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {description}
            </p>
            {!unlocked && progress > 0 && (
              <p className="text-xs font-medium mt-1 text-gray-600 dark:text-gray-300">
                Progress: {progress}%
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AchievementBadge;
