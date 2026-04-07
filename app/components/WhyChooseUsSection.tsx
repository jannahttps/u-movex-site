'use client';

type BenefitItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
};

export default function WhyChooseUsSection() {
  const benefits: BenefitItem[] = [
    {
      title: 'Transparent Pricing With No Hidden Fees',
      description:
        'Clear quotes, straightforward pricing, and no last-minute surprises. You know what to expect before your move begins.',
      image:
        'https://readdy.ai/api/search-image?query=Transparent%20pricing%20document%20with%20clear%20itemized%20costs%20and%20no%20hidden%20fees%20concept%2C%20clean%20professional%20financial%20transparency%20illustration&width=400&height=300&seq=benefit1&orientation=landscape',
      alt: 'Transparent moving pricing with clear itemized costs',
      icon: 'ri-money-dollar-circle-line',
    },
    {
      title: 'Licensed, Insured, and Professional',
      description:
        'Our moving team operates with the proper coverage, clear agreements, and professional standards to give you peace of mind.',
      image:
        'https://readdy.ai/api/search-image?query=Official%20business%20licenses%20insurance%20certificates%20and%20legal%20contracts%20displayed%20professionally%2C%20trust%20and%20credibility%20business%20concept&width=400&height=300&seq=benefit2&orientation=landscape',
      alt: 'Licensed and insured moving company documents',
      icon: 'ri-shield-check-line',
    },
    {
      title: 'Experienced Movers Who Handle Items With Care',
      description:
        'We move furniture, boxes, and fragile belongings carefully, using trained movers who understand how to protect your items.',
      image:
        'https://readdy.ai/api/search-image?query=Team%20of%20professional%20movers%20in%20uniform%20with%20years%20of%20experience%20badges%2C%20skilled%20workforce%20and%20expertise%20in%20moving%20industry&width=400&height=300&seq=benefit3&orientation=landscape',
      alt: 'Experienced professional movers in uniform',
      icon: 'ri-team-line',
    },
    {
      title: 'Protection for Floors, Walls, and Doorways',
      description:
        'We take steps to protect your current home and your new space with moving blankets, padding, and careful handling.',
      image:
        'https://readdy.ai/api/search-image?query=Movers%20placing%20protective%20padding%20on%20walls%20floors%20and%20doorways%20during%20home%20move%2C%20interior%20protection%20and%20damage%20prevention&width=400&height=300&seq=benefit4&orientation=landscape',
      alt: 'Home interior protection during a move',
      icon: 'ri-home-heart-line',
    },
    {
      title: 'Fast Quotes and Friendly Customer Support',
      description:
        'Get quick answers, easy scheduling, and responsive support from a team that wants your move to feel simple and organized.',
      image:
        'https://readdy.ai/api/search-image?query=Customer%20service%20representative%20on%20phone%20with%20calendar%20and%20booking%20system%2C%20friendly%20customer%20support%20and%20fast%20service%20concept&width=400&height=300&seq=benefit5&orientation=landscape',
      alt: 'Friendly customer support for moving services',
      icon: 'ri-customer-service-2-line',
    },
    {
      title: 'Flexible Scheduling for Busy Orlando Clients',
      description:
        'We offer scheduling options that work better for real life, including convenient timing for families, renters, and businesses.',
      image:
        'https://readdy.ai/api/search-image?query=Calendar%20showing%20flexible%20scheduling%20options%20including%20weekends%20and%20evenings%2C%20time%20management%20and%20customer%20convenience%20concept&width=400&height=300&seq=benefit6&orientation=landscape',
      alt: 'Flexible moving schedule options',
      icon: 'ri-calendar-check-line',
    },
  ];

  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="bg-white py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why Clients Choose Us
          </p>
          <h2
            id="why-choose-us-heading"
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Why Choose U-MOVEX for Your Orlando Move
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We focus on what matters most during a move: clear communication,
            careful handling, reliable scheduling, and professional service from
            start to finish.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group h-full"
            >
              <div className="h-full rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <i
                      className={`${benefit.icon} text-2xl text-blue-600`}
                      aria-hidden="true"
                    ></i>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                <div className="relative mb-4 h-36 overflow-hidden rounded-xl">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                <p className="leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
