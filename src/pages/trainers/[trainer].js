/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import Image from 'next/image'; 

const trainerDetails = {
  "emily-carter": {
    name: "Emily Carter",
    image: "/emily.jpg",
    quote: "Strong is not just about muscles—it’s about mindset.",
    bio: `Emily Carter is a certified yoga and Pilates instructor with a passion for helping clients improve flexibility, balance, and mental well-being. Her calming presence and holistic approach make her sessions perfect for those seeking both physical strength and inner peace.`,
    certificates: [
      "https://www.fitnesscerts.com/certificates/emily-carter-ryt",
      "https://www.fitnesscerts.com/certificates/emily-carter-nutrition",
    ],
    reviews: [
      {
        name: "Michael T.",
        time: "1 Day Ago",
        rating: 5,
        image: "/expert1.jpg",
        comment: "Each trainer brings specialized expertise to help you succeed. From strength training and weight loss to yoga and endurance, our certified professionals provide personalized guidance tailored to your fitness goals."
      },
      {
        name: "Johnson",
        time: "3 Days Ago",
        rating: 5,
        image: "/expert2.jpg",
        comment: "Our trainers are certified experts in various fields including strength training, weight management, yoga, and cardio. They are dedicated to helping you achieve your goals with personalized care and support."
      }
    ]
  },
};

const TrainerDetail = () => {
  const router = useRouter();
  const { trainer } = router.query;

  const data = trainerDetails[trainer];

  if (!data) return <div className="text-white text-center py-20">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen px-4 md:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Left Side */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-widest mb-2">
                  Specialized Trainer
                </h1>
                <h3 className="text-md text-gray-400 mb-6">
                  Specialized Trainer for Your Goals
                </h3>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-orange-500">{data.name}</h2>
              <p className="text-white font-semibold whitespace-pre-line line-clamp-3 text-lg md:text-xl">
                — {data.quote}
              </p>

              <p className="text-gray-400 text-sm md:text-base">
                Certified yoga and pilates instructor who blends flexibility training with strength routines. Perfect for all levels and experience.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full font-semibold text-white mt-4">
                Book Now
              </button>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex justify-center">
              <Image
                src={data.image}
                alt={data.name}
                width={400} 
                height={400} 
                className="rounded-lg object-cover object-center"
              />
            </div>
          </div>

          {/* Trainer Bio */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Trainer Bio -</h2>
            <p className="text-gray-400 text-sm md:text-base">{data.bio}</p>
          </div>

          {/* Certificates */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Certificates -</h2>
            <div className="flex flex-col gap-2">
              {data.certificates.map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline break-words text-sm md:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">People Reviews -</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.reviews.map((review, idx) => (
                <div key={idx} className="bg-black p-6 rounded-lg">
                 
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={40} 
                        height={40} 
                        className="rounded-full object-cover object-center"
                      />
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-gray-400 text-xs md:text-sm">{review.time}</p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                  </div>

                
                  <div className="border-t border-gray-700 my-4"></div>

                 
                  <p className="text-gray-400 text-sm md:text-base">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainerDetail;
