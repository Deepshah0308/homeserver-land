/*
 * Home Server Landing Page
 * Author: Deep Shah <shah.deep2025@gmail.com>
 * Created: 2024-02-29T11:59:31.187Z
 */

import React from 'react'

interface HeroProps {
  serverRackSVG: string;
}

/**
 * @component
 * @description Hero section of the landing page.
 * Displays a catchy headline, a brief description, call-to-action buttons, and a server rack SVG image.
 * @author Deep Shah <shah.deep2025@gmail.com>
 * @param {Object} props - Component props
 * @param {string} props.serverRackSVG - SVG string for the server rack image
 * @returns {JSX.Element} - Hero section component
 */
const Hero: React.FC<HeroProps> = ({ serverRackSVG }) => {
  return (
    <section className="bg-primary-DEFAULT py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="lg:order-2">
            <div className="p-6 glassmorphic rounded-lg shadow-md">
              <div dangerouslySetInnerHTML={{ __html: serverRackSVG }} />
            </div>
          </div>
          <div className="lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-text-DEFAULT">
              Your <span className="text-green-500 font-bold">Data</span>, Your <span className="text-green-500 font-bold">Server</span>, <span className="text-green-500 font-bold">Your Rules</span>
            </h1>
            <p className="text-lg mb-8 text-text-secondary">
              Take back control with a custom home server. Self-host your services, manage your data, and explore the freedom of owning your digital infrastructure.
            </p>
            <div className="space-x-4">
              <a
                href="#hardware"
                className="inline-block bg-secondary-DEFAULT hover:bg-secondary-darker text-primary-DEFAULT font-semibold py-3 px-6 rounded-md transition-colors duration-300 no-underline"
              >
                Explore Hardware
              </a>
              <a
                href="#os-comparison"
                className="inline-block bg-glass hover:bg-glass/80 text-text-DEFAULT font-semibold py-3 px-6 rounded-md transition-colors duration-300 no-underline glassmorphic"
              >
                Compare OS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
