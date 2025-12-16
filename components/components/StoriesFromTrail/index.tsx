import React from "react";

const stories = [
  {
    name: "John Doe",
    story: "The Annapurna Circuit trek was a life-changing experience. The views were breathtaking, and the guides were incredibly supportive.",
    image: "/images/john_doe.jpg",
  },
  {
    name: "Jane Smith",
    story: "Everest Base Camp was on my bucket list, and Nepal Visuals made it unforgettable. Highly recommend their services!",
    image: "/images/jane_smith.jpg",
  },
  {
    name: "Michael Brown",
    story: "Langtang Valley trek was serene and beautiful. The team ensured everything was perfect from start to finish.",
    image: "/images/michael_brown.jpg",
  },
];

const StoriesFromTrail = () => {
  return (
    <section className="py-16 bg-surface-dark">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Stories from the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
            Trail
          </span>
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Hear from our trekkers about their unforgettable journeys in the Himalayas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/20 hover:shadow-black/40 transition-all duration-300"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2">{story.name}</h3>
            <p className="text-text-secondary leading-relaxed">{story.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoriesFromTrail;