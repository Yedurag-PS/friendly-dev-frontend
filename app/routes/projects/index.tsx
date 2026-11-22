import { useState } from "react";
import type { Route } from "./+types/index";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?populate=*`,
  );
  const json: StrapiResponse<StrapiProject> = await res.json();

  const projects = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerpage = 10;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const { projects } = loaderData as { projects: Project[] };

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter based on the category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  // Calculate total Pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerpage);

  // Get current current projects page
  const indexOfLast = currentPage * projectsPerpage;
  const indexOfFirst = indexOfLast - projectsPerpage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  // Pagfination button render

  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">🚀 Projects</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              console.log("Clicked:", category);
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
