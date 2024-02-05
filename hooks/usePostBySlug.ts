import { fetchAPI } from "@/helpers/fetchAPI";

const usePostBySlug = async (slug: string) => {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return {
    post: data?.post
  }
}

export default usePostBySlug;