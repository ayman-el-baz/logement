import React, { useState } from 'react'
import Layout from "../Layout/Layout"
import SliderPicture from '../../SliderPicture'
import Footer from './Footer';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
    // You can add more complex logic here, like sending data to a server
  };
  return (
    <Layout>
      <div>
        <SliderPicture />
        <div>
          <h1 className='font-medium text-4xl text-center mt-6 text-gray-600'>Services</h1>
          <div className="h-2 w-full flex justify-center mt-3">
            <div className="h-full w-1/4 bg-red-500"></div>
            <div className="h-full w-1/4 bg-blue-500"></div>
          </div>
        </div>
        <div>
          <ul className="w-full space-y-1 text-blue-900 list-inside dark:text-gray-400 font-medium text-2xl flex justify-center mt-6 space-x-16">
            <div className='space-y-3'>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                AC Repaire
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                AC Installation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                AC Maintenance
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Furnace Reapair
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Furnace Installation
              </li>
            </div>
            <div className='space-y-3'>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Furnace Maintenance
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Heat Pump Installation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Air Quality
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Water Heater
              </li>
            </div>
          </ul>
        </div>
        <div className='flex h-20 w-full justify-center items-center space-x-20 text-2xl font-medium my-8 bg-gray-300'>
          <h1 className='text-gray-600'>Call Today</h1>
          <button className='text-blue-800 underline'>(212) 665654649</button>
        </div>
        <div>
          <h1 className='font-medium text-4xl text-center mt-6 text-gray-600'>Photos</h1>
          <div className="h-2 w-full flex my-3">
            <div className="h-full w-1/2 bg-red-500"></div>
            <div className="h-full w-1/2 bg-blue-500"></div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/duo-1.jpg" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/technicien-1.jpg" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/technicien-2.jpg" alt="" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/technicien-3.jpg" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/technicien-4.jpg" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/technicien-5.jpg" alt="" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/remoteclime.jpg" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/background.jpg" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos\technicien-6.jpg" alt="" />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="photos/clime-3.jpg" alt="" />
              </div>
              <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 p-3 my-3">
          <h1 className='font-medium text-4xl text-center mt-6 text-gray-600'>Send Us a Message</h1>
          <div className="h-2 w-full flex justify-center my-3">
            <div className="h-full w-1/4 bg-red-500"></div>
            <div className="h-full w-1/4 bg-blue-500"></div>
          </div>
          <form onSubmit={handleSubmit} className="max-w-lg my-3 mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              Submit
            </button>
          </form>
        </div>
        <Footer/>
      </div>
    </Layout>
  )
}
