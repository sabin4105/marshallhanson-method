import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen dark:bg-stone-950">
      {/* CORE HERO SECTION */}
      <section className="relative min-h-screen px-2 flex items-center pt-20">
        <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          <div
            className="lg:col-span-7 z-10  text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <span className="inline-block mb-6 mt-4 sm:mt-0 text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold">
              Excellence in Restorative Care
            </span>
            <h1 className="fluid-title font-serif leading-[1.1] mb-8 text-3xl sm:text-6xl font-bold italic text-stone-800 dark:text-gray-300">
              The intersection of <br />
              <span className="not-italic text-gray-500 dark:text-gray-300">
                Art & Dental Health.
              </span>
            </h1>
            <p className="max-w-md text-lg text-gray-500 leading-relaxed mb-10 font-light">
              Experience a new standard of dentistry where modern technology
              meets a curated, patient-first aesthetic.
            </p>

            <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start">
              <a
                href="/become-a-patient"
                className="bg-black text-white dark:bg-gray-100 dark:text-black px-5 py-3 lg:px-10 lg:py-5 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 hover:-translate-y-1"
              >
                New Patient Inquiry
              </a>

              <a
                href="/virtual-consult"
                className="group flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-bold text-black dark:text-white transition-colors"
              >
                Virtual Consult
                <span
                  className="group-hover:translate-x-2 transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-5 relative"
            data-aos="zoom-out"
            data-aos-duration="1500"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image
                width={600}
                height={400}
                src="/images/img1.jpg"
                alt="Modern Aesthetic Clinic"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute -bottom-10 -left-10 w-fit bg-white dark:bg-stone-700 ml-3 pl-8 py-2 px-3 lg:p-8 rounded-2xl shadow-xl xl:block"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-[10px] sm:text-sm uppercase tracking-widest flex gap-1 items-center text-gray-400 mb-1">
                Follow the Journey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </p>
              <a
                href="https://instagram.com/marshallhansondentistry"
                target="_blank"
                className="font-serif italic text-sm sm:text-xl hover:text-purple-600 dark:text-stone-300 transition"
              >
                @marshallhansondentistry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pt-32 md:pb-28 py-20">
        <div
          className="max-w-[1000px] mx-auto px-6 text-center"
          data-aos="fade-up"
        >
          <h2 className="font-serif text-3xl dark:text-stone-200 lg:text-5xl italic mb-3 text-balance leading-tight">
            “Our philosophy is simple: Treat people, not just teeth.”
          </h2>
          <div className="w-20 h-[1px] bg-black dark:bg-white mx-auto"></div>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS GO HERE */}
      <div className="h-screen bg-white" />
    </main>
  );
}
