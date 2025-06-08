
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'premium-button relative overflow-hidden font-semibold transition-all duration-300 ease-out',
          {
            'premium-button-primary': variant === 'primary',
            'premium-button-secondary': variant === 'secondary',
            'premium-button-ghost': variant === 'ghost',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        <span className="button-shimmer"></span>
        <span className="button-ripple"></span>
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

PremiumButton.displayName = 'PremiumButton';

export { PremiumButton };
