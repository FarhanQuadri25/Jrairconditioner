import { Separator } from "@/components/ui/separator";
import { AC_SERVICES } from "./data";

const Third = () => {
  return (
    <section className="bg-[whitesmoke] py-20 text-zinc-800 font-inter">
      <h1 className="text-center mb-20 font-olive tracking-widest newSeperator">
        Services That We Provide
      </h1>

      <div className="grid grid-cols-1 new-container-2 md:grid-cols-3 gap-8 relative">
        {AC_SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="relative p-6 border rounded-2xl shadow-2xl"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#fff] rounded-full p-3 shadow-lg">
                <Icon className="text-blue-500 text-textdark text-4xl" />
              </div>
              {/* Content */}
              <h3 className="mt-10 text-2xl font-bold font-poppins">
                {service.title}
              </h3>
              <Separator className="h-1" />
              <p className="mt-2 font-inter">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Third;
