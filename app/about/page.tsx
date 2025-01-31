import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="new-container min-h-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col md:flex-row md:space-x-8">
        <div>
          <h1 className="text-transparent newSeperator-2 mx-auto md:mx-0 text-center md:text-left mt-8 font-olive bg-gradient-to-tr from-azureblue to-newblue bg-clip-text mb-8 md:mb-2">
            About Us
          </h1>

          <p className="max-w-5xl mx-4 mb-4 sm:mx-auto flex flex-col font-inter text-justify text-pretty font-normal space-y-5 leading-relaxed"></p>
          <p className="max-w-5xl mx-4 mb-4 sm:mx-auto flex flex-col font-inter text-justify text-pretty font-normal space-y-5 leading-relaxed"></p>
          <p className="max-w-5xl mx-4 mb-4 sm:mx-auto flex flex-col font-inter text-justify text-pretty font-normal space-y-5 leading-relaxed">
            Jr Air Conditioner meerpet, Hyderabad, is a trailblazer in the field
            of air conditioning services. With a rich history spanning over a
            decade, we have evolved into a premier AC service provider that
            offers a wide spectrum of AC-related solutions. Our association with
            respected brands, our versatile service offerings, and our
            unwavering commitment to customer satisfaction make us a name you
          </p>
        </div>

        <Image
          src={`/images/new-img-jr.jpg`}
          alt="new-image"
          width={500}
          height={100}
          className="w-full h-[40vh] md:h-[40vh] mt-0 md:mt-16  object-cover object-center mb-14 sm:mb-4"
        />
      </div>
    </div>
  );
}
