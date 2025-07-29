import Image from "next/image";

export default function Home() {
  const images = [
    '/images/homeImage1.jpg',
    '/images/homeImage2.jpg',
    '/images/homeImage3.jpg',
    '/images/homeImage4.jpg',
    '/images/homeImage5.jpg',
  ];

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="grid grid-cols-2 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </main>
  );
}
