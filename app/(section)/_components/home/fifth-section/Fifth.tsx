"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AC_SERVICES_ACCORDIAN } from "./data";

const Fifth = () => {
  return (
    <section className="bg-slate-300 py-12">
      <div className="mx-auto new-container">
        <h1 className="font-olive font-bold newSeperator text-newblue mb-6">
          More Services
        </h1>

        <Accordion type="single" collapsible>
          {AC_SERVICES_ACCORDIAN.map((service) => (
            <AccordionItem
              key={service.id}
              value={service.id.toString()}
              className="mb-4 shadow-2xl"
            >
              <AccordionTrigger className="accordion-header flex items-center justify-between cursor-pointer py-4 px-6 bg-newblue text-white rounded-t-lg hover:bg-blue-700 transition-colors">
                <h3 className="text-xl font-bold font-poppins">{service.title}</h3>
              </AccordionTrigger>
              <AccordionContent className="accordion-content px-6 py-4 bg-gray-100 rounded-b-lg">
                <p className="text-gray-700 font-inter">{service.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Fifth;
