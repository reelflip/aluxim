import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductCard({p}){
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <img src={p.image} alt={p.name} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{p.name}</h3>
        <p className="text-slate-600 text-sm mt-1">{p.description}</p>
        <ul className="mt-2 text-sm list-disc pl-5 text-slate-700">{p.features && p.features.map(f=> <li key={f}>{f}</li>)}</ul>
        <div className="mt-4 flex gap-3">
          <Link to={`/product/${p.id}`} className="px-3 py-2 rounded bg-slate-900 text-white text-sm">Learn More</Link>
          <a href={`mailto:contact@aluxim.in?subject=Demo%20Request%20for%20${encodeURIComponent(p.name)}`} className="px-3 py-2 rounded border text-sm">Request Demo</a>
        </div>
      </div>
    </div>
  )
}
