// components/blogs/NewBlogForm.tsx
import { Fragment, useContext, useRef } from "react";
import { BlogContext } from "@/context/BlogProvider";
import { useTheme } from "@/context/ThemeProvider";

function NewBlogForm() {
    const { isDarkMode } = useTheme();
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const { addBlog } = useContext(BlogContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = titleInputRef.current?.value ?? "";
    const description = descriptionInputRef.current?.value ?? "";

    if (!title || !description) return;

      addBlog({ title, description });

    titleInputRef.current!.value = "";
    descriptionInputRef.current!.value = "";
    alert("Blog added successfully!");

  };

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        className={`max-w-xl mt-10 mx-auto rounded-2xl shadow-lg p-8 transition-colors duration-300 
          ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create a New Blog
        </h2>

        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            ref={titleInputRef}
            placeholder="Enter blog title"
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition 
              ${isDarkMode
                ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                : "bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500"}`}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            ref={descriptionInputRef}
            placeholder="Write your blog description..."
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition 
              ${isDarkMode
                ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                : "bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500"}`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
}

export default NewBlogForm;
