import First from "./_components/home/first-section/First";
import Second from "./_components/home/second-section/Second";
import Third from "./_components/home/third-section/Third";
import Fourth from "./_components/home/fourth-section/Fourth";
import Fifth from "./_components/home/fifth-section/Fifth";
import { MotionMain } from "@/components/MotionDiv";

export default function HomePage() {
  return (
    <>
      <MotionMain
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ type: "spring", duration: 1.5, delay: 0.6 }}
      >
        <Second />
        <First />
        <Third />
        <Fourth />
        <Fifth />
      </MotionMain>
    </>
  );
}
