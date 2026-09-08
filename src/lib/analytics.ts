// ToolNest Analytics Abstraction
// Ready to plug into Google Analytics, Plausible, PostHog, or custom analytics endpoints

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackToolView(toolId: string, category: string): void {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics] Tool View: ${category}/${toolId}`);
  }
  // Optional future integration:
  // if (typeof window !== 'undefined' && (window as any).gtag) {
  //   (window as any).gtag('event', 'tool_view', { tool_id: toolId, category });
  // }
}

export function trackToolUse(toolId: string, actionName: string, extra?: EventParams): void {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics] Tool Used: ${toolId} - ${actionName}`, extra);
  }
}

export function trackCopy(toolId: string, targetContent: string): void {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics] Copy Action: ${toolId} (${targetContent})`);
  }
}

export function trackShare(toolId: string, method: string): void {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics] Share Action: ${toolId} via ${method}`);
  }
}

export function trackSearch(query: string, resultCount: number): void {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics] Search: "${query}" -> ${resultCount} results`);
  }
}

export function trackFavorite(toolId: string, isFavorited: boolean): void {
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics] Favorite: ${toolId} (${isFavorited ? 'added' : 'removed'})`);
  }
}
