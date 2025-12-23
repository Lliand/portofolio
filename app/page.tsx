import Navbar from "./components/navbar";
import { projectData } from "./data/projects"; // Import your data
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="p-10 max-w-5xl mx-auto">
        <div className="ml-6 border-l-4 border-l-blue-400 pl-4 mb-8">
          <h1 className="text-4xl font-bold text-blue-400">My Projects</h1>
        </div>

        {/* THE LOOP: This part generates the HTML automatically */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {projectData.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="block group">
              <div key={project.id} className="border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition bg-gray-800">
                
                <div className="h-48">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500 rounded-md"/>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-semibold text-blue-300 uppercase">
                    {project.category}
                  </span>
                  <h2 className="text-xl font-bold mt-2 group-hover:text-blue-400">{project.title}</h2>
                  <p className="text-gray-400 mt-2 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </main>
    </div>
  );
}