
import React from 'react'
export default function Contact(){
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-3 text-slate-600">Email: <a href="mailto:info@aluxim.in">info@aluxim.in</a></p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded">
          <h4 className="font-semibold">Office</h4>
          <p className="mt-2 text-slate-600">705B, Suratawala Mark Plaza, Hinjewadi Phase-1, Pune, Maharashtra - 411057</p>
        </div>
        <div className="p-6 border rounded">
          <h4 className="font-semibold">Request a demo</h4>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Demo request submitted (template). Replace with backend to collect leads.') }} className="mt-3 grid gap-3">
            <input required placeholder="Name" className="px-3 py-2 border rounded" />
            <input required type="email" placeholder="Email" className="px-3 py-2 border rounded" />
            <textarea placeholder="Message" rows={4} className="px-3 py-2 border rounded" />
            <div className="flex justify-end"><button className="px-4 py-2 rounded bg-slate-900 text-white">Send</button></div>
          </form>
        </div>
      </div>
    </section>
  )
}
