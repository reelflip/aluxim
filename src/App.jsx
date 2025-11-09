import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Careers from './pages/Careers'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/PrivacyPolicy'
import Terms from './pages/TermsOfService'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App(){ 
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/industries" element={<Industries/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
