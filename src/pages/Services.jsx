import React from 'react'
import { services } from '../data/services'
export default function Services(){ 
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">AI Solutions & Services</h2>
      <p className="mt-3 text-slate-600">We offer end-to-end AI services for strategy, model development and deployment.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {services.map(s=> (
          <div key={s.id} className="p-6 border rounded">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="mt-2 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
