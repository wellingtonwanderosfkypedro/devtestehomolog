import { fetchAPI } from "@/helpers/fetchAPI";
import { MenuData } from "@/typings/global";

const useFooterMenus = async () => {
  const data: MenuData = await fetchAPI(
    `query GetFooterMenus {
      footerMenus: menuItems(where: {parentId: "0", location: MENU_2}) {
        edges {
          node {
            id
            label
            path
            childItems {
              edges {
                node {
                  id
                  label
                  url
                  path
                }
              }
            }
          }
        }
      }
    }`
    , {
      variables: {
      },
    })
  return {
    footerData: data
  };
}

export default useFooterMenus;
