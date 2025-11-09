
import React from 'react';
export default function Gallery(){return(
<section className='max-w-7xl mx-auto px-6 py-16'>
<h2 className='text-3xl font-bold mb-6'>Gallery</h2>
<div className='grid md:grid-cols-3 gap-6'>
<img src='https://images.unsplash.com/photo-1581091215360-22b0621f6683?auto=format&fit=crop&w=1200&q=80' alt='Gallery1' className='rounded-lg shadow'/>
<img src='https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80' alt='Gallery2' className='rounded-lg shadow'/>
<img src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80' alt='Gallery3' className='rounded-lg shadow'/>
</div>
</section>);}