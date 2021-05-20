export type Project = {
  slug: string;
} & ProjectFrontMatter;

export interface ProjectFrontMatter {
  title: string;
  mainImage: string;
  sections: ProjectSection[];
  featured: boolean;
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
