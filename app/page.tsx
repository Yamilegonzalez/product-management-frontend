'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import DashboardLayout from '@/components/dashboardLayout'
import { getProducts } from './api/services/productService'
import { Product } from './api/models/product/Product'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<Array<Product>>([])
  const filtrados = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    let response = await getProducts();
    setProducts(response);
  }

  const loadImage = async (urlImage: string) => {
    return <Image src={urlImage} alt={'test'} />
  }

  return (
    <DashboardLayout>
      <header className="bg-[#ff5722] text-white flex items-center justify-between p-4 px-6 rounded-lg shadow mb-6">
        <div className="flex items-center gap-2">
          <Image src="/Logo.jpeg" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">TecnoShop</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Hola Julia</span>
          <Image
            src="/profile.jpg"
            alt="Foto"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </header>

      <div className="max-w-6xl mx-auto bg-white border-2 border-[#ff5722]/20 rounded-3xl p-10 shadow-xl space-y-8 mb-28">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Productos</h2>
          <div className="relative w-64">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Buscar producto..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full text-base shadow-sm
                text-gray-800 placeholder:text-gray-600
                focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li
            key={-1}
            className="border p-5 rounded-xl shadow-md bg-white hover:shadow-lg transition flex items-center justify-center cursor-pointer"
            onClick={()=>console.log("owo")}
          >
            <h1 className="text-8xl font-extrabold text-gray-700">+</h1>
          </li>


          {filtrados.map((prod) => (
            <li
              key={prod.id}
              className="border p-5 rounded-xl shadow-md bg-white hover:shadow-lg transition space-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900">{prod.name}</h3>
              <Image
                src={prod.imageURL}
                alt={prod.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-48 object-cover object-cente"
              />
              <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                {prod.categoryId}
              </span>
              <p className="text-lg font-semibold text-[#ff5722]">${prod.price}</p>
              <div className="flex gap-2 pt-4">
                <button
                  className="flex items-center gap-1 text-sm bg-[#ff5722] text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-200 shadow-sm cursor-pointer"
                  onClick={() => alert(`Ver producto: ${prod.name}`)}
                >
                  Ver
                </button>
                <button
                  className="flex items-center gap-1 text-sm bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition-all duration-200 shadow-sm cursor-pointer"
                  onClick={() => alert(`Editar producto: ${prod.name}`)}
                >
                  Editar
                </button>
                <button
                  className="flex items-center gap-1 text-sm bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-200 shadow-sm cursor-pointer"
                  onClick={() => alert(`Eliminar producto: ${prod.name}`)}
                >
                  Eliminar
                </button>
              </div>

            </li>
          ))}
        </ul>

        {filtrados.length === 0 && (
          <p className="text-center text-gray-500">No se encontraron productos</p>
        )}
      </div>
    </DashboardLayout>
  )
}

