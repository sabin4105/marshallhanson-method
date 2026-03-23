"use client";

const MHMFeatures = () => {
  const features = [
    {
      id: "01",
      title: "THE MHM AND BROKEN TEETH",
      desc: "Beyond structural repair: we utilize biomimetic materials to recreate the natural light-reflecting properties of enamel, ensuring the restoration is invisible to the eye.",
    },
    {
      id: "02",
      title: "WHY THE LATEST CASE IS THE BEST",
      desc: "Every transformation is a culmination of refined technique. We don't just repeat success; we innovate on the biological blueprint of every unique patient.",
    },
    {
      id: "03",
      title: "5 COMMON QUESTIONS: MHM",
      desc: "Radical transparency on longevity and technique. A patient-first approach centered on minimally invasive precision and building a healthy foundation.",
    },
    {
      id: "04",
      title: "JAW PAIN & MUSCLE TIGHTNESS",
      desc: "Aligning your smile with your jaw's natural resting position. We focus on Neuromuscular Harmony to eliminate pain while enhancing your aesthetic profile.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-stone-950 w-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="group border-l border-stone-200 dark:border-stone-800 pl-8 py-4 hover:border-stone-900 dark:hover:border-stone-100 transition-all duration-300"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-stone-400 mb-6 block uppercase">
                Section {item.id}
              </span>
              <h3 className="font-serif text-xl mb-4 leading-tight text-stone-900 dark:text-stone-100 italic group-hover:not-italic transition-all">
                {item.title}
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                {item.desc}
              </p>
              <div className="mt-6 overflow-hidden">
                <button className="text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 text-stone-900 dark:text-stone-100 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  Read Analysis <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MHMFeatures;
