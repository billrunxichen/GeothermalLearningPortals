import { motion } from 'motion/react';
import { type ComponentType, useMemo, useState } from 'react';
import { ArrowUpRight, Database, FileText, PlayCircle, Radio, Rows3 } from 'lucide-react';

type ResourceCategory = 'all' | 'foundations' | 'process' | 'physical' | 'cases';

interface ResourceItem {
  title: string;
  description: string;
  href: string;
  section: string;
  category: Exclude<ResourceCategory, 'all'>;
  format: 'Leaflet' | 'Fact Sheet' | 'Video' | 'Audio' | 'Collection' | 'Policy Brief';
}

const resources: ResourceItem[] = [
  {
    title: 'Moving Heat Fundamentals',
    description: 'Leaflet introducing how thermal energy is captured, moved, and repurposed.',
    href: 'https://drive.google.com/file/d/168m7G4-G4WEo7lNQ1rjG8zTVtm8nYfXu/view',
    section: '1.1',
    category: 'foundations',
    format: 'Leaflet'
  },
  {
    title: 'Ground-Source Heat Pumps',
    description: 'DOE fact sheet explaining the technology behind ground-source systems.',
    href: 'https://drive.google.com/file/d/1_79OOgG7aGgZbS4roTv8j2y-AR95LXnk/view',
    section: '1.2',
    category: 'foundations',
    format: 'Fact Sheet'
  },
  {
    title: 'Thermal Energy Networks',
    description: 'Building Decarbonization Coalition explainer on shared geothermal infrastructure.',
    href: 'https://www.youtube.com/watch?v=gYO6GJo0NEY',
    section: '1.3',
    category: 'foundations',
    format: 'Video'
  },
  {
    title: 'Gas-to-Geo Transition',
    description: 'Bridge document for explaining the shift from fossil gas to shared thermal networks.',
    href: 'https://drive.google.com/file/d/1R0FrrqYdCOna9YgP45R7u5IySIy2FBJs/view',
    section: '2.1',
    category: 'process',
    format: 'Fact Sheet'
  },
  {
    title: 'TENs Opportunities Chart',
    description: 'Worksheet for spotting municipal, institutional, and redevelopment opportunities.',
    href: 'https://drive.google.com/file/d/19E8_-A-bE_Py_oM7aSAHNV8G2htBZnYC/view',
    section: '2.2',
    category: 'process',
    format: 'Fact Sheet'
  },
  {
    title: 'Ladder of Engagement',
    description: 'Slide deck for moving people from awareness to active coalition roles.',
    href: 'https://docs.google.com/presentation/d/1Ie6HnQQDyJYKkLdB9yzf1VW9u-9ihUq_pyoEzLvQP24/edit',
    section: '2.3',
    category: 'process',
    format: 'Collection'
  },
  {
    title: 'Energy from Wastewater',
    description: 'Fact sheet showing how wastewater systems can support thermal energy reuse.',
    href: 'https://drive.google.com/file/d/11sMDs8RJJ8DPfRH4C38OzUhnXuoMMmPw/view',
    section: '3.1',
    category: 'physical',
    format: 'Fact Sheet'
  },
  {
    title: 'Basics of Thermal Networks',
    description: 'One-page flyer summarizing the core layout and components of thermal loops.',
    href: 'https://drive.google.com/file/d/17sw6jMr3azd7J2APncgE-aaOHGVHtzf0/view',
    section: '3.2',
    category: 'physical',
    format: 'Leaflet'
  },
  {
    title: 'Paris District Cooling',
    description: 'Audio story on large-scale urban heat management using buried infrastructure.',
    href: 'https://theworld.org/stories/2025/06/30/amid-rising-heat-paris-expands-a-network-of-pipes-to-keep-cool',
    section: '3.4',
    category: 'physical',
    format: 'Audio'
  },
  {
    title: 'VCTN Case Studies',
    description: 'Collection of community-scale geothermal case studies from multiple building types.',
    href: 'https://drive.google.com/file/d/1GpQfC7EQXascLwjGq2r5nyPHyC9sI-bE/view',
    section: '4.1',
    category: 'cases',
    format: 'Collection'
  },
  {
    title: 'Policy Recommendations',
    description: 'State-policy brief focused on enabling community thermal energy systems.',
    href: 'https://drive.google.com/file/d/1EXElZ0g9tJaF6b7rMcLEqb_01w3pIGAp/view',
    section: '4.3',
    category: 'cases',
    format: 'Policy Brief'
  },
  {
    title: 'Geothermal Deep Dive',
    description: 'MassCEC video overview for audiences who want more technical context.',
    href: 'https://www.youtube.com/watch?v=Ncs7Sy-CCG0&list=PLSc0O51LWuDdjNA1UabX-Jf0SZUJZSV__&index=12',
    section: '4.x',
    category: 'cases',
    format: 'Video'
  }
];

const filters: Array<{ key: ResourceCategory; label: string }> = [
  { key: 'all', label: 'Show all' },
  { key: 'foundations', label: 'Chapter 1' },
  { key: 'process', label: 'Chapter 2' },
  { key: 'physical', label: 'Chapter 3' },
  { key: 'cases', label: 'Chapter 4' }
];

const formatIcons = {
  Leaflet: FileText,
  'Fact Sheet': Rows3,
  Video: PlayCircle,
  Audio: Radio,
  Collection: Database,
  'Policy Brief': FileText
} satisfies Record<ResourceItem['format'], ComponentType<{ className?: string }>>;

export function ResourceLibrary() {
  const [activeFilter, setActiveFilter] = useState<ResourceCategory>('all');

  const filteredResources = useMemo(() => {
    if (activeFilter === 'all') {
      return resources;
    }

    return resources.filter((resource) => resource.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="resource-library" className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-emerald-200">
              <Database className="h-4 w-4" />
              Resource explorer
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight md:text-5xl">
              Consolidated library for references, templates, and persuasion tools.
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              The static portal had a strong resource grid. This section carries that idea forward inside the merged app
              so the learning content and supporting documents live in one place.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300 shadow-2xl backdrop-blur">
            <div className="font-semibold text-white">{filteredResources.length} curated links</div>
            <div>Switch chapters to narrow the library to the stage you are working on.</div>
          </div>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter.key
                  ? 'border-emerald-400 bg-emerald-400 text-slate-950'
                  : 'border-white/15 bg-white/5 text-slate-200 hover:border-emerald-300 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource, index) => {
            const Icon = formatIcons[resource.format];

            return (
              <motion.a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_-42px_rgba(16,185,129,0.4)] backdrop-blur"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    <Icon className="h-3.5 w-3.5" />
                    {resource.format}
                  </div>
                  <div className="text-xs font-semibold text-emerald-200">Section {resource.section}</div>
                </div>

                <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-bold text-white">{resource.title}</h3>
                <p className="min-h-24 text-sm leading-relaxed text-slate-300">{resource.description}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">
                  Open resource
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
