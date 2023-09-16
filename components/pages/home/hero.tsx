import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mt-16 flex place-items-center justify-center w-full">
      <Image
        src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={1260}
        height={750}
        alt="Slides"
        className="w-full md:max-h-80 object-cover rounded-lg"
      />
    </div>
  );
};
export default Hero;
