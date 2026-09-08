import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className = 'w-5 h-5', size = 20, ...props }) => {
  // Try direct match from LucideIcons
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[name];

  if (!IconComponent) {
    // Fallback icon
    return <LucideIcons.Wrench className={className} width={size} height={size} {...props} />;
  }

  return <IconComponent className={className} width={size} height={size} {...props} />;
};
