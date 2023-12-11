export const fetchProducts = (params) => async () => {
    try {
        const data = await api.products.get(params);
        return data;
    } catch (err) {
        return new Error(err);
    }
};