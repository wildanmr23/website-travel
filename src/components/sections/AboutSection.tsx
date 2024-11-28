const AboutSection = () => {
  return (
    <section id="tentang" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-semibold">TENTANG KAMI</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Pengalaman & Kepercayaan Sejak 2010
            </h2>
            <p className="text-gray-600 mb-6">
              Dengan pengalaman lebih dari 13 tahun dalam melayani jamaah,
              kami berkomitmen memberikan pelayanan terbaik untuk perjalanan
              ibadah Anda. Didukung oleh tim profesional dan muthawif
              berpengalaman.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <p className="text-gray-600">Jamaah Puas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">13+</div>
                <p className="text-gray-600">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800"
              alt="Kaaba"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <p className="text-gray-600">Kepuasan Jamaah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;