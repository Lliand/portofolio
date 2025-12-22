import Navbar from "./components/navbar";
import { projectData } from "./data/projects"; // Import your data

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="p-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">My Projects</h1>

        {/* THE LOOP: This part generates the HTML automatically */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition"
            >
              <span className="text-xs font-semibold text-blue-300 uppercase">
                {project.category}
              </span>
              <h2 className="text-xl font-bold mt-2">{project.title}</h2>
              <p className="text-gray-400 mt-2 text-sm">
                {project.description}
              </p>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}