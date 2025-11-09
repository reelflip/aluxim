import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
export default function ProductDetail(){
  const { id } = useParams()
  const p = products.find(x=>x.id===id) || products[0]
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <a href="/products" className="text-sm text-slate-600 mb-4 inline-block">← Back to products</a>
      <div className="grid md:grid-cols-2 gap-8">
        <img src={p.image} alt={p.name} className="w-full rounded-lg shadow" />
        <div>
          <h2 className="text-3xl font-bold">{p.name}</h2>
          <p className="mt-3 text-slate-700">{p.description}</p>
          <h4 className="mt-6 font-semibold">Key features</h4>
          <ul className="mt-2 list-disc pl-5 text-slate-700">{p.features.map(f=> <li key={f}>{f}</li>)}</ul>
          <div className="mt-6 flex gap-3">
            <a href={`mailto:contact@aluxim.in?subject=Demo%20Request%20for%20${encodeURIComponent(p.name)}`} className="px-4 py-2 rounded bg-slate-900 text-white">Request Demo</a>
            <a href="/contact" className="px-4 py-2 rounded border">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
