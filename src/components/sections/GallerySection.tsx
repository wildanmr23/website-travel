const GallerySection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      title: "Masjidil Haram"
    },
    {
      url: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
      title: "Madinah"
    },
    {
      url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
      title: "Ziarah"
    }
  ];

  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold">GALERI PERJALANAN</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Momen Berharga Jamaah Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi perjalanan suci jamaah bersama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={`${image.url}?auto=format&fit=crop&w=800`}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;