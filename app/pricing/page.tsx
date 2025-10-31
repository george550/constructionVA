import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | BuilderAssist",
  description: "Flexible pricing plans for construction virtual assistants",
};

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Part-Time",
      hours: "20 hours/week",
      price: "$1,200",
      features: [
        "Dedicated VA",
        "Construction industry training",
        "Email & phone support",
        "Weekly progress reports",
        "Procore/Buildertrend access",
      ],
    },
    {
      name: "Full-Time",
      hours: "40 hours/week",
      price: "$2,200",
      popular: true,
      features: [
        "Dedicated VA",
        "Construction industry training",
        "Priority support",
        "Daily check-ins",
        "All software integrations",
        "Project management",
      ],
    },
    {
      name: "Enterprise",
      hours: "Multiple VAs",
      price: "Custom",
      features: [
        "Multiple dedicated VAs",
        "Custom training programs",
        "24/7 support",
        "Account manager",
        "Custom integrations",
        "Flexible scaling",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your construction business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                tier.popular ? "ring-2 ring-blue-600 relative" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 mb-4">{tier.hours}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-gray-600">/month</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0"
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
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include a 2-week trial period. No long-term contracts required.
          </p>
        </div>
      </div>
    </div>
  );
}
