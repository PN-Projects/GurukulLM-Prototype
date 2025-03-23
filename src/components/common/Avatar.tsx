
import React from 'react';
import { Avatar as UIAvatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { UserIcon } from 'lucide-react';

interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
  animation?: 'pulse' | 'bounce' | 'float' | 'none';
  border?: boolean;
  borderColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  status,
  className,
  animation = 'none',
  border = false,
  borderColor,
}) => {
  const getInitials = (name?: string) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = getInitials(name);

  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-14 w-14 text-base',
    xl: 'h-20 w-20 text-lg',
  };

  const statusClasses = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    float: 'animate-float',
    none: '',
  };

  const borderClasses = border
    ? `ring-2 ${borderColor || 'ring-background'} ring-offset-2 ring-offset-background`
    : '';

  return (
    <div className={cn('relative inline-block', animation && animationClasses[animation])}>
      <UIAvatar
        className={cn(
          sizeClasses[size],
          borderClasses,
          'transition-all duration-300 ease-in-out',
          className
        )}
      >
        <AvatarImage
          src={src}
          alt={name || 'Avatar'}
          className="object-cover transition-opacity duration-300 ease-in-out"
          onLoadingStatusChange={(status) => {
            if (status === 'loaded') {
              // Successfully loaded image
            }
          }}
        />
        <AvatarFallback
          className="bg-primary/10 text-primary-foreground flex items-center justify-center font-medium"
          delayMs={600}
        >
          {initials || <UserIcon className="w-4/6 h-4/6 opacity-80" />}
        </AvatarFallback>
      </UIAvatar>
      
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-background',
            statusClasses[status],
            status === 'online' && 'animate-ping-slow'
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
