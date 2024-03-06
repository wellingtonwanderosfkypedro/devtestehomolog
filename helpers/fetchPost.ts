const fetchPosts = async (customPost: string): Promise<any> => {
    const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT_REST as string;
    try {
        const response = await fetch(`${API_URL}wp-json/wp/v2/${customPost}`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const responseData = await response.json();
        return responseData[0]?.acf;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export default fetchPosts;