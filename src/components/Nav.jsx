
import React from 'react';import {Link, useLocation} from 'react-router-dom';
export default function Nav(){const loc=useLocation();return (
<header className='bg-white shadow'><div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
<div><Link to='/' className='text-2xl font-bold'>Aluxim Tech</Link><div className='text-sm text-slate-500'>AI & Intelligent Automation</div></div>
<nav className='hidden md:flex gap-3 items-center'>
<Link to='/' className='px-3 py-2'>Home</Link>
<Link to='/about' className='px-3 py-2'>About</Link>
<Link to='/products' className='px-3 py-2'>Products</Link>
<Link to='/services' className='px-3 py-2'>Services</Link>
<Link to='/gallery' className='px-3 py-2'>Gallery</Link>
<Link to='/team' className='px-3 py-2'>Team</Link>
<Link to='/careers' className='px-3 py-2'>Careers</Link>
<Link to='/contact' className='px-3 py-2'>Contact</Link>
</nav></div></header>);}