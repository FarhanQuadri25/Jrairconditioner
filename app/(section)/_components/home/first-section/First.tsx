
import Image from "next/image";

const First = () => {
  return (
   
   <section className="mt-[13rem] bg-[whitesmoke]" id="hero">
      <div className="rounded-2xl text-black new-container-2 p-4 mb-4">

      <div>
        <h1 className="font-olive pt-4 text-center newSeperator text-newblue tracking-widest capitalize">
          Ac Services and Repair
        </h1>
      
      </div>
      <h2 className="text-center text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-poppins font-bold">
        JR Air Conditioner - Reliable HVAC Services for Year-Round Comfort
      </h2>
      <div className=" mt-5 flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="space-y-8">
            <p className="font-bold font-inter max-w-2xl">
              At JR Air Conditioner, we specialize in providing top-quality HVAC
              services to ensure your home or business stays comfortable all
              year round. Our expertise includes air conditioning installation,
              maintenance, and repair, tailored to meet your unique needs.
            </p>
            <p className="font-bold font-inter max-w-2xl">
              With years of industry experience, our team of skilled HVAC
              technicians is committed to delivering cost-effective and reliable
              solutions for all types of air conditioning systems. Whether it 's
              a quick fix or a major installation, we guarantee the highest
              standards of service and customer satisfaction.
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
