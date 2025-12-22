import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
            {/* Logo or Brand Name */}
            <div className="flex items-center gap-2 ml-6">
                {/* Placeholder for a real logo image later */}
                <div className="w-8 h-8 rounded-full bg-white"></div>
                <span className="font-bold text-xl">MyPortofolio</span>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-6 mr-6">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/projects" className="hover:text-gray-300">Projects</Link>
            </div>
        </nav>
    );
}