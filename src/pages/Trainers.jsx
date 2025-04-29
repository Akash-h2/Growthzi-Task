import { FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image'; 
const trainersData = [
  {
    title: "Personal Trainers",
    trainers: [
      {
        name: "Emily Carter",
        description: "Specializes in fat-loss programs and metabolic conditioning. Marcus brings a results-driven mindset.",
        image: "/emily.jpg",
      },
      {
        name: "Ryan Delgado",
        description: "Functional fitness expert with a background in sports rehab. Great for clients recovering from injuries.",
        image: "/ryan.jpg",
      },
      {
        name: "Rachel Steele",
        description: "Prenatal and postnatal fitness specialist. Offers safe and effective routines for moms at every stage.",
        image: "/backbone.jpg",
      },
    ],
  },
  {
    title: "Weight Loss Specialist",
    trainers: [
      {
        name: "Natalie Ross",
        description: "Group fitness leader with a love for Zumba and dance-based cardio. Her classes are high-energy.",
        image: "/natalie.jpg",
      },
      {
        name: "Aiden Brooks",
        description: "CrossFit Level 2 coach who focuses on athletic conditioning and endurance. His sessions are intense.",
        image: "/aiden.jpg",
      },
      {
        name: "Chris Weston",
        description: "A former professional athlete turned personal trainer. Chris creates tailored programs for muscle tone.",
        image: "/chris.jpg",
      },
    ],
  },
  {
    title: "CrossFit Coach",
    trainers: [
      {
        name: "Daniel Blake",
        description: "Certified strength coach with 7+ years of experience in powerlifting and muscle building.",
        image: "/daniel.jpg",
      },
      {
        name: "Mia Lawson",
        description: "Body transformation coach with a decade of experience, combining strength training with nutrition coaching.",
        image: "/hiit-advanced.jpg",
      },
      {
        name: "Ava Morgan",
        description: "A former professional athlete turned personal trainer. Chris creates tailored programs for muscle tone.",
        image: "/yoga-beginners.jpg",
      },
    ],
  },
];

const Trainers = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Heading */}
          <h1 className="text-4xl font-bold mb-4">Specialized Trainers</h1>
          <p className="text-gray-400 mb-12">Find the specialized Trainers for Your Goals</p>

          {/* Sections */}
          {trainersData.map((section, idx) => (
            <section key={idx} className="mb-14">
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {section.trainers.map((trainer, index) => (
                  <div
                    key={index}
                    className="bg-black p-4 rounded-lg hover:scale-105 hover:shadow-lg transition transform"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        layout="fill" 
                        className="rounded-lg mb-4 object-cover" 
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{trainer.name}</h3>

                   
                    <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                      <p className="w-[85%]">{trainer.description}</p>
                      <button
                        onClick={() =>
                          router.push(`/trainers/${trainer.name.toLowerCase().replace(/ /g, '-')}`)
                        }
                        className="bg-orange-500 p-2 rounded-full text-white"
                      >
                        <FiArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trainers;
