import React from "react";

const features = [
  {
    title: "Single Image Liveness",
    description: "Detect if the user is alive using just one image."
  },
  {
    title: "Video Stream Liveness",
    description: "Real-time verification using video streams."
  },
  {
    title: "Secure & Private",
    description: "All data is processed securely with privacy in mind."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
