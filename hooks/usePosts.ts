import { fetchAPI } from "@/helpers/fetchAPI";

const usePosts = async (first = 10) => {
    const data = await fetchAPI(
        `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`,
        {
            variables: {
                first
            },
        }
    );

    return {
        posts: data?.posts?.nodes
    }
}

export default usePosts;