const fetchMedia = async (id: number): Promise<any> => {
    const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT_REST as string;
    try {
        const response = await fetch(`${API_URL}wp-json/wp/v2/media/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch media');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error fetching media:', error);
        throw error;
    }
};

export default fetchMedia;