'use client';

import Link from 'next/link';

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  link?: string;
};

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      title: 'Local Movers in Orlando, FL',
      description:
        'Reliable local movers in Orlando for apartments, homes, and offices. Fast quotes, careful handling, and professional service.',
      image: '/img1.jpg',
      alt: 'Local movers in Orlando loading a moving truck',
      link: '/local-movers-orlando',
    },
    {
      title: 'Apartment Movers in Orlando, FL',
      description:
        'Careful apartment moving services in Orlando with help for stairs, elevators, tight spaces, packing, and organized transportation.',
      image: '/apartment-movers-orlando.png',
      alt: 'Apartment moving services in Orlando',
      link: '/apartment-movers-orlando',
    },
    {
      title: 'Packing Services in Orlando, FL',
      description:
        'Professional packing services in Orlando with wrapping, fragile item protection, box organization, and moving preparation support.',
      image: '/img6.jpg',
      alt: 'Packing services with moving boxes and supplies',
      link: '/packing-services-orlando',
    },
    {
      title: 'Office Movers in Orlando, FL',
      description:
        'Organized office moving services in Orlando for desks, workstations, boxes, and business relocation with flexible scheduling.',
      image: '/office-movers-orlando.png',
      alt: 'Office moving services in Orlando',
      link: '/office-movers-orlando',
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
      id="services"
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
            From local residential moves to apartment relocation, office moving,
            and packing help, U-MOVEX provides clear, reliable moving solutions
            designed to keep your move organized and stress-free.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const cardContent = (
              <>
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 transition group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {service.link && (
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Learn more
                      <span aria-hidden="true">→</span>
                    </div>
                  )}
                </div>
              </>
            );

            if (service.link) {
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group block cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
