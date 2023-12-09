export const fetchProducts = (params) => async () => {
    try {
        const { products: list, filter: filters } = await api.products.get(params);
        return { list, filters };
    } catch (err) {
        return new Error(err);
    }
};