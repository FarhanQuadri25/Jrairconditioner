import { MotionDiv } from "@/components/MotionDiv";
import Image from "next/image";

export default function AboutPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        duration: 0.5,
        delay: 0.2,
      }}
      className="new-container  min-h-[80vh] mt-[5.8rem] flex items-center justify-center"
    >
      <div className="flex justify-center items-center flex-col md:flex-row md:space-x-8">
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <h1 className="text-transparent newSeperator-2 mx-auto md:mx-0 text-center md:text-left mt-8 font-olive bg-gradient-to-tr from-azureblue to-newblue bg-clip-text mb-8 md:mb-2">
            About Us
          </h1>

          <p className="max-w-5xl mx-4 mb-4 sm:mx-auto flex flex-col font-inter text-justify text-pretty font-normal space-y-5 leading-relaxed">
            I started providing air conditioning services in 2018 with the goal
            of offering reliable and efficient solutions for homes and
            businesses, ensuring maximum comfort for all.
          </p>
          <p className="max-w-5xl mx-4 mb-4 sm:mx-auto flex flex-col font-inter text-justify text-pretty font-normal space-y-5 leading-relaxed">
            Over the years, I have built a reputation for providing expert AC
            installation, dependable repairs, and thorough maintenance to ensure
            your system always performs at its best.
          </p>
          <p className="max-w-5xl mx-4 mb-4 sm:mx-auto flex flex-col font-inter text-justify text-pretty font-normal space-y-5 leading-relaxed">
            My focus is on customer satisfaction, providing personalized,
            cost-effective solutions that keep systems running efficiently and
            ensure comfort in both home and business environments.
          </p>
        </MotionDiv>

        <Image
          src={`/images/new-img-jr.jpg`}
          alt="new-image"
          width={500}
          height={100}
          className="w-full h-[40vh] md:h-[50vh] mt-0 md:mt-16  object-cover object-center mb-14 sm:mb-4"
        />
      </div>
    </MotionDiv>
  );
}
