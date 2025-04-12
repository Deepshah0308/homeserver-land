/*
 * Home Server Landing Page
 * Author: Deep Shah <shah.deep2025@gmail.com>
 * Created: 2024-02-29T11:59:31.187Z
 */

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HardwareShowcase from './components/HardwareShowcase'
import OSComparisonTable from './components/OSComparisonTable'
import Testimonials from './components/Testimonials'
import {createServerRackSVG} from './utils/svg-placeholder';

/**
 * @component
 * @description Main application component that renders the entire landing page.
 * It includes the Header, Hero section, Hardware Showcase, OS Comparison Table, Testimonials, and Footer.
 * @author Deep Shah <shah.deep2025@gmail.com>
 * @param {Object} props - Component props (none expected)
 * @returns {JSX.Element} - The main application view
 */
const App: React.FC = () => {
  return (
    <div className="dark bg-slate-900 text-zinc-100 font-sans">
      <Header />
      <section id="hero">
        <Hero serverRackSVG={createServerRackSVG()} />
      </section>
      <section id="hardware">
        <HardwareShowcase />
      </section>
      <section id="os-comparison">
        <OSComparisonTable />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <footer id="contact" className="bg-slate-800 py-12 text-center">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Home Server Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
