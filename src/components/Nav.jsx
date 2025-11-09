
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const COMPANY = { name: 'Aluxim Tech', tagline: 'AI, Embedded & Vision Intelligence' }

export default function Nav() {
  const loc = useLocation()
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-bold text-slate-800">{COMPANY.name}</Link>
          <div className="text-sm text-slate-500">{COMPANY.tagline}</div>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <Link to="/" className={`px-3 py-2 ${loc.pathname==='/'? 'bg-slate-900 text-white rounded-md' : 'text-slate-700 hover:bg-slate-100 rounded-md'}`}>Home</Link>
          <Link to="/products" className={`px-3 py-2 ${loc.pathname.startsWith('/product')||loc.pathname==='/products' ? 'bg-slate-900 text-white rounded-md' : 'text-slate-700 hover:bg-slate-100 rounded-md'}`}>Products</Link>
          <Link to="/about" className={`px-3 py-2 ${loc.pathname==='/about' ? 'bg-slate-900 text-white rounded-md' : 'text-slate-700 hover:bg-slate-100 rounded-md'}`}>About</Link>
          <Link to="/contact" className={`px-3 py-2 ${loc.pathname==='/contact' ? 'bg-slate-900 text-white rounded-md' : 'text-slate-700 hover:bg-slate-100 rounded-md'}`}>Contact</Link>
        </nav>
        <div className="md:hidden">
          <Mobile />
        </div>
      </div>
    </header>
  )
}

function Mobile() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <button onClick={()=>setOpen(!open)} className="p-2 rounded border">☰</button>
      {open && (
        <div className="absolute right-2 mt-2 w-44 bg-white shadow rounded">
          <Link to="/" className="block px-4 py-2 hover:bg-slate-100">Home</Link>
          <Link to="/products" className="block px-4 py-2 hover:bg-slate-100">Products</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-slate-100">About</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-slate-100">Contact</Link>
        </div>
      )}
    </div>
  )
}
