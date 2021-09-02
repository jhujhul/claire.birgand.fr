import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import sizeOf from "image-size";

import {
  Category,
  CATEGORY_ALL,
  Image,
  Project,
  ProjectFrontMatter,
  ProjectSection,
  ProjectSectionFrontMatter,
  Testimonial,
} from "../types";

const projectsDirectory = path.join(process.cwd(), "data/_projects");
const testimonialsDirectory = path.join(process.cwd(), "data/_testimonials");
const publicDirectory = path.join(process.cwd(), "public");
const legalNoticeFilePAth = path.join(
  process.cwd(),
  "data/mentions-legales.md"
);

const getSlug = (filename: string): string => filename.replace(".md", "");

const getFilename = (slug: string): string => `${slug}.md`;

const getImage = (imageSrc: string): Image => {
  const imagePath = path.join(publicDirectory, imageSrc);
  const { width, height } = sizeOf(imagePath);

  if (!width || !height) {
    throw Error("Could not get dimensions of image " + imageSrc);
  }

  return {
    src: imageSrc,
    width,
    height,
  };
};

export async function getProjectBySlug(slug: string): Promise<Project> {
  const filename = getFilename(slug);
  const filePath = path.join(projectsDirectory, filename);
  const fileContents = await fs.readFile(filePath, "utf8");

  const result = matter(fileContents);
  const data = result.data as ProjectFrontMatter;

  return getProject(data, slug);
}

const getProject = (
  projectFrontMatter: ProjectFrontMatter,
  slug: string
): Project => {
  return {
    ...projectFrontMatter,
    mainImage: getImage(projectFrontMatter.mainImage),
    sections: projectFrontMatter.sections.map((sectionData) =>
      getSection(sectionData)
    ),
    slug,
  };
};

const getSection = (
  sectionFrontMatter: ProjectSectionFrontMatter
): ProjectSection => {
  return {
    ...sectionFrontMatter,
    images: sectionFrontMatter.images.map((imageSrc) => getImage(imageSrc)),
  };
};

interface GetAllProjectsInput {
  onlyFeatured: boolean;
  categoryId?: string;
}
export async function getAllProjects({
  onlyFeatured,
  categoryId,
}: GetAllProjectsInput): Promise<Project[]> {
  const filenames = await fs.readdir(projectsDirectory);

  const projectPromises = filenames.map(async (filename) => {
    const slug = getSlug(filename);
    return getProjectBySlug(slug);
  });

  const projects = await Promise.all(projectPromises);

  return projects.filter(
    (project) =>
      (!onlyFeatured || project.featured) &&
      (!categoryId ||
        categoryId === CATEGORY_ALL.id ||
        project.categories.some(
          (category) => category.toLocaleLowerCase() === categoryId
        ))
  );
}

async function getTestimonial(filename: string): Promise<Testimonial> {
  const filePath = path.join(testimonialsDirectory, filename);
  const fileContents = await fs.readFile(filePath, "utf8");

  const result = matter(fileContents);
  const data = result.data as Testimonial;

  return data;
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const filenames = await fs.readdir(testimonialsDirectory);

  const testimonialPromises = filenames.map(async (filename) => {
    return getTestimonial(filename);
  });

  return await Promise.all(testimonialPromises);
}

function onlyUnique(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}
export async function getProjectCategories(): Promise<Category[]> {
  const projects = await getAllProjects({ onlyFeatured: false });

  return projects
    .map((project) => project.categories)
    .flat()
    .filter(onlyUnique)
    .map((categoryName) => ({
      id: categoryName.toLocaleLowerCase(),
      name: categoryName,
    }));
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function getLegalNoticeHtml(): Promise<string> {
  const fileContents = await fs.readFile(legalNoticeFilePAth, "utf8");
  const { content } = matter(fileContents);

  return markdownToHtml(content);
}
