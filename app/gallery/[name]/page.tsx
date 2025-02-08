import { MotionDiv } from "@/components/MotionDiv";
import Image from "next/image";

interface MediaItem {
  src: string;
  alt?: string;
  title?: string;
}

interface Gallery {
  label: string;
  description: string;
  media: MediaItem[];
}

interface GalleryContent {
  photos: Gallery;
  videos: Gallery;
}

export default async function Products({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const galleryContent: GalleryContent = {
    photos: {
      label: "Photo Gallery",
      description: "Explore our collection of our Work",
      media: [
        { src: "/images/jr-img-19.jpg", alt: "Phone 19" },
        { src: "/images/jr-img-1.jpg", alt: "Phone 1" },
        { src: "/images/jr-img-2.jpg", alt: "Phone 2" },
        { src: "/images/jr-img-10.jpg", alt: "Phone 10" },
        { src: "/images/jr-img-11.jpg", alt: "Phone 11" },
        { src: "/images/jr-img-17.jpg", alt: "Phone 17" },
        { src: "/images/jr-img-4.jpg", alt: "Phone 4" },
        { src: "/images/jr-img-14.jpg", alt: "Phone 14" },
        { src: "/images/jr-img-26.jpg", alt: "Phone 26" },
        { src: "/images/jr-img-24.jpg", alt: "Phone 24" },
        { src: "/images/jr-img-27.jpg", alt: "Phone 27" },
        { src: "/images/jr-img-22.jpg", alt: "Phone 22" },
        { src: "/images/jr-img-29.jpg", alt: "Phone 29" },
        { src: "/images/jr-img-23.jpg", alt: "Phone 23" },
        { src: "/images/jr-img-15.jpg", alt: "Phone 15" },
        { src: "/images/jr-img-20.jpg", alt: "Phone 20" },
        { src: "/images/jr-img-12.jpg", alt: "Phone 12" },
        { src: "/images/new-airconditioner (2).jpeg", alt: "Phone 33" },
        { src: "/images/jr-img-13.jpg", alt: "Phone 13" },
        { src: "/images/new-airconditioner (1).jpeg", alt: "Phone 32" },
        { src: "/images/jr-img-9.jpg", alt: "Phone 9" },
        { src: "/images/jr-img-8.jpg", alt: "Phone 8" },
        { src: "/images/jr-img-7.jpg", alt: "Phone 7" },
        { src: "/images/jr-img-5.jpg", alt: "Phone 5" },
        { src: "/images/jr-img-6.jpg", alt: "Phone 6" },
        { src: "/images/jr-img-16.jpg", alt: "Phone 16" },
        { src: "/images/jr-img-28.jpg", alt: "Phone 28" },
        { src: "/images/jr-img-25.jpg", alt: "Phone 25" },
        { src: "/images/jr-img-21.jpg", alt: "Phone 21" },
        { src: "/images/jr-airconditioner (7).jpeg", alt: "Phone 30" },
        { src: "/images/jr-img-18.jpg", alt: "Phone 18" },
        { src: "/images/new-airconditioner (4).jpeg", alt: "Phone 35" },
        { src: "/images/jr-airconditioner (4).jpeg", alt: "Phone 31" },
        { src: "/images/new-airconditioner (3).jpeg", alt: "Phone 34" },
      ],
    },
    videos: {
      label: "Video Gallery",
      description: "Watch our exclusive video content.",
      media: [
        { src: "/videos/jr-airconditioner (1).mp4", title: "video 10" },
        { src: "/videos/jr-airconditioner (3).mp4", title: "video 11" },
        { src: "/videos/jr-airconditioner (2).mp4", title: "video 12" },

        { src: "/videos/jr-video (1).mp4", title: "Video 1" },
        { src: "/videos/jr-video (3).mp4", title: "Video 3" },
        { src: "/videos/jr-video (8).mp4", title: "Video 8" },
        { src: "/videos/jr-video (5).mp4", title: "Video 5" },
        { src: "/videos/jr-video (7).mp4", title: "Video 7" },
        { src: "/videos/jr-airconditioner (4).mp4", title: "video 9" },
      ],
    },
  };

  const gallery = galleryContent[name as keyof typeof galleryContent];

  return (
    <MotionDiv
      className="new-container min-h-screen mt-28 mb-14"
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
      <h1 className="text-center font-olive text-3xl font-bold mb-4">
        {gallery.label}
      </h1>
      <p className="text-center mb-6">{gallery.description}</p>

      {/* Display Photos */}
      {name === "photos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-4">
          {gallery.media.map((item, index) => (
            <div key={index} className="relative">
              <Image
                src={item.src}
                alt={item.src || "Image"}
                width={500}
                height={500}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      )}

      {/* Display Videos */}
      {name === "videos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.media.map((item, index) => (
            <div key={index} className="relative">
              <video
                src={item.src}
                title={item.title}
                muted
                controls
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      )}
    </MotionDiv>
  );
}
