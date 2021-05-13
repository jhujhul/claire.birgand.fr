export type Project = {
  slug: string;
  content: string;
} & ProjectFrontMatter;

export interface ProjectFrontMatter {
  title: string;
  mainImage: string;
  sections: Section[];
}

interface Section {
  title: string;
  description: string;
  images: string[];
}
