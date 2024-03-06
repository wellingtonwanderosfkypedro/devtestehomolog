export const objectValuesToArray = (obj: object) => {
    if (typeof obj !== 'object' || obj === null) {
        return [];
    }
    return Object.values(obj);
}

