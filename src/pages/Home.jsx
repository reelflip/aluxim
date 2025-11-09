import React from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
export default function Home(){
  return (
    <section>
      <div className="bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Aluxim Tech</h1>
            <p className="mt-4 text-lg text-slate-600">Empowering innovation through AI — edge-first products that make industries safer and smarter.</p>
            <div className="mt-6 flex gap-3">
              <a href="/products" className="px-5 py-3 rounded-md bg-slate-900 text-white font-medium">Explore Products</a>
              <a href="/contact" className="px-5 py-3 rounded-md border">Contact Sales</a>
            </div>
          </div>
          <div>
            <div className="w-full h-64 rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-slate-400">
              <div className="text-center"><div className="text-sm">Product showcase</div><div className="mt-2 font-mono text-xs">[Replace with carousel or video]</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {products.slice(0,3).map(p=> <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
