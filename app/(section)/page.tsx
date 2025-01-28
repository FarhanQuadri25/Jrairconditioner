import First from "./_components/home/first-section/First";
import Second from "./_components/home/second-section/Second";
import Third from "./_components/home/third-section/Third";
import Fourth from "./_components/home/fourth-section/Fourth";
import Fifth from "./_components/home/fifth-section/Fifth";

export default function HomePage() {
  return (
    <>
      <main>
        <Second />
        <First />
        <Third />
        <Fourth />
        <Fifth />
      </main>
    </>
  );
}
