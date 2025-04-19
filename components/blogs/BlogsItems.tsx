import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeProvider";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

function BlogsItems(props: { index: number; title: string; description: string }) {
  const router = useRouter();
  const { isDarkMode } = useTheme();

  const handleDetails = () => {
    router.push(`/blogs/${props.index}`);
  }

  return (
    <Card
      className={`w-full h-72 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 rounded-2xl 
        ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
    >
      {/* Top Section */}
      <div className="px-6 pt-4">
        <CardHeader className="p-0 mb-2">
          <CardTitle
            className={`text-xl font-semibold mb-1 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {props.title}
          </CardTitle>
          <CardDescription
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A quick overview of the blog.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <p className={`text-sm leading-relaxed line-clamp-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            {props.description}
          </p>
        </CardContent>
      </div>

      {/* Button Section */}
      <div className="px-6 pb-4 mt-auto">
        <button
          onClick={handleDetails}
          className={`w-full sm:w-auto px-5 py-2 rounded-lg font-medium text-sm transition-colors 
            ${
              isDarkMode
                ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                : "bg-indigo-700 hover:bg-indigo-600 text-white"
            }`}
        >
          Show Details
        </button>
      </div>
    </Card>
  )
}

export default BlogsItems;
