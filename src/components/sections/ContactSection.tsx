const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/082127312767`, '_blank');
  };

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold">HUBUNGI KAMI</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Konsultasikan Perjalanan Anda
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tim kami siap membantu mewujudkan perjalanan ibadah Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="max-w-xl">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition-colors duration-300"
              >
                Hubungi Kami via WhatsApp
              </button>
            </div>
            
            <div className="text-left space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Alamat</h3>
                <p className="text-gray-600">Jl. Raya Bogor No. 123, Jakarta Timur</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Jam Operasional</h3>
                <p className="text-gray-600">Senin - Jumat: 09:00 - 17:00</p>
                <p className="text-gray-600">Sabtu: 09:00 - 15:00</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2834256708426!2d106.8700493!3d-6.2295701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4758d2b41%3A0x25e683c2f4235d31!2sJl.%20Raya%20Bogor%2C%20Jakarta%20Timur%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1659238923456!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kami"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;