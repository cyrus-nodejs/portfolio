import { useState, useEffect } from "react";

export const useUnifiedBlogs = (devtoUsername, hashnodeUsername) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch from Dev.to
        const devtoRes = await fetch(`https://dev.to/api/articles?username=${devtoUsername}`);
        const devtoData = await devtoRes.json();
        const devtoPosts = devtoData.map((post) => ({
          id: `devto-${post.id}`,
          title: post.title,
          description: post.description,
          url: post.url,
          date: post.published_at,
          tags: post.tag_list.slice(0, 3),
          platform: "Dev.to",
          cover_image: post.cover_image,
        }));

        // Fetch from Hashnode (GraphQL)
        const hashnodeQuery = {
          query: `
            {
              user(username: "${hashnodeUsername}") {
                publication {
                  posts(page: 0) {
                    _id
                    title
                    brief
                    slug
                    coverImage
                    dateAdded
                    tags {
                      name
                    }
                  }
                }
              }
            }
          `,
        };

        const hashnodeRes = await fetch("https://api.hashnode.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(hashnodeQuery),
        });

        const hashnodeData = await hashnodeRes.json();
        const hashnodePosts =
          hashnodeData?.data?.user?.publication?.posts?.map((post) => ({
            id: `hashnode-${post._id}`,
            title: post.title,
            description: post.brief,
            url: `https://${hashnodeUsername}.hashnode.dev/${post.slug}`,
            date: post.dateAdded,
            tags: post.tags.slice(0, 3).map((t) => t.name),
            platform: "Hashnode",
            cover_image: post.coverImage,
          })) || [];

        // Merge and sort by date (newest first)
        const combined = [...devtoPosts, ...hashnodePosts].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setBlogs(combined.slice(0, 6)); // limit to 6 posts total
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [devtoUsername, hashnodeUsername]);

  return { blogs, loading };
};
