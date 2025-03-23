
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge as UIBadge } from '@/components/ui/badge';
import { 
  AwardIcon, 
  StarIcon, 
  TrophyIcon, 
  CheckCircleIcon,
  RocketIcon,
  ZapIcon,
  BrainIcon,
  HeartIcon,
  GraduationCapIcon
} from 'lucide-react';

export type BadgeType = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'neutral';

export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  type?: BadgeType;
  size?: BadgeSize;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  type = 'neutral',
  size = 'md',
  label,
  icon,
  className,
  glow = false,
  onClick,
}) => {
  const getDefaultIcon = () => {
    switch (type) {
      case 'gold':
        return <TrophyIcon size={14} />;
      case 'silver':
        return <StarIcon size={14} />;
      case 'bronze':
        return <AwardIcon size={14} />;
      case 'blue':
        return <CheckCircleIcon size={14} />;
      case 'green':
        return <RocketIcon size={14} />;
      case 'purple':
        return <BrainIcon size={14} />;
      default:
        return <GraduationCapIcon size={14} />;
    }
  };

  const typeClasses = {
    gold: 'bg-badge-gold/20 text-amber-700 dark:text-amber-400 border-badge-gold/30',
    silver: 'bg-badge-silver/20 text-slate-600 dark:text-slate-300 border-badge-silver/30',
    bronze: 'bg-badge-bronze/20 text-amber-800 dark:text-amber-600 border-badge-bronze/30',
    blue: 'bg-badge-blue/20 text-blue-700 dark:text-blue-400 border-badge-blue/30',
    green: 'bg-badge-green/20 text-emerald-700 dark:text-emerald-400 border-badge-green/30',
    purple: 'bg-badge-purple/20 text-purple-700 dark:text-purple-400 border-badge-purple/30',
    neutral: 'bg-secondary text-secondary-foreground border-border',
  };

  const sizeClasses = {
    sm: 'text-xs py-0 px-2 h-5',
    md: 'text-xs py-0.5 px-2.5 h-6',
    lg: 'text-sm py-1 px-3 h-8',
  };

  const glowClasses = {
    gold: 'shadow-[0_0_8px_rgba(245,158,11,0.5)]',
    silver: 'shadow-[0_0_8px_rgba(148,163,184,0.5)]',
    bronze: 'shadow-[0_0_8px_rgba(180,83,9,0.5)]',
    blue: 'shadow-[0_0_8px_rgba(59,130,246,0.5)]',
    green: 'shadow-[0_0_8px_rgba(16,185,129,0.5)]',
    purple: 'shadow-[0_0_8px_rgba(139,92,246,0.5)]',
    neutral: 'shadow-[0_0_8px_rgba(156,163,175,0.3)]',
  };

  return (
    <UIBadge
      variant="outline"
      className={cn(
        'gap-1 font-medium border',
        typeClasses[type],
        sizeClasses[size],
        glow && glowClasses[type],
        onClick && 'cursor-pointer hover:opacity-90 active:opacity-80',
        'transition-all duration-300 ease-in-out',
        className
      )}
      onClick={onClick}
    >
      {icon || getDefaultIcon()}
      {label}
    </UIBadge>
  );
};

export default Badge;
