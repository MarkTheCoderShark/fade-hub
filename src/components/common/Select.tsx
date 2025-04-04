import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<HTMLMotionProps<'select'>, 'children'> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  leftIcon?: React.ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, options, leftIcon, className = '', ...props }, ref) => {
    const baseSelectStyles =
      'w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400';
    const errorStyles = error
      ? 'border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400'
      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400';
    const iconStyles = leftIcon ? 'pl-10' : '';

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}
          <motion.select
            ref={ref}
            className={`${baseSelectStyles} ${errorStyles} ${iconStyles} ${className}`}
            initial={false}
            animate={{
              borderColor: error ? '#EF4444' : '#D1D5DB',
            }}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </motion.select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {(error || helperText) && (
          <motion.p
            className={`text-sm ${
              error ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    );
  }
); 