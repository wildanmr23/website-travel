import PackageCard from "@/components/PackageCard";

const packages = [
  {
    title: "Umrah Regular",
    duration: "12 Hari",
    price: "Rp 35.000.000",
    features: [
      "Hotel bintang 4",
      "Penerbangan ekonomi",
      "Visa Umrah",
      "Muthawif berpengalaman",
      "Manasik Umrah",
    ],
    message: "Assalamualaikum, saya tertarik dengan paket Umrah Regular 12 Hari. Mohon informasi lebih lanjut.",
  },
  {
    title: "Umrah Premium",
    duration: "12 Hari",
    price: "Rp 45.000.000",
    features: [
      "Hotel bintang 5",
      "Penerbangan ekonomi premium",
      "Visa Umrah",
      "Muthawif berpengalaman",
      "Manasik Umrah",
      "Ziarah tambahan",
    ],
    isPopular: true,
    message: "Assalamualaikum, saya tertarik dengan paket Umrah Premium 12 Hari. Mohon informasi lebih lanjut.",
  },
  {
    title: "Haji Furoda",
    duration: "30 Hari",
    price: "Rp 150.000.000",
    features: [
      "Hotel bintang 5",
      "Penerbangan bisnis",
      "Visa Haji",
      "Muthawif senior",
      "Manasik lengkap",
      "Program ziarah eksklusif",
    ],
    message: "Assalamualaikum, saya tertarik dengan paket Haji Furoda 30 Hari. Mohon informasi lebih lanjut.",
  },
];

const PackagesSection = () => {
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/082127312767?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="paket" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold">PAKET PERJALANAN</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Pilihan Paket Umrah & Haji
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai pilihan paket yang dapat disesuaikan dengan
            kebutuhan dan kenyamanan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} onClick={() => handleWhatsAppClick(pkg.message)} className="cursor-pointer">
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;