/** @type {import('next').NextConfig} */
const nextConfig = {
  // The freelance site moved from the root to /studio; the root is now a landing page.
  // Permanent redirects keep old links, ads and search rankings pointing at the right place.
  async redirects() {
    return [
      { source: "/what-i-do", destination: "/studio/what-i-do", permanent: true },
      { source: "/my-projects", destination: "/studio/my-projects", permanent: true },
      { source: "/about", destination: "/studio/about", permanent: true },
      { source: "/contact", destination: "/studio/contact", permanent: true },
      { source: "/work", destination: "/studio/my-projects", permanent: true },
      { source: "/resume", destination: "/dev/resume", permanent: true },
    ];
  },
};

export default nextConfig;
