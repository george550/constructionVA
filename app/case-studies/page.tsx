import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | BuilderAssist",
  description: "Success stories from construction companies using BuilderAssist virtual assistants",
};

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "Apex Residential Builders",
      location: "Austin, TX",
      challenge:
        "Growing residential builder struggling with project documentation and subcontractor coordination across 15 active projects.",
      solution:
        "Implemented 2 full-time VAs: one Project Coordinator and one Administrative Assistant. Trained on Buildertrend and company-specific workflows.",
      results: [
        "40% reduction in admin time spent by field staff",
        "100% on-time project documentation",
        "Improved subcontractor communication",
        "Saved $85K annually vs hiring local staff",
      ],
    },
    {
      company: "Commercial Contractors Group",
      location: "Denver, CO",
      challenge:
        "Commercial GC needed support with bid preparation and submittal tracking but couldn't justify full-time hire.",
      solution:
        "Part-time Bid Specialist VA (20 hrs/week) trained on their estimating software and bid process.",
      results: [
        "Bid volume increased 60%",
        "Zero missed deadlines in 6 months",
        "3 additional project wins attributed to improved bids",
        "ROI positive within first month",
      ],
    },
    {
      company: "Summit Remodeling",
      location: "Seattle, WA",
      challenge:
        "Small remodeling company owner spending 20+ hours/week on administrative tasks instead of sales and field work.",
      solution:
        "Full-time Administrative Assistant VA handling scheduling, client communication, invoicing, and social media.",
      results: [
        "Owner freed up 20 hrs/week for revenue-generating activities",
        "Revenue increased 35% year-over-year",
        "Client satisfaction scores improved",
        "Consistent social media presence established",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from construction companies using BuilderAssist virtual assistants
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {study.company}
                </h2>
                <p className="text-gray-600">{study.location}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 mb-6">{study.challenge}</p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    The Solution
                  </h3>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    The Results
                  </h3>
                  <ul className="space-y-3">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-600 mb-6">
            Schedule a consultation to see how BuilderAssist can transform your business
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
