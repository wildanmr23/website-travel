interface PackageCardProps {
  title: string;
  duration: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PackageCard = ({ title, duration, price, features, isPopular }: PackageCardProps) => {
  return (
    <div className={`relative bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 ${isPopular ? 'border-2 border-secondary' : ''}`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm">
          Terpopuler
        </span>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{duration}</p>
        <div className="text-3xl font-bold text-primary mb-2">{price}</div>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 text-secondary mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg transition-colors duration-300">
        Pesan Sekarang
      </button>
    </div>
  );
};

export default PackageCard;