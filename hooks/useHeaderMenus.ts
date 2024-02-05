import { fetchAPI } from '@/helpers/fetchAPI';
import { MenuData } from '@/typings/global';

const useHeaderMenus = async () => {
  const data: MenuData  = await fetchAPI(
    `query GetHeaderMenus {
      headerMenus: menuItems(where: {parentId: "0", location: MENU_1}) {
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
    headerData: data
  };
}

export default useHeaderMenus;


