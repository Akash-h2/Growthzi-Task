import Image from "next/image"; 
import { useRouter } from "next/router";

const ProgramCard = ({ image, title, trainer, duration, description, slug }) => {
  const router = useRouter();

  const handleViewProgram = () => {
    router.push(`/programs/${slug}`);
  };

 
  const truncatedDescription = description.length > 150
    ? description.substring(0, 150) + "..."
    : description;

  return (
    <div className="bg-black rounded-lg shadow-lg p-4 hover:scale-105 transition-all cursor-pointer">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority 
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-sm text-gray-400">{duration}</span>
      </div>
      <p className="text-gray-400 text-sm mb-2">{trainer}</p>
      <p className="text-gray-300 text-sm mb-4">{truncatedDescription}</p>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded mt-4"
        onClick={handleViewProgram}
      >
        View Program →
      </button>
    </div>
  );
};

export default ProgramCard;
