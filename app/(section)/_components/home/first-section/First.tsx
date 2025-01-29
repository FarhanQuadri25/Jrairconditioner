import Image from "next/image";

const First = () => {
  return (
    <section className="mt-[13rem] bg-[whitesmoke]" id="hero">
      <div className="rounded-2xl text-neutral-800 new-container-2 p-4 mb-4">
        <div>
          <h1 className="font-olive pt-4 text-center newSeperator text-neutral-800 tracking-widest capitalize">
            Ac Services and Repair
          </h1>
        </div>
        <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-poppins font-bold">
          Experience Optimal Comfort with JR Air Conditioner&apos;s Professional
          HVAC Services
        </h2>
        <div className=" mt-5 flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="space-y-8">
              <p className="font-bold text-xl font-inter max-w-2xl">
              At JR AC Services, we specialize in providing high-quality air conditioning solutions that guarantee maximum comfort and efficiency for both homes and businesses. Our comprehensive services include expert installation, reliable repairs, and thorough maintenance to ensure your AC system operates at peak performance. With years of industry experience, our team of skilled HVAC technicians is dedicated to offering cost-effective and dependable solutions for all types of air conditioning systems. Our certified technicians take pride in delivering customized services that meet your specific needs, from improving energy efficiency to extending the lifespan of your unit.
              </p>
              <p className="font-bold text-xl font-inter max-w-2xl">
              Additionally, we offer Annual Maintenance Contracts (AMC) to help keep your system running smoothly and prevent costly breakdowns. Whether you need urgent repairs or regular maintenance, we provide fast, professional service with a focus on customer satisfaction. Trusted by our clients for our commitment to excellence, JR AC Services ensures that your comfort is our top priority year-round. With us, you can count on timely, efficient, and customer-centric service that always exceeds expectations.
              </p>
            </div>
          </div>

          <div>
            <Image
              src={`/images/JR-Ar-1.jpg`}
              width={800}
              height={800}
              alt="air-conditioner"
              className="mx-auto shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
