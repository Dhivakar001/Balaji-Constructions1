import React from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Calendar, MapPin, Minimize2, Maximize2, FileCheck, Shield, ChevronRight, HardHat, Clock } from 'lucide-react';

interface ProjectsGalleryProps {
  onInquireSimilar: (projectTitle: string) => void;
}

export default function ProjectsGallery({ onInquireSimilar }: ProjectsGalleryProps) {
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Turnkey' },
    { id: 'commercial', label: 'Commercial Plazas' },
    { id: 'industrial', label: 'Industrial Warehouses' },
    { id: 'infrastructure', label: 'Infrastructure & Civil' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-extrabold bg-slate-100 px-3 py-1 rounded">Our Portfolio</span>
          <h2 className="text-3xl font-black text-slate-900 mt-3 uppercase tracking-tight">
            Completed Projects Gallery
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-slate-600 text-sm">
            We operate with complete engineering transparency. Browse our verified build portfolio showing actual completion years, 
            safety logs, and material standards delivered.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeFilter === f.id
                  ? 'bg-slate-900 border-slate-950 text-white shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(p)}
            >
              {/* Image with overlay tags */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-yellow-500 font-bold text-[9px] uppercase tracking-widest px-2 py-1 rounded border border-slate-800">
                  {p.category}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 text-white font-mono text-[10px] px-2.5 py-0.5 rounded backdrop-blur-sm">
                  {p.location}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow space-y-4">
                <div>
                  <h3 className="font-extrabold text-slate-950 uppercase tracking-tight text-base group-hover:text-yellow-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100 text-[11px] font-mono">
                  <div className="text-slate-600">
                    <span className="text-slate-400 block text-[9px] font-sans font-bold uppercase">Built Area</span>
                    <span className="font-bold text-slate-900">{p.area}</span>
                  </div>
                  <div className="text-slate-600">
                    <span className="text-slate-400 block text-[9px] font-sans font-bold uppercase">Duration</span>
                    <span className="font-bold text-slate-900">{p.duration}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="flex items-center text-slate-500 font-semibold font-mono">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-yellow-600" />
                  Completed: {p.completionYear}
                </span>
                <span className="text-slate-900 font-bold uppercase tracking-wider text-[10px] flex items-center group-hover:text-yellow-600 transition-colors">
                  View Specs
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detailed Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-300 animate-in fade-in zoom-in-95 duration-200">
              {/* Image banner inside modal */}
              <div className="relative h-64 sm:h-80 w-full bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-slate-900/95 border border-slate-800 text-white rounded-full p-2 hover:bg-yellow-500 hover:text-slate-950 transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-yellow-500 text-slate-950 font-black text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-2 drop-shadow-md">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Detailed Specs Block */}
                  <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <p className="font-semibold text-slate-800 border-b border-slate-200 pb-1.5 uppercase">Site Engineering Log</p>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Client:</span>
                      <span className="font-bold text-slate-900 text-right">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Location:</span>
                      <span className="font-bold text-slate-900 text-right">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Built up Area:</span>
                      <span className="font-bold text-slate-900 text-right">{selectedProject.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Curing Duration:</span>
                      <span className="font-bold text-slate-900 text-right">{selectedProject.duration}</span>
                    </div>
                  </div>

                  {/* Safety Indicators */}
                  <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col justify-between border border-slate-800">
                    <div>
                      <div className="flex items-center space-x-1.5 text-yellow-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                        <HardHat className="w-3.5 h-3.5" />
                        <span>Workplace Safety Standards</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        This site was fully scaffolded using heavy-gauge iron pipes rather than unaligned casuarina poles.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 flex justify-between items-center mt-3">
                      <span className="text-[10px] text-slate-400 font-mono">Safe Man-Hours Logged</span>
                      <span className="font-mono font-black text-yellow-500 text-xs bg-slate-800 px-2 py-0.5 rounded">
                        {selectedProject.safetyHours.toLocaleString()} Hrs
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description and deliverables list */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Project Narrative</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Verification Checklist</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.highlights.map((high, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-[11px] text-slate-700">
                        <FileCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2.5">
                <button
                  onClick={() => {
                    onInquireSimilar(selectedProject.title);
                    setSelectedProject(null);
                  }}
                  className="w-full sm:flex-1 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-extrabold py-3 rounded-lg text-xs uppercase tracking-wider text-center"
                >
                  Inquire For Similar Build
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-32 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 rounded-lg text-xs uppercase tracking-wider text-center"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
