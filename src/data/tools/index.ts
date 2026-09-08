import { CategoryId, ToolDefinition } from '@/types/tool';
import { STUDENT_TOOLS } from './student';
import { CAREER_TOOLS } from './career';
import { DEVELOPER_TOOLS } from './developer';
import { TEXT_TOOLS } from './text';
import { MATH_TOOLS } from './math';
import { DATE_TOOLS } from './date';
import { CONVERTER_TOOLS } from './converter';
import { FINANCE_TOOLS } from './finance';
import { pdfTools } from './pdf';
import { getGeneratedTools } from './catalog-builder';

export const ALL_TOOLS: ToolDefinition[] = [
  ...STUDENT_TOOLS,
  ...CAREER_TOOLS,
  ...DEVELOPER_TOOLS,
  ...TEXT_TOOLS,
  ...MATH_TOOLS,
  ...DATE_TOOLS,
  ...CONVERTER_TOOLS,
  ...FINANCE_TOOLS,
  ...pdfTools,
  ...getGeneratedTools(),
];

// Fast lookup maps
const toolBySlugMap = new Map<string, ToolDefinition>();
const toolByIdMap = new Map<string, ToolDefinition>();
const toolsByCategoryMap = new Map<CategoryId, ToolDefinition[]>();

ALL_TOOLS.forEach((tool) => {
  toolBySlugMap.set(`${tool.category}/${tool.slug}`, tool);
  toolByIdMap.set(tool.id, tool);
  
  const catList = toolsByCategoryMap.get(tool.category) || [];
  catList.push(tool);
  toolsByCategoryMap.set(tool.category, catList);
});

export function getToolBySlug(category: string, slug: string): ToolDefinition | undefined {
  return toolBySlugMap.get(`${category}/${slug}`);
}

export function getToolById(id: string): ToolDefinition | undefined {
  return toolByIdMap.get(id);
}

export function getToolsByCategory(category: CategoryId): ToolDefinition[] {
  return toolsByCategoryMap.get(category) || [];
}

export function getPopularTools(): ToolDefinition[] {
  return ALL_TOOLS.filter((t) => t.popular);
}

export function getFeaturedTools(): ToolDefinition[] {
  return ALL_TOOLS.filter((t) => t.featured);
}

export function getRelatedTools(tool: ToolDefinition, limit: number = 4): ToolDefinition[] {
  const related: ToolDefinition[] = [];
  
  // 1. By explicit related IDs
  if (tool.relatedToolIds && tool.relatedToolIds.length > 0) {
    for (const relId of tool.relatedToolIds) {
      const found = toolByIdMap.get(relId);
      if (found && found.id !== tool.id && !related.some(r => r.id === found.id)) {
        related.push(found);
      }
      if (related.length >= limit) break;
    }
  }
  
  // 2. Fill with tools from the same category if needed
  if (related.length < limit) {
    const sameCat = getToolsByCategory(tool.category);
    for (const t of sameCat) {
      if (t.id !== tool.id && !related.some(r => r.id === t.id)) {
        related.push(t);
      }
      if (related.length >= limit) break;
    }
  }
  
  return related.slice(0, limit);
}

export function searchTools(query: string): ToolDefinition[] {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();
  
  return ALL_TOOLS.filter((tool) => {
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.slug.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });
}
