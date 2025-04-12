/*
 * Home Server Landing Page
 * Author: Deep Shah <shah.deep2025@gmail.com>
 * Created: 2024-02-29T11:59:31.187Z
 */

import React from 'react'

/**
 * @component
 * @description Testimonials section of the landing page.
 * Displays customer testimonials to build trust and credibility.
 * @author Deep Shah <shah.deep2025@gmail.com>
 * @param {Object} props - Component props (none expected)
 * @returns {JSX.Element} - Testimonials section component
 */
const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-slate-800 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          What Our Users Are Saying
        </h2>
        {/* Add testimonials here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-zinc-200 italic mb-4">
              "Setting up my home server was easier than I thought, thanks to Home Server Solutions. Their hardware recommendations and OS guides were invaluable!"
            </p>
            <p className="text-zinc-300 font-semibold">— John Doe, Tech Enthusiast</p>
          </div>
          <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-zinc-200 italic mb-4">
              "The performance of the recommended server hardware is outstanding. I'm running multiple services smoothly without any hiccups."
            </p>
            <p className="text-zinc-300 font-semibold">— Jane Smith, Software Developer</p>
          </div>
          <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-zinc-200 italic mb-4">
              "I was initially intimidated by the idea of a home server, but the OS comparison table helped me choose the perfect one for my needs. Great resources!"
            </p>
            <p className="text-zinc-300 font-semibold">— Peter Jones, IT Professional</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
