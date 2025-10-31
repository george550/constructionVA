import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Project Management Consultant | BuilderAssist",
  description: "Virtual construction project management consultants for strategic coordination and planning",
};

export default function ProjectManagementConsultant() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/positions" className="text-orange-600 hover:text-orange-700 font-medium mb-4 inline-block">
            ← Back to All Positions
          </Link>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Construction Project Management Consultant
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Specialized remote support providing expert-level structure to construction operations through strategic
            coordination, planning, and comprehensive project oversight.
          </p>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Key Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Workflow Planning & Documentation</h3>
                <p className="text-slate-600">Develop strategic coordination plans and maintain comprehensive project documentation</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Milestone Tracking</h3>
                <p className="text-slate-600">Monitor project progress against timelines and key deliverables</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Project Forecasting</h3>
                <p className="text-slate-600">Provide predictive insights on project trajectories and potential delays</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Stakeholder Communication</h3>
                <p className="text-slate-600">Manage communication between project teams, owners, and developers</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Schedule & Budget Oversight</h3>
                <p className="text-slate-600">Maintain close watch on project timelines and financial parameters</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Risk Management</h3>
                <p className="text-slate-600">Identify and mitigate potential project risks proactively</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Owners</h3>
              <p className="text-slate-600">Requiring high-level tracking and reporting</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Developers</h3>
              <p className="text-slate-600">Needing alignment support for complex projects</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Contractors</h3>
              <p className="text-slate-600">Seeking efficient milestone management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Value Proposition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">40+</div>
              <p className="text-slate-700 font-semibold mb-2">Hours Saved Monthly</p>
              <p className="text-slate-600 text-sm">Offload coordination tasks to expert consultants</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">75%</div>
              <p className="text-slate-700 font-semibold mb-2">Overhead Reduction</p>
              <p className="text-slate-600 text-sm">Compared to in-house consultants</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-slate-700 font-semibold mb-2">Industry-Trained</p>
              <p className="text-slate-600 text-sm">Construction management expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Service Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Pricing</h3>
                <p className="text-slate-600">$250–$400 per week based on scope and requirements</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Availability</h3>
                <p className="text-slate-600">Monday–Friday, 7:00 AM–7:00 PM (Your Timezone)</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Geographic Reach</h3>
                <p className="text-slate-600">Serving contractors across the United States</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Flexibility</h3>
                <p className="text-slate-600">Full-time, part-time, or project-based arrangements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Add Strategic Project Management Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our PM consultants can bring expert-level structure to your operations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition shadow-lg"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
