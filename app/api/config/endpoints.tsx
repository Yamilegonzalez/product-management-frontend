export const ENDPOINTS = {
    GET_PRODUCTS: '/products/',
    ADD_PRODUCT: '/products/',
    GET_PRODUCT: (id: number) => `/products/${id}`,
    UPDATE_PRODUCT: (id: number) => `/products/${id}`,
    DELETE_PRODUCT: (id: number) => `/products/${id}`,
    
    GET_CATEGORIES: '/categories/',
    ADD_CATEGORY: '/categories/',
    GET_CATEGORY: (id: number) => `/categories/${id}`,
    UPDATE_CATEGORY: (id: number) => `/categories/${id}`,
    DELETE_CATEGORY: (id: number) => `/categories/${id}`,
}