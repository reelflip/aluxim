import React from 'react'
export default function Gallery(){
  const imgs = ['/images/hazard.jpg','/images/traffic.jpg','/images/agro.jpg','/images/retail.jpg','/images/safework.jpg','/images/edge.jpg']
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Gallery & Demos</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {imgs.map((src,i)=> <img key={i} src={src} alt='' className='w-full h-48 object-cover rounded' />)}
      </div>
    </section>
  )
}
