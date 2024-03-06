import fetchMedia from "./fetchMedia";

export const fetchImage = async (item: any, idImage: any, fieldName:string) => {
    try {
        const response = await fetchMedia(idImage);
        if (response?.media_details?.sizes?.full) {
            item[fieldName] = {
                url: response?.media_details?.sizes?.full?.source_url,
                width: response?.media_details?.sizes?.full?.width,
                height: response?.media_details?.sizes?.full?.height,
            }
        } else if (response?.source_url){
            item[fieldName] = response?.source_url
        }else{
            item[fieldName] = null;
        }
    } catch (error) {
        console.error('Erro ao buscar imagem:', error);
        item[fieldName] = null;
    }
    return item;
};
