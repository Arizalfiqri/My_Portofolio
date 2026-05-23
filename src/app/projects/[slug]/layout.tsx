import type { Metadata } from 'next';
import { projectsData } from '@/data/projectsData';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Arizal Fiqri`,
      description: project.description,
      type: 'article',
      images: project.images[0] ? [{ url: project.images[0], alt: `${project.title} preview` }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Arizal Fiqri`,
      description: project.description,
      images: project.images[0] ? [project.images[0]] : [],
    },
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
