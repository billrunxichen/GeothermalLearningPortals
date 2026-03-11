import { motion } from 'motion/react';
import { ArrowUpRight, Database, FileText, Landmark } from 'lucide-react';

const featuredCases = [
  {
    name: 'Barnard College',
    location: 'New York, NY',
    summary: 'Campus-scale precedent for dense institutional retrofits and shared thermal infrastructure.',
    href: 'https://drive.google.com/file/d/1eq-NKvHSiF0MLwADtQay20guKMWDcexA/view'
  },
  {
    name: 'Eastern Emerald',
    location: 'Queens, NY',
    summary: 'Shows how neighborhood-scale redevelopment can integrate geothermal systems early.',
    href: 'https://drive.google.com/file/d/1JVdo8NymRNJV5Y4E5EWO5ViT7gonu9Zi/view'
  },
  {
    name: 'Gowanus Green',
    location: 'Brooklyn, NY',
    summary: 'Connects housing, planning, and equitable development goals to geothermal deployment.',
    href: 'https://drive.google.com/file/d/10_udiUfi1mJ5kKdEJM6iu9LkOi3Y2Zla/view'
  },
  {
    name: 'Ithaca Southside',
    location: 'Ithaca, NY',
    summary: 'Useful example for community-led organizing and local coalition framing.',
    href: 'https://drive.google.com/file/d/11QbDYpWq4LYuVtkUPAiLWGhfFC-oe_Eq/view'
  }
];

const chapterBlocks = [
  {
    icon: Database,
    title: 'Community cases',
    body: 'The original Chapter 4 emphasized looking at places where geothermal and district energy already work.'
  },
  {
    icon: FileText,
    title: 'Database direction',
    body: 'This merged version keeps the database idea, but presents it in a format that matches the original scrolling app.'
  },
  {
    icon: Landmark,
    title: 'State policy',
    body: 'The policy material is preserved so the portal still supports advocacy, not only technical education.'
  }
];

export function CaseStudyAtlas() {
  return (
    <section id="case-atlas" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">4.1</span>
            <h2 className="text-4xl font-bold text-slate-800">Cases and Policy</h2>
          </div>
          <p className="text-lg text-slate-600 italic mb-6">
            Key Questions: Where have community-scale geothermal projects worked, and what policy conditions help them succeed?
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
            <p className="text-slate-700 leading-relaxed">
              This section brings the original static-site case-study chapter into the scrolling portal. It is meant to
              preserve the precedent-driven style of the other site without replacing the app’s existing layout.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {chapterBlocks.map((block, index) => {
            const Icon = block.icon;

            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl shadow-md p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{block.title}</h3>
                <p className="text-slate-600 leading-relaxed">{block.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredCases.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">{item.location}</div>
                  <h3 className="text-2xl font-bold text-slate-800">{item.name}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
              </div>
              <p className="text-slate-700 leading-relaxed">{item.summary}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
