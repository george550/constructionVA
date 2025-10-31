import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistant Project Manager | BuilderAssist",
  description: "Virtual Assistant Project Managers to help manage schedules, RFIs, documentation, and project coordination",
};

export default function AssistantProjectManager() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/positions" className="text-orange-600 hover:text-orange-700 font-medium mb-4 inline-block">
            ← Back to All Positions
          </Link>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Assistant Project Manager
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Remote support for managing day-to-day construction operations without full-time payroll costs.
            Our virtual APMs help you stay on track with scheduling, RFIs, documentation, and project coordination.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Scheduling and Coordination</h3>
                <p className="text-slate-600">Manage timelines and coordinate across project teams</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">RFI Management</h3>
                <p className="text-slate-600">Track and respond to requests for information</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Documentation and Updates</h3>
                <p className="text-slate-600">Maintain project documentation and progress reports</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Change Order Coordination</h3>
                <p className="text-slate-600">Manage and track project change orders</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Timeline and Budget Tracking</h3>
                <p className="text-slate-600">Monitor project progress against budgets and deadlines</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Client Communication</h3>
                <p className="text-slate-600">Provide regular progress reporting and client updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Qualifications</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-slate-700 text-lg leading-relaxed">
              All our assistant project managers are industry-trained professionals with degrees or certifications in
              <span className="font-semibold"> construction management, engineering, architecture, or project administration</span>.
              They understand construction terminology, workflows, and the software tools you use every day.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Why Choose a Virtual APM?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">40+</div>
              <p className="text-slate-700 font-semibold mb-2">Hours Saved Monthly</p>
              <p className="text-slate-600 text-sm">Reclaim time by delegating administrative and coordination tasks</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">75%</div>
              <p className="text-slate-700 font-semibold mb-2">Overhead Reduction</p>
              <p className="text-slate-600 text-sm">Compared to traditional full-time hires</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">$250-$400</div>
              <p className="text-slate-700 font-semibold mb-2">Per Week</p>
              <p className="text-slate-600 text-sm">Flexible pricing based on your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Who We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-6 py-3 rounded-full shadow-md text-slate-700 font-medium">General Contractors</span>
            <span className="bg-white px-6 py-3 rounded-full shadow-md text-slate-700 font-medium">Residential Contractors</span>
            <span className="bg-white px-6 py-3 rounded-full shadow-md text-slate-700 font-medium">Commercial Builders</span>
            <span className="bg-white px-6 py-3 rounded-full shadow-md text-slate-700 font-medium">Developers</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Add an Assistant Project Manager to Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our virtual APMs can help keep your projects on track.
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
