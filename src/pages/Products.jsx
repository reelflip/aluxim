
import React from 'react'
import { Link } from 'react-router-dom'
const PRODUCTS = [
  {id:'hazardeye', name:'HazardEye', img:'/images/hazard.jpg', short:'Real-time hazard detection', features:['Sensor fusion','Edge AI','Low-latency alerts']},
  {id:'trafficvision', name:'TrafficVision', img:'/images/traffic.jpg', short:'Traffic analytics', features:['Vehicle counting','Incident detection']},
  {id:'safework', name:'SafeWork', img:'/images/safework.jpg', short:'Zone monitoring', features:['PPE detection','Intrusion alerts']},
  {id:'agrosense', name:'AgroSense', img:'/images/agro.jpg', short:'Drone-based crop monitoring', features:['NDVI','Field surveys']},
  {id:'retailsight', name:'RetailSight', img:'/images/retail.jpg', short:'In-store analytics', features:['People counting','Shelf monitoring']},
  {id:'edgevision', name:'EdgeVision', img:'/images/edge.jpg', short:'Embedded SDK', features:['Quantization','OTA updates']},
]
export default function Products(){
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Products</h2>
      <p className="mt-3 text-slate-600">Explore our modular AI products designed for production.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {PRODUCTS.map(p=>(
          <div key={p.id} className="bg-white border rounded-lg overflow-hidden">
            <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-slate-600 text-sm mt-1">{p.short}</p>
              <ul className="mt-2 text-sm list-disc pl-5 text-slate-700">{p.features.map(f=> <li key={f}>{f}</li>)}</ul>
              <div className="mt-4 flex gap-3">
                <Link to={`/product/${p.id}`} className="px-3 py-2 rounded bg-slate-900 text-white text-sm">Learn More</Link>
                <a href={`mailto:info@aluxim.in?subject=Demo%20Request%20for%20${encodeURIComponent(p.name)}`} className="px-3 py-2 rounded border text-sm">Request Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
