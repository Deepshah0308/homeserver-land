/*
 * Home Server Landing Page
 * Author: Deep Shah <shah.deep2025@gmail.com>
 * Created: 2024-02-29T11:59:31.187Z
 */

import React from 'react'
import { faker } from '@faker-js/faker'

interface ServerSpec {
  model: string
  cpu: string
  ram: string
  storage: string
}

/**
 * @function generateServerSpecs
 * @description Generates an array of server specifications using Faker.js.
 * @returns {ServerSpec[]} - Array of server specifications
 */
const generateServerSpecs = (): ServerSpec[] => {
  const specs = []
  for (let i = 0; i < 6; i++) {
    specs.push({
      model: faker.commerce.productName(),
      cpu: `Intel Xeon ${faker.number.int({ min: 4, max: 32 })}-Core`,
      ram: `${faker.number.int({ min: 32, max: 256 })}GB ECC`,
      storage: `${faker.number.int({ min: 4, max: 16 })}x ${faker.number.int({ min: 4, max: 16 })}TB HDD`,
    })
  }
  return specs
}

/**
 * @component
 * @description Hardware Showcase section of the landing page.
 * Displays a grid of server hardware specifications.
 * @author Deep Shah <shah.deep2025@gmail.com>
 * @param {Object} props - Component props (none expected)
 * @returns {JSX.Element} - Hardware Showcase section component
 */
const HardwareShowcase: React.FC = () => {
  const serverSpecs = generateServerSpecs()

  return (
    <section className="py-16 bg-slate-800 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          Hardware Showcase: Power Your Home Server
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serverSpecs.map((spec, index) => (
            <div key={index} className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">{spec.model}</h3>
              <ul className="space-y-2">
                <li><strong>CPU:</strong> {spec.cpu}</li>
                <li><strong>RAM:</strong> {spec.ram}</li>
                <li><strong>Storage:</strong> {spec.storage}</li>
              </ul>
              <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 block w-full text-center">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HardwareShowcase
