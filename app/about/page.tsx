import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="new-container min-h-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col md:flex-row md:space-x-8">
        <div>
          <h1 className="text-transparent newSeperator-2 mx-auto md:mx-0 text-center md:text-left mt-8 font-olive bg-gradient-to-tr from-azureblue to-newblue bg-clip-text mb-8 md:mb-2">
            About Us
          </h1>

          <p className="max-w-5xl mx-4 mb-4 sm:mx-auto flex flex-col font-inter text-justify text-pretty font-normal space-y-5 leading-relaxed">
            At JR AC Services, we specialize in providing high-quality air
            conditioning solutions that guarantee maximum comfort and efficiency
            for both homes and businesses. Our comprehensive services include
            expert installation, reliable repairs, and thorough maintenance to
            ensure your AC system operates at peak performance. With years of
            industry experience, our team of skilled HVAC technicians is
            dedicated to offering cost-effective and dependable solutions for
            all types of air conditioning systems. Our certified technicians
            take pride in delivering customized services that meet your specific
            needs, from improving energy efficiency to extending the lifespan of
            your unit.
          </p>
          <p className="max-w-5xl mx-4 mb-4 sm:mx-auto flex flex-col font-inter text-justify text-pretty font-normal space-y-5 leading-relaxed">
            Additionally, we offer Annual Maintenance Contracts (AMC) to help
            keep your system running smoothly and prevent costly breakdowns.
            Whether you need urgent repairs or regular maintenance, we provide
            fast, professional service with a focus on customer satisfaction.
            Trusted by our clients for our commitment to excellence, JR AC
            Services ensures that your comfort is our top priority year-round.
            With us, you can count on timely, efficient, and customer-centric
            service that always exceeds expectations.
          </p>
        </div>

        <Image
          src={`/images/new-img-jr.jpg`}
          alt="new-image"
          width={500}
          height={100}
          className="w-full h-[40vh] md:h-[70vh] mt-0 md:mt-16  object-cover object-center mb-14 sm:mb-4"
        />
      </div>
    </div>
  );
}
