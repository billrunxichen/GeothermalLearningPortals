import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PortalJourney } from './components/PortalJourney';
import { Introduction } from './components/Introduction';
import { IndividualHomeHeating } from './components/IndividualHomeHeating';
import { DistrictHeating } from './components/DistrictHeating';
import { ElectricityGeneration } from './components/ElectricityGeneration';
import { Benefits } from './components/Benefits';
import { Costs } from './components/Costs';
import { BuildCoalition } from './components/BuildCoalition';
import { CommunityOpportunities } from './components/CommunityOpportunities';
import { DesignProcess } from './components/DesignProcess';
import { SiteSelection } from './components/SiteSelection';
import { ScopingStudies } from './components/ScopingStudies';
import { BuildingRetrofits } from './components/BuildingRetrofits';
import { CommunityEngagement } from './components/CommunityEngagement';
import { HomeownerFAQs } from './components/HomeownerFAQs';
import { CaseStudyAtlas } from './components/CaseStudyAtlas';
import { InteractiveMap } from './components/InteractiveMap';
import { ResourceLibrary } from './components/ResourceLibrary';
import { TableOfContents } from './components/TableOfContents';

export default function App() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'portal-journey',
        'introduction',
        'individual-heating',
        'district-heating',
        'electricity-generation',
        'benefits',
        'costs',
        'build-coalition',
        'community-opportunities',
        'design-process',
        'site-selection',
        'scoping-studies',
        'building-retrofits',
        'community-engagement',
        'homeowner-faqs',
        'case-atlas',
        'resource-library',
        'global-map'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Hero />
      <TableOfContents activeSection={activeSection} />
      <div className="relative">
        <PortalJourney />
        <Introduction />
        <IndividualHomeHeating />
        <DistrictHeating />
        <ElectricityGeneration />
        <Benefits />
        <Costs />
        <BuildCoalition />
        <CommunityOpportunities />
        <DesignProcess />
        <SiteSelection />
        <ScopingStudies />
        <BuildingRetrofits />
        <CommunityEngagement />
        <HomeownerFAQs />
        <CaseStudyAtlas />
        <ResourceLibrary />
        <InteractiveMap />
      </div>
    </div>
  );
}
