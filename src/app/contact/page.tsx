"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-colors duration-500">
      <div className="h-24"></div> {/* Navbar Spacer */}
      <div className="max-w-[1400px] mx-auto py-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT COLUMN: Office Info */}
          <div data-aos="fade-right">
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 font-bold mb-4 block">
              Inquiries
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl italic mb-8 leading-tight">
              Connect with <br />
              <span className="not-italic">Our Studio.</span>
            </h1>

            <div className="space-y-12 mt-16">
              <div>
                <h4 className="text-[11px] uppercase tracking-widest font-bold text-stone-400 mb-4">
                  Location
                </h4>
                <p className="text-sm sm:text-xl font-light leading-relaxed">
                  723 E 12200 S Suite 101 A<br />
                  Draper, Utah 84020
                </p>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-widest font-bold text-stone-400 mb-4">
                  Direct
                </h4>
                <a
                  href="tel:4808817022"
                  className="text-lg sm:text-xl font-serif italic hover:text-blue-600 transition-colors"
                >
                  (480) 881-7022
                </a>
                <p className="mt-2 text-sm sm:text-lg italic text-stone-500 font-light">
                  marshallhansonmethod@gmail.com
                </p>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-widest font-bold text-stone-400 mb-4">
                  Studio Hours
                </h4>
                <ul className="space-y-2 text-sm font-light text-stone-600 dark:text-stone-400">
                  <li className="flex justify-between max-w-[200px]">
                    <span>Mon — Thu</span> <span>8am - 5pm</span>
                  </li>
                  <li className="flex justify-between max-w-[200px]">
                    <span>Fri — Sun</span> <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div
            className="bg-white dark:bg-stone-900 sm:p-8 p-4 lg:p-12 sm:rounded-[3rem] rounded-3xl shadow-xl shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-stone-800"
            data-aos="fade-left"
          >
            <form className="space-y-8">
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 group-focus-within:text-blue-600 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-0 border-b border-stone-200 dark:border-stone-700 py-4 px-0 focus:ring-0 focus:border-blue-600 transition-all placeholder:text-stone-300 dark:placeholder:text-stone-700"
                />
              </div>

              <div className="group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 group-focus-within:text-blue-600 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-0 border-b border-stone-200 dark:border-stone-700 py-4 px-0 focus:ring-0 focus:border-blue-600 transition-all placeholder:text-stone-300 dark:placeholder:text-stone-700"
                />
              </div>

              <div className="group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 group-focus-within:text-blue-600 transition-colors">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your smile goals..."
                  className="w-full bg-transparent border-0 border-b border-stone-200 dark:border-stone-700 py-4 px-0 focus:ring-0 focus:border-blue-600 transition-all resize-none placeholder:text-stone-300 dark:placeholder:text-stone-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-950 py-6 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Full-width Map Placeholder */}
      <section className="mt-20 h-[50vh] bg-stone-200 dark:bg-stone-800 relative transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1603.1448703955007!2d-111.8710713!3d40.5294386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752875d895a1f4d%3A0x4af6ce03935ed7cb!2sMARSHALL%20HANSON%20METHOD!5e1!3m2!1sen!2sin!4v1774307321324!5m2!1sen!2sin"
          className="w-full h-[400px] border-0"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
