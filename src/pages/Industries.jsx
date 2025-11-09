import React from 'react'
export default function Industries(){
  const items = [
    {title:'Automotive', desc:'ADAS, driver monitoring, fleet safety.'},
    {title:'Industrial', desc:'Hazard detection, quality inspection.'},
    {title:'Smart Cities', desc:'Traffic analytics, public safety.'},
    {title:'Agriculture', desc:'Crop monitoring and yield prediction.'},
    {title:'Retail', desc:'Customer analytics and shelf monitoring.'},
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Industries We Serve</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map(i=> (
          <div key={i.title} className="p-6 border rounded">
            <h4 className="font-semibold">{i.title}</h4>
            <p className="mt-2 text-slate-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
