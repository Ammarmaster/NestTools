'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid, Search, Heart, Sparkles, FolderOpen } from 'lucide-react';
import { getFavorites } from '@/lib/storage';
import { SearchModal } from '@/components/search/SearchModal';

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const updateFavs = () => {
      setFavoriteCount(getFavorites().length);
    };
    updateFavs();
    window.addEventListener('favorites-updated', updateFavs);
    return () => window.removeEventListener('favorites-updated', updateFavs);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', icon: Home, isActive: pathname === '/' },
    { label: 'All Tools', href: '/tools', icon: Grid, isActive: pathname === '/tools' },
    {
      label: 'Search',
      onClick: () => setIsSearchOpen(true),
      icon: Search,
      isSpecial: true,
    },
    {
      label: 'PDF Tools',
      href: '/pdf',
      icon: FolderOpen,
      isActive: pathname.startsWith('/pdf'),
    },
    {
      label: 'Favorites',
      href: '/tools?filter=favorites',
      icon: Heart,
      badge: favoriteCount,
      isActive: pathname === '/tools' && typeof window !== 'undefined' && window.location.search.includes('favorites'),
    },
  ];

  return (
    <>
      <nav 
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 block md:hidden border-t border-zinc-200/80 bg-white/90 pb-safe backdrop-blur-lg dark:border-zinc-800/80 dark:bg-zinc-950/90 shadow-lg"
      >
        <div className="flex h-16 items-center justify-around px-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.onClick) {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onClick}
                  className="flex flex-col items-center justify-center gap-1 px-3 py-1 text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 focus:outline-hidden"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20 active:scale-95 transition-transform">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-tight text-zinc-700 dark:text-zinc-300">
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || '/'}
                className={`relative flex flex-col items-center justify-center gap-1 px-3 py-1.5 transition-colors focus:outline-hidden ${
                  item.isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                <div className="relative">
                  <Icon className={`h-5 w-5 ${item.isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                  {Boolean(item.badge && item.badge > 0) && (
                    <span className="absolute -top-1 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] tracking-tight ${item.isActive ? 'font-bold' : 'font-medium'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Global Search Dialog for mobile */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
