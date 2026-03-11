import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Drill, Landmark, Network } from 'lucide-react';

const chapterCards = [
  {
    id: 'introduction',
    number: 'Chapter 1',
    title: 'Basics',
    description: 'Learn the thermal-energy fundamentals, heat pump concepts, benefits, and costs that ground the portal.',
    color: 'from-blue-400 to-cyan-500',
    icon: BookOpen
  },
  {
    id: 'build-coalition',
    number: 'Chapter 2',
    title: 'Process',
    description: 'Carry over the original process pages on coalition-building, opportunity mapping, and community action.',
    color: 'from-emerald-400 to-green-500',
    icon: Network
  },
  {
    id: 'site-selection',
    number: 'Chapter 3',
    title: 'Physical',
    description: 'Keep the technical scroll-based learning flow around siting, studies, and building integration.',
    color: 'from-orange-400 to-red-500',
    icon: Drill
  },
  {
    id: 'case-atlas',
    number: 'Chapter 4',
    title: 'Cases',
    description: 'Add back the case-study and policy material from the static portal without breaking the single-page experience.',
    color: 'from-purple-400 to-pink-500',
    icon: Landmark
  }
];

const overviewCards = [
  {
    tag: 'The Vision',
    title: 'Redefining Community Comfort',
    body: 'Buildings do not need to act as isolated energy islands. The merged portal keeps the static site’s framing around shared resources and community-scale thermal systems.'
  },
  {
    tag: 'The Solution',
    title: 'Recycling Heat Through Networks',
    body: 'The app still teaches the original React sections, but now it also carries over the district-energy framing and chapter structure from the other site.'
  },
  {
    tag: 'The Impact',
    title: 'Learning, Planning, and Persuasion',
    body: 'The result is one scrolling site that supports technical learning, coalition-building, precedent research, and resource discovery in one place.'
  }
];

export function PortalJourney() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="portal-journey" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">0.0</span>
            <h2 className="text-4xl font-bold text-slate-800">Portal Overview</h2>
          </div>
          <p className="text-lg text-slate-600 italic mb-6">
            A single scrolling portal that keeps the original app flow while restoring the chapter ideas from the static site.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {overviewCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="inline-block bg-emerald-700 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                {card.tag}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{card.title}</h3>
              <p className="text-slate-700 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {chapterCards.map((chapter, index) => {
            const Icon = chapter.icon;

            return (
              <motion.button
                key={chapter.id}
                type="button"
                onClick={() => scrollToSection(chapter.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="text-left bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-24 bg-gradient-to-r ${chapter.color} p-6 text-white flex items-center justify-between`}>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-white/90">{chapter.number}</div>
                    <h3 className="text-2xl font-bold">{chapter.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 leading-relaxed mb-4">{chapter.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Jump to section
                    <ArrowRight className="w-4 h-4" />
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
