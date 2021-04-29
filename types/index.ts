export type Project = {
  slug: string;
  content: string;
} & ProjectFrontMatter;

export interface ProjectFrontMatter {
  title: string;
  picture: string;
}
