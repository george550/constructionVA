export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Complete Business Support for<br />Construction Companies
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We provide trained virtual assistants who handle everything from project coordination and bidding
              to marketing, SEO, and admin work — so you can focus on building while we help grow your business.
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
              <p className="text-slate-600">Saved Monthly Per Client</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-900">
              <div className="text-3xl font-bold text-slate-900 mb-2">Full Service</div>
              <p className="text-slate-600">Projects, Marketing, Admin & Growth</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-orange-600">
              <div className="text-3xl font-bold text-slate-900 mb-2">Small Business</div>
              <p className="text-slate-600">Focused on Contractor Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-slate-700 leading-relaxed">
            BuilderAssist is your complete business partner for construction companies. We provide experienced virtual
            assistants who understand your industry — from managing project documentation and winning bids to building
            your online presence and getting more customers through the door. Think of us as your dedicated team member
            who handles everything you don't have time for.
          </p>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">
            Complete Support for Your Construction Business
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            From project management to winning new business, we handle it all
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Management */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Project Coordination</h3>
              <p className="text-slate-600 leading-relaxed">
                Manage drawings, RFIs, submittals, change orders, schedules, and keep your projects organized and on track.
              </p>
            </div>

            {/* Bidding & Estimating */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bidding & Estimating</h3>
              <p className="text-slate-600 leading-relaxed">
                Research opportunities, prepare professional bids, manage submissions, and follow up to win more work.
              </p>
            </div>

            {/* Financial Management */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Financial & Bookkeeping</h3>
              <p className="text-slate-600 leading-relaxed">
                Handle billing, pay apps, invoicing, job costing, lien waivers, and keep your books organized in QuickBooks.
              </p>
            </div>

            {/* Marketing & SEO */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Marketing & SEO</h3>
              <p className="text-slate-600 leading-relaxed">
                Build your online presence, improve local SEO rankings, manage Google reviews, and create content to attract customers.
              </p>
            </div>

            {/* Website Management */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Website & Digital Presence</h3>
              <p className="text-slate-600 leading-relaxed">
                Update your website, showcase completed projects, manage social media, and make sure customers can find you online.
              </p>
            </div>

            {/* Administrative Support */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Administrative Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Answer phones, schedule appointments, manage emails, handle permits, and take care of all the office work.
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
