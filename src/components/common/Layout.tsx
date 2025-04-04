'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-xl font-bold">
                FadeHub
              </a>
              <div className="hidden md:flex space-x-4">
                <a href="/marketplace" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Marketplace
                </a>
                <a href="/gallery" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Gallery
                </a>
                <a href="/profiles" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Profiles
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a
                href="/auth/sign-in"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Sign In
              </a>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-100 dark:bg-gray-800 mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About FadeHub</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connecting barbers and clients in a modern marketplace.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/marketplace" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/profiles" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      Profiles
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Email: support@fadehub.com
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} FadeHub. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}; 