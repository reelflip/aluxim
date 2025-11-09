
import React from 'react';
export default function Products(){return(
<section className='max-w-7xl mx-auto px-6 py-16'>
<h2 className='text-3xl font-bold mb-6'>Our AI Products</h2>
<p className='text-slate-700 mb-8'>We build intelligent systems for hazard detection, smart vision, predictive analytics, and more, enabling safer and smarter operations across industries.</p>
<div className='grid md:grid-cols-3 gap-6'>
<img src='https://images.unsplash.com/photo-1581091215360-22b0621f6683?auto=format&fit=crop&w=1200&q=80' alt='HazardEye' className='rounded-lg shadow'/>
<img src='https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80' alt='VisionAI' className='rounded-lg shadow'/>
<img src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80' alt='PredictIQ' className='rounded-lg shadow'/>
</div>
</section>);}