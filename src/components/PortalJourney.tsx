import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Drill, Factory, Landmark, Network, Target } from 'lucide-react';

const chapters = [
  {
    id: 'introduction',
    number: 'Chapter 1',
    title: 'Basics',
    summary: 'Thermal energy, home heating, district systems, benefits, and costs.',
    icon: BookOpen,
    color: 'from-amber-400 to-orange-500',
    bullets: ['Start with thermal energy and heat pumps', 'Compare home-scale and network-scale systems']
  },
  {
    id: 'build-coalition',
    number: 'Chapter 2',
    title: 'Process',
    summary: 'Coalition-building, opportunity mapping, engagement ladders, and ownership strategy.',
    icon: Network,
    color: 'from-emerald-400 to-teal-500',
    bullets: ['Identify who benefits and who should be involved', 'Move from interest to an organized local coalition']
  },
  {
    id: 'site-selection',
    number: 'Chapter 3',
    title: 'Physical System',
    summary: 'Site selection, scoping studies, retrofits, and community-facing design decisions.',
    icon: Drill,
    color: 'from-sky-400 to-blue-600',
    bullets: ['Locate viable sites and anchor buildings', 'Understand studies, retrofits, and rollout constraints']
  },
  {
    id: 'case-atlas',
    number: 'Chapter 4',
    title: 'Cases and Policy',
    summary: 'Real projects, transferable lessons, and the state-level rules that shape deployment.',
    icon: Landmark,
    color: 'from-rose-400 to-red-500',
    bullets: ['Study working community-scale examples', 'Use precedent to support local advocacy']
  }
];

const highlights = [
  { label: 'Learning tracks', value: '4', icon: BookOpen },
  { label: 'Action stages', value: '12+', icon: Target },
  { label: 'System scales', value: 'Home to district', icon: Factory }
];

export function PortalJourney() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="portal-journey" className="scroll-mt-24 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_rgba(224,231,255,0.65),_rgba(226,232,240,0.9))] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <Network className="h-4 w-4 text-emerald-600" />
              Consolidated Geothermal Learning Portal
            </div>
            <h2 className="max-w-4xl font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              One portal for the science, organizing, infrastructure, and case studies behind geothermal networks.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              This merged experience keeps the chapter-based structure from the original MIT RE Clinic portal, while
              preserving the more immersive, interactive learning flow from the React app. Use it as a guided course,
              a project brief, or a lightweight explorer for community-scale geothermal ideas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_20px_60px_-36px_rgba(15,23,42,0.45)] backdrop-blur">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                  <div className="text-sm text-slate-600">{item.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;

            return (
              <motion.button
                key={chapter.id}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => scrollToSection(chapter.id)}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] transition-shadow hover:shadow-[0_30px_90px_-36px_rgba(15,23,42,0.55)]"
              >
                <div className={`h-2 bg-gradient-to-r ${chapter.color}`} />
                <div className="p-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{chapter.number}</div>
                      <h3 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold text-slate-900">{chapter.title}</h3>
                    </div>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${chapter.color} text-white shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <p className="mb-6 text-base leading-relaxed text-slate-600">{chapter.summary}</p>

                  <div className="space-y-3">
                    {chapter.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                        <div className={`mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r ${chapter.color}`} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Explore this chapter
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
