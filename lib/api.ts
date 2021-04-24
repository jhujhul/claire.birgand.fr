import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { Project, ProjectFrontMatter } from "../types";

const projectsDirectory = path.join(process.cwd(), "data/_projects");

const getSlug = (filename: string): string => filename.replace(".md", "");

const getFilename = (slug: string): string => `${slug}.md`;

export async function getProjectBySlug(slug: string): Promise<Project> {
  const filename = getFilename(slug);
  const filePath = path.join(projectsDirectory, filename);
  const fileContents = await fs.readFile(filePath, "utf8");

  const result = matter(fileContents);
  const data = result.data as ProjectFrontMatter;
  const content = result.content;

  return {
    ...data,
    content,
    slug,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const filenames = await fs.readdir(projectsDirectory);

  const projects = filenames.map(async (filename) => {
    const slug = getSlug(filename);
    return getProjectBySlug(slug);
  });

  return await Promise.all(projects);
}
