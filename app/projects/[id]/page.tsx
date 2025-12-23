import { projectData } from "@/app/data/projects";
import Link from "next/link";

// 1. Change the type definition for Next.js 15
// The params are now a "Promise", so we wrap them in Promise<...>
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 2. Await the params to get the ID safely
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id);

  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <div className="p-10 text-white bg-gray-900 min-h-screen">Project not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>

        <div className="h-64 md:h-96 rounded-xl overflow-hidden mb-8 border border-gray-700">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
            {project.category}
          </span>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}