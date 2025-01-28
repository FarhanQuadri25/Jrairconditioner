import { WHY_CHOOSE_US } from "./data";
import Image from "next/image";

const Fourth = () => {
  return (
    <section className="bg-[whitesmoke] py-12">
      <h1 className="capitalize  text-newblue newSeperator font-olive">
        why choose us
      </h1>
      <div className="new-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {WHY_CHOOSE_US.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center  md:items-start md:text-left"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={50}
              height={50}
              className="mx-auto"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-bold font-poppins text-center">
                {item.title}
              </h3>
              <p className="text-lg font-inter font-normal text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fourth;
