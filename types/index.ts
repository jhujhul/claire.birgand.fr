export type Project = {
  slug: string;
} & ProjectFrontMatter;

export interface ProjectFrontMatter {
  title: string;
  mainImage: string;
  sections: Section[];
  featured: boolean;
}

interface Section {
  title: string;
  description: string;
  images: string[];
}
