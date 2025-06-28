'use client'

import { Category } from '@/app/api/models/category/Category';
import { getCat } from '@/app/api/services/productService';
import Link from 'next/link'
import { useEffect, useState } from 'react'



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Array<Category>>([])

    useEffect(()=>{
        loadCategories();
    },[]);
    const loadCategories = async () =>{
        let response = await getCat();
        setCategories(response);
    }

    return (
        <div className="min-h-screen flex">
            <aside className="h-fit min-h-[calc(100vh-100px)] w-52 bg-[#cccccc] text-black p-8 rounded-tr-3xl rounded-br-3xl shadow-lg mt-4 ml-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-semibold mb-9">Categorías</h2>
                    <ul className="space-y-5 text-sm">
                        {categories.length === 0 &&(
                            <span>Cargando...</span>
                        )}
                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <Link
                                    href={`/categoria/${encodeURIComponent(cat.name)}`}
                                    className="block hover:bg-white hover:text-[#ff5722] rounded px-3 py-3 transition"
                                >
                                    {cat.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className="flex items-center gap-1 text-sm bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-200 shadow-sm" onClick={() => (window.location.href = '/login')}
                >
                    Cerrar sesión
                </button>
            </aside>

            <div className="flex-1 flex flex-col">
                <main className="p-6 pb-28">{children}</main>

                <footer className="fixed bottom-0 left-0 w-full bg-[#cccccc] text-black py-4 shadow z-50">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                        <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:underline">Términos</a>
                            <a href="#" className="hover:underline">Privacidad</a>
                            <a href="#" className="hover:underline">Contacto</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
