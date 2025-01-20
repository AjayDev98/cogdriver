export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen relative">
      {/* Content Container */}
      <div className="bg-white bg-opacity-95 rounded-lg shadow-lg text-center p-8 max-w-lg z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Exciting Changes Are Coming!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Our Product is undergoing a transformation to serve you better. <br />
          We&apos;re crafting something fresh, innovative, and tailored to your needs.
        </p>
        <a
          href="mailto:Ajay.dev@cogdriver.com"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Background GIF */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background.gif" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
