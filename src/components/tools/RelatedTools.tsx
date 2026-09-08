import React from 'react';
import { ToolDefinition } from '@/types/tool';
import { ToolCard } from './ToolCard';
import { Sparkles } from 'lucide-react';

interface RelatedToolsProps {
  tools: ToolDefinition[];
  currentToolName: string;
}

export const RelatedTools: React.FC<RelatedToolsProps> = ({ tools, currentToolName }) => {
  if (!tools || tools.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-indigo-500" />
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Related Tools to {currentToolName}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((relTool) => (
          <ToolCard key={relTool.id} tool={relTool} showCategory={true} />
        ))}
      </div>
    </section>
  );
};
