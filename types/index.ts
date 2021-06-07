export type Project = {
  slug: string;
} & ProjectFrontMatter;

export interface ProjectFrontMatter {
  title: string;
  subtitle?: string;
  mainImage: string;
  sections: ProjectSection[];
  featured: boolean;
  categories: string[];
}

interface ProjectSection {
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
