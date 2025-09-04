'use client';

export default function ServicesSection() {
  const services = [
    {
      title: 'Local Moving Across Florida',
      description:
        'Professional local moving services throughout Florida with experienced teams and reliable transportation.',
      image: '/img1.jpg', // локальный файл
    },
    {
      title: 'Apartments, Houses & Offices',
      description:
        'We handle all types of moves - from cozy apartments to large family homes and complete office relocations.',
      image:
        'https://readdy.ai/api/search-image?query=Split%20view%20showing%20apartment%20building%2C%20family%20house%2C%20and%20modern%20office%20building%20in%20Florida%20setting%2C%20professional%20moving%20service%20illustration%20style&width=400&height=300&seq=service2&orientation=landscape',
    },
    {
      title: 'Professional Packing Services',
      description:
        'Expert packing with premium materials to ensure your belongings arrive safely at your new destination.',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20movers%20carefully%20packing%20delicate%20items%20with%20bubble%20wrap%20boxes%20and%20protective%20materials%2C%20organized%20packing%20station%20with%20supplies&width=400&height=300&seq=service3&orientation=landscape',
    },
    {
      title: 'Flexible Hourly Rates',
      description:
        'Transparent hourly pricing that fits your budget and timeline. Pay only for the time you need.',
      image:
        'https://readdy.ai/api/search-image?query=Clock%20with%20dollar%20signs%20and%20calculator%20showing%20transparent%20pricing%20concept%2C%20clean%20modern%20financial%20illustration%20with%20moving%20truck%20elements&width=400&height=300&seq=service4&orientation=landscape',
    },
    {
      title: '2 Movers + Truck Included',
      description:
        'Every service includes 2 professional movers and a fully equipped truck. Additional movers available upon request.',
      image: '/movers.jpg', // локальный файл
    },
    {
      title: 'Complete Moving Supplies',
      description:
        'All necessary equipment and protective materials included to ensure a stress-free moving experience.',
      image: '/img6.jpg', // локальный файл
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive moving solutions designed to make your relocation smooth and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
