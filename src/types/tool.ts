export type CategoryId = 
  | 'student' 
  | 'career' 
  | 'developer' 
  | 'text' 
  | 'math' 
  | 'date' 
  | 'converter' 
  | 'finance'
  | 'pdf';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  slug: string;
  description: string;
  icon: string;
  badgeColor: string;
  gradient: string;
  count?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  id: string;
  name: string;
  slug: string;
  category: CategoryId;
  description: string;
  icon: string;
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  componentKey: string;
  popular?: boolean;
  featured?: boolean;
  isNew?: boolean;
  
  // Rich SEO & Educational Content
  content: {
    whatIs: string;
    howToUse: string[];
    formula?: string;
    example?: string;
    benefits?: string[];
    tips?: string[];
    faqs?: FAQItem[];
  };
  
  // Internal linking
  relatedToolIds: string[];
}
