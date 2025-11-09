
import React from 'react'
import { Link } from 'react-router-dom'
const PRODUCTS = [
  {id:'hazardeye', name:'HazardEye', img:'/images/hazard.jpg', short:'Real-time hazard detection'},
  {id:'trafficvision', name:'TrafficVision', img:'/images/traffic.jpg', short:'Traffic & vehicle analytics'},
  {id:'safework', name:'SafeWork', img:'/images/safework.jpg', short:'PPE & zone monitoring'},
]
export default function Home(){
  return (
    <section>
      <div className="bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Aluxim Tech</h1>
            <p className="mt-4 text-lg text-slate-600">AI, Embedded & Vision Intelligence Solutions for industrial, automotive and smart-city applications.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/products" className="px-5 py-3 rounded-md bg-slate-900 text-white font-medium">Explore Products</Link>
              <Link to="/contact" className="px-5 py-3 rounded-md border">Contact Sales</Link>
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
          {PRODUCTS.map(p=>(
            <div key={p.id} className="bg-white border rounded-lg overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-slate-600 text-sm mt-1">{p.short}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
