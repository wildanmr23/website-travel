const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Umrah Travel</h3>
            <p className="text-white/80">
              Melayani perjalanan ibadah Anda dengan sepenuh hati
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <p className="text-white/80">
              Jl. Example No. 123<br />
              Jakarta, Indonesia<br />
              Phone: (021) 1234-5678<br />
              Email: info@umrahtravel.com
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {["Beranda", "Paket", "Tentang", "Galeri", "Kontak"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Umrah Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;