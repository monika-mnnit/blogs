
// import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeProvider";
import { BlogContext } from "@/context/BlogProvider";
import { useContext } from "react";

function MainHeader() {
    const { isDarkMode, toggleTheme } = useTheme();
    const { searchQuery, setSearchQuery } = useContext(BlogContext);

  return (
    <header className={`p-4 shadow-md transition-all ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-indigo-200 text-black'}`}>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-800'}`}>Resources & Insights</h1>

        <input
          type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  
          className={`sm:w-1/4 px-4 py-2 rounded-md outline-none ${isDarkMode ? 'bg-gray-700 text-white focus:bg-gray-600' : 'bg-gray-400 text-black focus:bg-gray-800'} transition-colors`}
        />

        <nav className="flex gap-4">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            All Blogs
          </Link>
          <Link href="/new-blogs" className="hover:text-blue-400 transition-colors">
            Upload New Blog
          </Link>
        </nav>

        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md mt-4 sm:mt-0 transition-colors text-white 
            ${isDarkMode ? "bg-yellow-600 hover:bg-yellow-600" : "bg-indigo-800 hover:bg-indigo-700"}`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
