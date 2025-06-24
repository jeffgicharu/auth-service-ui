// src/components/ui/input.tsx
'use client';
import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

// Extend the props to include our new visibility toggle props
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showVisibilityToggle?: boolean;
  isPasswordVisible?: boolean;
  onVisibilityChange?: (isVisible: boolean) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, showVisibilityToggle, isPasswordVisible, onVisibilityChange, ...props },
    ref
  ) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            showVisibilityToggle ? 'pr-10' : ''
          } ${className}`}
          ref={ref}
          {...props}
        />
        {showVisibilityToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => onVisibilityChange?.(!isPasswordVisible)}
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
          >
            {isPasswordVisible ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };