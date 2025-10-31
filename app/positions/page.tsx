import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Positions We Fill | BuilderAssist",
  description: "Virtual assistant positions specialized for construction companies",
};

export default function Positions() {
  const positions = [
    {
      title: "Project Coordinator",
      description: "Manage schedules, track milestones, coordinate with subcontractors, and maintain project documentation.",
      skills: ["Procore", "Buildertrend", "Scheduling", "Documentation"],
    },
    {
      title: "Bid Specialist",
      description: "Research opportunities, prepare bid documents, manage submissions, and track follow-ups.",
      skills: ["Bid Management", "Document Prep", "Cost Analysis", "Client Communication"],
    },
    {
      title: "Administrative Assistant",
      description: "Handle emails, scheduling, invoicing, client communication, and general office support.",
      skills: ["QuickBooks", "MS Office", "CRM Systems", "Client Relations"],
    },
    {
      title: "Bookkeeper",
      description: "Manage accounts payable/receivable, job costing, payroll support, and financial reporting.",
      skills: ["QuickBooks", "Job Costing", "Financial Reports", "Payroll"],
    },
    {
      title: "Marketing Coordinator",
      description: "Social media management, content creation, website updates, and lead generation.",
      skills: ["Social Media", "Content Writing", "SEO", "Lead Generation"],
    },
    {
      title: "Estimator Support",
      description: "Material takeoffs, vendor pricing, estimate compilation, and cost tracking.",
      skills: ["Takeoff Software", "Cost Estimation", "Vendor Relations", "Excel"],
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Positions We Fill
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our construction-savvy virtual assistants are trained to handle a wide range
            of roles specific to the construction industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {positions.map((position) => (
            <div
              key={position.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {position.title}
              </h3>
              <p className="text-gray-600 mb-4">{position.description}</p>
              <div className="flex flex-wrap gap-2">
                {position.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Don't See Your Position?
          </h2>
          <p className="text-blue-100 mb-6">
            We can train VAs for custom roles specific to your construction business needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
