const fetchPosts = async (customPost: string): Promise<any> => {
  const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT_REST as string;
  try {
    const response = await fetch(
      `${API_URL}wp-json/wp/v2/${customPost}?acf_format=standard`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts. Status: ${response.status} ${response.statusText}`
      );
    }
    const responseData = await response.json();
    if (!Array.isArray(responseData) || responseData.length === 0) {
      console.error("No posts found");
      return null;
    }
    return responseData[0]?.acf;
  } catch (error: any) {
    console.error("Error fetching posts:", error.message, error);
  }
};

export default fetchPosts;
