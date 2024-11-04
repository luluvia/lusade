import ThemeSwitch from '@/lib/components/ui/ThemeSwitch'
import { faGithub, faLinkedin } from '@awesome.me/kit-92eb028db2/icons/classic/brands'
import { faEnvelope } from '@awesome.me/kit-92eb028db2/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm bg-opacity-80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Luis Luvia</span>
            <div className="flex items-center gap-4">
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Luis Luvia</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Software Developer specializing in modern web technologies
            </p>
            <div className="flex justify-center gap-4">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-6 h-6 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-6 h-6 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Project description goes here</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                  rows={4}
                />
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Luis Luvia. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default HomePage
