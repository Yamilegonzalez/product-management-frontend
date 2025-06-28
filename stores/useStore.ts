import { create } from 'zustand'

type Product = { id: string, name: string, price: number, category: string }
type Category = { id: string, name: string }

type Store = {
    products: Product[]
    categories: Category[]
    fetchProducts: () => Promise<void>
    fetchCategories: () => Promise<void>
    addProduct: (p: Product) => Promise<void>
    updateProduct: (p: Product) => Promise<void>
    deleteProduct: (id: string) => Promise<void>
}

export const useStore = create<Store>((set) => ({
    products: [],
    categories: [],
    fetchProducts: async () => {
        const res = await fetch('http://localhost:8080/products')
        const data = await res.json()
        set({ products: data })
    },
    fetchCategories: async () => {
        const res = await fetch('http://localhost:8080/categories')
        const data = await res.json()
        set({ categories: data })
    },
    addProduct: async (product) => {
        await fetch('http://localhost:8080/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json' },
        })
        set((state) => ({ products: [...state.products, product] }))
    },
    updateProduct: async (product) => {
        await fetch(`http://localhost:8080/products/${product.id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json' },
        })
        set((state) => ({
            products: state.products.map((p) => (p.id === product.id ? product : p)),
        }))
    },
    deleteProduct: async (id) => {
        await fetch(`http://localhost:8080/products/${id}`, { method: 'DELETE' })
        set((state) => ({
            products: state.products.filter((p) => p.id !== id),
        }))
    },
}))
