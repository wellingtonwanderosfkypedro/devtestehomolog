import { ProductBanner } from "@/components/FormOurSolutions/types/formOurSolutionsTypes";

export const isProductBanner = (data: any): data is ProductBanner => {
    if (
        typeof data.tag === 'string' &&
        typeof data.title === 'string' &&
        typeof data.title_complement_1 === 'string' &&
        typeof data.title_complement_2 === 'string' &&
        typeof data.title_complement_3 === 'string' &&
        typeof data.title_complement_4 === 'string' &&
        typeof data.description === 'string' &&
        typeof data.image_desktop === 'number' &&
        typeof data.image_mobile === 'number' &&
        typeof data.button === 'object' &&
        typeof data.button.title === 'string' &&
        typeof data.button.url === 'string' &&
        typeof data.button.target === 'string' &&
        typeof data.image_data_desktop === 'object' &&
        typeof data.image_data_desktop.url === 'string' &&
        typeof data.image_data_desktop.width === 'number' &&
        typeof data.image_data_desktop.height === 'number' &&
        typeof data.image_data_mobile === 'object' &&
        typeof data.image_data_mobile.url === 'string' &&
        typeof data.image_data_mobile.width === 'number' &&
        typeof data.image_data_mobile.height === 'number'
    ) {
        return true;
    }
    return false;
}