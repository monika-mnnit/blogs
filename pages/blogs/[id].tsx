import { useRouter } from "next/router";
import { BlogContext } from "@/context/BlogProvider";
import React from "react";

function BlogsId() {
  const router = useRouter();
  const { id } = router.query;
  const { blogs } = React.useContext(BlogContext);

  if (!router.isReady || blogs.length === 0) {
    return <div>Loading...</div>;
  }

    const blog = blogs[parseInt(id as string)];

  if (!blog) {
    return <div className="p-4">Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-base">{blog.description}</p>
    </div>
  );
}

export default BlogsId;
