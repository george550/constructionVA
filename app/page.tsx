export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Keep Your Projects on Track with<br />Construction-Savvy Support
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We provide trained virtual assistants who understand construction drawings, RFIs,
              schedules, and documentation — so your projects stay organized and on time.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Proof Tiles */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-orange-600">
              <div className="text-3xl font-bold text-slate-900 mb-2">40+ Hours</div>
              <p className="text-slate-600">Saved Monthly</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-900">
              <div className="text-3xl font-bold text-slate-900 mb-2">Expert Training</div>
              <p className="text-slate-600">Procore, Buildertrend & QuickBooks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-orange-600">
              <div className="text-3xl font-bold text-slate-900 mb-2">Trusted Nationwide</div>
              <p className="text-slate-600">By Contractors Across the U.S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-slate-700 leading-relaxed">
            BuilderAssist connects construction companies with experienced virtual assistants who know the job.
            Whether it's organizing drawings, tracking RFIs, or keeping the project log up to date,
            we help you stay on schedule and focused on the work in the field.
          </p>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            How We Help
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Stay Organized</h3>
              <p className="text-slate-600 leading-relaxed">
                Manage technical drawings, revisions, project folders, RFIs, and submittals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Stay on Schedule</h3>
              <p className="text-slate-600 leading-relaxed">
                Follow up on vendors, change orders, maintain calendars, and align field-office communication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Stay on Budget</h3>
              <p className="text-slate-600 leading-relaxed">
                Assist with billing, pay apps, job costing, invoices, and lien waivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positions We Fill */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">
            Positions We Fill
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Our virtual assistants are trained for specific construction roles to provide the exact support your team needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <a href="/positions/assistant-project-manager" className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                <svg className="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition">
                Assistant Project Manager
              </h3>
              <p className="text-slate-600 mb-4">
                Manage schedules, coordinate RFIs, track change orders, and maintain project documentation.
              </p>
              <span className="text-orange-600 font-semibold inline-flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/positions/administrative-assistant" className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition">
                <svg className="w-8 h-8 text-orange-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition">
                Administrative Assistant
              </h3>
              <p className="text-slate-600 mb-4">
                Handle calls, emails, scheduling, documentation, invoicing, and general office support.
              </p>
              <span className="text-orange-600 font-semibold inline-flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/positions/project-management-consultant" className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 transition">
                <svg className="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition">
                Project Management Consultant
              </h3>
              <p className="text-slate-600 mb-4">
                Strategic planning, milestone tracking, forecasting, and stakeholder communication.
              </p>
              <span className="text-orange-600 font-semibold inline-flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          <div className="text-center">
            <a href="/positions" className="inline-block text-blue-900 font-semibold hover:text-orange-600 transition">
              View All Positions →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tell Us What You Need</h3>
              <p className="text-slate-600">Review your projects and tools</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Get Matched</h3>
              <p className="text-slate-600">You're paired with a construction-trained assistant</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Start Working</h3>
              <p className="text-slate-600">We onboard and get results quickly</p>
            </div>
          </div>
          <p className="text-center text-xl text-slate-700 mt-12 font-semibold">
            Our goal is simple — help you stay organized and deliver every project on time.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Results That Matter</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-slate-700 text-lg">Clients save over <span className="font-bold text-orange-600">40 hours per month</span> by delegating admin work</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-slate-700 text-lg">Contractors <span className="font-bold text-orange-600">reduce overhead</span> without adding full-time staff</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-slate-700 text-lg">We keep your projects <span className="font-bold text-orange-600">clean, documented, and under control</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's talk about your projects and where you need help
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation to discuss how BuilderAssist can support your team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition shadow-lg"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
