import { useState, useEffect } from "react";
import { Menu, X, Home, Package, Info, Image, Mail, Globe } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "#beranda", icon: <Home size={16} /> },
    { name: "Paket", href: "#paket", icon: <Package size={16} /> },
    { name: "Tentang", href: "#tentang", icon: <Info size={16} /> },
    { name: "Galeri", href: "#galeri", icon: <Image size={16} /> },
    { name: "Kontak", href: "#kontak", icon: <Mail size={16} /> },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white/80"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="/"
            className="flex items-center text-2xl font-montserrat font-bold text-primary"
          >
            <Globe size={24} className="mr-2" />
            Umrah Travel
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 top-20 w-full shadow-lg py-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;