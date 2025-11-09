import React from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
export default function Products(){
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Products</h2>
      <p className="mt-3 text-slate-600">Explore our modular AI products designed for production.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {products.map(p=> <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}
