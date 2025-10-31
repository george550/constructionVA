import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Administrative Assistant | BuilderAssist",
  description: "Virtual administrative assistants trained specifically for the construction industry",
};

export default function AdministrativeAssistant() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/positions" className="text-orange-600 hover:text-orange-700 font-medium mb-4 inline-block">
            ← Back to All Positions
          </Link>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Construction Administrative Assistant
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Remote administrative support specifically trained for construction workflows.
            Reduce overhead while improving operational efficiency with virtual assistants who understand your industry.
          </p>
        </div>
      </section>

      {/* Core Responsibilities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Core Responsibilities</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">General Office Duties</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone and Email Management</h4>
                  <p className="text-slate-600">Handle incoming calls and client correspondence professionally</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Scheduling</h4>
                  <p className="text-slate-600">Coordinate appointments and travel arrangements</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Data Entry</h4>
                  <p className="text-slate-600">Maintain accurate records and handle office supply ordering</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Meeting Coordination</h4>
                  <p className="text-slate-600">Organize meetings and handle expense report processing</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Construction-Specific Tasks</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Project Documentation</h4>
                  <p className="text-slate-600">Handle RFIs, submittals, and closeout documentation</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Financial Management</h4>
                  <p className="text-slate-600">Invoice preparation, payment tracking, and payroll assistance</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Inventory Management</h4>
                  <p className="text-slate-600">Track materials and equipment for active projects</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Client Relationship Management</h4>
                  <p className="text-slate-600">Maintain strong relationships and regular communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Skills */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Required Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Competencies</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  MS Office proficiency (Word, Excel, Outlook)
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Basic project management capabilities
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Strong attention to detail for critical documents
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Professional Attributes</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  Excellent written and verbal communication
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  Detail orientation for contracts and schedules
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  Ability to manage multiple tasks simultaneously
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Business Benefits</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">40+</div>
              <p className="text-slate-700 font-semibold">Hours Saved Monthly</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">75%</div>
              <p className="text-slate-700 font-semibold">Overhead Reduction</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">20-40%</div>
              <p className="text-slate-700 font-semibold">Cost Savings on Admin</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">Flexible</div>
              <p className="text-slate-700 font-semibold">Full or Part-Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Add Administrative Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our construction-trained admin assistants can help your team.
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
