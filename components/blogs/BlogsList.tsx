import BlogsItems from "./BlogsItems";
import { BlogContext } from "@/context/BlogProvider";
import React from "react";

function BlogsList() {
    const { blogs, searchQuery } = React.useContext(BlogContext);
    const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div>
      {blogs.length === 0 ? (
        <h1 className="text-center  text-2xl font-bold text-gray-800 dark:text-gray-200">
          No Blogs Available
        </h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBlogs.map((blog, index) => (
            <BlogsItems
              key={index}
              index={index}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogsList;
