import React from 'react'
import { posts } from '../data/blogPosts'
export default function Blog(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Insights & Blog</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {posts.map(p=> (
          <div key={p.id} className="p-6 border rounded">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-slate-500">{p.date}</p>
            <p className="mt-2 text-slate-700">{p.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
