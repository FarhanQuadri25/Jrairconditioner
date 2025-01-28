import {
  Fan,
  Wrench,
  Thermometer,
  Wind,
  Snowflake,
  Recycle,
  Filter,
  Cog,
  ClipboardCheck,
} from "lucide-react";

export interface ACService {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const AC_SERVICES: ACService[] = [
  {
    id: 1,
    title: "AC Installation",
    description:
      "AC Installation covers the proper placement and setup of a new air conditioning unit in your home or business. Our experts ensure the system is installed with efficiency, offering long-term performance and energy-saving benefits.",
    icon: Wrench,
  },
  {
    id: 2,
    title: "AC Repair",
    description:
      "AC Repair involves troubleshooting and fixing issues in the cooling system, ensuring your AC runs smoothly. Whether it's cooling issues, unusual noises, or system malfunctions, we provide effective repairs to restore comfort quickly.",
    icon: Fan,
  },
  {
    id: 3,
    title: "AC Gas Top-Up",
    description:
      "AC Gas Top-Up is essential when your air conditioner’s refrigerant levels are low. A top-up ensures your system operates efficiently, maintaining optimal cooling performance and reducing the risk of breakdowns.",
    icon: Thermometer,
  },
  {
    id: 4,
    title: "Duct Cleaning",
    description:
      "Duct Cleaning involves the thorough removal of dirt, dust, and allergens from your air ducts. This process improves indoor air quality, enhances airflow, and ensures your air conditioning system works efficiently, providing you with cleaner and healthier air.",
    icon: Wind,
  },
  {
    id: 5,
    title: "AC Dismantling",
    description:
      "AC Dismantling involves safely removing an old or malfunctioning air conditioning unit, ensuring the process is done carefully without damaging your property. From disconnecting electrical connections to removing the unit for disposal or recycling, we handle the entire process professionally and efficiently.",
    icon: Snowflake,
  },
  {
    id: 6,
    title: "Filter Replacement",
    description:
      "Filter Replacement is a critical maintenance step to ensure your AC runs effectively. By replacing clogged or old filters, we improve airflow, enhance cooling performance, and reduce allergens, providing you with cleaner and healthier indoor air.",
    icon: Filter,
  },
  {
    id: 7,
    title: "Refrigerant Recharge",
    description:
      "Refrigerant Recharge is vital for maintaining your AC system’s cooling efficiency. It involves refilling the refrigerant to the optimal level, ensuring that your air conditioner delivers consistent cooling while preventing potential damage from low refrigerant levels.",
    icon: Recycle,
  },
  {
    id: 8,
    title: "AC System Diagnostics",
    description:
      "AC System Diagnostics involves using advanced tools and techniques to identify issues in your air conditioning system. Our experts pinpoint problems quickly, enabling effective repairs and ensuring your system operates smoothly and efficiently.",
    icon: Cog,
  },
  {
    id: 9,
    title: "Inspection & Certification",
    description:
      "Inspection & Certification provides a detailed evaluation of your AC system to ensure it meets compliance and safety standards. Our thorough inspections identify potential issues, and we provide certifications for your peace of mind and assurance of a reliable cooling system.",
    icon: ClipboardCheck,
  },
];
