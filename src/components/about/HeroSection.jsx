import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[125vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/natalie.jpg"
        alt="About Hero"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

    
      <div className="absolute inset-0 bg-black/50 z-10" />

      
      <div className="absolute top-5 left-0 p-4 z-20">
        <h2 className="text-white text-4xl font-bold">About Us</h2>
      </div>

      
      <div className="relative z-20 text-center px-4 mt-50">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Empowering You to Live <br />
          Stronger, Healthier, and Happier
        </h1>
        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
          Discover a fitness experience built just for you.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
