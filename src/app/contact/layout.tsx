import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Request Tools | ToolNest',
  description:
    'Have a tool suggestion, feature request, or feedback for the ToolNest engineering team? Send us a message.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
