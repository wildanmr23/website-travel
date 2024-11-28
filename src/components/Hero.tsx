const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto fade-in">
          <span className="inline-block px-4 py-1 bg-secondary/90 text-white rounded-full text-sm mb-6">
            Umrah & Haji Travel
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Wujudkan Perjalanan Suci Anda
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Kami memandu perjalanan spiritual Anda dengan pelayanan terbaik dan pengalaman yang tak terlupakan
          </p>
          <a
            href="#paket"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Lihat Paket
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 rounded-full bg-white/30">
          <div className="w-full h-1/2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;