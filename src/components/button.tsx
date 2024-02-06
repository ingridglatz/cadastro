import { cn } from '../lib/utils';

type ButtonProps = {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
};

export function Button({ type, children, className }: ButtonProps) {
  return (
    <>
      <button
        type={type}
        className={cn(
          'px-2 py-1.5 disabled:bg-[#c1c1c1] bg-[#8234E9] text-sm text-white font-normal rounded-md border transition-colors hover:bg-[#FFFFF]',
          className,
        )}
      >
        {children}
      </button>
    </>
  );
}
