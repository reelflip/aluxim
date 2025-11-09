
import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){return(
<section className='bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 text-center'>
<div className='max-w-4xl mx-auto px-6'>
<h1 className='text-5xl font-extrabold text-gray-800 mb-6 leading-tight'>Empowering Innovation Through <span className='text-slate-900'>AI Intelligence</span></h1>
<p className='text-lg text-gray-700 leading-relaxed mb-6'><strong>Aluxim Tech</strong>, a division of <strong>Aluxim Consultancy Pvt. Ltd.</strong>, develops cutting-edge AI products and automation platforms that drive efficiency and safety across industries.</p>
<p className='text-lg text-gray-700 leading-relaxed mb-8'>We specialize in intelligent systems that help businesses harness data and automation. Our solutions combine AI research, embedded systems expertise, and enterprise technology services.</p>
<div className='mt-10'><Link to='/about' className='px-8 py-4 bg-slate-900 text-white rounded-lg shadow-lg hover:bg-slate-800 transition text-lg font-medium'>Learn More About Us</Link></div>
</div>
<div className='mt-20'><img src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80' alt='AI Innovation' className='rounded-2xl shadow-lg mx-auto w-full max-w-4xl'/></div>
</section>);}
