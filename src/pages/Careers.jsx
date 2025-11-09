import React from 'react'
export default function Careers(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Careers</h2>
      <p className="mt-3 text-slate-600">Join us — we hire engineers and product builders passionate about AI and embedded systems.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded"><h4 className="font-semibold">AI Engineer</h4><p className="mt-2 text-slate-600">Design and deploy perception models for edge devices.</p></div>
        <div className="p-6 border rounded"><h4 className="font-semibold">Full Stack Developer</h4><p className="mt-2 text-slate-600">Build cloud dashboards and integration services.</p></div>
      </div>
      <p className="mt-6">Send your resume to <a href="mailto:contact@aluxim.in">contact@aluxim.in</a></p>
    </section>
  )
}
