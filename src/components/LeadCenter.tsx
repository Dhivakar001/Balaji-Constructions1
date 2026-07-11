import React from 'react';
import { Inquiry } from '../types';
import { Users, Phone, ShieldCheck, Mail, Calendar, Trash2, ArrowRight, MessageSquare, ClipboardList, CheckCircle } from 'lucide-react';

interface LeadCenterProps {
  inquiries: Inquiry[];
  onUpdateStatus: (id: string, newStatus: Inquiry['status']) => void;
  onDeleteLead: (id: string) => void;
  onAddMockInquiries: () => void;
}

export default function LeadCenter({ inquiries, onUpdateStatus, onDeleteLead, onAddMockInquiries }: LeadCenterProps) {
  const [selectedLead, setSelectedLead] = React.useState<Inquiry | null>(null);

  // Stats calculators
  const totalLeads = inquiries.length;
  const newLeads = inquiries.filter(l => l.status === 'new').length;
  const contactedLeads = inquiries.filter(l => l.status === 'contacted' || l.status === 'proposal_sent').length;
  const contractedLeads = inquiries.filter(l => l.status === 'contracted' || l.status === 'completed').length;
  
  const estimatedPipelineValue = inquiries.reduce((sum, l) => {
    return sum + (l.calculatedEstimate || (l.areaSize * 1800));
  }, 0);

  // Status badges mapping
  const getStatusBadge = (status: Inquiry['status']) => {
    switch (status) {
      case 'new':
        return <span className="bg-red-100 text-red-800 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">New Lead</span>;
      case 'contacted':
        return <span className="bg-yellow-100 text-yellow-800 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Contacted</span>;
      case 'proposal_sent':
        return <span className="bg-blue-100 text-blue-800 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Proposal Sent</span>;
      case 'contracted':
        return <span className="bg-emerald-100 text-emerald-800 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Contracted</span>;
      case 'completed':
        return <span className="bg-slate-100 text-slate-800 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Completed</span>;
    }
  };

  // Pre-fill WhatsApp follow-up copy
  const getWhatsAppFollowupText = (lead: Inquiry) => {
    const est = lead.calculatedEstimate ? `approx estimate ₹${lead.calculatedEstimate.toLocaleString()}` : 'custom price proposal';
    return encodeURIComponent(
      `Hello ${lead.name}, this is Balaji Constructions Engineering Desk. Thank you for submitting your civil inquiry for a ${lead.projectType} of ${lead.areaSize.toLocaleString()} Sq. Ft. We have reviewed your parameters and compiled a ${est}. Let's schedule a 10-minute phone call to discuss.`
    );
  };

  return (
    <section className="py-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title / Corporate Intro */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-slate-900 text-yellow-500 font-extrabold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider">
              Secure Staff Portal
            </div>
            <h2 className="text-3xl font-black text-slate-900 mt-2.5 uppercase tracking-tight">
              Balaji Lead Management Hub
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Internal CRM for managing civil contractor inquiries, calculated estimates, and partner feedback logs.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2.5">
            {totalLeads === 0 && (
              <button
                onClick={onAddMockInquiries}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-extrabold text-xs px-4 py-2.5 rounded-lg uppercase tracking-wide transition-colors"
              >
                Populate Sample Inquiries
              </button>
            )}
            <span className="text-xs text-slate-500 self-center font-mono">
              Role: <strong>Owner/Site Supervisor</strong>
            </span>
          </div>
        </div>

        {/* Dashboard Statistics Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">Inquiries Received</span>
            <div className="text-2xl font-black text-slate-900 mt-1">{totalLeads}</div>
            <span className="text-[10px] text-red-600 font-bold block mt-1">● {newLeads} Unattended</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">Negotiating Slabs</span>
            <div className="text-2xl font-black text-slate-900 mt-1">{contactedLeads}</div>
            <span className="text-[10px] text-slate-500 block mt-1">Proposals compiled</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">Active Work Orders</span>
            <div className="text-2xl font-black text-emerald-700 mt-1">{contractedLeads}</div>
            <span className="text-[10px] text-emerald-600 block mt-1">✓ Material deposits received</span>
          </div>

          <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block">Total Bid Portfolio</span>
            <div className="text-2xl font-black text-yellow-500 font-mono mt-1">
              ₹{estimatedPipelineValue.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-400 block mt-1">Based on client square-footage</span>
          </div>
        </div>

        {/* Master-Detail Leads Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Table Area (8 Cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
              <span className="text-xs uppercase font-extrabold text-slate-500 tracking-wider flex items-center">
                <ClipboardList className="w-4 h-4 mr-1.5 text-slate-600" /> Lead Registration Ledger
              </span>
              <span className="text-[10px] text-slate-400 font-bold">Total entries: {totalLeads}</span>
            </div>

            {totalLeads === 0 ? (
              <div className="p-12 text-center text-slate-500 space-y-4">
                <p className="text-xs">No client leads received in this session yet.</p>
                <p className="text-[11px] text-slate-400 max-w-md mx-auto">
                  Go to the <strong>Home</strong> tab or the <strong>Estimate Calculator</strong>, fill in details, and press submit. 
                  Your lead will instantly register and populate in this ledger!
                </p>
                <button
                  onClick={onAddMockInquiries}
                  className="bg-yellow-500 text-slate-950 px-4 py-2 rounded font-bold text-xs uppercase"
                >
                  Generate sample inquiries to test
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-400 uppercase font-bold text-[9px] tracking-wider select-none">
                      <th className="p-4">Contact Detail</th>
                      <th className="p-4">Project Parameters</th>
                      <th className="p-4">Estimate Bid</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {inquiries.map((lead) => (
                      <tr
                        key={lead.id}
                        onClick={() => setSelectedLead(lead)}
                        className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                          selectedLead?.id === lead.id ? 'bg-yellow-500/5' : ''
                        }`}
                      >
                        <td className="p-4">
                          <p className="font-extrabold text-slate-900 uppercase">{lead.name}</p>
                          <p className="font-mono text-[10px] text-slate-500 mt-1">{lead.phone}</p>
                        </td>
                        <td className="p-4">
                          <p className="font-bold text-slate-800">{lead.projectType}</p>
                          <p className="text-[10px] text-slate-500 mt-1 font-semibold uppercase">
                            {lead.areaSize.toLocaleString()} Sq.Ft. • {lead.propertyType}
                          </p>
                        </td>
                        <td className="p-4">
                          <p className="font-mono font-bold text-slate-900">
                            ₹{lead.calculatedEstimate ? lead.calculatedEstimate.toLocaleString() : 'Negotiating'}
                          </p>
                        </td>
                        <td className="p-4">
                          {getStatusBadge(lead.status)}
                        </td>
                        <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => onDeleteLead(lead.id)}
                            className="text-slate-400 hover:text-red-600 p-1.5 rounded transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Details / Action Drawer Panel (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            {selectedLead ? (
              <div className="bg-slate-50 rounded-xl border border-slate-300 p-5 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500"></div>
                
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">Lead Detail Card</span>
                  <h3 className="text-md font-black text-slate-950 uppercase mt-1 leading-tight">{selectedLead.name}</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">Submitted: {new Date(selectedLead.timestamp).toLocaleTimeString()}</p>
                </div>

                {/* Status Toggle Box */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Change Progress Status</label>
                  <select
                    value={selectedLead.status}
                    onChange={(e) => onUpdateStatus(selectedLead.id, e.target.value as Inquiry['status'])}
                    className="w-full text-xs border border-slate-200 bg-white rounded-lg p-2.5 font-semibold text-slate-800 focus:outline-none focus:border-yellow-500"
                  >
                    <option value="new">New Lead (Pending Call)</option>
                    <option value="contacted">Contacted / Call Completed</option>
                    <option value="proposal_sent">Cost Proposal Dispatched</option>
                    <option value="contracted">Civil Contract Signed</option>
                    <option value="completed">Work Handed Over</option>
                  </select>
                </div>

                {/* Sub-parameters */}
                <div className="bg-white border border-slate-200 p-3.5 rounded-lg space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Email:</span>
                    <span className="font-semibold text-slate-900 truncate max-w-[150px]">{selectedLead.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Built-Up Area:</span>
                    <span className="font-bold text-slate-900">{selectedLead.areaSize.toLocaleString()} Sq. Ft.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Budget Tier Chosen:</span>
                    <span className="font-bold text-slate-900 uppercase">{selectedLead.budgetTier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Pipeline Quote:</span>
                    <span className="font-mono font-black text-yellow-600">
                      ₹{selectedLead.calculatedEstimate ? selectedLead.calculatedEstimate.toLocaleString() : 'N/A'}
                    </span>
                  </div>
                </div>

                {/* Narrative Message */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Civil Notes / Request</span>
                  <p className="bg-white border border-slate-200 p-3 rounded-lg text-xs text-slate-600 italic leading-relaxed">
                    "{selectedLead.message}"
                  </p>
                </div>

                {/* WhatsApp Dispatch Follow-up */}
                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[+\s()-]/g, '')}?text=${getWhatsAppFollowupText(selectedLead)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send WhatsApp Callback</span>
                  </a>
                  <p className="text-[9px] text-slate-400 text-center mt-2">
                    Pre-fills a polite civil quote follow-up message in your browser.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-400 h-full flex flex-col justify-center items-center">
                <ClipboardList className="w-10 h-10 text-slate-300 mb-3" />
                <p className="text-xs font-bold uppercase text-slate-500">No Lead Selected</p>
                <p className="text-[11px] text-slate-400 max-w-[180px] mx-auto mt-1">
                  Click on any client entry in the register to view specs, update status, or dispatch WhatsApp callback.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
