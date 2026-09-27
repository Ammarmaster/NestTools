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
import { synthesizeDynamicTool } from './dynamic-synthesizer';

const curatedTools: ToolDefinition[] = [
  ...STUDENT_TOOLS,
  ...CAREER_TOOLS,
  ...DEVELOPER_TOOLS,
  ...TEXT_TOOLS,
  ...MATH_TOOLS,
  ...DATE_TOOLS,
  ...CONVERTER_TOOLS,
  ...FINANCE_TOOLS,
  ...pdfTools,
];

const curatedSlugs = new Set(curatedTools.map((t) => `${t.category}/${t.slug}`));

const nonConflictingGenerated = getGeneratedTools().filter(
  (t) => !curatedSlugs.has(`${t.category}/${t.slug}`)
);

export const ALL_TOOLS: ToolDefinition[] = [...curatedTools, ...nonConflictingGenerated];

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

// URL Aliases mapping natural short queries to curated slugs & vice versa
const SLUG_ALIASES: Record<string, string> = {
  // sqmm to sqft
  'converter/sqmm-to-sqft': 'converter/sq-mm-to-sq-ft',
  'converter/sqft-to-sqmm': 'converter/sq-ft-to-sq-mm',
  'converter/sq-mm-to-sq-ft': 'converter/sqmm-to-sqft',
  'converter/sq-ft-to-sq-mm': 'converter/sqft-to-sqmm',
  // sqm to sqft
  'converter/sqm-to-sqft': 'converter/sq-m-to-sq-ft',
  'converter/sqft-to-sqm': 'converter/sq-ft-to-sq-m',
  'converter/sq-m-to-sq-ft': 'converter/sqm-to-sqft',
  'converter/sq-ft-to-sq-m': 'converter/sqft-to-sqm',
  // gaj to sqft
  'converter/gaj-to-sqft': 'converter/gaj-to-sq-ft',
  'converter/sqft-to-gaj': 'converter/sq-ft-to-gaj',
  'converter/gaj-to-sq-ft': 'converter/gaj-to-sqft',
  'converter/sq-ft-to-gaj': 'converter/sqft-to-gaj',
  // cent to sqft
  'converter/cent-to-sqft': 'converter/cent-to-sq-ft',
  'converter/sqft-to-cent': 'converter/sq-ft-to-cent',
  'converter/cent-to-sq-ft': 'converter/cent-to-sqft',
  'converter/sq-ft-to-cent': 'converter/sqft-to-cent',
  // guntha to sqft
  'converter/guntha-to-sqft': 'converter/guntha-to-sq-ft',
  'converter/sqft-to-guntha': 'converter/sq-ft-to-guntha',
  'converter/guntha-to-sq-ft': 'converter/guntha-to-sqft',
  'converter/sq-ft-to-guntha': 'converter/sqft-to-guntha',
  // bigha to sqft
  'converter/bigha-to-sqft': 'converter/bigha-to-sq-ft',
  'converter/sqft-to-bigha': 'converter/sq-ft-to-bigha',
  'converter/bigha-to-sq-ft': 'converter/bigha-to-sqft',
  'converter/sq-ft-to-bigha': 'converter/sqft-to-bigha',
  // PDF & Image tool aliases
  'pdf/pdf-compressor': 'pdf/compress-pdf',
  'pdf/compressor': 'pdf/compress-pdf',
  'pdf/encrypt-pdf': 'pdf/protect-pdf',
  'pdf/password-protect-pdf': 'pdf/protect-pdf',
  'pdf/pdf-watermark': 'pdf/watermark-pdf',
  'pdf/add-page-numbers-to-pdf': 'pdf/page-numbers-pdf',
  'pdf/pdf-signature': 'pdf/sign-pdf',
  'pdf/digital-signature': 'pdf/sign-pdf',
  'pdf/resize-image': 'pdf/image-resizer',
  'pdf/photo-resizer': 'pdf/image-resizer',
  'pdf/jpg-to-pdf': 'pdf/image-to-pdf',
  'pdf/jpeg-to-pdf': 'pdf/image-to-pdf',
  'pdf/png-to-pdf': 'pdf/image-to-pdf',
  'pdf/pdf-to-word': 'pdf/pdf-to-docx',
  'pdf/pdf-to-word-converter': 'pdf/pdf-to-docx',
};

export function getToolBySlug(category: string, slug: string): ToolDefinition | undefined {
  const direct = toolBySlugMap.get(`${category}/${slug}`);
  if (direct) return direct;

  const alias = SLUG_ALIASES[`${category}/${slug}`];
  if (alias) {
    const aliased = toolBySlugMap.get(alias);
    if (aliased) return aliased;
  }

  // Dynamic on-demand programmatic synthesis for thousands of search combinations
  return synthesizeDynamicTool(category, slug);
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
  
  const matched = ALL_TOOLS.filter((tool) => {
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.slug.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  // If query is a conversion pair (e.g. "gaj to bigha", "tola to gram")
  if (q.includes(' to ') || q.includes('-to-')) {
    const slugForm = q.replace(/\s+to\s+/g, '-to-').replace(/\s+/g, '-');
    const dynamicTool = synthesizeDynamicTool('converter', slugForm);
    if (dynamicTool && !matched.some(m => m.slug === dynamicTool.slug)) {
      matched.unshift(dynamicTool);
    }
  }

  return matched;
}
