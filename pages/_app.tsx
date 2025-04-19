import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import { BlogProvider } from "@/context/BlogProvider";
import { ThemeProvider } from "@/context/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <BlogProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BlogProvider>
    </ThemeProvider>

  );
}
