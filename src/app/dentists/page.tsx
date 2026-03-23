import Image from "next/image";
import Link from "next/link";

export default function DentistsPage() {
  const offerings = [
    {
      title: "Online Courses",
      description:
        "Master the Marshall Hanson Method through our comprehensive digital curriculum.",
      link: "/courses", // Update with actual external link if needed
      cta: "View Courses",
      image: "/images/onlineCourses.avif",
    },
    {
      title: "One-On-One Mentoring",
      description:
        "Personalized clinical guidance and high-level case planning for professionals.",
      link: "/mentoring",
      cta: "Schedule Session",
      image: "/images/1on1Mentoring.avif",
    },
    {
      title: "Gingival Matrix Kit",
      description:
        "The official Marshall Hanson Method toolkit for precision restorative dentistry.",
      link: "/products",
      cta: "Shop Products",
      image: "/images/marshallhanson.avif",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] dark:bg-stone-950">
      <div className="h-24"></div> {/* Navbar Spacer */}
      {/* Header Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-8 sm:py-20 border-b border-stone-200 dark:border-stone-700 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="max-w-3xl" data-aos="fade-up">
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-4 block">
            Clinical Leadership
          </span>
          <h1 className="font-serif text-4xl lg:text-7xl italic dark:text-stone-300 leading-tight mb-8">
            The Marshall Hanson <br />
            <span className="not-italic text-2xl sm:text-5xl dark:text-stone-300 text-stone-900">
              Education & Method
            </span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 font-light leading">
            Beyond the clinic, we are dedicated to advancing the art of <br />
            restorative dentistry. Explore our specialized kits, <br />{" "}
            mentoring programs, and online training.
          </p>
        </div>

        <div
          className="relative flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-stone-800 group"
          data-aos="zoom-in"
        >
          <video
            src="https://video.wixstatic.com/video/2025b6_aa20f56a9e994681a92340e0de6c0cc6/1080p/mp4/file.mp4"
            autoPlay
            loop
            muted /* CRITICAL: Autoplay won't work without this */
            playsInline
            controls
            controlsList="nodownload nofullscreen"
            className="absolute inset-0 w-full h-full object-cover opacity-60 hide-controls transition-opacity duration-500"
          />

          {/* Optional: A subtle "Hover to play with sound" hint for the user */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
              Controls Active
            </span>
          </div>
        </div>
      </section>
      {/* Offerings Grid */}
      <section className="max-w-[1400px] mx-auto sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white sm:rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col h-full">
                <h3 className="font-serif text-3xl mb-4 group-hover:italic transition-all">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-8">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold tracking-tight text-stone-900 transition-all duration-300 ease-out hover:text-blue-600 group-hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:focus-visible:ring-blue-400/40 rounded-full"
                >
                  {item.cta} <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Mentorship Philosophy Section */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <div className="mx-auto px-6 flex flex-col items-center gap-10">
          <div data-aos="fade-right" className="flex flex-col items-center">
            <h2
              className="font-serif text-3xl lg:text-5xl italic mb-6 text-center relative inline-block
                     after:content-[''] after:block after:h-[2px] after:w-16 after:mx-auto after:mt-4
                     after:bg-gradient-to-r after:from-blue-400 after:via-blue-500 after:to-blue-600 after:rounded-full"
            >
              "True mastery is found in the willingness to share it."
            </h2>

            <p className="text-stone-400 dark:text-stone-400 font-light leading-loose max-w-md text-center">
              The Marshall Hanson Method isn't just a clinical technique—it's a
              philosophy of precision, empathy, and aesthetic excellence. Join a
              community of dentists elevating their practice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
