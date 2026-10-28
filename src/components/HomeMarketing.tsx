import React, { useState } from 'react';
import { Building2, ShieldCheck, Briefcase, KeyRound, CheckCircle2, ArrowRight, Calculator, FileCheck, Users, HelpCircle, XCircle } from 'lucide-react';
import { Property } from '../types';
import { PropertyVisual } from './PropertyVisual';

interface HomeMarketingProps {
  featuredProperties: Property[];
  onSelectProperty: (property: Property) => void;
  onExploreProperties: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const HomeMarketing: React.FC<HomeMarketingProps> = ({
  featuredProperties,
  onSelectProperty,
  onExploreProperties,
  onNavigateToTab,
}) => {
  // Interactive Society Tenancy Savings Calculator
  const [flatCount, setFlatCount] = useState<number>(60);
  const [turnoverRate, setTurnoverRate] = useState<number>(20); // 20% annual tenant turnover
  const [monthlyRent, setMonthlyRent] = useState<number>(25000); // Monthly rent per household (1000 to 150000 INR)

  const annualTenancies = Math.round((flatCount * turnoverRate) / 100);
  const estimatedAdminHoursSaved = annualTenancies * 18; // 18 hrs saved in police verification, reference checks, committee meetings
  // Estimated ₹ saved in unpaid dues, legal notices, security deposit friction, and delayed NOCs
  const savedDisputeCost = Math.round(annualTenancies * (monthlyRent * 0.5));

  return (
    <div className="space-y-20 pb-20">
      
      {/* 3 Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Ecosystem Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight [text-wrap:balance]">
            Engineered to Solve Real Estate Friction Across All Three Sides
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Real estate in cooperative housing societies fails when stakeholders operate in silos. Novitiate Housing creates complete institutional alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Housing Societies (Leaf Green Brand Anchor #72A346) */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/90 shadow-xs flex flex-col justify-between hover:border-[#72A346] hover:shadow-md transition-all group overflow-hidden">
            <div className="space-y-3.5">
              <div className="relative h-44 w-full overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                  alt="Cooperative housing societies and residential complexes"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-xs text-[#72A346] shadow-xs flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 tracking-tight group-hover:text-[#72A346] transition-colors">
                For Housing Societies
              </h3>
              <p className="text-xs text-neutral-500 font-medium">
                Managing Committees & Society Office Bearers
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Direct society involvement throughout tenancy with verified credentials, standard 2–3 year terms, and dispute-free NOC issuance.
              </p>
              
              <ul className="space-y-2 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#72A346] shrink-0" />
                  <span>Mandatory tenant & workplace verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#72A346] shrink-0" />
                  <span>Maharashtra Co-op Societies Act compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#72A346] shrink-0" />
                  <span>Structured 2–3 year tenancy agreements</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-neutral-100">
              <button
                onClick={() => onNavigateToTab('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#72A346] hover:underline"
              >
                <span>Onboard Your Society</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Real Estate Agents (Sky Blue Brand Anchor #5C96D2) */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/90 shadow-xs flex flex-col justify-between hover:border-[#5C96D2] hover:shadow-md transition-all group overflow-hidden">
            <div className="space-y-3.5">
              <div className="relative h-44 w-full overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="Certified real estate brokers and property advisory"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-xs text-[#5C96D2] shadow-xs flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 tracking-tight group-hover:text-[#5C96D2] transition-colors">
                For Real Estate Agents
              </h3>
              <p className="text-xs text-neutral-500 font-medium">
                MahaRERA Licensed Brokers & Independent Consultants
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Empowering agents with verified access to gated societies across Mumbai MMR, expanding revenue with zero paperwork friction.
              </p>
              
              <ul className="space-y-2 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5C96D2] shrink-0" />
                  <span>Direct inventory with pre-cleared NOCs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5C96D2] shrink-0" />
                  <span>50–50 institutional co-brokering protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5C96D2] shrink-0" />
                  <span>High-intent verified buyer & tenant leads</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-neutral-100">
              <button
                onClick={() => onNavigateToTab('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C96D2] hover:underline"
              >
                <span>Join Agent Partner Network</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Home Buyers & Renters (Coral Red / Warm Orange Brand Anchor #E84144) */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/90 shadow-xs flex flex-col justify-between hover:border-[#E84144] hover:shadow-md transition-all group overflow-hidden">
            <div className="space-y-3.5">
              <div className="relative h-44 w-full overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
                  alt="Modern home interiors for buyers and tenants"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-xs text-[#E84144] shadow-xs flex items-center justify-center font-bold">
                  <KeyRound className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 tracking-tight group-hover:text-[#E84144] transition-colors">
                For Buyers & Renters
              </h3>
              <p className="text-xs text-neutral-500 font-medium">
                Families, Corporate Tenants & First-time Buyers
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Transparent property journeys with pre-approved society clearances, verified chain of title deeds, and zero surprises.
              </p>
              
              <ul className="space-y-2 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E84144] shrink-0" />
                  <span>100% pre-vetted legal titles and OC checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E84144] shrink-0" />
                  <span>Smooth society move-in with pre-cleared passes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E84144] shrink-0" />
                  <span>Standardized digital agreements & police intimation</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-neutral-100">
              <button
                onClick={onExploreProperties}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E84144] hover:underline"
              >
                <span>Browse Verified Properties</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Properties Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
              Curated Selection
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Featured Society Listings
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Pre-cleared with complete society NOC approvals and reference-checked records.
            </p>
          </div>
          <button
            onClick={onExploreProperties}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors shrink-0"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProperties.slice(0, 3).map((property) => (
            <div
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <PropertyVisual
                  preset={property.imagePreset}
                  images={property.images}
                  cycleIntervalSeconds={property.imageCycleRateSeconds}
                  title={property.title}
                  type={property.type}
                  className="h-48 w-full group-hover:scale-[1.02] transition-transform duration-300"
                />

                <div className="p-5 space-y-3">
                  {/* Clean unboxed metadata with separators (Anti-Slop Zero Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                    <span>{property.bedrooms} BHK</span>
                    <span aria-hidden="true">·</span>
                    <span>{property.areaSqFt} sq.ft</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-semibold">NOC Verified</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors line-clamp-1">
                    {property.title}
                  </h3>

                  <p className="text-xs text-neutral-500 line-clamp-1">
                    {property.societyName} · {property.locality}
                  </p>

                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {property.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-base font-extrabold text-neutral-900 font-mono tabular-nums">
                    {property.priceFormatted}
                  </span>
                  {property.type === 'rent' && property.deposit && (
                    <span className="text-[11px] text-neutral-400 block font-mono">
                      Dep: ₹{(property.deposit / 1000).toFixed(0)}k
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-neutral-900 group-hover:underline">
                  View Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix: Traditional Brokerage vs Novitiate Housing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/90 overflow-hidden">
          {/* Trademark 4-Color Gradient Accent Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#F59415] via-[#E84144] via-[#5C96D2] to-[#72A346]" />

          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="max-w-3xl mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F59415] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#F59415]" />
                <span>The Structural Difference</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Why Housing Societies & Homeowners Switch to Novitiate
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Traditional brokerage ignores cooperative housing society by-laws, leading to NOC rejections, dispute delays, and compliance risks. Here is how our institutional platform compares.
              </p>
            </div>

            {/* 2-Column Comparison Matrix: Traditional vs Novitiate Housing */}
            <div className="space-y-4">
              {/* Column Legend Header */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 pb-3 border-b border-neutral-200">
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-[#E84144] flex items-center justify-center shrink-0">
                    <XCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-900">
                      Traditional Brokerage
                    </div>
                    <div className="text-[11px] text-neutral-500 hidden sm:block">
                      Fragmented, uncoordinated, high friction
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-[#72A346]/5 border border-[#72A346]/25">
                  <div className="w-7 h-7 rounded-lg bg-[#72A346]/15 text-[#72A346] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-900">
                      Novitiate Housing Platform
                    </div>
                    <div className="text-[11px] text-[#72A346] font-medium hidden sm:block">
                      Pre-cleared NOCs, vetted & institutional
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Cards: Filtered to only 01, 02, 03 */}
              <div className="space-y-3.5 pt-1">
                {[
                  {
                    num: '01',
                    dimension: 'Society NOC Processing',
                    traditional: 'Treated as an afterthought; frequent rejections & committee delays (3–6 weeks).',
                    novitiate: 'Pre-cleared directly with society managing committee; 48-hour standardized turnaround.',
                  },
                  {
                    num: '02',
                    dimension: 'Tenant Credential Verification',
                    traditional: 'Surface ID check only; no workplace, past landlord, or society track-record verification.',
                    novitiate: 'Multi-point background vetting + mandatory employer and past society reference clearance.',
                  },
                  {
                    num: '03',
                    dimension: 'Legal & Statutory Compliance',
                    traditional: 'Informal stamp papers, unverified terms, and missing police intimation receipts.',
                    novitiate: '100% digital registered leave & license agreements + certified police acknowledgement receipts.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="bg-neutral-50/70 hover:bg-neutral-50 rounded-xl p-4 sm:p-5 border border-neutral-200/90 transition-all space-y-3"
                  >
                    {/* Transaction Dimension as Prominent Header */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#F59415] bg-[#F59415]/10 border border-[#F59415]/20 px-2 py-0.5 rounded-md">
                        {item.num}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                        {item.dimension}
                      </h3>
                    </div>

                    {/* 2 Columns: Traditional vs Novitiate Housing */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-6 text-xs sm:text-sm">
                      {/* Column 1: Traditional Brokerage */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-neutral-200/80 text-neutral-600 leading-relaxed shadow-2xs flex flex-col justify-between">
                        <div className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <XCircle className="w-3 h-3 text-red-500 shrink-0" />
                          <span>Traditional</span>
                        </div>
                        <p className="text-neutral-600">{item.traditional}</p>
                      </div>

                      {/* Column 2: Novitiate Housing */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-[#72A346]/5 border border-[#72A346]/30 text-neutral-900 leading-relaxed shadow-2xs flex flex-col justify-between">
                        <div className="text-[10px] font-bold text-[#72A346] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#72A346] shrink-0" />
                          <span>Novitiate Housing</span>
                        </div>
                        <p className="font-medium text-neutral-800">{item.novitiate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Society Tenancy Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-neutral-800" />
                <span>Society Impact Model</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                Calculate Management Hours & Dispute Costs Saved for Your Society
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Enter your residential society parameters to see how institutionalizing tenancy reference checks and NOC workflows reduces managing committee administrative overhead.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1">
                    <span>Total Flats in Society</span>
                    <span className="font-mono">{flatCount} Units</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="300"
                    step="5"
                    value={flatCount}
                    onChange={(e) => setFlatCount(Number(e.target.value))}
                    className="w-full accent-neutral-900 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-0.5">
                    <span>15 units</span>
                    <span>150 units</span>
                    <span>300 units</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1">
                    <span>Annual Tenant Turnover</span>
                    <span className="font-mono">{turnoverRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={turnoverRate}
                    onChange={(e) => setTurnoverRate(Number(e.target.value))}
                    className="w-full accent-neutral-900 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-0.5">
                    <span>5%</span>
                    <span>25%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1">
                    <span>Monthly Rent per Household</span>
                    <span className="font-mono text-[#72A346] font-bold">
                      ₹{monthlyRent.toLocaleString('en-IN')} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="150000"
                    step="1000"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    className="w-full accent-[#72A346] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-0.5">
                    <span>₹1,000</span>
                    <span>₹75,000</span>
                    <span>₹1,50,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                
                <div className="p-4 bg-white rounded-lg border border-neutral-200/60 shadow-xs">
                  <div className="text-xs text-neutral-500 font-medium">Annual Tenancies</div>
                  <div className="text-2xl font-bold text-neutral-900 font-mono tabular-nums mt-1">
                    {annualTenancies}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">Units processed/yr</div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200/60 shadow-xs">
                  <div className="text-xs text-neutral-500 font-medium">Committee Hours Saved</div>
                  <div className="text-2xl font-bold text-neutral-900 font-mono tabular-nums mt-1">
                    {estimatedAdminHoursSaved} hrs
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">Verification & meetings</div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200/60 shadow-xs">
                  <div className="text-xs text-neutral-500 font-medium">Estimated Dispute Loss Saved</div>
                  <div className="text-2xl font-bold text-[#72A346] font-mono tabular-nums mt-1">
                    {savedDisputeCost >= 100000
                      ? `₹${(savedDisputeCost / 100000).toFixed(2)} Lakh`
                      : `₹${(savedDisputeCost / 1000).toFixed(0)}k`}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">Dues & legal friction</div>
                </div>

              </div>

              <div className="mt-6 pt-5 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-neutral-600 font-medium">
                  Ready to adopt zero-cost society onboarding for your managing committee?
                </p>
                <button
                  onClick={() => onNavigateToTab('contact')}
                  className="px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#E84144] to-[#F59415] rounded-lg hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 shadow-xs"
                >
                  Schedule Society Presentation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials & Proof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Validated By The Ecosystem
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Trusted by Society Chairmen, Certified Brokers & Tenants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[#72A346] transition-colors">
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic">
              "Before Novitiate Housing, our society office was constantly dealing with unannounced tenants, forged police forms, and broker arguments. Now every tenant comes with verified credentials, and our NOC is cleared in 24 hours."
            </p>
            <div className="pt-4 mt-4 border-t border-neutral-100">
              <div className="text-xs font-bold text-neutral-900">Maheshwar Rao</div>
              <div className="text-[11px] text-[#72A346] font-semibold">Secretary, Evershine Meadows CHS, Vasai East</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[#5C96D2] transition-colors">
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic">
              "As a MahaRERA registered agent, getting listings in reputed housing societies used to require personal connections and endless paperwork. Novitiate provides direct access with verified society blessing. My deal closure rate doubled."
            </p>
            <div className="pt-4 mt-4 border-t border-neutral-100">
              <div className="text-xs font-bold text-neutral-900">Anand Solanki</div>
              <div className="text-[11px] text-[#5C96D2] font-semibold">Principal Agent, Solanki Prime Properties</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[#E84144] transition-colors">
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic">
              "Relocating to Vasai was stress-free. The flat had a verified society NOC, clear rental agreement for 2 full years, and our security guard pass was ready on day one. Zero hidden surprises."
            </p>
            <div className="pt-4 mt-4 border-t border-neutral-100">
              <div className="text-xs font-bold text-neutral-900">Deepa Nair</div>
              <div className="text-[11px] text-[#E84144] font-semibold">Tenant, Silver Arch Co-Op Society</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Lead Capture Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-2xl p-8 sm:p-12 text-center space-y-6 border border-neutral-800 shadow-xl">
          {/* Subtle colored glow circles from brand logo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59415]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E84144]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59415]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#E84144]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#5C96D2]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#72A346]" />
              <span className="ml-1 tracking-[0.2em]">House of New Beginning</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight [text-wrap:balance]">
              Simplify Your Society Tenancy & Sales Today
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Whether you manage a housing society of 200 flats or are searching for your next verified home, Novitiate Housing guarantees a frictionless experience.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigateToTab('contact')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#E84144] hover:bg-[#d63437] rounded-lg transition-colors shadow-lg"
            >
              Get in Touch with Our Team
            </button>
            <button
              onClick={onExploreProperties}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg border border-neutral-700 hover:border-[#5C96D2] transition-colors"
            >
              Browse 100% NOC Verified Listings
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
