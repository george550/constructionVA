export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Construction-Savvy Virtual Assistants
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert virtual assistants who understand construction workflows, terminology,
            and industry-specific software to help your business run smoothly.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/pricing"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Pricing
            </a>
            <a
              href="/positions"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              See Positions
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Construction Companies Choose BuilderAssist
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Industry Expertise
            </h3>
            <p className="text-gray-600">
              Our VAs are trained in construction terminology, processes, and software like Procore,
              Buildertrend, and CoConstruct.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Flexible Support
            </h3>
            <p className="text-gray-600">
              Scale up or down as needed. From project coordinators to bid specialists,
              we have the right talent for your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Cost Effective
            </h3>
            <p className="text-gray-600">
              Save on overhead costs while maintaining high-quality support for your operations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to discuss your specific needs.
          </p>
          <a
            href="/pricing"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
