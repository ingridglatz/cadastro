import { useMemo } from 'react';
import { cn } from '../lib/utils';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  label?: string;
  type?: 'text' | 'password' | 'email';
  name: string;
  errorMessage?: string;
  className?: string;
};

export function Input({ label, type, name, className, errorMessage }: InputProps) {
  const form = useFormContext();

  const id = useMemo(() => Math.random().toString(36).substring(2), []);

  return (
    <div>
      {label && (
        <div className="flex justify-between">
          <label htmlFor={id} className="text-sm font-normal mb-2 block">
            {label}
          </label>
        </div>
      )}
      <input
        type={type}
        id={id}
        className={cn(
          'py-1 px-3 bg-[#FFFFFF] rounded-md border border-[#D1D1D1] caret-black text-sm focus:outline-none focus:border focus:border-[#8234E9] transition-colors',
          className,
        )}
        {...form.register(name)}
      />
      {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
    </div>
  );
}
