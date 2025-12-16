export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Build Faster with Next.js</h1>

        <p className="text-gray-400 max-w-xl mb-6">
          A modern landing page built using Next.js and Tailwind CSS.
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl">
          Get Started
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {["Fast", "Responsive", "SEO Friendly"].map((feature) => (
            <div
              key={feature}
              className="p-6 bg-gray-800 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-400">
                Optimized for modern web applications.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Launch?</h2>
        <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl">
          Deploy Now
        </button>
      </section>
    </main>
  );
}
