'use client';

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      title: 'Local Movers in Orlando, FL',
      description:
        'Reliable local moving services in Orlando and nearby areas with careful movers, modern equipment, and fast scheduling.',
      image: '/img1.jpg',
      alt: 'Local movers in Orlando loading a moving truck',
    },
    {
      title: 'Apartment, House & Office Moves',
      description:
        'We handle apartment moves, home relocations, and office moving services with organized planning and careful transportation.',
      image:
        'https://readdy.ai/api/search-image?query=Split%20view%20showing%20apartment%20building%2C%20family%20house%2C%20and%20modern%20office%20building%20in%20Florida%20setting%2C%20professional%20moving%20service%20illustration%20style&width=400&height=300&seq=service2&orientation=landscape',
      alt: 'Apartment, house, and office moving services',
    },
    {
      title: 'Professional Packing Services',
      description:
        'We pack furniture, fragile items, and moving boxes with protective materials to help your belongings arrive safely.',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20movers%20carefully%20packing%20delicate%20items%20with%20bubble%20wrap%20boxes%20and%20protective%20materials%2C%20organized%20packing%20station%20with%20supplies&width=400&height=300&seq=service3&orientation=landscape',
      alt: 'Professional packing services with boxes and protective materials',
    },
    {
      title: 'Hourly Moving Help',
      description:
        'Flexible hourly moving options for loading, unloading, rearranging furniture, and smaller moves without overpaying.',
      image:
        'https://readdy.ai/api/search-image?query=Clock%20with%20dollar%20signs%20and%20calculator%20showing%20transparent%20pricing%20concept%2C%20clean%20modern%20financial%20illustration%20with%20moving%20truck%20elements&width=400&height=300&seq=service4&orientation=landscape',
      alt: 'Hourly moving help and transparent pricing concept',
    },
    {
      title: '2 Movers and Truck Included',
      description:
        'Our standard service includes two professional movers and a fully equipped truck, with larger crews available when needed.',
      image: '/movers.jpg',
      alt: 'Two movers and truck ready for a moving job',
    },
    {
      title: 'Moving Supplies & Equipment',
      description:
        'We use straps, blankets, dollies, tools, and protective materials to make the moving process smoother and safer.',
      image: '/img6.jpg',
      alt: 'Moving supplies and equipment for a safe relocation',
    },
  ];

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-gray-50 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Moving Services
          </p>
          <h2
            id="services-heading"
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Professional Moving Services in Orlando, FL
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            From local residential moves to office relocation and packing help,
            U-MOVEX provides clear, reliable moving solutions designed to keep
            your move organized and stress-free.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
