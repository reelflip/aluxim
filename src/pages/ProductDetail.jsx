
import React from 'react'
import { useParams, Link } from 'react-router-dom'

const DATA = {
  hazardeye: {
    id:'hazardeye',
    name:'HazardEye',
    img:'/images/hazard.jpg',
    detail:'HazardEye detects spills, moving obstacles, smoke and unsafe human presence with multimodal sensors and edge inference. Integrates with PLCs and ADAS.',
    features:['Sensor fusion','Quantized edge models','Explainable alerts']
  },
  trafficvision: {
    id:'trafficvision',
    name:'TrafficVision',
    img:'/images/traffic.jpg',
    detail:'TrafficVision offers vehicle classification, incident detection and city-scale analytics.',
    features:['Vehicle counting','Heatmaps','Incident alerts']
  },
  safework: {
    id:'safework',
    name:'SafeWork',
    img:'/images/safework.jpg',
    detail:'SafeWork enforces PPE compliance and monitors restricted zones.',
    features:['PPE detection','Intrusion alerts','Compliance reporting']
  },
  agrosense: {
    id:'agrosense',
    name:'AgroSense',
    img:'/images/agro.jpg',
    detail:'Drone-based crop health monitoring and NDVI analytics.',
    features:['NDVI','Field surveys','Yield models']
  },
  retailsight: {
    id:'retailsight',
    name:'RetailSight',
    img:'/images/retail.jpg',
    detail:'In-store analytics for footfall, queue and shelf monitoring.',
    features:['People counting','Shelf-empty detection']
  },
  edgevision: {
    id:'edgevision',
    name:'EdgeVision',
    img:'/images/edge.jpg',
    detail:'EdgeVision SDK for model optimization, profiling and OTA updates.',
    features:['Quantization','Cross-platform runtime']
  }
}

export default function ProductDetail(){
  const { id } = useParams()
  const p = DATA[id] || DATA['hazardeye']
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <Link to="/products" className="text-sm text-slate-600 mb-4 inline-block">← Back to products</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <img src={p.img} alt={p.name} className="w-full rounded-lg shadow" />
        <div>
          <h2 className="text-3xl font-bold">{p.name}</h2>
          <p className="mt-3 text-slate-700">{p.detail}</p>
          <h4 className="mt-6 font-semibold">Key features</h4>
          <ul className="mt-2 list-disc pl-5 text-slate-700">{p.features.map(f=> <li key={f}>{f}</li>)}</ul>
          <div className="mt-6 flex gap-3">
            <a href={`mailto:info@aluxim.in?subject=Demo%20Request%20for%20${encodeURIComponent(p.name)}`} className="px-4 py-2 rounded bg-slate-900 text-white">Request Demo</a>
            <Link to="/contact" className="px-4 py-2 rounded border">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
