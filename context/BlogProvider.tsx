// context/BlogContext.tsx
import React, { createContext, useEffect, useState, ReactNode } from "react";

type Blog = {
  title: string;
  description: string;
};

type BlogContextType = {
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export const BlogContext = createContext<BlogContextType>({
  blogs: [],
    addBlog: () => { },
    searchQuery: "",
    setSearchQuery:()=>{}
  
});

const DUMMY_DATA: Blog[] = [
    {
        
        title: "Understanding React State and Props",
        description:
          "React's state and props are fundamental concepts every developer should master. While state allows a component to manage its own data, props help pass data from parent to child components. Properly using them can lead to cleaner, more reusable components. State updates can be asynchronous, so understanding how React batches updates is crucial. Props, on the other hand, should be treated as immutable within the child. Mismanaging these can lead to performance issues and bugs. This article dives into practical examples to clarify their usage in modern React applications."
      },
      {
        title: "Next.js Routing Simplified",
        description:
          "Next.js uses a file-based routing system, making navigation intuitive and efficient. Each file under the `pages` directory becomes a route automatically, reducing boilerplate code. Dynamic routes are easily handled by square-bracket syntax, making complex routing simple. The framework also supports nested routes and API routes seamlessly. With built-in `Link` components and prefetching, page transitions feel instant. Developers can also create layouts shared across multiple pages using `_app.tsx`. If you're coming from React Router, this guide will help you transition smoothly."
      },
      {
        title: "Top 5 Tailwind CSS Tips for Clean UI",
        description:
          "Tailwind CSS allows developers to build clean, responsive UIs using utility-first classes. One powerful tip is leveraging responsive variants to design mobile-first interfaces. Grouping related styles with `@apply` in custom CSS can make complex components more readable. Use custom themes and color palettes to keep your branding consistent across the project. Tailwind's JIT mode speeds up development by purging unused styles on the fly. Accessibility is another key focus; Tailwind works well with semantic HTML to ensure inclusivity. These tips help streamline both development and design consistency."
      },
      {
        title: "Dark Mode Toggle in React with Tailwind",
        description:
          "Adding a dark mode to your React application enhances accessibility and user comfort. With Tailwind CSS, enabling dark mode is as easy as using the `dark:` variant. You can persist the user's theme preference in `localStorage` and apply the class conditionally to the `html` or `body` tag. React's `useEffect` can sync the theme on load, making the switch seamless. It's essential to provide contrast-aware color choices to maintain readability. Toggling the theme can be handled through a simple UI switch, enhancing UX. This post walks through a clean, reusable setup."
      },
      {
        title: "Building Forms in React: Best Practices",
        description:
          "Forms are a crucial part of any web application, and React offers powerful tools to handle them effectively. Controlled components give you full control over user input, enabling features like validation and conditional rendering. Libraries like Formik or React Hook Form simplify state management and reduce boilerplate. Ensuring accessibility with proper labeling and keyboard navigation should always be a priority. Using debounced inputs and memoized callbacks can optimize performance in larger forms. This article also covers best practices for error handling and feedback display. You'll walk away with patterns that scale well in real-world apps."
      }
];

export const BlogProvider = ({ children }: { children: ReactNode }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
     
    useEffect(() => {
      const storedBlogs = localStorage.getItem("blogs");
      if (storedBlogs) {
        setBlogs(JSON.parse(storedBlogs));
      } else {
        localStorage.setItem("blogs", JSON.stringify(DUMMY_DATA));
        setBlogs(DUMMY_DATA);
      }
    }, []);

    const addBlog = (blog: Blog) => {
      const updatedBlogs = [blog, ...blogs];
      setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    };

  return (
    <BlogContext.Provider value={{ blogs, addBlog , searchQuery,setSearchQuery}}>
      {children}
    </BlogContext.Provider>
  );
};
