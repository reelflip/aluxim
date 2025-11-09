import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-slate-600">
        <div>© {new Date().getFullYear()} Aluxim Tech. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
