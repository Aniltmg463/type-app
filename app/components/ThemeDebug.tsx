'use client';

import { useTheme } from '../hooks/useTheme';
import { useState, useEffect } from 'react';

export default function ThemeDebug() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-lg">
        <div className="text-sm">
          <p className="font-semibold text-gray-900 dark:text-gray-100">Theme Debug</p>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }
  
  try {
    const { theme, toggleTheme } = useTheme();
    
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-lg">
        <div className="text-sm">
          <p className="font-semibold text-gray-900 dark:text-gray-100">Theme Debug</p>
          <p className="text-gray-600 dark:text-gray-400">Current: {theme}</p>
          <p className="text-gray-600 dark:text-gray-400">
            HTML Class: {typeof document !== 'undefined' ? document.documentElement.className : 'N/A'}
          </p>
          <button 
            onClick={toggleTheme}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-lg">
        <div className="text-sm">
          <p className="font-semibold text-gray-900 dark:text-gray-100">Theme Debug</p>
          <p className="text-red-600 dark:text-red-400">Error: {(error as Error).message}</p>
        </div>
      </div>
    );
  }
}