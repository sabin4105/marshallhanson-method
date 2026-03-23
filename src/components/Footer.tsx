import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 border-t border-stone-200 dark:border-stone-800 pt-20 pb-10 mt-20">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-stone-700 to-transparent"></div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl" data-aos="fade-right">
            <h2 className="font-serif text-3xl lg:text-6xl leading-[1.1] tracking-tight mb-6 text-stone-900 dark:text-stone-100">
              Crafted care,
              <span className="block italic text-stone-500 dark:text-stone-400">
                long after your visit.
              </span>
            </h2>

            <p className="text-lg text-stone-600 dark:text-stone-400 font-light max-w-md">
              Experience a new standard of dental artistry at our Draper studio.
            </p>
          </div>

          <div
            className="flex flex-col items-start lg:items-end gap-6"
            data-aos="fade-left"
          >
            <div className="text-right hidden lg:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2 font-bold">
                Official Practice
              </p>

              <div className="text-lg font-bold tracking-tighter uppercase text-stone-900 dark:text-stone-100">
                Marshall Hanson{" "}
                <span className="font-light text-stone-500 dark:text-stone-400">
                  Dentistry
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-stone-900 dark:bg-stone-100 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white dark:text-black transition-all duration-300 hover:shadow-xl"
            >
              <span className="relative z-10">Book a Visit</span>
              <div className="absolute inset-0 -translate-x-full bg-stone-700 dark:bg-stone-300 transition-transform duration-300 group-hover:translate-x-0"></div>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-t border-stone-200 dark:border-stone-800">
          {/* Contact */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 dark:text-stone-400">
              Contact
            </p>

            <div className="space-y-3">
              {/* Phone */}
              <a
                href="tel:4808817022"
                className="flex items-center gap-3 text-xl font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors tracking-tighter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-sm sm:text-base">(480) 881-7022</span>
              </a>

              {/* Email */}
              <a
                href="mailto:marshallhansonmethod@gmail.com"
                className="flex items-center gap-3 text-sm italic text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors tracking-wide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0 text-stone-400 dark:text-stone-500"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

                <span>marshallhansonmethod@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 dark:text-stone-400">
              Location
            </p>

            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
              723 E 12200 S Suite 101 A<br />
              Draper, Utah 84020
            </p>

            {/* Maps (unchanged structure, fixed colors) */}
            <a
              href="https://maps.app.goo.gl/M3AEF76YRQNh9nsZ6"
              target="_blank"
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest font-bold border-b border-stone-300 dark:border-stone-600 pb-1 hover:border-stone-900 dark:hover:border-stone-200 transition-all text-stone-700 dark:text-stone-300"
            >
              <span>Open Maps</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </a>
          </div>

          {/* Follow (ICONS PRESERVED) */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 dark:text-stone-400">
              Follow
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/marshallhansondentistry"
                className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/marshallhansondentistry1"
                className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://www.threads.net/@marshallhansondentistry"
                className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-threads"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                </svg>
                <span>Thread</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 dark:text-stone-400">
              Quick Links
            </p>

            <div className="flex flex-col gap-3 text-sm text-stone-600 dark:text-stone-400">
              <Link
                href="/become-a-patient"
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                New Patient Forms
              </Link>
              <Link
                href="/services"
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-10 border-t border-stone-200/60 dark:border-stone-800 flex flex-col md:flex-row justify-between text-center items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 font-medium">
            © 2026 Marshall Hanson Dentistry. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 font-bold">
            <Link
              href="/privacy"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
