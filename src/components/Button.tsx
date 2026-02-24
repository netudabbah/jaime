import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  as?: 'button' | 'span';
} & ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLSpanElement>;

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 border border-brand-600',
  secondary:
    'bg-white text-ink-900 border border-slate-300 hover:border-slate-400',
  ghost:
    'bg-transparent text-ink-900 border border-slate-300 hover:border-slate-400',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  as = 'button',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${variants[variant]} ${className}`;

  if (as === 'span') {
    return (
      <span className={classes} {...(props as HTMLAttributes<HTMLSpanElement>)}>
        {children}
      </span>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
