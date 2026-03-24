import Image from "next/image";
import Link from "next/link";
import { Carousel } from "flowbite-react";



export default function BecomeAPatient() {

  const images = [
    "/images/teeth1.avif",
    "/images/teeth2.avif",
    "/images/teeth3.avif",
    // "/images/teeth4.avif",
  ];

  return (
    <main className="relative dark:bg-stone-950">
      {/* Spacer for Fixed Navbar */}
      <div className="h-20"></div>

      <div className="max-w-[1400px] w-full mx-auto">
        {/* Header */}
        <header className="mb-18" data-aos="fade-up">
          <h1 className="font-serif italic text-stone-900 dark:text-stone-100 text-[clamp(2.2rem,5vw,4.5rem)]">
            Become a Patient
          </h1>

          <p className="text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] text-[clamp(0.7rem,1.2vw,0.9rem)] font-bold">
            Your journey to a new smile in three simple steps
          </p>
        </header>

        {/* 3 Steps Section */}
        <section className="relative mx-auto mb-5 sm:mb-0 px-6 sm:px-8 lg:px-12 lg:py-18">
          <div className="grid md:grid-cols-3 gap-14 lg:gap-20">
            {/* Step 1 */}
            <div
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Big Number */}
              <span className="pointer-events-none absolute -top-10 sm:-top-12 -left-2 sm:-left-4 z-0 text-[80px] sm:text-[100px] lg:text-[120px] font-semibold tracking-tight text-slate-300 dark:text-zinc-800 opacity-50">
                01
              </span>

              <div className="relative z-10 pt-10">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-5 text-stone-900 dark:text-white">
                  Watch Intro Video
                </h3>

                <div className="aspect-video rounded-2xl overflow-hidden  bg-stone-200 dark:bg-zinc-800 shadow-md group-hover:shadow-xl transition-all duration-300 border border-white/60 dark:border-white/10">
                  <video
                    src="/video/intro.mp4"
                    autoPlay
                    loop
                    muted /* CRITICAL: Autoplay won't work without this */
                    playsInline
                    controls
                    controlsList="nodownload nofullscreen"
                    className="w-full h-full object-cover"
                    poster="/images/video-placeholder.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="relative group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Big Number */}
              <span className="pointer-events-none absolute -top-10 sm:-top-12 -left-2 sm:-left-4 z-0 text-[80px] sm:text-[100px] lg:text-[120px] font-semibold tracking-tight text-slate-300 dark:text-zinc-800 opacity-50">
                02
              </span>

              <div className="relative z-10 pt-10">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-5 text-stone-900 dark:text-white">
                  Virtual Consult
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-stone-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  Share your goals from the comfort of your home.
                </p>

                <Link
                  href="/virtual-consult"
                  className="inline-flex items-center justify-center w-full py-3.5 sm:py-4  rounded-full border border-stone-900 dark:border-white/20 text-stone-900 dark:text-white hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 uppercase text-[10px] sm:text-xs tracking-[0.2em] font-semibold"
                >
                  Request Consult
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="relative group mt-6 md:mt-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Big Number */}
              <span className="pointer-events-none absolute -top-10 sm:-top-12 -left-2 sm:-left-4 z-0 text-[80px] sm:text-[100px] lg:text-[120px] font-semibold tracking-tight text-slate-300 dark:text-zinc-800 opacity-50">
                03
              </span>

              <div className="relative z-10 pt-10">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-5 text-stone-900 dark:text-white">
                  Reserve Date
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-stone-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  Secure your appointment in our Draper clinic.
                </p>

                <button className="inline-flex items-center justify-center w-full py-3.5 sm:py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 uppercase text-[10px] sm:text-xs tracking-[0.2em] font-semibold shadow-md hover:shadow-lg shadow-blue-500/20">
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white dark:bg-stone-700/20 rounded-[3rem] p-2 sm:p-8 md:p-20 shadow-sm border border-stone-100 dark:border-stone-600">
          <div className="grid lg:grid-cols-2 gap-20">
            <div data-aos="fade-right">
              <h2 className="font-serif text-4xl lg:text-5xl text-center sm:text-left mb-8 text-stone-900 dark:text-stone-400">
                What are <br />
                <span className="italic text-blue-600 text-3xl sm:text-5xl">
                  Composite Veneers?
                </span>
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6 font-light text-sm sm:text-lg">
                Direct Composite Resin Veneers are a non-invasive treatment
                option used to improve the color, appearance, shape,
                proportions, and function of your smile.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold">✓</span>
                  <p className="text-sm italic text-stone-500">
                    No "shaving down" natural enamel required.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold">✓</span>
                  <p className="text-sm italic text-stone-500">
                    Matches natural enamel strength & luster.
                  </p>
                </div>
              </div>

              <div
                className="relative w-full max-w-4xl mx-auto px-4"
                data-aos="zoom-in"
              >
                <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px] rounded-xl sm:rounded-[2em] overflow-hidden shadow-2xl group">
                  <Carousel
                    slideInterval={3000} // Changes image every 3 seconds
                    indicators={true}
                    pauseOnHover
                    // Custom Aesthetic Arrows
                    leftControl={
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </div>
                    }
                    rightControl={
                      <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    }
                  >
                    {images.map((src, index) => (
                      <div key={index} className="relative h-full w-full">
                        <Image
                          src={src}
                          alt={`Dental Transformation ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index === 0}
                        />
                        {/* Subtle aesthetic overlay */}
                        <div className="absolute inset-0 bg-stone-900/10" />
                      </div>
                    ))}
                  </Carousel>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">
                    Clinical Portfolio — Smile Transformations
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12" data-aos="fade-left">
              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold mb-4 border-b border-stone-100 pb-2 text-stone-400">
                  Advantages
                </h4>
                <div className="grid gap-6">
                  <div>
                    <h5 className="font-bold text-sm mb-1 uppercase tracking-tight text-stone-900 dark:text-stone-400">
                      Non-Invasive
                    </h5>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">
                      Unlike porcelain, we preserve the integrity of your
                      underlying natural tooth structure.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-1 uppercase tracking-tight text-stone-900 dark:text-stone-400">
                      Easy Maintenance
                    </h5>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">
                      Repairs can be made seamlessly without redoing the entire
                      veneer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 dark:bg-zinc-900/10 p-8 rounded-3xl sm:border border-stone-100 dark:border-zinc-600/40">
                <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-stone-900 dark:text-white">
                  Aftercare Recommendations
                </h4>
                <ul className="text-xs text-stone-500 dark:text-zinc-400 space-y-4 list-none leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    Brush with low-abrasive toothpaste (70 RDA or lower).
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    Wear your retainer nightly to prevent grinding damage.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    Professional polishing during regular cleanings.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    Avoid biting hard objects like ice or pens.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
