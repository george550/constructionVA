import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Now | BuilderAssist",
  description: "Why construction companies are turning to virtual assistants now",
};

export default function WhyNow() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why Construction VAs Are Essential Now
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The construction industry is facing unprecedented challenges that make
            virtual assistants more valuable than ever
          </p>
        </div>

        {/* Key Trends */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industry Trends Driving Change
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Labor Shortage Crisis
              </h3>
              <p className="text-gray-600">
                Construction faces a shortage of 650K+ workers. Finding qualified
                administrative staff is harder than ever, with turnover costs averaging
                $15K-$30K per position.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Rising Overhead Costs
              </h3>
              <p className="text-gray-600">
                Office space, benefits, and local salaries continue to climb. Average
                admin staff costs $50K-$70K annually plus 30% in benefits and overhead.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technology Adoption
              </h3>
              <p className="text-gray-600">
                Cloud-based construction software (Procore, Buildertrend, PlanGrid)
                makes remote collaboration seamless. VAs can work as effectively as
                in-office staff.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Increased Competition
              </h3>
              <p className="text-gray-600">
                Margins are tight and bid competition is fierce. Companies need
                operational efficiency to stay competitive without sacrificing quality.
              </p>
            </div>
          </div>
        </div>

        {/* The BuilderAssist Advantage */}
        <div className="bg-blue-600 rounded-lg p-12 text-white mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            The BuilderAssist Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Immediate Availability</h3>
              <p className="text-blue-100">
                Start in 1-2 weeks vs. months for local hiring. No time wasted on
                recruitment and onboarding.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Cost Savings</h3>
              <p className="text-blue-100">
                Save 40-60% compared to local hires. No office space, equipment, or
                benefits overhead.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Construction Expertise</h3>
              <p className="text-blue-100">
                Pre-trained in construction workflows and software. Hit the ground
                running from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Path to Success
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Initial Consultation (30 min)
                </h3>
                <p className="text-gray-600">
                  Discuss your needs, current challenges, and ideal VA profile.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  VA Matching (3-5 days)
                </h3>
                <p className="text-gray-600">
                  We identify and vet candidates matching your specific requirements.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Training & Onboarding (1 week)
                </h3>
                <p className="text-gray-600">
                  Your VA learns your systems, processes, and software. We provide
                  ongoing support.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Launch & Optimize (2 weeks)
                </h3>
                <p className="text-gray-600">
                  Your VA starts contributing. We monitor progress and optimize workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't Wait Until You're Overwhelmed
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The best time to add support is before you desperately need it. Start with
            a 2-week trial to see the difference.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
