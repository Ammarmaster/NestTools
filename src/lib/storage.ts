'use client';

const FAVORITES_KEY = 'toolnest_favorites';
const RECENT_TOOLS_KEY = 'toolnest_recent_tools';
const THEME_KEY = 'toolnest_theme';

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read favorites', e);
    return [];
  }
}

export function toggleFavorite(toolId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const current = getFavorites();
    const exists = current.includes(toolId);
    const updated = exists ? current.filter(id => id !== toolId) : [...current, toolId];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('favorites-updated'));
    return !exists;
  } catch (e) {
    console.error('Failed to toggle favorite', e);
    return false;
  }
}

export function isFavorite(toolId: string): boolean {
  if (typeof window === 'undefined') return false;
  const current = getFavorites();
  return current.includes(toolId);
}

export interface RecentToolItem {
  id: string;
  category: string;
  slug: string;
  name: string;
  icon: string;
  timestamp: number;
}

export function getRecentTools(): RecentToolItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(RECENT_TOOLS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read recent tools', e);
    return [];
  }
}

export function addRecentTool(tool: { id: string; category: string; slug: string; name: string; icon: string }): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getRecentTools().filter(item => item.id !== tool.id);
    const updated = [
      { ...tool, timestamp: Date.now() },
      ...current
    ].slice(0, 8); // Keep top 8
    localStorage.setItem(RECENT_TOOLS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('recent-tools-updated'));
  } catch (e) {
    console.error('Failed to save recent tool', e);
  }
}

export function getStoredTheme(): 'light' | 'dark' | 'system' {
  if (typeof window === 'undefined') return 'system';
  try {
    return (localStorage.getItem(THEME_KEY) as 'light' | 'dark' | 'system') || 'system';
  } catch (e) {
    return 'system';
  }
}

export function setStoredTheme(theme: 'light' | 'dark' | 'system'): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(THEME_KEY, theme);
    window.dispatchEvent(new Event('theme-updated'));
  } catch (e) {
    console.error('Failed to save theme', e);
  }
}
