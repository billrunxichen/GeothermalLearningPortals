import { motion } from 'motion/react';
import { ArrowUpRight, DatabaseZap, Landmark, MapPinned } from 'lucide-react';

const caseStudies = [
  {
    name: 'Barnard College',
    place: 'New York, NY',
    takeaway: 'Campus-scale retrofit shows how dense urban institutions can anchor loop development.',
    href: 'https://drive.google.com/file/d/1eq-NKvHSiF0MLwADtQay20guKMWDcexA/view'
  },
  {
    name: 'Eastern Emerald',
    place: 'Queens, NY',
    takeaway: 'Mixed-use development demonstrates geothermal fit in large neighborhood redevelopment.',
    href: 'https://drive.google.com/file/d/1JVdo8NymRNJV5Y4E5EWO5ViT7gonu9Zi/view'
  },
  {
    name: 'GE Research Campus',
    place: 'Niskayuna, NY',
    takeaway: 'Institutional site with specialized buildings highlights phased decarbonization potential.',
    href: 'https://drive.google.com/file/d/1n-TIt-W4VQVlCsgHfHkzq2pEzM-j7TIa/view'
  },
  {
    name: 'Gowanus Green',
    place: 'Brooklyn, NY',
    takeaway: 'Affordable housing case links equitable development goals with district geothermal planning.',
    href: 'https://drive.google.com/file/d/10_udiUfi1mJ5kKdEJM6iu9LkOi3Y2Zla/view'
  },
  {
    name: 'Ithaca Southside',
    place: 'Ithaca, NY',
    takeaway: 'Community-led case underscores the role of local organizing and public-interest framing.',
    href: 'https://drive.google.com/file/d/11QbDYpWq4LYuVtkUPAiLWGhfFC-oe_Eq/view'
  },
  {
    name: 'Innovation QNS',
    place: 'Queens, NY',
    takeaway: 'Large master-planned site offers a model for integrating geothermal early in project design.',
    href: 'https://drive.google.com/file/d/1aGgwmzwdmOE63Q4mbpKaoHqD3QELxVpw/view'
  }
];

const policyCards = [
  {
    title: 'Community cases',
    body: 'Use proven examples to answer the first political question: has this worked anywhere like us?',
    icon: MapPinned
  },
  {
    title: 'Database direction',
    body: 'The original portal pointed toward a database of geothermal neighborhoods. This merged version keeps that idea alive with an atlas-style section and resource explorer.',
    icon: DatabaseZap
  },
  {
    title: 'State policy',
    body: 'Local success still depends on franchise rules, utility regulation, and public financing pathways at the state level.',
    icon: Landmark
  }
];

export function CaseStudyAtlas() {
  return (
    <section id="case-atlas" className="scroll-mt-24 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_38%,#ecfeff_100%)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_100px_-40px_rgba(15,23,42,0.7)]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-amber-200">
              <MapPinned className="h-4 w-4" />
              Chapter 4 cases
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight">
              Learn from working projects before asking your own community to move.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              The static site devoted an entire chapter to examples and policy. This section keeps that structure and
              turns it into a quick atlas of transferable precedents for advocacy, planning, and stakeholder outreach.
            </p>

            <div className="mt-8 grid gap-4">
              {policyCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                        <Icon className="h-5 w-5 text-amber-200" />
                      </div>
                      <div className="font-semibold text-white">{card.title}</div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{card.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.a
                key={study.name}
                href={study.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-42px_rgba(14,116,144,0.35)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{study.place}</div>
                    <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-bold text-slate-900">{study.name}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-900" />
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{study.takeaway}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
