import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';

type ResourceCategory = 'all' | 'foundations' | 'process' | 'physical' | 'cases';

interface ResourceItem {
  title: string;
  description: string;
  href: string;
  section: string;
  category: Exclude<ResourceCategory, 'all'>;
  format: string;
}

const resources: ResourceItem[] = [
  { title: 'Moving Heat Fundamentals', description: 'Leaflet introducing how thermal energy is captured, moved, and repurposed.', href: 'https://drive.google.com/file/d/168m7G4-G4WEo7lNQ1rjG8zTVtm8nYfXu/view', section: '1.1', category: 'foundations', format: 'Leaflet' },
  { title: 'Ground-Source Heat Pumps', description: 'DOE fact sheet explaining the technology behind ground-source systems.', href: 'https://drive.google.com/file/d/1_79OOgG7aGgZbS4roTv8j2y-AR95LXnk/view', section: '1.2', category: 'foundations', format: 'Fact Sheet' },
  { title: 'Thermal Energy Networks', description: 'Explainer video on shared geothermal infrastructure.', href: 'https://www.youtube.com/watch?v=gYO6GJo0NEY', section: '1.3', category: 'foundations', format: 'Video' },
  { title: 'Gas-to-Geo Transition', description: 'Bridge document for explaining the shift from fossil gas to shared thermal networks.', href: 'https://drive.google.com/file/d/1R0FrrqYdCOna9YgP45R7u5IySIy2FBJs/view', section: '2.1', category: 'process', format: 'PDF' },
  { title: 'TENs Opportunities Chart', description: 'Worksheet for spotting municipal, institutional, and redevelopment opportunities.', href: 'https://drive.google.com/file/d/19E8_-A-bE_Py_oM7aSAHNV8G2htBZnYC/view', section: '2.2', category: 'process', format: 'Worksheet' },
  { title: 'Ladder of Engagement', description: 'Slide deck for moving people from awareness to active coalition roles.', href: 'https://docs.google.com/presentation/d/1Ie6HnQQDyJYKkLdB9yzf1VW9u-9ihUq_pyoEzLvQP24/edit', section: '2.3', category: 'process', format: 'Slides' },
  { title: 'Energy from Wastewater', description: 'Fact sheet showing how wastewater systems can support thermal energy reuse.', href: 'https://drive.google.com/file/d/11sMDs8RJJ8DPfRH4C38OzUhnXuoMMmPw/view', section: '3.1', category: 'physical', format: 'Fact Sheet' },
  { title: 'Basics of Thermal Networks', description: 'One-page flyer summarizing the core layout and components of thermal loops.', href: 'https://drive.google.com/file/d/17sw6jMr3azd7J2APncgE-aaOHGVHtzf0/view', section: '3.2', category: 'physical', format: 'Flyer' },
  { title: 'Paris District Cooling', description: 'Audio story on large-scale urban heat management using buried infrastructure.', href: 'https://theworld.org/stories/2025/06/30/amid-rising-heat-paris-expands-a-network-of-pipes-to-keep-cool', section: '3.4', category: 'physical', format: 'Audio' },
  { title: 'VCTN Case Studies', description: 'Collection of community-scale geothermal case studies from multiple building types.', href: 'https://drive.google.com/file/d/1GpQfC7EQXascLwjGq2r5nyPHyC9sI-bE/view', section: '4.1', category: 'cases', format: 'Collection' },
  { title: 'Policy Recommendations', description: 'State-policy brief focused on enabling community thermal energy systems.', href: 'https://drive.google.com/file/d/1EXElZ0g9tJaF6b7rMcLEqb_01w3pIGAp/view', section: '4.3', category: 'cases', format: 'Policy Brief' },
  { title: 'Geothermal Deep Dive', description: 'Long-form technical video for users who want more detail.', href: 'https://www.youtube.com/watch?v=Ncs7Sy-CCG0&list=PLSc0O51LWuDdjNA1UabX-Jf0SZUJZSV__&index=12', section: '4.x', category: 'cases', format: 'Video' }
];

const filters: Array<{ key: ResourceCategory; label: string }> = [
  { key: 'all', label: 'Show All' },
  { key: 'foundations', label: 'Ch 1: Foundations' },
  { key: 'process', label: 'Ch 2: Process' },
  { key: 'physical', label: 'Ch 3: Physical' },
  { key: 'cases', label: 'Ch 4: Cases' }
];

export function ResourceLibrary() {
  const [activeFilter, setActiveFilter] = useState<ResourceCategory>('all');

  const filteredResources = useMemo(() => {
    if (activeFilter === 'all') {
      return resources;
    }

    return resources.filter((resource) => resource.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="resource-library" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">R</span>
            <h2 className="text-4xl font-bold text-slate-800">Resource Library</h2>
          </div>
          <p className="text-lg text-slate-600 italic mb-6">
            The document grid from the static portal, adapted into the original single-page app style.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === filter.key
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-slate-700 shadow hover:bg-slate-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center rounded-full bg-emerald-700 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {resource.format}
                </div>
                <div className="text-xs font-semibold text-slate-500">Section {resource.section}</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{resource.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-5">{resource.description}</p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                Open resource
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
