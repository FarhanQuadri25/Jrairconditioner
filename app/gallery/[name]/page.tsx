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
        { src: "/images/air-conditioner (9).jpg", alt: "Photo 34" },
        { src: "/images/air-conditioner (8).jpg", alt: "Photo 33" },
        { src: "/images/air-conditioner (11).jpg", alt: "Photo 36" },
        { src: "/images/air-conditioner (12).jpg", alt: "Photo 37" },
        { src: "/images/jr-airconditioner (4).jpeg", alt: "Photo 31" },
        { src: "/images/air-conditioner (10).jpg", alt: "Photo 35" },
        { src: "/images/air-conditioner (16).jpg", alt: "Photo 39" },
        { src: "/images/air-conditioner (17).jpg", alt: "Photo 40" },
        { src: "/images/air-conditioner (13).jpg", alt: "Photo 36" },
        { src: "/images/air-conditioner (14).jpg", alt: "Photo 37" },
        { src: "/images/jr-img-18.jpg", alt: "Photo 18" },
        { src: "/images/air-conditioner (15).jpg", alt: "Photo 38" },
        { src: "/images/new-airconditioner (1).jpeg", alt: "Photo 32" },
        { src: "/images/jr-img-20.jpg", alt: "Photo 20" },
        { src: "/images/jr-img-19.jpg", alt: "Photo 19" },
        { src: "/images/jr-img-1.jpg", alt: "Photo 1" },
        { src: "/images/jr-img-2.jpg", alt: "Photo 2" },
        { src: "/images/jr-img-10.jpg", alt: "Photo 10" },
        { src: "/images/jr-img-11.jpg", alt: "Photo 11" },
        { src: "/images/jr-img-17.jpg", alt: "Photo 17" },
        { src: "/images/jr-img-4.jpg", alt: "Photo 4" },
        { src: "/images/jr-img-14.jpg", alt: "Photo 14" },
        { src: "/images/jr-img-26.jpg", alt: "Photo 26" },
        { src: "/images/jr-img-24.jpg", alt: "Photo 24" },
        { src: "/images/jr-img-27.jpg", alt: "Photo 27" },
        { src: "/images/jr-img-22.jpg", alt: "Photo 22" },
        { src: "/images/jr-img-29.jpg", alt: "Photo 29" },
        { src: "/images/jr-img-23.jpg", alt: "Photo 23" },
        { src: "/images/jr-img-15.jpg", alt: "Photo 15" },
        { src: "/images/jr-img-12.jpg", alt: "Photo 12" },
        { src: "/images/jr-img-13.jpg", alt: "Photo 13" },
        { src: "/images/jr-img-9.jpg", alt: "Photo 9" },
        { src: "/images/jr-img-8.jpg", alt: "Photo 8" },
        { src: "/images/jr-img-7.jpg", alt: "Photo 7" },
        { src: "/images/jr-img-5.jpg", alt: "Photo 5" },
        { src: "/images/jr-img-6.jpg", alt: "Photo 6" },
        { src: "/images/jr-img-16.jpg", alt: "Photo 16" },
        { src: "/images/jr-img-28.jpg", alt: "Photo 28" },
        { src: "/images/jr-img-25.jpg", alt: "Photo 25" },
        { src: "/images/jr-img-21.jpg", alt: "Photo 21" },
      ],
    },
    videos: {
      label: "Video Gallery",
      description: "Watch our exclusive video content.",
      media: [
        { src: "/videos/jr-airconditioner (1).mp4", title: "video 1" },
        { src: "/videos/jr-airconditioner (3).mp4", title: "video 3" },
        { src: "/videos/jr-airconditioner (2).mp4", title: "video 2" },
        { src: "/videos/jr-video (1).mp4", title: "Video 1" },
        { src: "/videos/jr-video (12).mp4", title: "Video 13" },
        { src: "/videos/jr-video (9).mp4", title: "Video 9" },
        { src: "/videos/jr-video (10).mp4", title: "Video 10" },
        { src: "/videos/jr-video (3).mp4", title: "Video 3" },
        { src: "/videos/jr-video (8).mp4", title: "Video 8" },
        { src: "/videos/jr-video (5).mp4", title: "Video 5" },
        { src: "/videos/jr-video (11).mp4", title: "video 10" },
        { src: "/videos/jr-video (7).mp4", title: "Video 7" },
        { src: "/videos/jr-airconditioner (4).mp4", title: "video 4" },
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
                className="w-full rounded-2xl shadow-lg object-cover"
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
