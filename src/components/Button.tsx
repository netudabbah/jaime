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
    'bg-brand-500 text-white hover:bg-brand-600 shadow-glow hover:shadow-card border border-brand-500',
  secondary:
    'bg-white text-ink-900 border border-white/80 hover:border-brand-200 hover:text-brand-700 shadow-soft',
  ghost:
    'bg-transparent text-ink-900 border border-slate-300 hover:border-brand-300 hover:text-brand-700',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  as = 'button',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-tight transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

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
