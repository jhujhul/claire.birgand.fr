export type Project = {
  mainImage: Image;
  sections: ProjectSection[];
  slug: string;
} & Omit<ProjectFrontMatter, "mainImage" | "sections">;

export type ProjectSection = {
  images: Image[];
} & Omit<ProjectSectionFrontMatter, "images">;

export interface ProjectFrontMatter {
  title: string;
  subtitle?: string;
  mainImage: string;
  sections: ProjectSectionFrontMatter[];
  featured: boolean;
  categories: string[];
}
export interface ProjectSectionFrontMatter {
  title: string;
  description: string;
  images: string[];
}

export type Testimonial = TestimonialFrontMatter;

interface TestimonialFrontMatter {
  quote: string;
  name: string;
  profession: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
}
export const CATEGORY_ALL = {
  id: "all",
  name: "Tout",
};

export interface Image {
  src: string;
  width: number;
  height: number;
}
