import { useState } from "react";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">HazardEye</h1>
          <nav className="space-x-6">
            {["home", "product", "about", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`capitalize font-medium ${
                  active === tab
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "hover:text-blue-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {active === "home" && (
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Intelligent Hazard Detection System
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Real-time AI-powered detection of potential hazards for industrial and automotive applications.
            </p>
            <img
              src="/hazard-detection.jpg"
              alt="Hazard Detection"
              className="mx-auto rounded-2xl shadow-lg w-full max-w-3xl"
            />
          </section>
        )}

        {active === "product" && (
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              Product Overview
            </h2>
            <p className="text-gray-700 mb-8">
              The HazardEye system uses embedded AI to identify critical threats
              such as obstacles, smoke, leaks, or moving hazards. It integrates
              seamlessly with ADAS systems and IoT networks for smart alerts and
              automatic responses.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "AI-powered Detection",
                "Edge Device Integration",
                "Low Latency Alerts",
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
                >
                  <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                  <p className="text-gray-600 text-sm">
                    Reliable real-time inference for critical environments.
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {active === "about" && (
          <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              HazardEye is developed by <b>Aluxim Tech</b>, an engineering
              division of Aluxim Pvt. Ltd., specializing in AI, embedded
              systems, and safety analytics. Our mission is to make industrial
              and automotive operations safer using intelligent sensing
              technologies.
            </p>
          </section>
        )}

        {active === "contact" && (
          <section className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              Get in touch with our team for demos, collaborations, or business
              inquiries.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />
              <textarea
                placeholder="Message"
                className="w-full border rounded-lg p-3 h-28"
              ></textarea>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 text-center py-6 mt-12">
        <p>
          © {new Date().getFullYear()} HazardEye — An Aluxim Tech Product |{" "}
          <a href="https://aluxim.in" className="text-blue-400 hover:underline">
            aluxim.in
          </a>
        </p>
      </footer>
    </div>
  );
}
