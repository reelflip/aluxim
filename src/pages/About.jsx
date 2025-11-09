import React from 'react'
export default function About(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">About Aluxim Tech</h2>
      <p className="mt-4 text-slate-700">Aluxim Tech is an AI startup and the technology division of Aluxim Consultancy Pvt. Ltd., focused on building AI products that power safety, automation, and analytics across industries.</p>
      <h3 className="mt-6 font-semibold">Vision</h3>
      <p className="text-slate-700">To become a global leader in AI-powered embedded solutions, enabling machines to see, sense, and respond intelligently.</p>
      <h3 className="mt-6 font-semibold">Mission</h3>
      <p className="text-slate-700">Deliver practical AI products that enhance safety and efficiency in the real world.</p>
      <h3 className="mt-6 font-semibold">Our Products</h3>
      <ul className="list-disc pl-5 text-slate-700 mt-2">
        <li>HazardEye — Real-time hazard detection</li>
        <li>TrafficVision AI — Traffic analytics</li>
        <li>SafeWork AI — Worker safety monitoring</li>
        <li>AgroSense — Drone-based crop monitoring</li>
        <li>RetailSight — In-store analytics</li>
        <li>EdgeVision SDK — Embedded AI runtime</li>
      </ul>
    </section>
  )
}
