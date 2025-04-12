/*
 * Home Server Landing Page
 * Author: Deep Shah <shah.deep2025@gmail.com>
 * Created: 2024-02-29T11:59:31.187Z
 */

import React from 'react'

/**
 * @component
 * @description OS Comparison Table section of the landing page.
 * Displays a table comparing different server operating systems.
 * @author Deep Shah <shah.deep2025@gmail.com>
 * @param {Object} props - Component props (none expected)
 * @returns {JSX.Element} - OS Comparison Table section component
 */
const OSComparisonTable: React.FC = () => {
  return (
    <section className="py-16 bg-slate-800 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          Choose Your Server OS: Flexibility and Control
        </h2>
        <p className="text-zinc-300 text-center mb-8">
          Compare popular operating systems for your home server. Select the one that best fits your needs for performance, ease of use, and community support.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-700 dark:bg-gray-800 text-zinc-200">
                <th className="py-2 px-4 border-b font-bold text-left">OS</th>
                <th className="py-2 px-4 border-b font-bold text-left">Pros</th>
                <th className="py-2 px-4 border-b font-bold text-left">Cons</th>
                <th className="py-2 px-4 border-b font-bold text-left">Ideal For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-600 dark:hover:bg-gray-700 text-zinc-200">
                <td className="py-2 px-4 border-b">Ubuntu Server</td>
                <td className="py-2 px-4 border-b">Large community, easy to use, lots of tutorials</td>
                <td className="py-2 px-4 border-b">Can be resource-intensive</td>
                <td className="py-2 px-4 border-b">Beginners, general-purpose servers</td>
              </tr>
              <tr className="hover:bg-gray-600 dark:hover:bg-gray-700 text-zinc-200">
                <td className="py-2 px-4 border-b">Debian</td>
                <td className="py-2 px-4 border-b">Stable, secure, highly customizable</td>
                <td className="py-2 px-4 border-b">Steeper learning curve, less frequent updates</td>
                <td className="py-2 px-4 border-b">Experienced users, stable production servers</td>
              </tr>
              <tr className="hover:bg-gray-600 dark:hover:bg-gray-700 text-zinc-200">
                <td className="py-2 px-4 border-b">CentOS Stream</td>
                <td className="py-2 px-4 border-b">Enterprise-grade, robust, Red Hat ecosystem</td>
                <td className="py-2 px-4 border-b">Shorter support lifecycle compared to CentOS Linux</td>
                <td className="py-2 px-4 border-b">Users familiar with Red Hat, development/testing</td>
              </tr>
              <tr className="hover:bg-gray-600 dark:hover:bg-gray-700 text-zinc-200">
                <td className="py-2 px-4 border-b">FreeBSD</td>
                <td className="py-2 px-4 border-b">Highly performant, secure, excellent for networking</td>
                <td className="py-2 px-4 border-b">Less software availability compared to Linux</td>
                <td className="py-2 px-4 border-b">Advanced users, network appliances, storage servers</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 no-underline"
          >
            Contact Us for Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default OSComparisonTable
