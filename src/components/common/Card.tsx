import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
  padding = 'md',
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-sm';
  const paddingStyle = paddingStyles[padding];
  const hoverStyles = hoverable
    ? 'transition-shadow hover:shadow-md cursor-pointer'
    : '';

  const content = (
    <div className={`${baseStyles} ${paddingStyle} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );

  if (onClick) {
    return (
      <motion.div
        whileHover={hoverable ? { scale: 1.02 } : undefined}
        whileTap={hoverable ? { scale: 0.98 } : undefined}
        onClick={onClick}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}; 