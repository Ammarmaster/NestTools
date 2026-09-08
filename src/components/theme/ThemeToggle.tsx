'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Laptop } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme, isDark } = useTheme();

  return (
    <div className={`flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-100 p-1 dark:border-zinc-800 dark:bg-zinc-900 ${className}`}>
      <button
        type="button"
        onClick={() => setTheme('light')}
        title="Light Mode"
        className={`rounded-full p-1.5 transition-colors ${
          theme === 'light'
            ? 'bg-white text-amber-500 shadow-xs dark:bg-zinc-800'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        title="Dark Mode"
        className={`rounded-full p-1.5 transition-colors ${
          theme === 'dark'
            ? 'bg-white text-indigo-400 shadow-xs dark:bg-zinc-800 dark:text-indigo-400'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('system')}
        title="System Preference"
        className={`rounded-full p-1.5 transition-colors ${
          theme === 'system'
            ? 'bg-white text-zinc-800 shadow-xs dark:bg-zinc-800 dark:text-zinc-100'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }`}
        aria-label="System theme"
      >
        <Laptop className="h-4 w-4" />
      </button>
    </div>
  );
};
